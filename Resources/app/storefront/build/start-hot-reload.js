/* eslint no-console: 0 */
const { createProxyMiddleware } = require('http-proxy-middleware');
const nodeServerHttp = require('node:http');
const nodeServerHttps = require('node:https');
const fs = require('node:fs');
const path = require('node:path');
const { spawn } = require('node:child_process');
const createLiveReloadServer = require('./live-reload-server/index');

const proxyPort = Number(process.env.STOREFRONT_PROXY_PORT) || 9998;
const assetPort = Number(process.env.STOREFRONT_ASSETS_PORT) || 9999;

const projectRootPath = process.env.PROJECT_ROOT
    ? path.resolve(process.env.PROJECT_ROOT)
    : path.resolve('../../../../..');
const themeFilesConfigPath = path.resolve(projectRootPath, 'var/theme-files.json');
const themeFiles = require(themeFilesConfigPath);
const domainUrl = new URL(themeFiles.domainUrl);
const themeUrl = new URL(`${domainUrl.protocol}//${domainUrl.host}`);

const appUrlEnv = themeUrl ? themeUrl : new URL(process.env.APP_URL);
const keyPath = process.env.STOREFRONT_HTTPS_KEY_FILE || `${process.env.CAROOT}/${themeUrl.hostname}-key.pem`;
const certPath = process.env.STOREFRONT_HTTPS_CERTIFICATE_FILE || `${process.env.CAROOT}/${themeUrl.hostname}.pem`;
const sslFilesFound = (fs.existsSync(keyPath) && fs.existsSync(certPath));

const proxyProtocol = appUrlEnv.protocol === 'https:' && sslFilesFound ? 'https:' : 'http:';
const proxyUrlEnv = new URL(process.env.PROXY_URL || `${proxyProtocol}//${appUrlEnv.hostname}:${proxyPort}`);

