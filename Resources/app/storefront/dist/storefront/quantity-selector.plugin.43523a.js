"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["quantity-selector.plugin"],{1358:(t,e,s)=>{s.r(e),s.d(e,{default:()=>u});var i=s(9568),n=s(4049);class u extends i.Z{init(){this._input=n.Z.querySelector(this.el,"input.js-quantity-selector"),this._btnPlus=n.Z.querySelector(this.el,".js-btn-plus"),this._btnMinus=n.Z.querySelector(this.el,".js-btn-minus"),this._registerEvents()}_registerEvents(){this._btnPlus.addEventListener("click",this._stepUp.bind(this)),this._btnMinus.addEventListener("click",this._stepDown.bind(this)),this._input.addEventListener("keydown",t=>{if(13===t.keyCode)return t.preventDefault(),this._triggerChange(),!1})}_triggerChange(t){let e=new Event("change",{bubbles:!0,cancelable:!1});this._input.dispatchEvent(e),"up"===t?this._btnPlus.dispatchEvent(e):"down"===t&&this._btnMinus.dispatchEvent(e)}_stepUp(){let t=this._input.value;this._input.stepUp(),this._input.value!==t&&this._triggerChange("up")}_stepDown(){let t=this._input.value;this._input.stepDown(),this._input.value!==t&&this._triggerChange("down")}}}}]);