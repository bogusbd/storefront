"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["plugin_cross-selling_cross-selling_plugin_js"],{5019:(e,t,r)=>{r.r(t),r.d(t,{default:()=>n});var i=r(9568),s=r(4049),l=r(447);class n extends i.Z{init(){this._registerEvents()}_registerEvents(){s.Z.querySelectorAll(this.el,this.options.tabSelector).forEach(e=>{e.addEventListener("shown.bs.tab",this._rebuildCrossSellingSlider.bind(this))})}_rebuildCrossSellingSlider(e){if(!e.target.hasAttribute("id"))return;let t=e.target.id,r=s.Z.querySelector(document,"#".concat(t,"-pane")),i=s.Z.querySelector(r,this.options.productSliderSelector,!1);!1!==i&&window.PluginManager.getPluginInstanceFromElement(i,"ProductSlider").rebuild(l.Z.getCurrentViewport(),!0)}}n.options={tabSelector:'a[data-bs-toggle="tab"]',productSliderSelector:'[data-product-slider="true"]'}}}]);