"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["form-ajax-submit.plugin"],{7937:(e,t,r)=>{r.d(t,{Z:()=>a});var s=r(3266),i=r(4049);let n=Object.freeze(new class{replaceFromMarkup(e,t){let r=!(arguments.length>2)||void 0===arguments[2]||arguments[2],s=e;"string"==typeof s&&(s=this._createMarkupFromString(s)),"string"==typeof t&&(t=[t]),this._replaceSelectors(s,t,r)}replaceElement(e,t){let r=!(arguments.length>2)||void 0===arguments[2]||arguments[2];return("string"==typeof e&&(e=i.Z.querySelectorAll(document,e,r)),"string"==typeof t&&(t=i.Z.querySelectorAll(document,t,r)),e instanceof NodeList&&t instanceof NodeList&&t.length>e.length)?(s.Z.iterate(t,t=>{s.Z.iterate(e,e=>{e.innerHTML&&e.className===t.className&&(t.innerHTML=e.innerHTML)})}),!0):e instanceof NodeList?(s.Z.iterate(e,(e,r)=>{e.innerHTML&&(t[r].innerHTML=e.innerHTML)}),!0):t instanceof NodeList?(s.Z.iterate(t,t=>{e.innerHTML&&(t.innerHTML=e.innerHTML)}),!0):!!t&&!!e&&!!e.innerHTML&&(t.innerHTML=e.innerHTML,!0)}_replaceSelectors(e,t,r){s.Z.iterate(t,t=>{let s=i.Z.querySelectorAll(e,t,r),n=i.Z.querySelectorAll(document,t,r);this.replaceElement(s,n,r)})}_createMarkupFromString(e){return this._domParser.parseFromString(e,"text/html")}constructor(){this._domParser=new DOMParser}});class a{static replaceFromMarkup(e,t,r){n.replaceFromMarkup(e,t,r)}static replaceElement(e,t,r){return n.replaceElement(e,t,r)}}},2646:(e,t,r)=>{r.r(t),r.d(t,{default:()=>h});var s=r(9568),i=r(6471),n=r(3107),a=r(4049),o=r(3327),l=r(7937),c=r(3266);class h extends s.Z{init(){if(this.loaded=!1,this.formSubmittedByCaptcha=!1,this._getForm(),!this._form)throw Error("No form found for the plugin: ".concat(this.constructor.name));"string"==typeof this.options.replaceSelectors&&(this.options.replaceSelectors=[this.options.replaceSelectors]),this._callbacks=[],this._client=new n.Z,this._registerEvents()}addCallback(e){if("function"!=typeof e)throw Error("The callback must be a function!");this._callbacks.push(e)}_getForm(){this.el&&"FORM"===this.el.nodeName?this._form=this.el:this._form=this.el.closest("form")}_registerEvents(){let e=this._onSubmit.bind(this);this._form.removeEventListener("submit",e),this._form.addEventListener("submit",e),this.options.submitOnChange&&c.Z.iterate(this._form.elements,t=>{void 0!==t.removeEventListener&&(t.removeEventListener("change",e),t.addEventListener("change",e))})}_onSubmit(e){if(e.cancelable||console.error("[Ajax Form Submit]: The submit event cannot be prevented as it is not cancelable and would be handled by the navigator."),e.preventDefault(),!1!==this._form.checkValidity()&&(!this.loaded||!this.options.submitOnce)){if(this.$emitter.publish("beforeSubmit"),"change"===e.type&&Array.isArray(this.options.submitOnChange)){let t=e.currentTarget;c.Z.iterate(this.options.submitOnChange,e=>{t.matches(e)&&this._fireRequest()})}else this._fireRequest()}}_fireRequest(){this._createLoadingIndicators(),this.$emitter.publish("beforeSubmit"),this.formSubmittedByCaptcha||this.sendAjaxFormSubmit()}sendAjaxFormSubmit(){let e=a.Z.getAttribute(this._form,"action");"get"===a.Z.getAttribute(this._form,"method")?this._client.get(e,this._onAfterAjaxSubmit.bind(this)):this._client.post(e,this._getFormData(),this._onAfterAjaxSubmit.bind(this))}_getFormData(){let e=i.Z.serialize(this._form);return this.options.redirectTo?e.append("redirectTo",this.options.redirectTo):this.options.forwardTo&&e.append("forwardTo",this.options.forwardTo),e}_onAfterAjaxSubmit(e){this.options.replaceSelectors&&(this._removeLoadingIndicators(),l.Z.replaceFromMarkup(e,this.options.replaceSelectors,!1),window.PluginManager.initializePlugins()),this._executeCallbacks(),this.loaded=!0,this.$emitter.publish("onAfterAjaxSubmit",{response:e})}_createLoadingIndicators(){this.options.replaceSelectors&&c.Z.iterate(this.options.replaceSelectors,e=>{let t=a.Z.querySelectorAll(document,e);c.Z.iterate(t,o.Z.create)}),this.$emitter.publish("createLoadingIndicators")}_removeLoadingIndicators(){c.Z.iterate(this.options.replaceSelectors,e=>{let t=a.Z.querySelectorAll(document,e);c.Z.iterate(t,o.Z.remove)}),this.$emitter.publish("createLoadingIndicators")}_executeCallbacks(){c.Z.iterate(this._callbacks,e=>{if("function"!=typeof e)throw Error("The callback must be a function!");e.apply(this)}),this.$emitter.publish("executeCallbacks")}}h.options={replaceSelectors:!1,submitOnChange:!1,submitOnce:!1,redirectTo:!1,forwardTo:!1}},3107:(e,t,r)=>{r.d(t,{Z:()=>s});class s{get(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"application/json",s=this._createPreparedRequest("GET",e,r);return this._sendRequest(s,null,t)}post(e,t,r){let s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"application/json";s=this._getContentType(t,s);let i=this._createPreparedRequest("POST",e,s);return this._sendRequest(i,t,r)}delete(e,t,r){let s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"application/json";s=this._getContentType(t,s);let i=this._createPreparedRequest("DELETE",e,s);return this._sendRequest(i,t,r)}patch(e,t,r){let s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"application/json";s=this._getContentType(t,s);let i=this._createPreparedRequest("PATCH",e,s);return this._sendRequest(i,t,r)}abort(){if(this._request)return this._request.abort()}setErrorHandlingInternal(e){this._errorHandlingInternal=e}_registerOnLoaded(e,t){t&&(!0===this._errorHandlingInternal?(e.addEventListener("load",()=>{t(e.responseText,e)}),e.addEventListener("abort",()=>{console.warn("the request to ".concat(e.responseURL," was aborted"))}),e.addEventListener("error",()=>{console.warn("the request to ".concat(e.responseURL," failed with status ").concat(e.status))}),e.addEventListener("timeout",()=>{console.warn("the request to ".concat(e.responseURL," timed out"))})):e.addEventListener("loadend",()=>{t(e.responseText,e)}))}_sendRequest(e,t,r){return this._registerOnLoaded(e,r),e.send(t),e}_getContentType(e,t){return e instanceof FormData&&(t=!1),t}_createPreparedRequest(e,t,r){return this._request=new XMLHttpRequest,this._request.open(e,t),this._request.setRequestHeader("X-Requested-With","XMLHttpRequest"),r&&this._request.setRequestHeader("Content-type",r),this._request}constructor(){this._request=null,this._errorHandlingInternal=!1}}},6471:(e,t,r)=>{r.d(t,{Z:()=>i});var s=r(3266);class i{static serialize(e){let t=!(arguments.length>1)||void 0===arguments[1]||arguments[1];if("FORM"!==e.nodeName){if(t)throw Error("The passed element is not a form!");return{}}return new FormData(e)}static serializeJson(e){let t=!(arguments.length>1)||void 0===arguments[1]||arguments[1],r=i.serialize(e,t);if(0===Object.keys(r).length)return{};let n={};return s.Z.iterate(r,(e,t)=>n[t]=e),n}}},3327:(e,t,r)=>{r.d(t,{Z:()=>n});var s=r(2363);let i="element-loader-backdrop";class n extends s.Z{static create(e){e.classList.add("has-element-loader"),n.exists(e)||(n.appendLoader(e),setTimeout(()=>{let t=e.querySelector(".".concat(i));t&&t.classList.add("element-loader-backdrop-open")},1))}static remove(e){e.classList.remove("has-element-loader");let t=e.querySelector(".".concat(i));t&&t.remove()}static exists(e){return e.querySelectorAll(".".concat(i)).length>0}static getTemplate(){return'\n        <div class="'.concat(i,'">\n            <div class="loader" role="status">\n                <span class="').concat("visually-hidden",'">Loading...</span>\n            </div>\n        </div>\n        ')}static appendLoader(e){e.insertAdjacentHTML("beforeend",n.getTemplate())}}},2363:(e,t,r)=>{r.d(t,{L:()=>n,Z:()=>a});var s=r(3266);let i="loader",n={BEFORE:"before",AFTER:"after",INNER:"inner"};class a{create(){if(!this.exists()){if(this.position===n.INNER){this.parent.innerHTML=a.getTemplate();return}this.parent.insertAdjacentHTML(this._getPosition(),a.getTemplate())}}remove(){let e=this.parent.querySelectorAll(".".concat(i));s.Z.iterate(e,e=>e.remove())}exists(){return this.parent.querySelectorAll(".".concat(i)).length>0}_getPosition(){return this.position===n.BEFORE?"afterbegin":"beforeend"}static getTemplate(){return'<div class="'.concat(i,'" role="status">\n                    <span class="').concat("visually-hidden",'">Loading...</span>\n                </div>')}static SELECTOR_CLASS(){return i}constructor(e,t=n.BEFORE){this.parent=e instanceof Element?e:document.body.querySelector(e),this.position=t}}}}]);