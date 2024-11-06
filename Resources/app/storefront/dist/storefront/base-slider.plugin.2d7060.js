"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["base-slider.plugin"],{9799:(e,t,i)=>{i.r(t),i.d(t,{default:()=>o});var s=i(9568),r=i(516),n=i(447),l=i(8282);class o extends s.Z{init(){this._slider=!1,this.el.classList.contains(this.options.initializedCls)||(this.options.slider=l.Z.prepareBreakpointPxValues(this.options.slider),this._correctIndexSettings(),this._getSettings(n.Z.getCurrentViewport()),this._initSlider(),this._registerEvents())}destroy(){if(this._slider&&"function"==typeof this._slider.destroy)try{this._slider.destroy()}catch(e){}this.el.classList.remove(this.options.initializedCls)}rebuild(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n.Z.getCurrentViewport(),t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];this._getSettings(e.toLowerCase());try{if(this._slider&&!t){let e=this._getCurrentIndex();this._sliderSettings.startIndex=e}this.destroy(),this._initSlider()}catch(e){}this.$emitter.publish("rebuild")}_registerEvents(){this._slider&&document.addEventListener("Viewport/hasChanged",()=>this.rebuild(n.Z.getCurrentViewport()))}_correctIndexSettings(){this.options.slider.startIndex-=1,this.options.slider.startIndex=this.options.slider.startIndex<0?0:this.options.slider.startIndex}_getSettings(e){this._sliderSettings=l.Z.getViewportSettings(this.options.slider,e)}getCurrentSliderIndex(){if(!this._slider)return;let e=this._slider.getInfo(),t=e.displayIndex%e.slideCount;return(t=0===t?e.slideCount:t)-1}getActiveSlideElement(){let e=this._slider.getInfo();return e.slideItems[e.index]}_initSlider(){this.el.classList.add(this.options.initializedCls);let e=this.el.querySelector(this.options.containerSelector),t=this.el.querySelector(this.options.controlsSelector);e&&(this._sliderSettings.enabled?(e.style.display="",this._slider=(0,r.W)({container:e,controlsContainer:t,onInit:e=>{window.PluginManager.initializePlugins(),this.$emitter.publish("initSlider"),window.Feature.isActive("ACCESSIBILITY_TWEAKS")&&this._initAccessibilityTweaks(e,this.el)},...this._sliderSettings})):e.style.display="none"),this.$emitter.publish("afterInitSlider")}_initAccessibilityTweaks(e,t){let i=e.slideItems;e.controlsContainer&&e.controlsContainer.setAttribute("tabindex","-1");let s=t||this.el;s.scrollLeft=0,s.addEventListener("scroll",e=>{s.scrollLeft=0,e.preventDefault()});for(let e=0;e<i.length;e++){let t=i.item(e);if(t.classList.contains("tns-slide-cloned"))for(let e of t.querySelectorAll("a, button, img"))e.setAttribute("tabindex","-1");else t.addEventListener("keyup",t=>{if("Tab"!==t.key)return;let i=this._slider.getInfo();if(s.scrollLeft=0,this._sliderSettings.autoplay&&this._slider.pause(),e!==i.index){let t=e-i.cloneCount;this._slider.goTo(t)}})}}_getCurrentIndex(){let e=this._slider.getInfo(),t=e.index%e.slideCount;return(t=0===t?e.slideCount:t)-1}}o.options={initializedCls:"js-slider-initialized",containerSelector:"[data-base-slider-container=true]",controlsSelector:"[data-base-slider-controls=true]",slider:{enabled:!0,responsive:{xs:{},sm:{},md:{},lg:{},xl:{},xxl:{}}}}},8282:(e,t,i)=>{i.d(t,{Z:()=>l});var s=i(1857),r=i.n(s),n=i(3266);class l{static getViewportSettings(e,t){let i=Object.assign({},e),s=e.responsive;delete i.responsive;let n=s[window.breakpoints[t.toLowerCase()]];return n?r()(i,n):i}static prepareBreakpointPxValues(e){return n.Z.iterate(e.responsive,(t,i)=>{let s=window.breakpoints[i.toLowerCase()];e.responsive[s]=t,delete e.responsive[i]}),e}}}}]);