"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["plugin_add-to-cart_add-to-cart_plugin_js"],{3666:(e,t,r)=>{r.r(t),r.d(t,{default:()=>n});var i=r(9568),s=r(3266),a=r(4049),o=r(6471);class n extends i.Z{init(){if(this._getForm(),!this._form)throw Error("No form found for the plugin: ".concat(this.constructor.name));this._prepareFormRedirect(),this._registerEvents()}_prepareFormRedirect(){try{let e=a.Z.querySelector(this._form,this.options.redirectSelector),t=a.Z.querySelector(this._form,this.options.redirectParamSelector);e.value=this.options.redirectTo,t.disabled=!0}catch(e){}}_getForm(){this.el&&"FORM"===this.el.nodeName?this._form=this.el:this._form=this.el.closest("form")}_registerEvents(){this.el.addEventListener("submit",this._formSubmit.bind(this))}_formSubmit(e){e.preventDefault();let t=a.Z.getAttribute(this._form,"action"),r=o.Z.serialize(this._form);this.$emitter.publish("beforeFormSubmit",r),this._openOffCanvasCarts(t,r)}_openOffCanvasCarts(e,t){let r=window.PluginManager.getPluginInstances("OffCanvasCart");s.Z.iterate(r,r=>this._openOffCanvasCart(r,e,t))}_openOffCanvasCart(e,t,r){e.openOffCanvas(t,r,()=>{this.$emitter.publish("openOffCanvasCart")})}}n.options={redirectSelector:'[name="redirectTo"]',redirectParamSelector:'[data-redirect-parameters="true"]',redirectTo:"frontend.cart.offcanvas"}},6471:(e,t,r)=>{r.d(t,{Z:()=>s});var i=r(3266);class s{static serialize(e){let t=!(arguments.length>1)||void 0===arguments[1]||arguments[1];if("FORM"!==e.nodeName){if(t)throw Error("The passed element is not a form!");return{}}return new FormData(e)}static serializeJson(e){let t=!(arguments.length>1)||void 0===arguments[1]||arguments[1],r=s.serialize(e,t);if(r==={})return r;let a={};return i.Z.iterate(r,(e,t)=>a[t]=e),a}}}}]);