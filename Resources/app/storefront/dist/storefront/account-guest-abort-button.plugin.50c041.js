"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["account-guest-abort-button.plugin"],{795:(t,e,s)=>{s.r(e),s.d(e,{default:()=>n});var i=s(9568);class n extends i.Z{init(){this._registerEventListeners()}_registerEventListeners(){this.el.addEventListener("click",this._onButtonClicked.bind(this))}_onButtonClicked(t){t.preventDefault(),this.$emitter.publish("guest-logout"),window.location.assign(this.el.getAttribute("href"))}}}}]);