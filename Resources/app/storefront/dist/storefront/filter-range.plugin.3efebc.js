"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["filter-range.plugin"],{9304:(t,e,i)=>{i.d(e,{Z:()=>r});var s=i(9568),n=i(4049);class r extends s.Z{_init(){super._init(),this._validateMethods();let t=n.Z.querySelector(document,this.options.parentFilterPanelSelector);this.listing=window.PluginManager.getPluginInstanceFromElement(t,"Listing"),this.listing.registerFilter(this),this._preventDropdownClose()}_preventDropdownClose(){let t=n.Z.querySelector(this.el,this.options.dropdownSelector,!1);t&&t.addEventListener("click",t=>{t.stopPropagation()})}_validateMethods(){if("function"!=typeof this.getValues)throw Error("[".concat(this._pluginName,'] Needs the method "getValues"\''));if("function"!=typeof this.getLabels)throw Error("[".concat(this._pluginName,'] Needs the method "getLabels"\''));if("function"!=typeof this.reset)throw Error("[".concat(this._pluginName,'] Needs the method "reset"\''));if("function"!=typeof this.resetAll)throw Error("[".concat(this._pluginName,'] Needs the method "resetAll"\''))}}r.options={parentFilterPanelSelector:".cms-element-product-listing-wrapper",dropdownSelector:".filter-panel-item-dropdown"}},758:(t,e,i)=>{i.r(e),i.d(e,{default:()=>a});var s=i(9304),n=i(4049),r=i(1857),o=i.n(r);class a extends s.Z{init(){this._container=n.Z.querySelector(this.el,this.options.containerSelector),this._inputMin=n.Z.querySelector(this.el,this.options.inputMinSelector),this._inputMax=n.Z.querySelector(this.el,this.options.inputMaxSelector),this._timeout=null,this._hasError=!1,this._registerEvents()}_registerEvents(){this._inputMin.addEventListener("input",this._onChangeInput.bind(this)),this._inputMax.addEventListener("input",this._onChangeInput.bind(this))}_onChangeInput(){clearTimeout(this._timeout),this._timeout=setTimeout(()=>{this._isInputInvalid()?this._setError(this._getErrorMessageTemplate("filterRangeErrorMessage")):this._isInputLowerBoundInvalid()?this._setError(this._getErrorMessageTemplate("filterRangeLowerBoundErrorMessage")):this._removeError(),this.listing.changeListing()},this.options.inputTimeout)}getValues(){let t={};return t[this.options.minKey]=this._inputMin.value,t[this.options.maxKey]=this._inputMax.value,t}_isInputInvalid(){return parseFloat(this._inputMin.value)>parseFloat(this._inputMax.value)}_isInputLowerBoundInvalid(){return parseFloat(this._inputMin.value)<this.options.lowerBound||parseFloat(this._inputMax.value)<this.options.lowerBound}_getErrorMessageTemplate(t){return'<div class="'.concat(this.options.errorContainerClass,'">').concat(this.options.snippets[t],"</div>")}_setError(t){this._hasError||(this._inputMin.classList.add(this.options.inputInvalidCLass),this._inputMax.classList.add(this.options.inputInvalidCLass),this._container.insertAdjacentHTML("afterend",t),this._hasError=!0)}_removeError(){this._inputMin.classList.remove(this.options.inputInvalidCLass),this._inputMax.classList.remove(this.options.inputInvalidCLass);let t=n.Z.querySelector(this.el,".".concat(this.options.errorContainerClass),!1);t&&t.remove(),this._hasError=!1}setValuesFromUrl(t){let e=!1;return Object.keys(t).forEach(i=>{i===this.options.minKey&&(this._inputMin.value=t[i],e=!0),i===this.options.maxKey&&(this._inputMax.value=t[i],e=!0)}),e}getLabels(){let t=[];return this._inputMin.value.length||this._inputMax.value.length?(this._inputMin.value.length&&t.push({label:"".concat(this.options.snippets.filterRangeActiveMinLabel," ").concat(this._inputMin.value," ").concat(this.options.unit),id:this.options.minKey}),this._inputMax.value.length&&t.push({label:"".concat(this.options.snippets.filterRangeActiveMaxLabel," ").concat(this._inputMax.value," ").concat(this.options.unit),id:this.options.maxKey})):t=[],t}reset(t){t===this.options.minKey&&(this._inputMin.value=""),t===this.options.maxKey&&(this._inputMax.value=""),this._removeError()}resetAll(){this._inputMin.value="",this._inputMax.value="",this._removeError()}}a.options=o()(s.Z.options,{inputMinSelector:".min-input",inputMaxSelector:".max-input",inputInvalidCLass:"is-invalid",inputTimeout:500,minKey:"min-price",maxKey:"max-price",lowerBound:0,unit:"€",errorContainerClass:"filter-range-error",containerSelector:".filter-range-container",snippets:{filterRangeActiveMinLabel:"",filterRangeActiveMaxLabel:"",filterRangeErrorMessage:"",filterRangeLowerBoundErrorMessage:""}})}}]);