var SLDS=SLDS||{};SLDS["__internal/chunked/showcase/ui/components/tabs/base/example.jsx.js"]=function(e){function t(t){for(var l,s,r=t[0],u=t[1],m=t[2],o=0,i=[];o<r.length;o++)s=r[o],n[s]&&i.push(n[s][0]),n[s]=0;for(l in u)Object.prototype.hasOwnProperty.call(u,l)&&(e[l]=u[l]);for(c&&c(t);i.length;)i.shift()();return d.push.apply(d,m||[]),a()}function a(){for(var e,t=0;t<d.length;t++){for(var a=d[t],l=!0,r=1;r<a.length;r++){var u=a[r];0!==n[u]&&(l=!1)}l&&(d.splice(t--,1),e=s(s.s=a[0]))}return e}var l={},n={162:0,7:0,8:0,15:0,16:0,22:0,32:0,42:0,45:0,58:0,62:0,63:0,64:0,67:0,71:0,75:0,77:0,80:0,84:0,87:0,88:0,93:0,99:0,100:0,104:0,106:0,114:0,122:0,124:0,125:0,126:0,127:0,128:0,129:0,138:0,144:0,152:0,163:0,167:0,170:0,171:0,180:0,183:0,184:0},d=[];function s(t){if(l[t])return l[t].exports;var a=l[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=l,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:a})},s.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/assets/scripts/bundle/";var r=this.webpackJsonpSLDS___internal_chunked_showcase=this.webpackJsonpSLDS___internal_chunked_showcase||[],u=r.push.bind(r);r.push=t,r=r.slice();for(var m=0;m<r.length;m++)t(r[m]);var c=u;return d.push([253,0]),a()}({0:function(e,t){e.exports=React},253:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.examples=t.states=t.TabsLarge=t.TabsMedium=t.TabsWithError=t.TabsWithCards=t.TabsOverflowIcons=t.TabsOverflow=t.TabsWithNestedScopedTabs=t.TabsDefault=void 0;var l=f(a(0)),n=f(a(2)),d=f(a(36)),s=a(11),r=a(6),u=a(67),m=a(10),c=a(252),o=a(22),i=f(o);function f(e){return e&&e.__esModule?e:{default:e}}var E=t.TabsDefault=function(e){return l.default.createElement(d.default,{selectedIndex:e.selectedIndex},l.default.createElement(d.default.Item,{title:"Item One",id:"tab-default-1"},e.itemOneContent),l.default.createElement(d.default.Item,{title:"Item Two",id:"tab-default-2"},"Item Two Content"),l.default.createElement(d.default.Item,{title:"Item Three",id:"tab-default-3"},"Item Three Content"))};E.propTypes={selectedIndex:n.default.number,itemOneContent:n.default.node},E.defaultProps={selectedIndex:0,itemOneContent:"Item One Content"};var b=t.TabsWithNestedScopedTabs=function(){return l.default.createElement(E,{itemOneContent:l.default.createElement(c.TabsScoped,null)})},I=t.TabsOverflow=function(){return l.default.createElement("div",{className:"demo-only",style:{height:"12rem"}},l.default.createElement(d.default,null,l.default.createElement(d.default.Item,{title:"Item One",id:"tab-default-1"},l.default.createElement("h2",null,"Item One Content")),l.default.createElement(d.default.Item,{title:"Item Two",id:"tab-default-2"},l.default.createElement("h2",null,"Item Two Content")),l.default.createElement(d.default.Item,{title:"Item Three",id:"tab-default-3"},l.default.createElement("h2",null,"Item Three Content")),l.default.createElement(d.default.Item,{title:"Item Four",id:"tab-default-4"},l.default.createElement("h2",null,"Item Four Content")),l.default.createElement(d.default.Item,{title:"Item Five",id:"tab-default-5"},l.default.createElement("h2",null,"Item Five Content")),l.default.createElement(d.default.ItemOverflow,{title:"More Tabs",id:"tab-default-8"},l.default.createElement(u.ButtonMenu,{label:"More",type:"tabs",flavor:"default",isOpen:!0},l.default.createElement(p,null)))))},h=t.TabsOverflowIcons=function(){return l.default.createElement("div",{className:"demo-only",style:{height:"12rem"}},l.default.createElement(d.default,null,l.default.createElement(d.default.Item,{title:"Opportunities",leftIcon:l.default.createElement(s.StandardIcon,{className:"slds-icon_small",symbol:"opportunity",title:"Opportunities",assistiveText:!1}),id:"tab-default-1"},l.default.createElement("h2",null,"Item One Content")),l.default.createElement(d.default.Item,{title:"Cases",leftIcon:l.default.createElement(s.StandardIcon,{className:"slds-icon_small",title:"Cases",symbol:"case",assistiveText:!1}),id:"tab-default-2"},l.default.createElement("h2",null,"Item Two Content")),l.default.createElement(d.default.Item,{title:"Products",leftIcon:l.default.createElement(s.StandardIcon,{className:"slds-icon_small",title:"Products",symbol:"product",assistiveText:!1}),id:"tab-default-3"},l.default.createElement("h2",null,"Item Three Content")),l.default.createElement(d.default.Item,{title:"Price Books",leftIcon:l.default.createElement(s.StandardIcon,{className:"slds-icon_small",title:"Price Books",symbol:"pricebook",assistiveText:!1}),id:"tab-default-4"},l.default.createElement("h2",null,"Item Four Content")),l.default.createElement(d.default.Item,{title:"Contacts",leftIcon:l.default.createElement(s.StandardIcon,{className:"slds-icon_small",title:"Contacts",symbol:"contact",assistiveText:!1}),id:"tab-default-5"},l.default.createElement("h2",null,"Item Five Content")),l.default.createElement(d.default.ItemOverflow,{title:"More Tabs",id:"tab-default-8"},l.default.createElement(u.ButtonMenu,{label:"More",type:"tabs",flavor:"default",isOpen:!0},l.default.createElement(T,null)))))},p=function(){return l.default.createElement(m.Menu,{className:"slds-dropdown_right"},l.default.createElement(m.MenuList,{className:"slds-dropdown_length-with-icon-10"},l.default.createElement(m.MenuItem,{title:"Accounts"},"Accounts"),l.default.createElement(m.MenuItem,{title:"Approvals"},"Approvals"),l.default.createElement(m.MenuItem,{title:"Lead"},"Leads")))},T=function(){return l.default.createElement(m.Menu,{className:"slds-dropdown_right"},l.default.createElement(m.MenuList,{className:"slds-dropdown_length-with-icon-10"},l.default.createElement(m.MenuItem,{title:"Accounts"},l.default.createElement("span",{className:"slds-media slds-media_center"},l.default.createElement("span",{className:"slds-media__figure"},l.default.createElement(s.StandardIcon,{className:"slds-icon_small",symbol:"account",assistiveText:!1})),l.default.createElement("span",{className:"slds-media__body"},"Accounts"))),l.default.createElement(m.MenuItem,{title:"Approvals"},l.default.createElement("span",{className:"slds-media slds-media_center"},l.default.createElement("span",{className:"slds-media__figure"},l.default.createElement(s.StandardIcon,{className:"slds-icon_small",symbol:"approval",assistiveText:!1})),l.default.createElement("span",{className:"slds-media__body"},"Approvals"))),l.default.createElement(m.MenuItem,{title:"Lead"},l.default.createElement("span",{className:"slds-media slds-media_center"},l.default.createElement("span",{className:"slds-media__figure"},l.default.createElement(s.StandardIcon,{className:"slds-icon_small",symbol:"lead",assistiveText:!1})),l.default.createElement("span",{className:"slds-media__body"},"Leads")))))},v=t.TabsWithCards=function(){return l.default.createElement(d.default,{isCard:!0,selectedIndex:0},l.default.createElement(d.default.Item,{title:"Item One",id:"tab-default-1"},l.default.createElement(i.default,null,l.default.createElement(o.CardHeader,{symbol:"contact",title:"Card Header",href:"javascript:void(0);",action:l.default.createElement("button",{className:"slds-button slds-button_neutral"},"New")}),l.default.createElement(o.CardBody,{hasPadding:!0},"This is a card inside an ",l.default.createElement("code",{className:"doc"},".slds-tabs_card")," ","to show how styling is removed when cards are nested inside."),l.default.createElement(o.CardFooter,null,"View All ",l.default.createElement("span",{className:"slds-assistive-text"},"Contacts"))),l.default.createElement(i.default,null,l.default.createElement(o.CardHeader,{symbol:"contact",title:"Card Header",href:"javascript:void(0);",action:l.default.createElement("button",{className:"slds-button slds-button_neutral"},"New")}),l.default.createElement(o.CardBody,{hasPadding:!0},"This is a card inside an ",l.default.createElement("code",{className:"doc"},".slds-tabs_card")," ","to show how styling is removed when cards are nested inside."),l.default.createElement(o.CardFooter,null,"View All ",l.default.createElement("span",{className:"slds-assistive-text"},"Contacts"))),l.default.createElement(i.default,{hasCardBoundary:!0},l.default.createElement(o.CardHeader,{symbol:"contact",title:"Card Header",href:"javascript:void(0);",action:l.default.createElement("button",{className:"slds-button slds-button_neutral"},"New")}),l.default.createElement(o.CardBody,{hasPadding:!0},"This is a card inside an ",l.default.createElement("code",{className:"doc"},".slds-tabs_card")," ","to illustrate how",l.default.createElement("code",{className:"doc"},".slds-card_boundary")," adds a rounded border when desired."),l.default.createElement(o.CardFooter,null,"View All ",l.default.createElement("span",{className:"slds-assistive-text"},"Contacts")))),l.default.createElement(d.default.Item,{title:"Item Two",id:"tab-default-2"},"Item Two Content"),l.default.createElement(d.default.Item,{title:"Item Three",id:"tab-default-3"},"Item Three Content"))},_=t.TabsWithError=function(){return l.default.createElement("div",{className:"demo-only",style:{height:"12rem"}},l.default.createElement(d.default,null,l.default.createElement(d.default.Item,{title:"Item One",id:"tab-default-1"},l.default.createElement("h2",null,"Item One Content")),l.default.createElement(d.default.Item,{title:"Item Two",id:"tab-default-2",rightIcon:l.default.createElement(r.UtilityIcon,{className:"slds-icon_x-small slds-icon-text-error",symbol:"error",title:"This item has an error",assistiveText:"This item has an error"})},l.default.createElement("h2",null,"Item Two Content - Has Error")),l.default.createElement(d.default.Item,{title:"Item Three",id:"tab-default-3"},l.default.createElement("h2",null,"Item Three Content")),l.default.createElement(d.default.Item,{title:"Item Four",id:"tab-default-4"},l.default.createElement("h2",null,"Item Four Content"))))},C=t.TabsMedium=function(){return l.default.createElement(d.default,{size:"medium"},l.default.createElement(d.default.Item,{title:"Item One",id:"tab-default-1"},"Item One Content"),l.default.createElement(d.default.Item,{title:"Item Two",id:"tab-default-2"},"Item Two Content"),l.default.createElement(d.default.Item,{title:"Item Three",id:"tab-default-3"},"Item Three Content"))},w=t.TabsLarge=function(){return l.default.createElement(d.default,{size:"large"},l.default.createElement(d.default.Item,{title:"Item One",id:"tab-default-1"},"Item One Content"),l.default.createElement(d.default.Item,{title:"Item Two",id:"tab-default-2"},"Item Two Content"),l.default.createElement(d.default.Item,{title:"Item Three",id:"tab-default-3"},"Item Three Content"))};t.default=l.default.createElement(E,null);t.states=[{id:"selected",label:"Item Two Selected",element:l.default.createElement(E,{selectedIndex:1})}],t.examples=[{id:"size-medium",label:"Size - Medium",element:l.default.createElement(C,null)},{id:"size-large",label:"Size - Large",element:l.default.createElement(w,null)},{id:"overflow",label:"Overflowing Items",element:l.default.createElement(I,null)},{id:"overflow",label:"Overflowing Items with Icons",element:l.default.createElement(h,null)},{id:"error",label:"Tabs With Error inside of content",element:l.default.createElement(_,null)},{id:"nested",label:"With Nested Scoped Tabs",element:l.default.createElement(b,null)},{id:"card-look",label:"Tab Card-look",element:l.default.createElement(v,null)}]}});