var SLDS=SLDS||{};SLDS["__internal/chunked/showcase/ui/components/pills/base/example.jsx.js"]=function(e){function t(t){for(var a,s,c=t[0],i=t[1],o=t[2],d=0,f=[];d<c.length;d++)s=c[d],n[s]&&f.push(n[s][0]),n[s]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);for(u&&u(t);f.length;)f.shift()();return r.push.apply(r,o||[]),l()}function l(){for(var e,t=0;t<r.length;t++){for(var l=r[t],a=!0,c=1;c<l.length;c++){var i=l[c];0!==n[i]&&(a=!1)}a&&(r.splice(t--,1),e=s(s.s=l[0]))}return e}var a={},n={117:0,7:0,8:0,15:0,16:0,22:0,32:0,42:0,45:0,58:0,62:0,63:0,64:0,67:0,71:0,75:0,77:0,80:0,84:0,87:0,88:0,93:0,99:0,100:0,104:0,106:0,114:0,122:0,124:0,125:0,126:0,127:0,128:0,129:0,138:0,144:0,152:0,163:0,167:0,170:0,171:0,180:0,183:0,184:0},r=[];function s(t){if(a[t])return a[t].exports;var l=a[t]={i:t,l:!1,exports:{}};return e[t].call(l.exports,l,l.exports,s),l.l=!0,l.exports}s.m=e,s.c=a,s.d=function(e,t,l){s.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:l})},s.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/assets/scripts/bundle/";var c=this.webpackJsonpSLDS___internal_chunked_showcase=this.webpackJsonpSLDS___internal_chunked_showcase||[],i=c.push.bind(c);c.push=t,c=c.slice();for(var o=0;o<c.length;o++)t(c[o]);var u=i;return r.push([193,0]),l()}({0:function(e,t){e.exports=React},193:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.examples=t.states=void 0;var a=s(l(0)),n=s(l(4)),r=l(15);function s(e){return e&&e.__esModule?e:{default:e}}t.default=a.default.createElement(r.Pill,null);t.states=[{id:"error",label:"Error",element:a.default.createElement(r.Pill,{className:"slds-has-error"},a.default.createElement("span",{className:"slds-pill__icon_container"},a.default.createElement("span",{className:"slds-icon_container",title:"Error"},a.default.createElement(n.default,{className:"slds-icon slds-icon-text-error",sprite:"utility",symbol:"error"}),a.default.createElement("span",{className:"slds-assistive-text"},"Warning"))))},{id:"truncated",label:"Truncated",element:a.default.createElement(r.PillContainer,null,a.default.createElement(r.Pill,{label:"Pill label that is longer than the area that contains it"}))}],t.examples=[{id:"icon",label:"With icon",element:a.default.createElement(r.Pill,null,a.default.createElement("span",{className:"slds-pill__icon_container"},a.default.createElement("span",{className:"slds-icon_container slds-icon-standard-account",title:"Account"},a.default.createElement(n.default,{className:"slds-icon",sprite:"standard",symbol:"account"}),a.default.createElement("span",{className:"slds-assistive-text"},"Account"))))},{id:"avatar",label:"With avatar",element:a.default.createElement(r.Pill,null,a.default.createElement("span",{className:"slds-pill__icon_container"},a.default.createElement("span",{className:"slds-avatar slds-avatar_circle",title:"User avatar"},a.default.createElement("img",{alt:"Person name",src:"/assets/images/avatar2.jpg",title:"User avatar"}))))},{id:"container",label:"Pill with Container",element:a.default.createElement(r.PillContainer,null,a.default.createElement(r.Pill,null),a.default.createElement(r.Pill,null),a.default.createElement(r.Pill,null))}]}});