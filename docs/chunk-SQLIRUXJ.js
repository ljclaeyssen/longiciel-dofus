import{B as wt,C as Me,D as Se,b as Ze,c as Je,e as et,h as tt,j as gt,l as _t,m as yt,n as vt,o as bt,p as Ct,u as Mt,x as St}from"./chunk-W4Q2JWKO.js";import{B as J,C as lt,D as st,E as ct,F as dt,G as B,H as mt,I as pt,J as ee,j as ye,q as at,r as ve,t as it,w as rt,y as nt,z as ot}from"./chunk-C5VBVABN.js";import{c as be,d as Ce,f as te,g as ut,h as ae,i as ht,j as ft}from"./chunk-HU7WFQWJ.js";import{$b as W,A as Ae,Ab as M,Ca as Le,Cb as j,D as H,Da as We,E as de,Eb as Ge,Fa as Ne,Fb as fe,Fc as $e,Ga as Be,Gb as Q,Hb as X,Ib as Y,Jb as s,K as Te,Kb as c,Lb as y,M as Ee,Pb as V,Rb as v,Sb as I,Tb as L,Ub as w,Vb as U,W as me,Wb as $,X as pe,Xb as D,Y as O,Yb as A,a as d,ab as ze,ac as h,b as R,bc as F,ca as Fe,cb as p,cc as qe,da as ue,dc as Qe,fa as E,hc as Z,ia as o,ic as Xe,j as P,jc as Ye,oa as Re,ob as g,oc as Ue,pa as b,pb as he,qa as C,qb as k,ra as Pe,rb as He,rc as x,sc as ge,tb as Ke,tc as N,ub as G,uc as _e,va as je,w as ce,wa as Ve,za as K,zb as q}from"./chunk-Q54K4XKD.js";var $t=["trigger"],Zt=["panel"],Jt=[[["mat-select-trigger"]],"*"],ea=["mat-select-trigger","*"];function ta(a,r){if(a&1&&(s(0,"span",4),h(1),c()),a&2){let e=I();p(),F(e.placeholder)}}function aa(a,r){a&1&&w(0)}function ia(a,r){if(a&1&&(s(0,"span",11),h(1),c()),a&2){let e=I(2);p(),F(e.triggerValue)}}function ra(a,r){if(a&1&&(s(0,"span",5),G(1,aa,1,0)(2,ia,2,1,"span",11),c()),a&2){let e=I();p(),fe(e.customTrigger?1:2)}}function na(a,r){if(a&1){let e=V();s(0,"div",12,1),v("@transformPanel.done",function(i){b(e);let n=I();return C(n._panelDoneAnimatingStream.next(i.toState))})("keydown",function(i){b(e);let n=I();return C(n._handleKeydown(i))}),w(2,1),c()}if(a&2){let e=I();Ge("mat-mdc-select-panel mdc-menu-surface mdc-menu-surface--open ",e._getPanelTheme(),""),M("ngClass",e.panelClass)("@transformPanel","showing"),q("id",e.id+"-panel")("aria-multiselectable",e.multiple)("aria-label",e.ariaLabel||null)("aria-labelledby",e._getPanelAriaLabelledby())}}var oa={transformPanelWrap:be("transformPanelWrap",[ae("* => void",ft("@transformPanel",[ht()],{optional:!0}))]),transformPanel:be("transformPanel",[ut("void",te({opacity:0,transform:"scale(1, 0.8)"})),ae("void => showing",Ce("120ms cubic-bezier(0, 0, 0.2, 1)",te({opacity:1,transform:"scale(1, 1)"}))),ae("* => void",Ce("100ms linear",te({opacity:0})))])};var la=new E("mat-select-scroll-strategy",{providedIn:"root",factory:()=>{let a=o(wt);return()=>a.scrollStrategies.reposition()}});var sa=new E("MAT_SELECT_CONFIG");var ca=new E("MatSelectTrigger"),we=class{source;value;constructor(r,e){this.source=r,this.value=e}},Dt=(()=>{class a{_viewportRuler=o(St);_changeDetectorRef=o(Ue);_elementRef=o(We);_dir=o(ot,{optional:!0});_idGenerator=o(nt);_parentFormField=o(yt,{optional:!0});ngControl=o(Je,{self:!0,optional:!0});_liveAnnouncer=o(rt);_defaultOptions=o(sa,{optional:!0});_initialized=new P;options;optionGroups;customTrigger;_positions=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"}];_scrollOptionIntoView(e){let t=this.options.toArray()[e];if(t){let i=this.panel.nativeElement,n=mt(e,this.options,this.optionGroups),l=t._getHostElement();e===0&&n===1?i.scrollTop=0:i.scrollTop=pt(l.offsetTop,l.offsetHeight,i.scrollTop,i.offsetHeight)}}_positioningSettled(){this._scrollOptionIntoView(this._keyManager.activeItemIndex||0)}_getChangeEvent(e){return new we(this,e)}_scrollStrategyFactory=o(la);_panelOpen=!1;_compareWith=(e,t)=>e===t;_uid=this._idGenerator.getId("mat-select-");_triggerAriaLabelledBy=null;_previousControl;_destroy=new P;_errorStateTracker;stateChanges=new P;disableAutomaticLabeling=!0;userAriaDescribedBy;_selectionModel;_keyManager;_preferredOverlayOrigin;_overlayWidth;_onChange=()=>{};_onTouched=()=>{};_valueId=this._idGenerator.getId("mat-select-value-");_panelDoneAnimatingStream=new P;_scrollStrategy;_overlayPanelClass=this._defaultOptions?.overlayPanelClass||"";get focused(){return this._focused||this._panelOpen}_focused=!1;controlType="mat-select";trigger;panel;_overlayDir;panelClass;disabled=!1;disableRipple=!1;tabIndex=0;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;get placeholder(){return this._placeholder}set placeholder(e){this._placeholder=e,this.stateChanges.next()}_placeholder;get required(){return this._required??this.ngControl?.control?.hasValidator(Ze.required)??!1}set required(e){this._required=e,this.stateChanges.next()}_required;get multiple(){return this._multiple}set multiple(e){this._selectionModel,this._multiple=e}_multiple=!1;disableOptionCentering=this._defaultOptions?.disableOptionCentering??!1;get compareWith(){return this._compareWith}set compareWith(e){this._compareWith=e,this._selectionModel&&this._initializeSelection()}get value(){return this._value}set value(e){this._assignValue(e)&&this._onChange(e)}_value;ariaLabel="";ariaLabelledby;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}typeaheadDebounceInterval;sortComparator;get id(){return this._id}set id(e){this._id=e||this._uid,this.stateChanges.next()}_id;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}panelWidth=this._defaultOptions&&typeof this._defaultOptions.panelWidth<"u"?this._defaultOptions.panelWidth:"auto";canSelectNullableOptions=this._defaultOptions?.canSelectNullableOptions??!1;optionSelectionChanges=Ae(()=>{let e=this.options;return e?e.changes.pipe(me(e),pe(()=>H(...e.map(t=>t.onSelectionChange)))):this._initialized.pipe(pe(()=>this.optionSelectionChanges))});openedChange=new K;_openedStream=this.openedChange.pipe(de(e=>e),ce(()=>{}));_closedStream=this.openedChange.pipe(de(e=>!e),ce(()=>{}));selectionChange=new K;valueChange=new K;constructor(){let e=o(st),t=o(et,{optional:!0}),i=o(tt,{optional:!0}),n=o(new je("tabindex"),{optional:!0});this.ngControl&&(this.ngControl.valueAccessor=this),this._defaultOptions?.typeaheadDebounceInterval!=null&&(this.typeaheadDebounceInterval=this._defaultOptions.typeaheadDebounceInterval),this._errorStateTracker=new lt(e,this.ngControl,i,t,this.stateChanges),this._scrollStrategy=this._scrollStrategyFactory(),this.tabIndex=n==null?0:parseInt(n)||0,this.id=this.id}ngOnInit(){this._selectionModel=new Mt(this.multiple),this.stateChanges.next(),this._panelDoneAnimatingStream.pipe(Ee(),O(this._destroy)).subscribe(()=>this._panelDoneAnimating(this.panelOpen)),this._viewportRuler.change().pipe(O(this._destroy)).subscribe(()=>{this.panelOpen&&(this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._changeDetectorRef.detectChanges())})}ngAfterContentInit(){this._initialized.next(),this._initialized.complete(),this._initKeyManager(),this._selectionModel.changed.pipe(O(this._destroy)).subscribe(e=>{e.added.forEach(t=>t.select()),e.removed.forEach(t=>t.deselect())}),this.options.changes.pipe(me(null),O(this._destroy)).subscribe(()=>{this._resetOptions(),this._initializeSelection()})}ngDoCheck(){let e=this._getTriggerAriaLabelledby(),t=this.ngControl;if(e!==this._triggerAriaLabelledBy){let i=this._elementRef.nativeElement;this._triggerAriaLabelledBy=e,e?i.setAttribute("aria-labelledby",e):i.removeAttribute("aria-labelledby")}t&&(this._previousControl!==t.control&&(this._previousControl!==void 0&&t.disabled!==null&&t.disabled!==this.disabled&&(this.disabled=t.disabled),this._previousControl=t.control),this.updateErrorState())}ngOnChanges(e){(e.disabled||e.userAriaDescribedBy)&&this.stateChanges.next(),e.typeaheadDebounceInterval&&this._keyManager&&this._keyManager.withTypeAhead(this.typeaheadDebounceInterval)}ngOnDestroy(){this._keyManager?.destroy(),this._destroy.next(),this._destroy.complete(),this.stateChanges.complete(),this._clearFromModal()}toggle(){this.panelOpen?this.close():this.open()}open(){this._canOpen()&&(this._parentFormField&&(this._preferredOverlayOrigin=this._parentFormField.getConnectedOverlayOrigin()),this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._applyModalPanelOwnership(),this._panelOpen=!0,this._keyManager.withHorizontalOrientation(null),this._highlightCorrectOption(),this._changeDetectorRef.markForCheck(),this.stateChanges.next())}_trackedModal=null;_applyModalPanelOwnership(){let e=this._elementRef.nativeElement.closest('body > .cdk-overlay-container [aria-modal="true"]');if(!e)return;let t=`${this.id}-panel`;this._trackedModal&&ve(this._trackedModal,"aria-owns",t),at(e,"aria-owns",t),this._trackedModal=e}_clearFromModal(){if(!this._trackedModal)return;let e=`${this.id}-panel`;ve(this._trackedModal,"aria-owns",e),this._trackedModal=null}close(){this._panelOpen&&(this._panelOpen=!1,this._keyManager.withHorizontalOrientation(this._isRtl()?"rtl":"ltr"),this._changeDetectorRef.markForCheck(),this._onTouched(),this.stateChanges.next())}writeValue(e){this._assignValue(e)}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck(),this.stateChanges.next()}get panelOpen(){return this._panelOpen}get selected(){return this.multiple?this._selectionModel?.selected||[]:this._selectionModel?.selected[0]}get triggerValue(){if(this.empty)return"";if(this._multiple){let e=this._selectionModel.selected.map(t=>t.viewValue);return this._isRtl()&&e.reverse(),e.join(", ")}return this._selectionModel.selected[0].viewValue}updateErrorState(){this._errorStateTracker.updateErrorState()}_isRtl(){return this._dir?this._dir.value==="rtl":!1}_handleKeydown(e){this.disabled||(this.panelOpen?this._handleOpenKeydown(e):this._handleClosedKeydown(e))}_handleClosedKeydown(e){let t=e.keyCode,i=t===40||t===38||t===37||t===39,n=t===13||t===32,l=this._keyManager;if(!l.isTyping()&&n&&!ye(e)||(this.multiple||e.altKey)&&i)e.preventDefault(),this.open();else if(!this.multiple){let f=this.selected;l.onKeydown(e);let u=this.selected;u&&f!==u&&this._liveAnnouncer.announce(u.viewValue,1e4)}}_handleOpenKeydown(e){let t=this._keyManager,i=e.keyCode,n=i===40||i===38,l=t.isTyping();if(n&&e.altKey)e.preventDefault(),this.close();else if(!l&&(i===13||i===32)&&t.activeItem&&!ye(e))e.preventDefault(),t.activeItem._selectViaInteraction();else if(!l&&this._multiple&&i===65&&e.ctrlKey){e.preventDefault();let f=this.options.some(u=>!u.disabled&&!u.selected);this.options.forEach(u=>{u.disabled||(f?u.select():u.deselect())})}else{let f=t.activeItemIndex;t.onKeydown(e),this._multiple&&n&&e.shiftKey&&t.activeItem&&t.activeItemIndex!==f&&t.activeItem._selectViaInteraction()}}_onFocus(){this.disabled||(this._focused=!0,this.stateChanges.next())}_onBlur(){this._focused=!1,this._keyManager?.cancelTypeahead(),!this.disabled&&!this.panelOpen&&(this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next())}_onAttached(){this._overlayDir.positionChange.pipe(Te(1)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this._positioningSettled()})}_getPanelTheme(){return this._parentFormField?`mat-${this._parentFormField.color}`:""}get empty(){return!this._selectionModel||this._selectionModel.isEmpty()}_initializeSelection(){Promise.resolve().then(()=>{this.ngControl&&(this._value=this.ngControl.value),this._setSelectionByValue(this._value),this.stateChanges.next()})}_setSelectionByValue(e){if(this.options.forEach(t=>t.setInactiveStyles()),this._selectionModel.clear(),this.multiple&&e)Array.isArray(e),e.forEach(t=>this._selectOptionByValue(t)),this._sortValues();else{let t=this._selectOptionByValue(e);t?this._keyManager.updateActiveItem(t):this.panelOpen||this._keyManager.updateActiveItem(-1)}this._changeDetectorRef.markForCheck()}_selectOptionByValue(e){let t=this.options.find(i=>{if(this._selectionModel.isSelected(i))return!1;try{return(i.value!=null||this.canSelectNullableOptions)&&this._compareWith(i.value,e)}catch{return!1}});return t&&this._selectionModel.select(t),t}_assignValue(e){return e!==this._value||this._multiple&&Array.isArray(e)?(this.options&&this._setSelectionByValue(e),this._value=e,!0):!1}_skipPredicate=e=>this.panelOpen?!1:e.disabled;_getOverlayWidth(e){return this.panelWidth==="auto"?(e instanceof Me?e.elementRef:e||this._elementRef).nativeElement.getBoundingClientRect().width:this.panelWidth===null?"":this.panelWidth}_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}_initKeyManager(){this._keyManager=new it(this.options).withTypeAhead(this.typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl()?"rtl":"ltr").withHomeAndEnd().withPageUpDown().withAllowedModifierKeys(["shiftKey"]).skipPredicate(this._skipPredicate),this._keyManager.tabOut.subscribe(()=>{this.panelOpen&&(!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction(),this.focus(),this.close())}),this._keyManager.change.subscribe(()=>{this._panelOpen&&this.panel?this._scrollOptionIntoView(this._keyManager.activeItemIndex||0):!this._panelOpen&&!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction()})}_resetOptions(){let e=H(this.options.changes,this._destroy);this.optionSelectionChanges.pipe(O(e)).subscribe(t=>{this._onSelect(t.source,t.isUserInput),t.isUserInput&&!this.multiple&&this._panelOpen&&(this.close(),this.focus())}),H(...this.options.map(t=>t._stateChanges)).pipe(O(e)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this.stateChanges.next()})}_onSelect(e,t){let i=this._selectionModel.isSelected(e);!this.canSelectNullableOptions&&e.value==null&&!this._multiple?(e.deselect(),this._selectionModel.clear(),this.value!=null&&this._propagateChanges(e.value)):(i!==e.selected&&(e.selected?this._selectionModel.select(e):this._selectionModel.deselect(e)),t&&this._keyManager.setActiveItem(e),this.multiple&&(this._sortValues(),t&&this.focus())),i!==this._selectionModel.isSelected(e)&&this._propagateChanges(),this.stateChanges.next()}_sortValues(){if(this.multiple){let e=this.options.toArray();this._selectionModel.sort((t,i)=>this.sortComparator?this.sortComparator(t,i,e):e.indexOf(t)-e.indexOf(i)),this.stateChanges.next()}}_propagateChanges(e){let t;this.multiple?t=this.selected.map(i=>i.value):t=this.selected?this.selected.value:e,this._value=t,this.valueChange.emit(t),this._onChange(t),this.selectionChange.emit(this._getChangeEvent(t)),this._changeDetectorRef.markForCheck()}_highlightCorrectOption(){if(this._keyManager)if(this.empty){let e=-1;for(let t=0;t<this.options.length;t++)if(!this.options.get(t).disabled){e=t;break}this._keyManager.setActiveItem(e)}else this._keyManager.setActiveItem(this._selectionModel.selected[0])}_canOpen(){return!this._panelOpen&&!this.disabled&&this.options?.length>0}focus(e){this._elementRef.nativeElement.focus(e)}_getPanelAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||null,t=e?e+" ":"";return this.ariaLabelledby?t+this.ariaLabelledby:e}_getAriaActiveDescendant(){return this.panelOpen&&this._keyManager&&this._keyManager.activeItem?this._keyManager.activeItem.id:null}_getTriggerAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId(),t=(e?e+" ":"")+this._valueId;return this.ariaLabelledby&&(t+=" "+this.ariaLabelledby),t}_panelDoneAnimating(e){this.openedChange.emit(e)}setDescribedByIds(e){e.length?this._elementRef.nativeElement.setAttribute("aria-describedby",e.join(" ")):this._elementRef.nativeElement.removeAttribute("aria-describedby")}onContainerClick(){this.focus(),this.open()}get shouldLabelFloat(){return this.panelOpen||!this.empty||this.focused&&!!this.placeholder}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=g({type:a,selectors:[["mat-select"]],contentQueries:function(t,i,n){if(t&1&&(U(n,ca,5),U(n,B,5),U(n,dt,5)),t&2){let l;D(l=A())&&(i.customTrigger=l.first),D(l=A())&&(i.options=l),D(l=A())&&(i.optionGroups=l)}},viewQuery:function(t,i){if(t&1&&($($t,5),$(Zt,5),$(Se,5)),t&2){let n;D(n=A())&&(i.trigger=n.first),D(n=A())&&(i.panel=n.first),D(n=A())&&(i._overlayDir=n.first)}},hostAttrs:["role","combobox","aria-haspopup","listbox",1,"mat-mdc-select"],hostVars:19,hostBindings:function(t,i){t&1&&v("keydown",function(l){return i._handleKeydown(l)})("focus",function(){return i._onFocus()})("blur",function(){return i._onBlur()}),t&2&&(q("id",i.id)("tabindex",i.disabled?-1:i.tabIndex)("aria-controls",i.panelOpen?i.id+"-panel":null)("aria-expanded",i.panelOpen)("aria-label",i.ariaLabel||null)("aria-required",i.required.toString())("aria-disabled",i.disabled.toString())("aria-invalid",i.errorState)("aria-activedescendant",i._getAriaActiveDescendant()),j("mat-mdc-select-disabled",i.disabled)("mat-mdc-select-invalid",i.errorState)("mat-mdc-select-required",i.required)("mat-mdc-select-empty",i.empty)("mat-mdc-select-multiple",i.multiple))},inputs:{userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],panelClass:"panelClass",disabled:[2,"disabled","disabled",x],disableRipple:[2,"disableRipple","disableRipple",x],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:ge(e)],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",x],placeholder:"placeholder",required:[2,"required","required",x],multiple:[2,"multiple","multiple",x],disableOptionCentering:[2,"disableOptionCentering","disableOptionCentering",x],compareWith:"compareWith",value:"value",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],errorStateMatcher:"errorStateMatcher",typeaheadDebounceInterval:[2,"typeaheadDebounceInterval","typeaheadDebounceInterval",ge],sortComparator:"sortComparator",id:"id",panelWidth:"panelWidth",canSelectNullableOptions:[2,"canSelectNullableOptions","canSelectNullableOptions",x]},outputs:{openedChange:"openedChange",_openedStream:"opened",_closedStream:"closed",selectionChange:"selectionChange",valueChange:"valueChange"},exportAs:["matSelect"],features:[Z([{provide:_t,useExisting:a},{provide:ct,useExisting:a}]),Ke,Re],ngContentSelectors:ea,decls:11,vars:8,consts:[["fallbackOverlayOrigin","cdkOverlayOrigin","trigger",""],["panel",""],["cdk-overlay-origin","",1,"mat-mdc-select-trigger",3,"click"],[1,"mat-mdc-select-value"],[1,"mat-mdc-select-placeholder","mat-mdc-select-min-line"],[1,"mat-mdc-select-value-text"],[1,"mat-mdc-select-arrow-wrapper"],[1,"mat-mdc-select-arrow"],["viewBox","0 0 24 24","width","24px","height","24px","focusable","false","aria-hidden","true"],["d","M7 10l5 5 5-5z"],["cdk-connected-overlay","","cdkConnectedOverlayLockPosition","","cdkConnectedOverlayHasBackdrop","","cdkConnectedOverlayBackdropClass","cdk-overlay-transparent-backdrop",3,"backdropClick","attach","detach","cdkConnectedOverlayPanelClass","cdkConnectedOverlayScrollStrategy","cdkConnectedOverlayOrigin","cdkConnectedOverlayOpen","cdkConnectedOverlayPositions","cdkConnectedOverlayWidth"],[1,"mat-mdc-select-min-line"],["role","listbox","tabindex","-1",3,"keydown","ngClass"]],template:function(t,i){if(t&1){let n=V();L(Jt),s(0,"div",2,0),v("click",function(){return b(n),C(i.open())}),s(3,"div",3),G(4,ta,2,1,"span",4)(5,ra,3,1,"span",5),c(),s(6,"div",6)(7,"div",7),Pe(),s(8,"svg",8),y(9,"path",9),c()()()(),G(10,na,3,9,"ng-template",10),v("backdropClick",function(){return b(n),C(i.close())})("attach",function(){return b(n),C(i._onAttached())})("detach",function(){return b(n),C(i.close())})}if(t&2){let n=W(1);p(3),q("id",i._valueId),p(),fe(i.empty?4:5),p(6),M("cdkConnectedOverlayPanelClass",i._overlayPanelClass)("cdkConnectedOverlayScrollStrategy",i._scrollStrategy)("cdkConnectedOverlayOrigin",i._preferredOverlayOrigin||n)("cdkConnectedOverlayOpen",i.panelOpen)("cdkConnectedOverlayPositions",i._positions)("cdkConnectedOverlayWidth",i._overlayWidth)}},dependencies:[Me,Se,$e],styles:['.mat-mdc-select{display:inline-block;width:100%;outline:none;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;color:var(--mat-select-enabled-trigger-text-color, var(--mat-sys-on-surface));font-family:var(--mat-select-trigger-text-font, var(--mat-sys-body-large-font));line-height:var(--mat-select-trigger-text-line-height, var(--mat-sys-body-large-line-height));font-size:var(--mat-select-trigger-text-size, var(--mat-sys-body-large-size));font-weight:var(--mat-select-trigger-text-weight, var(--mat-sys-body-large-weight));letter-spacing:var(--mat-select-trigger-text-tracking, var(--mat-sys-body-large-tracking))}div.mat-mdc-select-panel{box-shadow:var(--mat-select-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12))}.mat-mdc-select-disabled{color:var(--mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-mdc-select-disabled .mat-mdc-select-placeholder{color:var(--mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-mdc-select-trigger{display:inline-flex;align-items:center;cursor:pointer;position:relative;box-sizing:border-box;width:100%}.mat-mdc-select-disabled .mat-mdc-select-trigger{-webkit-user-select:none;user-select:none;cursor:default}.mat-mdc-select-value{width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mat-mdc-select-value-text{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.mat-mdc-select-arrow-wrapper{height:24px;flex-shrink:0;display:inline-flex;align-items:center}.mat-form-field-appearance-fill .mdc-text-field--no-label .mat-mdc-select-arrow-wrapper{transform:none}.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-invalid .mat-mdc-select-arrow,.mat-form-field-invalid:not(.mat-form-field-disabled) .mat-mdc-form-field-infix::after{color:var(--mat-select-invalid-arrow-color, var(--mat-sys-error))}.mat-mdc-select-arrow{width:10px;height:5px;position:relative;color:var(--mat-select-enabled-arrow-color, var(--mat-sys-on-surface-variant))}.mat-mdc-form-field.mat-focused .mat-mdc-select-arrow{color:var(--mat-select-focused-arrow-color, var(--mat-sys-primary))}.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-disabled .mat-mdc-select-arrow{color:var(--mat-select-disabled-arrow-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-mdc-select-arrow svg{fill:currentColor;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}@media(forced-colors: active){.mat-mdc-select-arrow svg{fill:CanvasText}.mat-mdc-select-disabled .mat-mdc-select-arrow svg{fill:GrayText}}div.mat-mdc-select-panel{width:100%;max-height:275px;outline:0;overflow:auto;padding:8px 0;border-radius:4px;box-sizing:border-box;position:static;background-color:var(--mat-select-panel-background-color, var(--mat-sys-surface-container))}@media(forced-colors: active){div.mat-mdc-select-panel{outline:solid 1px}}.cdk-overlay-pane:not(.mat-mdc-select-panel-above) div.mat-mdc-select-panel{border-top-left-radius:0;border-top-right-radius:0;transform-origin:top center}.mat-mdc-select-panel-above div.mat-mdc-select-panel{border-bottom-left-radius:0;border-bottom-right-radius:0;transform-origin:bottom center}div.mat-mdc-select-panel .mat-mdc-option{--mdc-list-list-item-container-color: var(--mat-select-panel-background-color)}.mat-mdc-select-placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1);color:var(--mat-select-placeholder-text-color, var(--mat-sys-on-surface-variant))}.mat-form-field-no-animations .mat-mdc-select-placeholder,._mat-animation-noopable .mat-mdc-select-placeholder{transition:none}.mat-form-field-hide-placeholder .mat-mdc-select-placeholder{color:rgba(0,0,0,0);-webkit-text-fill-color:rgba(0,0,0,0);transition:none;display:block}.mat-mdc-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper{cursor:pointer}.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mat-mdc-floating-label{max-width:calc(100% - 18px)}.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mdc-floating-label--float-above{max-width:calc(100%/0.75 - 24px)}.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-notched-outline__notch{max-width:calc(100% - 60px)}.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-text-field--label-floating .mdc-notched-outline__notch{max-width:calc(100% - 24px)}.mat-mdc-select-min-line:empty::before{content:" ";white-space:pre;width:1px;display:inline-block;visibility:hidden}.mat-form-field-appearance-fill .mat-mdc-select-arrow-wrapper{transform:var(--mat-select-arrow-transform, translateY(-8px))}'],encapsulation:2,data:{animation:[oa.transformPanel]},changeDetection:0})}return a})();var ie=(m=>(m.Feca="Feca",m.Osamodas="Osamodas",m.Enutrof="Enutrof",m.Sram="Sram",m.Xelor="Xelor",m.Ecaflip="Ecaflip",m.Eniripsa="Eniripsa",m.Iop="Iop",m.Cra="Cra",m.Sadida="Sadida",m.Sacrieur="Sacrieur",m.Pandawa="Pandawa",m.Roublard="Roublard",m.Zobal="Zobal",m.Steamer="Steamer",m.Eliotrope="Eliotrope",m.Huppermage="Huppermage",m.Ouginak="Ouginak",m.Forgelance="Forgelance",m))(ie||{});function At(a){let r=_e(()=>a());return ma(r)?new Proxy(a,{get(e,t){return t in r?(Ne(e[t])||Object.defineProperty(e,t,{value:N(()=>e()[t]),configurable:!0}),At(e[t])):e[t]}}):a}var da=[WeakSet,WeakMap,Promise,Date,Error,RegExp,ArrayBuffer,DataView,Function];function ma(a){if(a===null||typeof a!="object"||pa(a))return!1;let r=Object.getPrototypeOf(a);if(r===Object.prototype)return!0;for(;r&&r!==Object.prototype;){if(da.includes(r.constructor))return!1;r=Object.getPrototypeOf(r)}return r===Object.prototype}function pa(a){return typeof a?.[Symbol.iterator]=="function"}var ua=new WeakMap,_=Symbol("STATE_SOURCE");function re(a,...r){a[_].update(e=>r.reduce((t,i)=>d(d({},t),typeof i=="function"?i(t):i),e)),ga(a)}function ha(a){return a[_]()}function fa(a){return ua.get(a[_])||[]}function ga(a){let r=fa(a);for(let e of r){let t=_e(()=>ha(a));e(t)}}function Tt(...a){let r=[...a],e=typeof r[0]=="function"?{}:r.shift(),t=r;return(()=>{class n{constructor(){let f=t.reduce((z,Qt)=>Qt(z),_a()),{stateSignals:u,props:Kt,methods:Gt,hooks:qt}=f,ke=d(d(d({},u),Kt),Gt);this[_]=f[_];for(let z of Reflect.ownKeys(ke))this[z]=ke[z];let{onInit:Ie,onDestroy:De}=qt;Ie&&Ie(),De&&o(Ve).onDestroy(De)}static \u0275fac=function(u){return new(u||n)};static \u0275prov=Fe({token:n,factory:n.\u0275fac,providedIn:e.providedIn||null})}return n})()}function _a(){return{[_]:Be({}),stateSignals:{},props:{},methods:{},hooks:{}}}function xe(a){return r=>{let e=a(d(d(d({[_]:r[_]},r.stateSignals),r.props),r.methods));return Reflect.ownKeys(e),R(d({},r),{props:d(d({},r.props),e)})}}function Et(a){return xe(a)}function Ft(a){return r=>{let e=a(d(d(d({[_]:r[_]},r.stateSignals),r.props),r.methods));return Reflect.ownKeys(e),R(d({},r),{methods:d(d({},r.methods),e)})}}function Rt(a){return r=>{let e=typeof a=="function"?a():a,t=Reflect.ownKeys(e);r[_].update(n=>d(d({},n),e));let i=t.reduce((n,l)=>{let f=N(()=>r[_]()[l]);return R(d({},n),{[l]:At(f)})},{});return R(d({},r),{stateSignals:d(d({},r.stateSignals),i)})}}var ya={challengers:[]},S=Tt(Rt(ya),xe(({challengers:a})=>({challengers:a})),Et(({challengers:a})=>({ranking:N(()=>[...a()].sort((e,t)=>t.fails-e.fails))})),Ft(a=>({addChallenger(r,e){let t=[...a.challengers()];t.find(i=>i.name===r)||!r.trim()||(t.push({name:r,fails:0,class:e}),re(a,{challengers:t}))},removeChallenger(r){let e=[...a.challengers().filter(t=>t.name!==r)];re(a,{challengers:e})},setScore(r,e){let t=[...a.challengers()];t.map(i=>{i.name===r&&(i.fails=i.fails+e),re(a,{challengers:t})})}})));function va(a,r){if(a&1&&(s(0,"mat-option",4),h(1),c()),a&2){let e=r.$implicit;M("value",e[0]),p(),qe(" ",e[1]," ")}}var ne=class a{store=o(S);classes=Object.entries(ie);static \u0275fac=function(e){return new(e||a)};static \u0275cmp=g({type:a,selectors:[["app-add-challenger"]],decls:14,vars:0,consts:[["challengerName",""],["challengerClass",""],["appearance","outline"],["matInput","","type","text"],[3,"value"],["mat-raised-button","",3,"click"]],template:function(e,t){if(e&1){let i=V();s(0,"mat-form-field",2)(1,"mat-label"),h(2,"Ajouter un Challenger"),c(),y(3,"input",3,0),c(),s(5,"mat-form-field",2)(6,"mat-label"),h(7,"Classe"),c(),s(8,"mat-select",null,1),X(10,va,2,2,"mat-option",4,Q),c()(),s(12,"button",5),v("click",function(){b(i);let l=W(4),f=W(9);return t.store.addChallenger(l.value,f.value),C(l.value="")}),h(13,` Ajouter
`),c()}e&2&&(p(10),Y(t.classes))},dependencies:[vt,Ct,bt,gt,Dt,B,ee],styles:["[_nghost-%COMP%]{display:flex;padding:1rem 3rem;gap:1rem;align-items:center}[_nghost-%COMP%]   button[_ngcontent-%COMP%]{margin-bottom:20px}"]})};var ba=["*"];var Ca=[[["","mat-card-avatar",""],["","matCardAvatar",""]],[["mat-card-title"],["mat-card-subtitle"],["","mat-card-title",""],["","mat-card-subtitle",""],["","matCardTitle",""],["","matCardSubtitle",""]],"*"],Ma=["[mat-card-avatar], [matCardAvatar]",`mat-card-title, mat-card-subtitle,
      [mat-card-title], [mat-card-subtitle],
      [matCardTitle], [matCardSubtitle]`,"*"],Sa=new E("MAT_CARD_CONFIG"),Pt=(()=>{class a{appearance;constructor(){let e=o(Sa,{optional:!0});this.appearance=e?.appearance||"raised"}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=g({type:a,selectors:[["mat-card"]],hostAttrs:[1,"mat-mdc-card","mdc-card"],hostVars:4,hostBindings:function(t,i){t&2&&j("mat-mdc-card-outlined",i.appearance==="outlined")("mdc-card--outlined",i.appearance==="outlined")},inputs:{appearance:"appearance"},exportAs:["matCard"],ngContentSelectors:ba,decls:1,vars:0,template:function(t,i){t&1&&(L(),w(0))},styles:['.mat-mdc-card{display:flex;flex-direction:column;box-sizing:border-box;position:relative;border-style:solid;border-width:0;background-color:var(--mdc-elevated-card-container-color, var(--mat-sys-surface-container-low));border-color:var(--mdc-elevated-card-container-color, var(--mat-sys-surface-container-low));border-radius:var(--mdc-elevated-card-container-shape, var(--mat-sys-corner-medium));box-shadow:var(--mdc-elevated-card-container-elevation, var(--mat-sys-level1))}.mat-mdc-card::after{position:absolute;top:0;left:0;width:100%;height:100%;border:solid 1px rgba(0,0,0,0);content:"";display:block;pointer-events:none;box-sizing:border-box;border-radius:var(--mdc-elevated-card-container-shape, var(--mat-sys-corner-medium))}.mat-mdc-card-outlined{background-color:var(--mdc-outlined-card-container-color, var(--mat-sys-surface));border-radius:var(--mdc-outlined-card-container-shape, var(--mat-sys-corner-medium));border-width:var(--mdc-outlined-card-outline-width, 1px);border-color:var(--mdc-outlined-card-outline-color, var(--mat-sys-outline-variant));box-shadow:var(--mdc-outlined-card-container-elevation, var(--mat-sys-level0))}.mat-mdc-card-outlined::after{border:none}.mdc-card__media{position:relative;box-sizing:border-box;background-repeat:no-repeat;background-position:center;background-size:cover}.mdc-card__media::before{display:block;content:""}.mdc-card__media:first-child{border-top-left-radius:inherit;border-top-right-radius:inherit}.mdc-card__media:last-child{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.mat-mdc-card-actions{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;min-height:52px;padding:8px}.mat-mdc-card-title{font-family:var(--mat-card-title-text-font, var(--mat-sys-title-large-font));line-height:var(--mat-card-title-text-line-height, var(--mat-sys-title-large-line-height));font-size:var(--mat-card-title-text-size, var(--mat-sys-title-large-size));letter-spacing:var(--mat-card-title-text-tracking, var(--mat-sys-title-large-tracking));font-weight:var(--mat-card-title-text-weight, var(--mat-sys-title-large-weight))}.mat-mdc-card-subtitle{color:var(--mat-card-subtitle-text-color, var(--mat-sys-on-surface));font-family:var(--mat-card-subtitle-text-font, var(--mat-sys-title-medium-font));line-height:var(--mat-card-subtitle-text-line-height, var(--mat-sys-title-medium-line-height));font-size:var(--mat-card-subtitle-text-size, var(--mat-sys-title-medium-size));letter-spacing:var(--mat-card-subtitle-text-tracking, var(--mat-sys-title-medium-tracking));font-weight:var(--mat-card-subtitle-text-weight, var(--mat-sys-title-medium-weight))}.mat-mdc-card-title,.mat-mdc-card-subtitle{display:block;margin:0}.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-title,.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-subtitle{padding:16px 16px 0}.mat-mdc-card-header{display:flex;padding:16px 16px 0}.mat-mdc-card-content{display:block;padding:0 16px}.mat-mdc-card-content:first-child{padding-top:16px}.mat-mdc-card-content:last-child{padding-bottom:16px}.mat-mdc-card-title-group{display:flex;justify-content:space-between;width:100%}.mat-mdc-card-avatar{height:40px;width:40px;border-radius:50%;flex-shrink:0;margin-bottom:16px;object-fit:cover}.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-subtitle,.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-title{line-height:normal}.mat-mdc-card-sm-image{width:80px;height:80px}.mat-mdc-card-md-image{width:112px;height:112px}.mat-mdc-card-lg-image{width:152px;height:152px}.mat-mdc-card-xl-image{width:240px;height:240px}.mat-mdc-card-subtitle~.mat-mdc-card-title,.mat-mdc-card-title~.mat-mdc-card-subtitle,.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-title,.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-subtitle,.mat-mdc-card-title-group .mat-mdc-card-title,.mat-mdc-card-title-group .mat-mdc-card-subtitle{padding-top:0}.mat-mdc-card-content>:last-child:not(.mat-mdc-card-footer){margin-bottom:0}.mat-mdc-card-actions-align-end{justify-content:flex-end}'],encapsulation:2,changeDetection:0})}return a})(),jt=(()=>{class a{static \u0275fac=function(t){return new(t||a)};static \u0275dir=k({type:a,selectors:[["mat-card-title"],["","mat-card-title",""],["","matCardTitle",""]],hostAttrs:[1,"mat-mdc-card-title"]})}return a})();var Vt=(()=>{class a{static \u0275fac=function(t){return new(t||a)};static \u0275dir=k({type:a,selectors:[["mat-card-content"]],hostAttrs:[1,"mat-mdc-card-content"]})}return a})(),Lt=(()=>{class a{static \u0275fac=function(t){return new(t||a)};static \u0275dir=k({type:a,selectors:[["mat-card-subtitle"],["","mat-card-subtitle",""],["","matCardSubtitle",""]],hostAttrs:[1,"mat-mdc-card-subtitle"]})}return a})(),Wt=(()=>{class a{align="start";static \u0275fac=function(t){return new(t||a)};static \u0275dir=k({type:a,selectors:[["mat-card-actions"]],hostAttrs:[1,"mat-mdc-card-actions","mdc-card__actions"],hostVars:2,hostBindings:function(t,i){t&2&&j("mat-mdc-card-actions-align-end",i.align==="end")},inputs:{align:"align"},exportAs:["matCardActions"]})}return a})(),Nt=(()=>{class a{static \u0275fac=function(t){return new(t||a)};static \u0275cmp=g({type:a,selectors:[["mat-card-header"]],hostAttrs:[1,"mat-mdc-card-header"],ngContentSelectors:Ma,decls:4,vars:0,consts:[[1,"mat-mdc-card-header-text"]],template:function(t,i){t&1&&(L(Ca),w(0),s(1,"div",0),w(2,1),c(),w(3,2))},encapsulation:2,changeDetection:0})}return a})();var Bt=(()=>{class a{static \u0275fac=function(t){return new(t||a)};static \u0275dir=k({type:a,selectors:[["","mat-card-image",""],["","matCardImage",""]],hostAttrs:[1,"mat-mdc-card-image","mdc-card__media"]})}return a})();var zt=(()=>{class a{static \u0275fac=function(t){return new(t||a)};static \u0275mod=he({type:a});static \u0275inj=ue({imports:[J,J]})}return a})();var oe=class a{transform(r){return`assets/classes/${xa(r)}.jpg`}static \u0275fac=function(e){return new(e||a)};static \u0275pipe=He({name:"classImage",type:a,pure:!0})};function xa(a){switch(a){case"Feca":return 1;case"Osamodas":return 2;case"Enutrof":return 3;case"Sram":return 4;case"Xelor":return 5;case"Ecaflip":return 6;case"Eniripsa":return 7;case"Iop":return 8;case"Cra":return 9;case"Sadida":return 10;case"Sacrieur":return 11;case"Pandawa":return 12;case"Roublard":return 13;case"Zobal":return 14;case"Steamer":return 15;case"Eliotrope":return 16;case"Huppermage":return 17;case"Ouginak":return 18;case"Forgelance":return 19}}var le=class a{store=o(S);challenger=Le.required();static \u0275fac=function(e){return new(e||a)};static \u0275cmp=g({type:a,selectors:[["app-challenger"]],inputs:{challenger:[1,"challenger"]},decls:16,vars:7,consts:[["appearance","outlined",1,"example-card"],["mat-card-image","",3,"src"],["mat-button","",3,"click"]],template:function(e,t){e&1&&(s(0,"mat-card",0)(1,"mat-card-header")(2,"mat-card-title"),h(3),c(),s(4,"mat-card-subtitle"),h(5),c()(),y(6,"img",1),Xe(7,"classImage"),s(8,"mat-card-content")(9,"p"),h(10),c()(),s(11,"mat-card-actions")(12,"button",2),v("click",function(){return t.store.setScore(t.challenger().name,1)}),h(13,"+1"),c(),s(14,"button",2),v("click",function(){return t.store.setScore(t.challenger().name,-1)}),h(15,"-1"),c()()()),e&2&&(p(3),F(t.challenger().name),p(2),F(t.challenger().class),p(),M("src",Ye(7,5,t.challenger().class),ze),p(4),Qe(" A rat\xE9 ",t.challenger().fails," ",t.challenger().fails===1?"challenge":"challenges"," "))},dependencies:[zt,Pt,Wt,Vt,Nt,Bt,Lt,jt,oe,ee],styles:["[_nghost-%COMP%]{display:block;width:15rem}"]})};var se=class a{store=o(S);static \u0275fac=function(e){return new(e||a)};static \u0275cmp=g({type:a,selectors:[["app-podium"]],decls:0,vars:0,template:function(e,t){},encapsulation:2})};function Oa(a,r){if(a&1&&y(0,"app-challenger",2),a&2){let e=r.$implicit;M("challenger",e)}}var Ht=class a{store=o(S);challengers=this.store.challengers;static \u0275fac=function(e){return new(e||a)};static \u0275cmp=g({type:a,selectors:[["app-challenge-failer"]],features:[Z([S])],decls:6,vars:0,consts:[[1,"container"],[1,"challengers-container"],[3,"challenger"]],template:function(e,t){e&1&&(y(0,"app-add-challenger"),s(1,"div",0)(2,"div",1),X(3,Oa,1,1,"app-challenger",2,Q),c(),y(5,"app-podium"),c()),e&2&&(p(3),Y(t.challengers()))},dependencies:[le,ne,se],styles:[".challengers-container[_ngcontent-%COMP%]{padding:1rem 3rem;display:flex;gap:1rem}"]})};export{Ht as ChallengeFailerComponent};
