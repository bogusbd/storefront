"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["plugin_forms_form-scroll-to-invalid-field_plugin_js"],{2431:(t,e,i)=>{i.r(e),i.d(e,{default:()=>n});var l=i(9568),s=i(9610),o=i(3266),r=i(4049);class n extends l.Z{init(){if(this._getForm(),!this._form)throw Error("No form found for the plugin: ".concat(this.constructor.name));this._formFields=this._getFormFields(),this._formFields&&0!==this._formFields.length&&(this._assignDebouncedOnScrollEvent(),this._registerEvents())}_getForm(){this.el&&"FORM"===this.el.nodeName?this._form=this.el:this._form=this.el.closest("form")}_getFormFields(){let t=this._form.querySelectorAll("input, select, textarea"),e=this._form.id;if(!e)return t;let i=document.querySelectorAll('input[form="'.concat(e,'"], select[form="').concat(e,'"], textarea[form="').concat(e,'"]'));return i?n._mergeNodeList(t,i):t}_registerEvents(){o.Z.iterate(this._formFields,t=>{t.addEventListener("invalid",this._onInvalid.bind(this),!1)}),document.addEventListener("scroll",this._debouncedOnScroll,!1)}_assignDebouncedOnScrollEvent(){this._debouncedOnScroll=s.Z.debounce(this._onScrollEnd.bind(this),this.options.scrollDebounceTime)}_onInvalid(t){if(t.target._ignoreValidityEvent){delete t.target._ignoreValidityEvent;return}t.preventDefault(),t.stopPropagation(),this._firstInvalidElement||(this._getFirstInvalidFormFields(t),this._scrollToInvalidFormFields(),this.$emitter.publish("onInvalid"))}_getFirstInvalidFormFields(t){o.Z.iterate(this._formFields,e=>{e===t.target&&(this._firstInvalidElement=e)}),this.$emitter.publish("getFirstInvalidFormFields")}_onScrollEnd(){this._firstInvalidElement&&(this._firstInvalidElement._ignoreValidityEvent=!0,this._firstInvalidElement.getAttribute("data-skip-report-validity")||this._firstInvalidElement.reportValidity(!1),this._firstInvalidElement=!1),this.$emitter.publish("onScrollEnd")}_scrollToInvalidFormFields(){let t=this._getOffset();window.scrollY===t?this._debouncedOnScroll():this._shouldScroll()?window.scrollTo({top:t,behavior:"smooth"}):this._onScrollEnd(),this.$emitter.publish("scrollToInvalidFormFields")}_shouldScroll(){let t=!0;return o.Z.iterate(this.options.noScrollClasses,e=>{document.body.classList.contains(e)&&(t=!1)}),t}_getOffset(){let t=this._firstInvalidElement.getBoundingClientRect().top+window.scrollY-this.options.scrollOffset,e=r.Z.querySelector(document,this.options.fixedHeaderSelector,!1);return e&&(t-=e.getBoundingClientRect().height),t}static _mergeNodeList(t,e){return[...Array.from(t),...Array.from(e)]}}n.options={scrollDebounceTime:75,scrollOffset:15,noScrollClasses:["modal-open"],fixedHeaderSelector:"header.fixed-top"}}}]);