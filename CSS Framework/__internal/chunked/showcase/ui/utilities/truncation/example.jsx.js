var SLDS=SLDS||{};SLDS["__internal/chunked/showcase/ui/utilities/truncation/example.jsx.js"]=function(e){function t(t){for(var l,s,r=t[0],o=t[1],d=t[2],c=0,h=[];c<r.length;c++)s=r[c],n[s]&&h.push(n[s][0]),n[s]=0;for(l in o)Object.prototype.hasOwnProperty.call(o,l)&&(e[l]=o[l]);for(u&&u(t);h.length;)h.shift()();return i.push.apply(i,d||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],l=!0,r=1;r<a.length;r++){var o=a[r];0!==n[o]&&(l=!1)}l&&(i.splice(t--,1),e=s(s.s=a[0]))}return e}var l={},n={10:0,7:0,8:0,15:0,16:0,22:0,32:0,42:0,45:0,58:0,62:0,63:0,64:0,67:0,71:0,75:0,77:0,80:0,84:0,87:0,88:0,93:0,99:0,100:0,104:0,106:0,114:0,122:0,124:0,125:0,126:0,127:0,128:0,129:0,138:0,144:0,152:0,163:0,167:0,170:0,171:0,180:0,183:0,184:0},i=[];function s(t){if(l[t])return l[t].exports;var a=l[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=l,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:a})},s.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/assets/scripts/bundle/";var r=this.webpackJsonpSLDS___internal_chunked_showcase=this.webpackJsonpSLDS___internal_chunked_showcase||[],o=r.push.bind(r);r.push=t,r=r.slice();for(var d=0;d<r.length;d++)t(r[d]);var u=o;return i.push([83,0]),a()}({0:function(e,t){e.exports=React},83:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.examples=t.List=t.ListItem=void 0;var l=i(a(0)),n=i(a(1));function i(e){return e&&e.__esModule?e:{default:e}}var s=t.ListItem=function(e){return l.default.createElement("li",{className:(0,n.default)("slds-list__item slds-m-right_large slds-grid",e.className)},l.default.createElement("span",null,"To:"),l.default.createElement("span",{className:"slds-m-left_xx-small slds-truncate",title:e.title},e.children),l.default.createElement("span",{className:"slds-m-left_xx-small slds-no-flex"}," + 44 more"))},r=t.List=function(e){return l.default.createElement("ul",null,l.default.createElement(s,{title:"Lei Chan",className:"slds-truncate_container_"+e.width},l.default.createElement("a",{href:"javascript:void(0);"},"Lei Chan")),l.default.createElement(s,{title:"Lei Chan with Long Name",className:"slds-truncate_container_"+e.width},l.default.createElement("a",{href:"javascript:void(0);"},"Lei Chan with Long Name")),l.default.createElement(s,{title:"Lei Chan with Long Name that might go on for quite some distance futher than you might expect",className:"slds-truncate_container_"+e.width},l.default.createElement("a",{href:"javascript:void(0);"},"Lei Chan with Long Name that might go on for quite some distance futher than you might expect")))};t.examples=[{id:"fluid",label:"Single line",element:l.default.createElement("div",{className:"slds-size_1-of-2"},l.default.createElement("p",{className:"slds-truncate",title:"Long text field with many lines and truncation will look like this. Even though the text might go on for ages and ages."},"Long text field with many lines and truncation will look like this. Even though the text might go on for ages and ages."))},{id:"nested-grids",label:"Single line within nested grid containers",element:l.default.createElement("div",{className:"slds-grid",style:{width:"200px"}},l.default.createElement("div",{className:"slds-grid slds-has-flexi-truncate"},l.default.createElement("p",{className:"slds-truncate",title:"Long text field with many lines and truncation will look like this. Even though the text might go on for ages and ages."},"Long text field with many lines and truncation will look like this. Even though the text might go on for ages and ages.")))},{id:"25%",label:"Max-width 25%",element:l.default.createElement(r,{width:"25"})},{id:"33%",label:"Max-width 33%",element:l.default.createElement(r,{width:"33"})},{id:"50%",label:"Max-width 50%",element:l.default.createElement(r,{width:"50"})},{id:"66%",label:"Max-width 66%",element:l.default.createElement(r,{width:"66"})},{id:"75%",label:"Max-width 75%",element:l.default.createElement(r,{width:"75"})}]}});