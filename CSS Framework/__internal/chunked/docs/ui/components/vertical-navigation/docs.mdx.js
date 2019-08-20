var SLDS=SLDS||{};SLDS["__internal/chunked/docs/ui/components/vertical-navigation/docs.mdx.js"]=function(e){function t(t){for(var a,d,i=t[0],s=t[1],c=t[2],o=0,m=[];o<i.length;o++)d=i[o],n[d]&&m.push(n[d][0]),n[d]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);for(u&&u(t);m.length;)m.shift()();return r.push.apply(r,c||[]),l()}function l(){for(var e,t=0;t<r.length;t++){for(var l=r[t],a=!0,i=1;i<l.length;i++){var s=l[i];0!==n[s]&&(a=!1)}a&&(r.splice(t--,1),e=d(d.s=l[0]))}return e}var a={},n={75:0},r=[];function d(t){if(a[t])return a[t].exports;var l=a[t]={i:t,l:!1,exports:{}};return e[t].call(l.exports,l,l.exports,d),l.l=!0,l.exports}d.m=e,d.c=a,d.d=function(e,t,l){d.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:l})},d.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},d.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return d.d(t,"a",t),t},d.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},d.p="/assets/scripts/bundle/";var i=this.webpackJsonpSLDS___internal_chunked_docs=this.webpackJsonpSLDS___internal_chunked_docs||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var u=s;return r.push([372,0]),l()}({0:function(e,t){e.exports=React},3:function(e,t){e.exports=JSBeautify},371:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.examples=t.NavVerticalRadioSet=t.Context=t.NavVerticalItemRadio=t.NavVerticalFieldset=void 0;var a=d(l(0)),n=l(93),r=d(l(2));function d(e){return e&&e.__esModule?e:{default:e}}var i=t.NavVerticalFieldset=function(e){return a.default.createElement("fieldset",{className:(0,r.default)("slds-nav-vertical",{"slds-nav-vertical_shade":e.shaded},{"slds-nav-vertical_compact":e.compact})},a.default.createElement("legend",{className:"slds-nav-vertical__title"},"Reports"),e.children)},s=t.NavVerticalItemRadio=function(e){return a.default.createElement("span",{className:(0,r.default)("slds-nav-vertical__item",e.className)},a.default.createElement("input",{defaultChecked:e.checked,type:"radio",id:e.id,value:e.id,name:e.name||"unique-id-example"}),a.default.createElement("label",{className:"slds-nav-vertical__action",htmlFor:e.id},a.default.createElement("span",{className:"slds-nav-vertical_radio-faux"},e.children)))},c=(t.Context=function(e){return a.default.createElement("div",{className:"demo-only",style:{width:"320px"}},e.children)},t.NavVerticalRadioSet=function(e){return a.default.createElement(n.NavVerticalSection,{headerId:"entity-header",title:"Reports",isNavVerticalRadioSet:!0},a.default.createElement(i,null,a.default.createElement(s,{checked:!0,id:"unique-id-01-recent"},"Recent"),a.default.createElement(s,{id:"unique-id-01-created-by-me"},"Created by Me"),a.default.createElement(s,{id:"unique-id-01-private-reports"},"Private Reports"),a.default.createElement(s,{id:"unique-id-01-public-reports"},"Public Reports"),a.default.createElement(s,{id:"unique-id-01-all-reports"},"All Reports")))});t.default=a.default.createElement(c,null);t.examples=[{id:"compact",label:"Compact",element:a.default.createElement(n.NavVerticalSection,{headerId:"entity-header",title:"Reports",isNavVerticalRadioSet:!0},a.default.createElement(i,{compact:!0},a.default.createElement(s,{checked:!0,id:"unique-id-02-recent",name:"unique-id-compact"},"Recent"),a.default.createElement(s,{id:"unique-id-02-created-by-me",name:"unique-id-compact"},"Created by Me"),a.default.createElement(s,{id:"unique-id-02-private-reports",name:"unique-id-compact"},"Private Reports"),a.default.createElement(s,{id:"unique-id-02-public-reports",name:"unique-id-compact"},"Public Reports"),a.default.createElement(s,{id:"unique-id-02-all-reports",name:"unique-id-compact"},"All Reports")))},{id:"shade",label:"Shaded Background",element:a.default.createElement("div",{className:"demo-only",style:{backgroundColor:"#FAFAFB"}},a.default.createElement(n.NavVerticalSection,{headerId:"entity-header",title:"Reports",isNavVerticalRadioSet:!0},a.default.createElement(i,{shaded:!0},a.default.createElement(s,{checked:!0,id:"unique-id-03-recent",name:"unique-id-shade"},"Recent"),a.default.createElement(s,{id:"unique-id-03-created-by-me",name:"unique-id-shade"},"Created by Me"),a.default.createElement(s,{id:"unique-id-03-private-reports",name:"unique-id-shade"},"Private Reports"),a.default.createElement(s,{id:"unique-id-03-public-reports",name:"unique-id-shade"},"Public Reports"),a.default.createElement(s,{id:"unique-id-03-all-reports",name:"unique-id-shade"},"All Reports"))))}]},372:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getContents=t.getElement=void 0;var a=l(0),n=(o(a),l(4)),r=o(n),d=o(l(5)),i=l(1),s=u(l(93)),c=u(l(371));function u(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&(t[l]=e[l]);return t.default=e,t}function o(e){return e&&e.__esModule?e:{default:e}}var m=n.factories.a,f=n.factories.h2,p=n.factories.h3,E=n.factories.h4,h=n.factories.p,v=t.getElement=function(){return(0,a.createElement)(r.default,{},(0,a.createElement)("div",{className:"doc lead"},"Navigation represents a list of links that either take the user to another page or parts of the page the user is in."),f({id:"List"},"List"),(0,a.createElement)(d.default,null,s.default),p({id:"States"},"States"),E({id:"Collapsed"},"Collapsed"),(0,a.createElement)(d.default,null,(0,i.getDisplayElementById)(s.states,"collapsed")),E({id:"Expanded"},"Expanded"),(0,a.createElement)(d.default,null,(0,i.getDisplayElementById)(s.states,"expanded")),p({id:"Examples"},"Examples"),E({id:"Compact"},"Compact"),(0,a.createElement)(d.default,null,(0,i.getDisplayElementById)(s.examples,"compact")),E({id:"Items-with-Icons"},"Items with Icons"),(0,a.createElement)(d.default,null,(0,i.getDisplayElementById)(s.examples,"items-with-icons")),E({id:"Items-with-Notifications"},"Items with Notifications"),(0,a.createElement)(d.default,null,(0,i.getDisplayElementById)(s.examples,"items-with-notifications")),E({id:"Shaded-Background"},"Shaded Background"),(0,a.createElement)(d.default,null,(0,i.getDisplayElementById)(s.examples,"shade")),E({id:"Quickfind"},"Quickfind"),(0,a.createElement)(d.default,null,(0,i.getDisplayElementById)(s.examples,"quickfind")),f({id:"Radio-Group"},"Radio Group"),h({},"The radio group variant should be used when your vertical navigation acts as a selection or filter on content, like within a modal. If the vertical navigation takes the user to another page or part of a page, use the standard List version. If your content changes entirely whenever options in the navigation are selected, instead of filtering one master list, then use the ",m({href:"/components/vertical-tabs"},"Vertical Tabs")," component."),(0,a.createElement)(d.default,null,c.default),p({id:"Examples-2"},"Examples"),E({id:"Compact-2"},"Compact"),(0,a.createElement)(d.default,null,(0,i.getDisplayElementById)(c.examples,"compact")),E({id:"Shaded-Background-2"},"Shaded Background"),(0,a.createElement)(d.default,null,(0,i.getDisplayElementById)(c.examples,"shade")))};t.getContents=function(){return(0,n.createTableOfContents)(v())}},93:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.examples=t.states=t.NavVerticalSection=t.NavVerticalItem=t.NavVertical=void 0;var a=m(l(0)),n=l(6),r=l(11),d=l(12),i=l(16),s=m(l(9)),c=m(l(2)),u=l(14),o=l(1);function m(e){return e&&e.__esModule?e:{default:e}}var f="entity-header",p="folder-header",E=t.NavVertical=function(e){return a.default.createElement("nav",{className:(0,c.default)("slds-nav-vertical",{"slds-nav-vertical_compact":e.isCompact,"slds-nav-vertical_shade":e.isShaded}),"aria-label":"Sub page"},e.children)};E.propTypes={className:n.PropTypes.string,children:n.PropTypes.node,isCompact:n.PropTypes.bool,isShaded:n.PropTypes.bool};var h=t.NavVerticalItem=function(e){return a.default.createElement("li",{className:(0,c.default)("slds-nav-vertical__item",{"slds-is-active":e.active},e.className)},a.default.createElement("a",{href:"javascript:void(0);",className:"slds-nav-vertical__action","aria-current":e.active?"page":null},e.children))};h.propTypes={active:n.PropTypes.bool,className:n.PropTypes.string,children:n.PropTypes.node};var v=t.NavVerticalSection=function(e){var t=e.children,l=e.className,n=e.collapsed,r=e.expanded,d=e.headerId,i=e.isNavVerticalRadioSet,o=e.listId,m=e.title,f=n||r,p=null;return p=i?a.default.createElement("div",null,t):a.default.createElement("ul",{"aria-describedby":d},t),a.default.createElement("div",{className:(0,c.default)(f?"slds-nav-vertical__overflow":"slds-nav-vertical__section",l)},!f&&!i&&m&&a.default.createElement("h2",{id:d,className:"slds-nav-vertical__title"},m),f&&a.default.createElement(u.Button,{className:"slds-button_reset slds-nav-vertical__action slds-nav-vertical__action_overflow","aria-controls":o,"aria-expanded":r?"true":"false"},a.default.createElement(s.default,{className:"slds-button__icon slds-button__icon_left",sprite:"utility",symbol:"chevronright"}),a.default.createElement("span",{className:"slds-nav-vertical__action-text"},n?"Show More":"Show Less",a.default.createElement("span",{className:"slds-assistive-text"},m))),f?a.default.createElement("div",{id:o,className:(0,c.default)({"slds-hide":n,"slds-show":r})},p):p)};v.defaultProps={headerId:"header-id-1"},v.propTypes={children:n.PropTypes.node,className:n.PropTypes.string,collapsed:(0,o.IsDependentOn)("listId",n.PropTypes.bool),expanded:(0,o.IsDependentOn)("listId",n.PropTypes.bool),headerId:n.PropTypes.string.isRequired,isNavVerticalRadioSet:n.PropTypes.bool,listId:n.PropTypes.string,title:n.PropTypes.string},t.default=a.default.createElement("div",{className:"demo-only",style:{width:"320px"}},a.default.createElement(E,null,a.default.createElement(v,{headerId:f,title:"Reports"},a.default.createElement(h,{active:!0},"Recent"),a.default.createElement(h,null,"Created by Me"),a.default.createElement(h,null,"Private Reports"),a.default.createElement(h,null,"Public Reports"),a.default.createElement(h,null,"All Reports")),a.default.createElement(v,{headerId:p,title:"Folders"},a.default.createElement(h,null,"Created by Me"),a.default.createElement(h,null,"Shared with Me"),a.default.createElement(h,null,"All Reports"))));t.states=[{id:"collapsed",label:"Collapsed",element:a.default.createElement("div",{className:"demo-only",style:{width:"320px"}},a.default.createElement(E,null,a.default.createElement(v,{headerId:f,title:"Reports"},a.default.createElement(h,{active:!0},"Recent"),a.default.createElement(h,null,"Created by Me"),a.default.createElement(h,null,"Private Reports"),a.default.createElement(h,null,"Public Reports"),a.default.createElement(h,null,"All Reports")),a.default.createElement(v,{headerId:p,title:"Folders"},a.default.createElement(h,null,"Created by Me"),a.default.createElement(h,null,"Shared with Me")),a.default.createElement(v,{title:"Folders",collapsed:!0,listId:"search-results",headerId:p},a.default.createElement(h,null,"Overflow Item One"),a.default.createElement(h,null,"Overflow Item Two"),a.default.createElement(h,null,"Overflow Item Three"))))},{id:"expanded",label:"Expanded",element:a.default.createElement("div",{className:"demo-only",style:{width:"320px"}},a.default.createElement(E,null,a.default.createElement(v,{headerId:f,title:"Reports"},a.default.createElement(h,{active:!0},"Recent"),a.default.createElement(h,null,"Created by Me"),a.default.createElement(h,null,"Private Reports"),a.default.createElement(h,null,"Public Reports"),a.default.createElement(h,null,"All Reports")),a.default.createElement(v,{headerId:p,title:"Folders"},a.default.createElement(h,null,"Created by Me"),a.default.createElement(h,null,"Shared with Me")),a.default.createElement(v,{title:"Folders",expanded:!0,listId:"search-results",headerId:p},a.default.createElement(h,null,"Overflow Item One"),a.default.createElement(h,null,"Overflow Item Two"),a.default.createElement(h,null,"Overflow Item Three"))))}],t.examples=[{id:"compact",label:"Compact",element:a.default.createElement("div",{className:"demo-only",style:{width:"320px"}},a.default.createElement(E,{isCompact:!0},a.default.createElement(v,{headerId:f,title:"Reports"},a.default.createElement(h,{active:!0},"Recent"),a.default.createElement(h,null,"Created by Me"),a.default.createElement(h,null,"Private Reports"),a.default.createElement(h,null,"Public Reports"),a.default.createElement(h,null,"All Reports")),a.default.createElement(v,{headerId:p,title:"Folders"},a.default.createElement(h,null,"Created by Me"),a.default.createElement(h,null,"Shared with Me"),a.default.createElement(h,null,"All Reports"))))},{id:"items-with-icons",label:"Items with icon",element:a.default.createElement("div",{className:"demo-only",style:{width:"320px"}},a.default.createElement(E,null,a.default.createElement(v,{headerId:f,title:"Reports"},a.default.createElement(h,{active:!0},"Recent"),a.default.createElement(h,null,"Created by Me"),a.default.createElement(h,null,"Private Reports"),a.default.createElement(h,null,"Public Reports"),a.default.createElement(h,null,"All Reports")),a.default.createElement(v,{headerId:p,title:"Folders"},a.default.createElement(h,null,a.default.createElement(r.UtilityIcon,{symbol:"open_folder",containerClassName:"slds-line-height_reset",className:"slds-icon-text-default slds-icon_x-small slds-m-right_x-small",assistiveText:"Folder",title:"Folder"}),"Created by Me"),a.default.createElement(h,null,a.default.createElement(r.UtilityIcon,{symbol:"open_folder",containerClassName:"slds-line-height_reset",className:"slds-icon-text-default slds-icon_x-small slds-m-right_x-small",assistiveText:"Folder",title:"Folder"}),"Shared with Me"),a.default.createElement(h,null,"All Reports"))))},{id:"items-with-notifications",label:"Items with notification",element:a.default.createElement("div",{className:"demo-only",style:{width:"320px"}},a.default.createElement(E,null,a.default.createElement(v,{headerId:f,title:"Reports"},a.default.createElement(h,{active:!0},"Recent",a.default.createElement("span",{className:"slds-badge slds-col_bump-left"},a.default.createElement("span",{className:"slds-assistive-text"},":"),"3",a.default.createElement("span",{className:"slds-assistive-text"},"New Items"))),a.default.createElement(h,null,"Created by Me"),a.default.createElement(h,null,"Private Reports"),a.default.createElement(h,null,"Public Reports"),a.default.createElement(h,null,"All Reports")),a.default.createElement(v,{headerId:p,title:"Folders"},a.default.createElement(h,null,"Created by Me"),a.default.createElement(h,null,"Shared with Me"),a.default.createElement(h,null,"All Reports"))))},{id:"shade",label:"Shaded Background",element:a.default.createElement("div",{className:"demo-only",style:{width:"320px",backgroundColor:"#FAFAFB"}},a.default.createElement(E,{isShaded:!0},a.default.createElement(v,{headerId:f,title:"Reports"},a.default.createElement(h,{active:!0},"Recent"),a.default.createElement(h,null,"Created by Me"),a.default.createElement(h,null,"Private Reports"),a.default.createElement(h,null,"Public Reports"),a.default.createElement(h,null,"All Reports")),a.default.createElement(v,{headerId:p,title:"Folders"},a.default.createElement(h,null,"Created by Me"),a.default.createElement(h,null,"Shared with Me"),a.default.createElement(h,null,"All Reports"))))},{id:"quickfind",label:"Quickfind",element:a.default.createElement("div",{className:"demo-only",style:{width:"320px"}},a.default.createElement(E,null,a.default.createElement(d.FormElement,{formElementClassName:"slds-p-horizontal_large",labelContent:"Filter navigation items",inputId:"input-id-01",hasLeftIcon:!0,hasHiddenLabel:!0},a.default.createElement(r.UtilityIcon,{className:"slds-input__icon slds-input__icon_right slds-icon-text-default",symbol:"search",title:!1,assistiveText:!1}),a.default.createElement(i.Input,{type:"search",id:"input-id-01",placeholder:"Quick Find"})),a.default.createElement(v,{headerId:f,title:"Reports"},a.default.createElement(h,{active:!0},"Recent"),a.default.createElement(h,null,"Created by Me"),a.default.createElement(h,null,"Private Reports"),a.default.createElement(h,null,"Public Reports"),a.default.createElement(h,null,"All Reports")),a.default.createElement(v,{headerId:p,title:"Folders"},a.default.createElement(h,null,"Created by Me"),a.default.createElement(h,null,"Shared with Me"))))}]}});