"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["collapse-footer-columns.plugin"],{9267:(e,s,t)=>{t.r(s),t.d(s,{default:()=>r});var o=t(9568),l=t(4049),i=t(447),n=t(3266);class r extends o.Z{init(){this._columns=this.el.querySelectorAll(this.options.collapseColumnSelector),this._registerEvents()}_registerEvents(){this._onViewportHasChanged(),document.addEventListener("Viewport/hasChanged",this._onViewportHasChanged.bind(this))}_onViewportHasChanged(){let e="click";n.Z.iterate(this._columns,s=>{let t=l.Z.querySelector(s,this.options.collapseColumnTriggerSelector);t.removeEventListener(e,this._onClickCollapseTrigger),this._isInAllowedViewports()&&t.addEventListener(e,this._onClickCollapseTrigger.bind(this))}),this.$emitter.publish("onViewportHasChanged")}_onClickCollapseTrigger(e){let s=e.target,t=s.parentNode.querySelector(this.options.collapseColumnContentSelector),o=this.options.collapseShowClass;new bootstrap.Collapse(t,{toggle:!0}),t.addEventListener("shown.bs.collapse",()=>{s.classList.add(o),this.$emitter.publish("onCollapseShown")}),t.addEventListener("hidden.bs.collapse",()=>{s.classList.remove(o),this.$emitter.publish("onCollapseHidden")}),this.$emitter.publish("onClickCollapseTrigger")}_isInAllowedViewports(){return i.Z.isXS()||i.Z.isSM()}}r.options={collapseShowClass:"show",collapseColumnSelector:".js-footer-column",collapseColumnTriggerSelector:".js-collapse-footer-column-trigger",collapseColumnContentSelector:".js-footer-column-content"}}}]);