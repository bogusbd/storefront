"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["spatial-base-viewer.plugin.ts"],{8077:(e,t,i)=>{i.d(t,{Z:()=>o});var s=i(9568),n=i(6896);class o extends s.Z{async init(){await (0,n.n)(),this.initViewer(!0)}initViewer(e){this.setReady(!1),this.canvas=this.el,(void 0==this.camera||e)&&(this.camera=new window.threeJs.PerspectiveCamera(70,this.canvas.clientWidth/this.canvas.clientHeight,.01,10)),(void 0==this.scene||e)&&(this.scene=new window.threeJs.Scene),this.rendering=!1,this.clock=new window.threeJs.Clock,this.renderer=new window.threeJs.WebGLRenderer({canvas:this.canvas,antialias:!0}),this.$emitter.publish("Viewer/initViewer")}startRendering(){var e,t,i,s;this.rendering||(this.rendering=!0,requestAnimationFrame(this.render.bind(this)),(t=this.canvas)===null||void 0===t||(e=t.parentElement)===null||void 0===e||e.classList.add("spatial-canvas-rendering"),this.ready&&((s=this.canvas)===null||void 0===s||(i=s.parentElement)===null||void 0===i||i.classList.add("spatial-canvas-display")),this.$emitter.publish("Viewer/startRendering"))}stopRendering(){var e,t;this.rendering=!1,(t=this.canvas)===null||void 0===t||(e=t.parentElement)===null||void 0===e||e.classList.remove("spatial-canvas-rendering"),this.$emitter.publish("Viewer/stopRendering")}render(){if(!this.rendering||(requestAnimationFrame(this.render.bind(this)),!this.clock))return;let e=this.clock.getDelta();this.preRender(e),void 0!=this.camera&&void 0!=this.scene&&void 0!=this.renderer&&this.renderer.render(this.scene,this.camera),this.postRender(e)}preRender(e){}postRender(e){}setReady(e){this.ready!==e&&(this.ready=e,this.onReady(e))}onReady(e){var t,i,s,n;void 0!=this.canvas&&(e?(this.$emitter.publish("Viewer/ready"),(t=this.canvas.parentElement)===null||void 0===t||t.classList.add("spatial-canvas-ready"),this.rendering&&((i=this.canvas.parentElement)===null||void 0===i||i.classList.add("spatial-canvas-display"))):(this.$emitter.publish("Viewer/notReady"),(s=this.canvas.parentElement)===null||void 0===s||s.classList.remove("spatial-canvas-ready"),(n=this.canvas.parentElement)===null||void 0===n||n.classList.remove("spatial-canvas-display")))}constructor(...e){super(...e),this.ready=!1}}},9943:(e,t,i)=>{i.d(t,{Z:()=>s});class s{initAmbientLight(e){let t=new window.threeJs.AmbientLight(e.color,e.intensity);t.name=e.id,this.lightGroup.add(t)}initDirectionalLight(e){var t,i,s,n,o,a,d,l,r,h,c,u;let p=new window.threeJs.DirectionalLight(e.color,e.intensity);p.position.set((d=(t=e.position)===null||void 0===t?void 0:t.x)!==null&&void 0!==d?d:0,(l=(i=e.position)===null||void 0===i?void 0:i.y)!==null&&void 0!==l?l:0,(r=(s=e.position)===null||void 0===s?void 0:s.z)!==null&&void 0!==r?r:0),p.target.position.set((h=(n=e.target)===null||void 0===n?void 0:n.x)!==null&&void 0!==h?h:0,(c=(o=e.target)===null||void 0===o?void 0:o.y)!==null&&void 0!==c?c:0,(u=(a=e.target)===null||void 0===a?void 0:a.z)!==null&&void 0!==u?u:0),p.name=e.id,this.lightGroup.add(p)}addLight(e){switch(e.type){case"ambient":this.initAmbientLight(e);break;case"directional":this.initDirectionalLight(e)}}removeLight(e){this.removeLightById(e.id)}removeLightById(e){this.lights=this.lights.filter(t=>t.id!==e);let t=this.lightGroup.getObjectByName(e);t&&this.lightGroup.remove(t)}dispose(){this.lights=[],this.scene.remove(this.lightGroup)}constructor(e,t,i){this.lights=null!=i?i:s.defaultLights,t&&this.lights.forEach(e=>{e.intensity=Number(t)/100}),this.scene=e,this.lightGroup=new window.threeJs.Group,this.lightGroup.name="lightGroup",this.lights.forEach(e=>{this.addLight(e)}),this.scene.add(this.lightGroup)}}s.defaultLights=[{id:"ambient",type:"ambient",color:"#ffffff",intensity:1},{id:"directional",type:"directional",color:"#ffffff",intensity:1,position:{x:-5,y:2,z:2},target:{x:0,y:0,z:0}},{id:"directional",type:"directional",color:"#ffffff",intensity:1,position:{x:0,y:2,z:2},target:{x:0,y:0,z:0}},{id:"directional",type:"directional",color:"#ffffff",intensity:1,position:{x:5,y:2,z:2},target:{x:0,y:0,z:0}}]},5469:(e,t,i)=>{i.d(t,{Z:()=>s});class s{init(){this.plugin.canvas&&(this.lastHeight=this.plugin.canvas.clientHeight,this.lastWidth=this.plugin.canvas.clientWidth)}update(){var e,t,i,s,n;if(!this.plugin.canvas||!this.plugin.camera)return;let o=(s=(e=this.plugin.canvas.parentElement)===null||void 0===e?void 0:e.clientHeight)!==null&&void 0!==s?s:0,a=(n=(t=this.plugin.canvas.parentElement)===null||void 0===t?void 0:t.clientWidth)!==null&&void 0!==n?n:0;(o!==this.lastHeight||a!==this.lastWidth)&&(this.plugin.canvas.height=o,this.plugin.canvas.width=a,this.plugin.camera.aspect=a/o,this.plugin.camera.updateProjectionMatrix(),(i=this.plugin.renderer)===null||void 0===i||i.setSize(a,o),this.plugin.$emitter.publish("CanvasSizeUpdateUtil/sizeUpdate",{width:a,height:o}),this.lastHeight=o,this.lastWidth=a)}constructor(e){this.lastWidth=0,this.lastHeight=0,this.plugin=e,this.init()}}},9183:(e,t,i)=>{i.d(t,{Z:()=>n});var s=i(5206);class n{onMove(){var e;(e=this.note)===null||void 0===e||e.classList.add(n.options.hiddenClass),this.plugin.canvas&&this.plugin.canvas.removeEventListener("pointerup",this.onMove.bind(this))}constructor(e){var t,i,o,a;if(this.plugin=e,!this.plugin.canvas)return;if(this.note=(o=(i=this.plugin.canvas)===null||void 0===i?void 0:(t=i.parentElement)===null||void 0===t?void 0:t.querySelector(n.options.noteSelector))!==null&&void 0!==o?o:void 0,s.Z.isTouchDevice()){let e=(a=this.note)===null||void 0===a?void 0:a.getAttribute(n.options.touchTextDataAttribute);e&&this.note&&(this.note.innerText=e)}this.plugin.canvas.addEventListener("pointerup",this.onMove.bind(this))}}n.options={noteSelector:"[data-spatial-movement-note]",hiddenClass:"spatial-canvas-note--hidden",touchTextDataAttribute:"data-spatial-movement-note-touch-text"}},4161:(e,t,i)=>{i.d(t,{Z:()=>n});var s=i(9138);class n{async loadSingleObjectByUrl(e,t){this.loadStatus.set(e,0),this.emitLoadingUpdate();let i=await new Promise((t,i)=>{this.gltfLoader.load(e,i=>{this.loadStatus.set(e,1),this.emitLoadingUpdate(),t(i.scene)},t=>{this.loadStatus.set(e,t.loaded/t.total),this.emitLoadingUpdate()},t=>{this.loadStatus.set(e,-1),this.emitLoadingUpdate(),i(t)})});return t.clampSize&&(i=this.clampSize(i,t.clampMaxSize)),t.center&&(i=this.centerObject(i)),i}centerObject(e){let t=new window.threeJs.Box3().setFromObject(e).getCenter(new window.threeJs.Vector3);e.position.copy(t),e.position.multiplyScalar(-1);let i=new window.threeJs.Group;return i.name="centered",i.add(e),i}clampSize(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{x:1,y:1,z:1},i=new window.threeJs.Box3().setFromObject(e).getSize(new window.threeJs.Vector3),s=Math.max(i.x*(1/t.x),i.y*(1/t.y),i.z*(1/t.z));return e.scale.multiplyScalar(1/s),e}percentageLoaded(){let e=0,t=0;return this.loadStatus.forEach(i=>{t+=i,e++}),t/e}detailLoaded(){return this.loadStatus}emitLoadingUpdate(){this.$emitter&&this.$emitter.publish("ObjectLoaderUtil/loadingUpdate",{percentage:this.percentageLoaded(),detailed:this.detailLoaded()})}constructor(e){this.gltfLoader=new window.threeJsAddons.GLTFLoader;let t=new window.threeJsAddons.DRACOLoader;t.setDecoderPath("".concat(window.themeAssetsPublicPath,"draco/")),this.gltfLoader.setDRACOLoader(t),this.loadStatus=new Map,(null==e?void 0:e.$emitter)instanceof s.Z&&(this.$emitter=null==e?void 0:e.$emitter)}}},7073:(e,t,i)=>{i.d(t,{Z:()=>s});class s{update(){this.controls.update()}enable(){this.controls.enabled=!0}disable(){this.controls.enabled=!1}dispose(){this.controls.dispose()}reset(){this.controls.target.set(0,0,0)}enableZoom(){this.controls.enableZoom=!0}disableZoom(){this.controls.enableZoom=!1}constructor(e,t){this.controls=new window.threeJsAddons.OrbitControls(e,t),this.controls.enableDamping=!0,this.controls.dampingFactor=.25,this.controls.enableZoom=!0,this.controls.enablePan=!1}}},6896:(e,t,i)=>{i.d(t,{n:()=>s});async function s(){var e,t,s,n,o,a;if(window.loadThreeJsUtil||(window.loadThreeJsUtil={isLoaded:!1,promise:null,promiseResolve:null}),!window.loadThreeJsUtil.isLoaded){if(window.loadThreeJsUtil.promise){await window.loadThreeJsUtil.promise;return}if(window.loadThreeJsUtil.promise=new Promise(e=>{window.loadThreeJsUtil.promiseResolve=e}),window.threeJs||(window.threeJs=await i.e("three.module").then(i.bind(i,6173))),window.threeJsAddons||(window.threeJsAddons={}),!((e=window.threeJsAddons)===null||void 0===e?void 0:e.OrbitControls)){let{OrbitControls:e}=await Promise.all([i.e("three.module"),i.e("OrbitControls")]).then(i.bind(i,6976));window.threeJsAddons.OrbitControls=e}if(!((t=window.threeJsAddons)===null||void 0===t?void 0:t.USDZExporter)){let{USDZExporter:e}=await Promise.all([i.e("three.module"),i.e("USDZExporter")]).then(i.bind(i,3707));window.threeJsAddons.USDZExporter=e}if(!((s=window.threeJsAddons)===null||void 0===s?void 0:s.XREstimatedLight)){let{XREstimatedLight:e}=await Promise.all([i.e("three.module"),i.e("XREstimatedLight")]).then(i.bind(i,6874));window.threeJsAddons.XREstimatedLight=e}if(!((n=window.threeJsAddons)===null||void 0===n?void 0:n.GLTFLoader)){let{GLTFLoader:e}=await Promise.all([i.e("three.module"),i.e("GLTFLoader")]).then(i.bind(i,1990));window.threeJsAddons.GLTFLoader=e}if(!((o=window.threeJsAddons)===null||void 0===o?void 0:o.DRACOLoader)){let{DRACOLoader:e}=await Promise.all([i.e("three.module"),i.e("DRACOLoader")]).then(i.bind(i,5157));window.threeJsAddons.DRACOLoader=e}((a=window.threeJsAddons)===null||void 0===a?void 0:a.DRACOLibPath)||(window.threeJsAddons.DRACOLibPath="three/examples/jsm/libs/draco/"),window.loadThreeJsUtil.promiseResolve(),window.loadThreeJsUtil.isLoaded=!0}}}}]);