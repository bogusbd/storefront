"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["plugin_cookie_cookie-configuration_plugin_js"],{9197:(e,t,i)=>{i.r(t),i.d(t,{COOKIE_CONFIGURATION_CLOSE_OFF_CANVAS:()=>h,COOKIE_CONFIGURATION_UPDATE:()=>c,default:()=>f});var o=i(9568),n=i(1374),s=i(7),a=i(9062),l=i(3107),r=i(3327);let c="CookieConfiguration_Update",h="CookieConfiguration_CloseOffCanvas";class f extends o.Z{init(){this.lastState={active:[],inactive:[]},this._httpClient=new l.Z,this._registerEvents()}_registerEvents(){let{submitEvent:e,buttonOpenSelector:t,customLinkSelector:i,globalButtonAcceptAllSelector:o}=this.options;Array.from(document.querySelectorAll(t)).forEach(t=>{t.addEventListener(e,this.openOffCanvas.bind(this))}),Array.from(document.querySelectorAll(i)).forEach(t=>{t.addEventListener(e,this._handleCustomLink.bind(this))}),Array.from(document.querySelectorAll(o)).forEach(t=>{t.addEventListener(e,this._acceptAllCookiesFromCookieBar.bind(this))})}_registerOffCanvasEvents(){let{submitEvent:e,buttonSubmitSelector:t,buttonAcceptAllSelector:i,wrapperToggleSelector:o}=this.options,s=this._getOffCanvas();if(s){let a=s.querySelector(t),l=s.querySelector(i),r=Array.from(s.querySelectorAll('input[type="checkbox"]')),c=Array.from(s.querySelectorAll(o));a&&a.addEventListener(e,this._handleSubmit.bind(this,n.Z)),l&&l.addEventListener(e,this._acceptAllCookiesFromOffCanvas.bind(this,n.Z)),r.forEach(t=>{t.addEventListener(e,this._handleCheckbox.bind(this))}),c.forEach(t=>{t.addEventListener(e,this._handleWrapperTrigger.bind(this))})}}_handleCustomLink(e){e.preventDefault(),this.openOffCanvas()}_handleUpdateListener(e,t){let i=this._getUpdatedCookies(e,t);document.$emitter.publish(c,i)}_getUpdatedCookies(e,t){let{lastState:i}=this,o={};return e.forEach(e=>{i.inactive.includes(e)&&(o[e]=!0)}),t.forEach(e=>{i.active.includes(e)&&(o[e]=!1)}),o}openOffCanvas(e){let{offCanvasPosition:t}=this.options,i=window.router["frontend.cookie.offcanvas"];this._hideCookieBar(),s.Z.open(i,!1,this._onOffCanvasOpened.bind(this,e),t)}closeOffCanvas(e){s.Z.close(),"function"==typeof e&&e()}_onOffCanvasOpened(e){this._registerOffCanvasEvents(),this._setInitialState(),this._setInitialOffcanvasState(),PluginManager.initializePlugins(),"function"==typeof e&&e()}_hideCookieBar(){let e=PluginManager.getPluginInstances("CookiePermission");e&&e[0]&&(e[0]._hideCookieBar(),e[0]._removeBodyPadding())}_setInitialState(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=e||this._getCookies("all"),i=[],o=[];t.forEach(e=>{let{cookie:t,required:s}=e;n.Z.getItem(t)||s?i.push(t):o.push(t)}),this.lastState={active:i,inactive:o}}_setInitialOffcanvasState(){let e=this.lastState.active,t=this._getOffCanvas();e.forEach(e=>{let i=t.querySelector('[data-cookie="'.concat(e,'"]'));i.checked=!0,this._childCheckboxEvent(i)})}_handleWrapperTrigger(e){e.preventDefault();let{entriesActiveClass:t,entriesClass:i,groupClass:o}=this.options,{target:n}=e,s=this._findParentEl(n,i,o);s&&(s.classList.contains(t)?s.classList.remove(t):s.classList.add(t))}_handleCheckbox(e){let{parentInputClass:t}=this.options,{target:i}=e;(i.classList.contains(t)?this._parentCheckboxEvent:this._childCheckboxEvent).call(this,i)}_findParentEl(e,t){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;for(;e&&!e.classList.contains(i);){if(e.classList.contains(t))return e;e=e.parentElement}return null}_isChecked(e){return!!e.checked}_parentCheckboxEvent(e){let{groupClass:t}=this.options,i=this._isChecked(e),o=this._findParentEl(e,t);this._toggleWholeGroup(i,o)}_childCheckboxEvent(e){let{groupClass:t}=this.options,i=this._isChecked(e),o=this._findParentEl(e,t);this._toggleParentCheckbox(i,o)}_toggleWholeGroup(e,t){Array.from(t.querySelectorAll("input")).forEach(t=>{t.checked=e})}_toggleParentCheckbox(e,t){let{parentInputSelector:i}=this.options,o=Array.from(t.querySelectorAll("input:not(".concat(i,")"))),n=Array.from(t.querySelectorAll("input:not(".concat(i,"):checked")));if(o.length>0){let e=t.querySelector(i);if(e){let t=n.length>0,i=t&&n.length!==o.length;e.checked=t,e.indeterminate=i}}}_handleSubmit(){let e=this._getCookies("active"),t=this._getCookies("inactive"),{cookiePreference:i}=this.options,o=[],s=[];t.forEach(e=>{let{cookie:t}=e;s.push(t),n.Z.getItem(t)&&n.Z.removeItem(t)}),e.forEach(e=>{let{cookie:t,value:i,expiration:s}=e;o.push(t),t&&i&&n.Z.setItem(t,i,s)}),n.Z.setItem(i,"1","30"),this._handleUpdateListener(o,s),this.closeOffCanvas(document.$emitter.publish(h))}acceptAllCookies(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(!e){this._handleAcceptAll(),this.closeOffCanvas();return}r.Z.create(this.el);let t=window.router["frontend.cookie.offcanvas"];this._httpClient.get(t,e=>{let t=new DOMParser().parseFromString(e,"text/html");this._handleAcceptAll(t),r.Z.remove(this.el),this._hideCookieBar()})}_acceptAllCookiesFromCookieBar(){return this.acceptAllCookies(!0)}_acceptAllCookiesFromOffCanvas(){return this.acceptAllCookies()}_handleAcceptAll(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=this._getCookies("all",e);this._setInitialState(t);let{cookiePreference:i}=this.options;t.forEach(e=>{let{cookie:t,value:i,expiration:o}=e;t&&i&&n.Z.setItem(t,i,o)}),n.Z.setItem(i,"1","30"),this._handleUpdateListener(t.map(e=>{let{cookie:t}=e;return t}),[])}_getCookies(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"all",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,{cookieSelector:i}=this.options;return t||(t=this._getOffCanvas()),Array.from(t.querySelectorAll(i)).filter(t=>{switch(e){case"all":return!0;case"active":return this._isChecked(t);case"inactive":return!this._isChecked(t);default:return!1}}).map(e=>{let{cookie:t,cookieValue:i,cookieExpiration:o,cookieRequired:n}=e.dataset;return{cookie:t,value:i,expiration:o,required:n}})}_getOffCanvas(){let e=a.Z?a.Z.getOffCanvas():[];return!!e&&e.length>0&&e[0]}}f.options={offCanvasPosition:"left",submitEvent:"click",cookiePreference:"cookie-preference",cookieSelector:"[data-cookie]",buttonOpenSelector:".js-cookie-configuration-button button",buttonSubmitSelector:".js-offcanvas-cookie-submit",buttonAcceptAllSelector:".js-offcanvas-cookie-accept-all",globalButtonAcceptAllSelector:".js-cookie-accept-all-button",wrapperToggleSelector:".offcanvas-cookie-entries span",parentInputSelector:".offcanvas-cookie-parent-input",customLinkSelector:'[href="'.concat(window.router["frontend.cookie.offcanvas"],'"]'),entriesActiveClass:"offcanvas-cookie-entries--active",entriesClass:"offcanvas-cookie-entries",groupClass:"offcanvas-cookie-group",parentInputClass:"offcanvas-cookie-parent-input"}}}]);