const proxyOptions = {
    appPort: Number(appUrlEnv.port) || undefined,
    host: appUrlEnv.host,
    proxyHost: proxyUrlEnv.host,
    proxyPort: proxyPort,
    secure: appUrlEnv.protocol === 'https:' && sslFilesFound,
    selfHandleResponse: true,
    target: appUrlEnv.origin,
    autoRewrite: true,
    followRedirects: true,
    changeOrigin: true,
    headers: {
        host: appUrlEnv.host,
        'hot-reload-mode': 'true',
        'accept-encoding': 'identity',
    },
    cookieDomainRewrite: {
        '*': '',
    },
    cookiePathRewrite: {
        '*': '',
    },
    on: {
        proxyReq: (proxyReq, req) => {
            // Hot reload updates
            if (req.url.indexOf('/sockjs-node/') === 0 || req.url.indexOf('hot-update.json') !== -1 || req.url.indexOf('hot-update.js') !== -1) {
                proxyReq.host = '127.0.0.1';
                proxyReq.port = assetPort;
            }
        },
        proxyRes: (proxyRes, req, res) => {
            let body = [];
            // Set the cookie from the proxy response to the next proxy request
            if (proxyRes.headers['set-cookie']) {
                res.setHeader('set-cookie', proxyRes.headers['set-cookie']);
            }
            proxyRes.on('data', (chunk) => {
                body.push(chunk);
            });
            proxyRes.on('end', () => {
                body = Buffer.concat(body).toString();
                body = body
                    // replace the webpack hot proxy with the url of the live reload server
                    .replace(new RegExp('/_webpack_hot_proxy_/', 'g'), `${proxyUrlEnv.protocol}//${proxyUrlEnv.hostname}:${assetPort}/`)
                    // replace the domain without port or without port with the proxy url
                    .replace(new RegExp(`${appUrlEnv.origin}/`, 'g'), `${proxyUrlEnv.origin}/`)
                    // replace the media url back to use the default storefront url
                    .replace(new RegExp(`${proxyUrlEnv.origin}/media/`, 'g'), `${appUrlEnv.origin}/media/`)
                    // replace the thumbnail url back to use the default storefront url
                    .replace(new RegExp(`${proxyUrlEnv.origin}/thumbnail/`, 'g'), `${appUrlEnv.origin}/thumbnail/`)
                    // Replace Symfony Profiler URL to relative url @see: https://regex101.com/r/HMQd2n/2
                    .replace(/http[s]?\\u003A\\\/\\\/[\w.]*(:\d*|\\u003A\d*)?\\\/_wdt/gm, '/_wdt')
                    .replace(/new\s*URL\(url\);\s*url\.searchParams\.set\('XDEBUG_IGNORE'/gm, 'new URL(window.location.protocol+\'//\'+window.location.host+url);                url.searchParams.set(\'XDEBUG_IGNORE\'');
                res.end(body);
            });
        },
        error: (err, req, res) => {
            console.error(err);

            if (err.code === 'UNABLE_TO_GET_ISSUER_CERT_LOCALLY') {
                console.error('Make sure that node.js trusts the provided certificate. Set NODE_EXTRA_CA_CERTS for this.');
                console.error(`Try to start again with NODE_EXTRA_CA_CERTS="${certPath}" set.`);
                process.exit(1);
            }

            if (err.code === 'SSL_ERROR_NO_CYPHER_OVERLAP') {
                console.error('Try to start watcher again with specific path to https (key and crt) files like this:');
                console.error('STOREFRONT_HTTPS_KEY_FILE=/var/www/html/.../certs/shopware.key STOREFRONT_HTTPS_CERTIFICATE_FILE=/var/www/html/../certs/shopware.crt composer run watch:storefront');
                process.exit(1);
            }

            if (err.code === 'ENOTFOUND') {
                console.error('The domain could not be resolved. Make sure that the domain is correct in DEVENV/DDEV.');
                console.error('And if this is a custom domain, make sure that the domain is set in your /etc/hosts file.');
                process.exit(1);
            }

            res.writeHead(500, {
                'Content-Type': 'text/plain',
            });
            res.end('Something went wrong. Check the console for more information.');
        },
    },
};

if (appUrlEnv.protocol === 'https:' && !sslFilesFound) {
    console.error('Could not find the key and certificate files.');
    console.error('Make sure that the environment variables STOREFRONT_HTTPS_KEY_FILE and STOREFRONT_HTTPS_CERTIFICATE_FILE are set correctly.');
    console.error('If you use a TLS proxy (like in DDEV Shopware 6 setup), you can ignore this message.');
}

const sslOptions = proxyUrlEnv.protocol === 'https:' ? {
    key: fs.readFileSync(keyPath),
    cert: fs.readFileSync(certPath),
} : {};

const proxyServerOptions = Object.assign(proxyOptions, { ssl: sslOptions });
const proxy = createProxyMiddleware(proxyServerOptions);
const server = createLiveReloadServer(sslOptions).catch((e) => {
    console.error(e);
    console.error('Could not start the live server with the provided certificate files, falling back to http server.');
    return createLiveReloadServer({});
});
server.then(() => {
    console.log('############');
    console.log(`Default TWIG Storefront: ${appUrlEnv.origin}`);
    console.log(`Proxy server hot reload: ${proxyUrlEnv.origin}`);
    console.log('############');

    if (proxyUrlEnv.protocol === 'https:') {
        try {
            nodeServerHttps.createServer(sslOptions, proxy).listen(proxyPort);
            console.log('Proxy uses the https schema, with ssl certificate files.');
        } catch (e) {
            console.error(e);
            console.error('Could not start the proxy server with the provided certificate files, falling back to http server.');
            proxyUrlEnv.protocol = 'http:';
        }
    }

    if (proxyUrlEnv.protocol === 'http:') {
        console.log('Proxy uses the http schema.');
        nodeServerHttp.createServer(proxy).listen(proxyPort);
    }

    console.log('############');
    console.log('\n');

    openBrowserWithUrl(`${proxyUrlEnv.origin}`);
});

function openBrowserWithUrl(url) {
    const childProcessOptions = {
        stdio: 'ignore',
        detached: true,
    };

    try {
        const start = (process.platform === 'darwin' ? 'open' : process.platform === 'win32' ? 'start' : 'xdg-open');
        const child = spawn(start, [url], childProcessOptions);

        child.on('error', error => {
            console.log('Unable to open browser! Details:');
            console.log(error);
        });
    } catch (ex) {
        console.log(ex);
    }
}
