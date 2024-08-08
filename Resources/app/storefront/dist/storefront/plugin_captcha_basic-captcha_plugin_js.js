"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["plugin_captcha_basic-captcha_plugin_js"],{7937:(e,t,r)=>{r.d(t,{Z:()=>a});var s=r(3266),n=r(4049);let i=Object.freeze(new class{replaceFromMarkup(e,t){let r=!(arguments.length>2)||void 0===arguments[2]||arguments[2],s=e;"string"==typeof s&&(s=this._createMarkupFromString(s)),"string"==typeof t&&(t=[t]),this._replaceSelectors(s,t,r)}replaceElement(e,t){let r=!(arguments.length>2)||void 0===arguments[2]||arguments[2];return("string"==typeof e&&(e=n.Z.querySelectorAll(document,e,r)),"string"==typeof t&&(t=n.Z.querySelectorAll(document,t,r)),e instanceof NodeList&&t instanceof NodeList&&t.length>e.length)?(s.Z.iterate(t,t=>{s.Z.iterate(e,e=>{e.innerHTML&&e.className===t.className&&(t.innerHTML=e.innerHTML)})}),!0):e instanceof NodeList?(s.Z.iterate(e,(e,r)=>{e.innerHTML&&(t[r].innerHTML=e.innerHTML)}),!0):t instanceof NodeList?(s.Z.iterate(t,t=>{e.innerHTML&&(t.innerHTML=e.innerHTML)}),!0):!!t&&!!e&&!!e.innerHTML&&(t.innerHTML=e.innerHTML,!0)}_replaceSelectors(e,t,r){s.Z.iterate(t,t=>{let s=n.Z.querySelectorAll(e,t,r),i=n.Z.querySelectorAll(document,t,r);this.replaceElement(s,i,r)})}_createMarkupFromString(e){return this._domParser.parseFromString(e,"text/html")}constructor(){this._domParser=new DOMParser}});class a{static replaceFromMarkup(e,t,r){i.replaceFromMarkup(e,t,r)}static replaceElement(e,t,r){return i.replaceElement(e,t,r)}}},6495:(e,t,r)=>{r.r(t),r.d(t,{default:()=>o});var s=r(9568),n=r(3107),i=r(7937),a=r(3327);class o extends s.Z{init(){this._getForm(),this._form&&(this._httpClient=new n.Z,this._formSubmitting=!1,this.formPluginInstances=window.PluginManager.getPluginInstancesFromElement(this._form),this._onLoadBasicCaptcha(),this._registerEvents(),this.formValidating=!1)}_registerEvents(){this.el.querySelector(this.options.captchaRefreshIconId).addEventListener("click",this._onLoadBasicCaptcha.bind(this)),this.formPluginInstances.forEach(e=>{e.$emitter.subscribe("onFormResponse",e=>this.onHandleResponse(e.detail)),this.options.preCheck&&e.$emitter.subscribe("beforeSubmit",this._onValidate.bind(this))})}_onLoadBasicCaptcha(){let e=this.el.querySelector(this.options.captchaImageId);a.Z.create(e);let t="".concat(this.options.router,"?formId=").concat(this.options.formId);this._httpClient.get(t,t=>{this.formValidating=!1;let r=new DOMParser().parseFromString(t,"text/html");i.Z.replaceElement(r.querySelector(this.options.captchaImageId),e,!0),a.Z.remove(e)})}_onValidate(){if(this.formValidating)return;this.formValidating=!0;let e=JSON.stringify({formId:this.options.formId,shopware_basic_captcha_confirm:this.el.querySelector(this.options.basicCaptchaInputId).value});this._httpClient.post(this.options.preCheckRoute.path,e,e=>{this.formValidating=!1;let t=JSON.parse(e);if(t.session){this.onFormSubmit(t.session);return}this.onHandleResponse(e)})}_getForm(){this.el&&"FORM"===this.el.nodeName?this._form=this.el:this._form=this.el.closest("form")}onFormSubmit(e){let t="#".concat(this.options.formId,"-precheck");if(this.el.querySelector(t).value="allowed",this.el.querySelector(this.options.basicCaptchaInputId).value=e,!this._form.checkValidity()){this.el.querySelector(t).value="";return}this._form.submit()}onHandleResponse(e){if(this.formValidating)return;this.formValidating=!0;let t=JSON.parse(e)[0];if("invalid_captcha"!==t.error)return;let r=this.el.querySelector(this.options.basicCaptchaFieldId);a.Z.create(r);let s=new DOMParser().parseFromString(t.input,"text/html");i.Z.replaceElement(s.querySelector(this.options.basicCaptchaFieldId),r),a.Z.remove(r),this._onLoadBasicCaptcha()}}o.options={router:"",captchaRefreshIconId:"#basic-captcha-content-refresh-icon",captchaImageId:"#basic-captcha-content-image",basicCaptchaInputId:"#basic-captcha-input",basicCaptchaFieldId:"#basic-captcha-field",formId:"",preCheck:!1,preCheckId:"#precheck",preCheckRoute:{}}},3107:(e,t,r)=>{r.d(t,{Z:()=>s});class s{get(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"application/json",s=this._createPreparedRequest("GET",e,r);return this._sendRequest(s,null,t)}post(e,t,r){let s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"application/json";s=this._getContentType(t,s);let n=this._createPreparedRequest("POST",e,s);return this._sendRequest(n,t,r)}delete(e,t,r){let s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"application/json";s=this._getContentType(t,s);let n=this._createPreparedRequest("DELETE",e,s);return this._sendRequest(n,t,r)}patch(e,t,r){let s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"application/json";s=this._getContentType(t,s);let n=this._createPreparedRequest("PATCH",e,s);return this._sendRequest(n,t,r)}abort(){if(this._request)return this._request.abort()}setErrorHandlingInternal(e){this._errorHandlingInternal=e}_registerOnLoaded(e,t){t&&(!0===this._errorHandlingInternal?(e.addEventListener("load",()=>{t(e.responseText,e)}),e.addEventListener("abort",()=>{console.warn("the request to ".concat(e.responseURL," was aborted"))}),e.addEventListener("error",()=>{console.warn("the request to ".concat(e.responseURL," failed with status ").concat(e.status))}),e.addEventListener("timeout",()=>{console.warn("the request to ".concat(e.responseURL," timed out"))})):e.addEventListener("loadend",()=>{t(e.responseText,e)}))}_sendRequest(e,t,r){return this._registerOnLoaded(e,r),e.send(t),e}_getContentType(e,t){return e instanceof FormData&&(t=!1),t}_createPreparedRequest(e,t,r){return this._request=new XMLHttpRequest,this._request.open(e,t),this._request.setRequestHeader("X-Requested-With","XMLHttpRequest"),r&&this._request.setRequestHeader("Content-type",r),this._request}constructor(){this._request=null,this._errorHandlingInternal=!1}}},3327:(e,t,r)=>{r.d(t,{Z:()=>i});var s=r(2363);let n="element-loader-backdrop";class i extends s.Z{static create(e){e.classList.add("has-element-loader"),i.exists(e)||(i.appendLoader(e),setTimeout(()=>{let t=e.querySelector(".".concat(n));t&&t.classList.add("element-loader-backdrop-open")},1))}static remove(e){e.classList.remove("has-element-loader");let t=e.querySelector(".".concat(n));t&&t.remove()}static exists(e){return e.querySelectorAll(".".concat(n)).length>0}static getTemplate(){return'\n        <div class="'.concat(n,'">\n            <div class="loader" role="status">\n                <span class="').concat("visually-hidden",'">Loading...</span>\n            </div>\n        </div>\n        ')}static appendLoader(e){e.insertAdjacentHTML("beforeend",i.getTemplate())}}},2363:(e,t,r)=>{r.d(t,{L:()=>i,Z:()=>a});var s=r(3266);let n="loader",i={BEFORE:"before",AFTER:"after",INNER:"inner"};class a{create(){if(!this.exists()){if(this.position===i.INNER){this.parent.innerHTML=a.getTemplate();return}this.parent.insertAdjacentHTML(this._getPosition(),a.getTemplate())}}remove(){let e=this.parent.querySelectorAll(".".concat(n));s.Z.iterate(e,e=>e.remove())}exists(){return this.parent.querySelectorAll(".".concat(n)).length>0}_getPosition(){return this.position===i.BEFORE?"afterbegin":"beforeend"}static getTemplate(){return'<div class="'.concat(n,'" role="status">\n                    <span class="').concat("visually-hidden",'">Loading...</span>\n                </div>')}static SELECTOR_CLASS(){return n}constructor(e,t=i.BEFORE){this.parent=e instanceof Element?e:document.body.querySelector(e),this.position=t}}}}]);