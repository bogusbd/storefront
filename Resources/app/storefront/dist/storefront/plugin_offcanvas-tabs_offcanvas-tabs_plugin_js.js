"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["plugin_offcanvas-tabs_offcanvas-tabs_plugin_js"],{8344:(t,e,s)=>{s.r(e),s.d(e,{default:()=>r});var n=s(4049),a=s(9062),i=s(447),o=s(9568);class r extends o.Z{init(){this._registerEventListeners()}_registerEventListeners(){this.el.addEventListener("click",this._onClickOffCanvasTab.bind(this))}_onClickOffCanvasTab(t){if(!1===this._isInAllowedViewports())return;t.preventDefault();let e=t.currentTarget;if(n.Z.hasAttribute(e,"href")){let t=n.Z.getAttribute(e,"href"),s=n.Z.querySelector(document,t);a.Z.open(s.innerHTML,()=>{window.PluginManager.initializePlugins()},this.options.offcanvasPostion,!0,a.Z.REMOVE_OFF_CANVAS_DELAY(),!1)}this.$emitter.publish("onClickOffCanvasTab")}_isInAllowedViewports(){return i.Z.isXS()}}r.options={offcanvasPostion:"right"}},9062:(t,e,s)=>{s.d(e,{Z:()=>l,r:()=>f});var n=s(5206),a=s(9138),i=s(3266);let o="offcanvas";class r{open(t,e,s,n,a,i,o){this._removeExistingOffCanvas();let r=this._createOffCanvas(s,i,o,n);this.setContent(t,n,a),this._openOffcanvas(r,e)}setContent(t,e){let s=this.getOffCanvas();s[0]&&(s[0].innerHTML=t,this._registerEvents(e))}setAdditionalClassName(t){this.getOffCanvas()[0].classList.add(t)}getOffCanvas(){return document.querySelectorAll(".".concat(o))}close(t){let e=this.getOffCanvas();i.Z.iterate(e,t=>{bootstrap.Offcanvas.getInstance(t).hide()}),setTimeout(()=>{this.$emitter.publish("onCloseOffcanvas",{offCanvasContent:e})},t)}goBackInHistory(){window.history.back()}exists(){return this.getOffCanvas().length>0}_openOffcanvas(t,e){r.bsOffcanvas.show(),window.history.pushState("offcanvas-open",""),"function"==typeof e&&e()}_registerEvents(t){let e=n.Z.isTouchDevice()?"touchend":"click",s=this.getOffCanvas();i.Z.iterate(s,e=>{let n=()=>{setTimeout(()=>{e.remove(),this.$emitter.publish("onCloseOffcanvas",{offCanvasContent:s})},t),e.removeEventListener("hide.bs.offcanvas",n)};e.addEventListener("hide.bs.offcanvas",n)}),window.addEventListener("popstate",this.close.bind(this,t),{once:!0});let a=document.querySelectorAll(".".concat("js-offcanvas-close"));i.Z.iterate(a,s=>s.addEventListener(e,this.close.bind(this,t)))}_removeExistingOffCanvas(){r.bsOffcanvas=null;let t=this.getOffCanvas();return i.Z.iterate(t,t=>t.remove())}_getPositionClass(t){return"left"===t?"offcanvas-start":"right"===t?"offcanvas-end":"offcanvas-".concat(t)}_createOffCanvas(t,e,s,n){let a=document.createElement("div");if(a.classList.add(o),a.classList.add(this._getPositionClass(t)),!0===e&&a.classList.add("is-fullwidth"),s){let t=typeof s;if("string"===t)a.classList.add(s);else if(Array.isArray(s))s.forEach(t=>{a.classList.add(t)});else throw Error('The type "'.concat(t,'" is not supported. Please pass an array or a string.'))}return document.body.appendChild(a),r.bsOffcanvas=new bootstrap.Offcanvas(a,{backdrop:!1!==n||"static"}),a}constructor(){this.$emitter=new a.Z}}let f=Object.freeze(new r);class l{static open(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"left",n=!(arguments.length>3)||void 0===arguments[3]||arguments[3],a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:350,i=arguments.length>5&&void 0!==arguments[5]&&arguments[5],o=arguments.length>6&&void 0!==arguments[6]?arguments[6]:"";f.open(t,e,s,n,a,i,o)}static setContent(t){let e=!(arguments.length>1)||void 0===arguments[1]||arguments[1],s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:350;f.setContent(t,e,s)}static setAdditionalClassName(t){f.setAdditionalClassName(t)}static close(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:350;f.close(t)}static exists(){return f.exists()}static getOffCanvas(){return f.getOffCanvas()}static REMOVE_OFF_CANVAS_DELAY(){return 350}}}}]);