var SLDS=SLDS||{};SLDS["__internal/chunked/docs/ui/components/icons/docs.mdx.js"]=function(e){function t(t){for(var a,s,l=t[0],c=t[1],r=t[2],u=0,h=[];u<l.length;u++)s=l[u],o[s]&&h.push(o[s][0]),o[s]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);for(d&&d(t);h.length;)h.shift()();return i.push.apply(i,r||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,l=1;l<n.length;l++){var c=n[l];0!==o[c]&&(a=!1)}a&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},o={24:0},i=[];function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},s.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/assets/scripts/bundle/";var l=this.webpackJsonpSLDS___internal_chunked_docs=this.webpackJsonpSLDS___internal_chunked_docs||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var r=0;r<l.length;r++)t(l[r]);var d=c;return i.push([168,0]),n()}({0:function(e,t){e.exports=React},167:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CustomIcon=void 0;var a=s(n(0)),o=s(n(9)),i=s(n(2));function s(e){return e&&e.__esModule?e:{default:e}}var l=t.CustomIcon=function(e){var t=e.symbol||"custom5";return a.default.createElement("span",{className:(0,i.default)("slds-icon_container slds-icon-custom-"+t),title:e.title||"Description of icon when needed"},a.default.createElement(o.default,{className:(0,i.default)("slds-icon",e.className),sprite:"custom",symbol:t}),a.default.createElement("span",{className:"slds-assistive-text"},e.assistiveText||"Description of icon when needed"))};t.default=a.default.createElement(l,null)},168:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getContents=t.getElement=void 0;var a=n(0),o=(g(a),n(4)),i=g(o),s=g(n(5)),l=g(n(10)),c=g(n(13)),r=(g(n(8)),n(11)),d=n(57),u=n(167),h=n(46),f=n(19),m=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(11)),p=n(1);function g(e){return e&&e.__esModule?e:{default:e}}var y=o.factories.a,v=o.factories.code,E=o.factories.em,b=o.factories.h2,x=o.factories.h3,S=o.factories.li,_=o.factories.p,w=o.factories.ul,I=t.getElement=function(){return(0,a.createElement)(i.default,{},(0,a.createElement)("div",{className:"doc lead"},"Icons provide visual context and enhance usability. All of the Icons can be found ",(0,a.createElement)("a",{href:"/icons"},"here"),"."),(0,a.createElement)(s.default,{exampleOnly:!0},(0,a.createElement)(r.UtilityIcon,{className:"slds-icon-text-default"})),b({id:"About-Icons"},"About Icons"),_({},"Five separate SVG sprites are used to create icons — ",y({href:"/icons/#action"},"action"),", ",y({href:"/icons/#custom"},"custom"),", ",y({href:"/icons/#doctype"},"doctype"),", ",y({href:"/icons/#standard"},"standard ")," and ",y({href:"/icons/#utility"},"utility"),". Link to the icon SVG sprite by targeting the icon’s hash/ID value in the use href attribute. (You can find the values on the ",y({href:"/icons/"},"icon page"),".)"),b({id:"Accessibility"},"Accessibility"),_({},"Icons require a containing element for two reasons:"),w({},S({},"If assistive text is required, the containing element should contain both the icon and a ",v({},"<span>")," with hidden assistive text describing the icon using the ",v({},"slds-assistive-text")," class."),S({},"If the icon is used without a visible, descriptive label, a ",v({},"title")," attribute is needed on the containing element. The ",v({},"title")," should describe the icon.")),_({},"If an icon has a visible label that describes what the icon represents, no title or hidden assistive text is required."),_({},"The containing element must have the ",v({},"slds-icon_container")," class."),b({id:"Default"},"Default"),(0,a.createElement)(c.default,{title:"Base Default"},(0,a.createElement)(s.default,null,(0,a.createElement)(r.UtilityIcon,{className:"slds-icon-text-default"}))),x({id:"Structure-and-Implementation"},"Structure and Implementation"),_({},"An icon must have a containing element with the class ",v({},"slds-icon_container")," for ",y({href:"#Accessibility"},"accessibility support"),". Inside the container, a ",v({},"<svg>")," with the class ",v({},"slds-icon")," contains the reference to your icon and a ",v({},"<span>")," with the class ",v({},"slds-assistive-text")," contains your hidden assistive text that describes the icon. Be sure to read the ",y({href:"#Accessibility"},"accessibility section")," to know when to use assistive text, the ",v({},"title")," attribute, or when neither is needed."),_({},"When placing the icon code into your page, customize the path in the ",v({},"use")," attribute of the ",v({},"svg")," to the proper path and icon name for your specific icon. For example, the ",E({},"case")," icon in the ",E({},"standard")," sprite would have a path like this:"),(0,a.createElement)(l.default,{toggleCode:!1},(0,a.createElement)("svg",{"aria-hidden":"true",className:"slds-icon",title:"when needed"},(0,a.createElement)("use",{xlinkHref:"/assets/icons/standard-sprite/svg/symbols.svg#case"}))),_({},"If an icon has more than one word in the name, it should be included in the ",v({},"use")," attribute with the underscore separator as shown on the icon page. For example: log_a_call."),_({},"You must require SLDS in your application for SVG sprites to work. If you’re using Visualforce, see ",(0,a.createElement)("a",{href:"/platforms/visualforce"},"the Visualforce tutorial"),". If you’re using ",(0,a.createElement)("a",{href:"/platforms/lightning"}," Lightning components, see this documentation"),"."),w({},S({},"You can access the SVG sprites by downloading the entire ",y({href:"/downloads"},"CSS Framework or just the icons"),". To include a sprite in your application, the recommended method is to place it into the page as the first element inside the ",v({},"body")," element. Alternatively, you can leave the sprite in the assets/icons directory and link to it from your page. To render a sprited icon, add the tiny ",y({href:"https://github.com/jonathantneal/svg4everybody"},"SVG for Everybody")," script for Internet Explorer."),S({},"When placed into the ",v({},"body"),", the SVG sprite takes up space in the page. Use either ",v({},"display:none")," or ",v({},"position:absolute")," and set both the width and height to zero.")),b({id:"Types"},"Types"),_({},"All available SVG sprites fall into one of these five main categories: action, custom, doctype, standard, and utility."),x({id:"Action"},"Action"),_({},"To view all available action icons, see ",y({href:"/icons/#action"},"action icons"),"."),(0,a.createElement)(c.default,{title:"Action"},(0,a.createElement)(s.default,null,(0,a.createElement)(d.ActionIcon,null))),x({id:"Custom"},"Custom"),_({},"Custom icons have a rounded square shape and use a class on the container for the background color."),_({},"To view all available custom icons, see ",y({href:"/icons/#custom"},"custom icons"),"."),(0,a.createElement)(c.default,{title:"Custom"},(0,a.createElement)(s.default,null,(0,a.createElement)(u.CustomIcon,null))),x({id:"Doctype"},"Doctype"),_({},"To view all available doctype icons, see ",y({href:"/icons/#doctype"},"doctype icons"),"."),(0,a.createElement)(c.default,{title:"Doctype"},(0,a.createElement)(s.default,null,(0,a.createElement)(h.DoctypeIcon,null))),x({id:"Standard"},"Standard"),_({},"Standard icons have a rounded square shape and use a class on the container for the background color."),_({},"To view all available standard icons, see ",y({href:"/icons/#standard"},"standard icons"),"."),(0,a.createElement)(c.default,{title:"Standard"},(0,a.createElement)(s.default,null,(0,a.createElement)(f.StandardIcon,null))),b({id:"Color"},"Color"),x({id:"Default-2"},"Default"),_({},"To change the fill of an icon to the default text color, add the ",v({},"slds-icon-text-default")," class to the icon."),(0,a.createElement)(c.default,{title:"Utility Default"},(0,a.createElement)(s.default,null,(0,a.createElement)(r.UtilityIcon,{className:"slds-icon-text-default"}))),x({id:"Current-Color"},"Current Color"),_({},"To change the fill of an icon to match the current color of its parent, add the ",v({},"slds-current-color")," class to the icon's container. This class utilizes the CSS ",v({},"currentColor")," value."),(0,a.createElement)(c.default,{title:"Current Color"},(0,a.createElement)(s.default,null,(0,a.createElement)(r.UtilityIcon,{containerClassName:"slds-current-color"}))),x({id:"Success"},"Success"),_({},"To change the fill of an icon to the success text color, add the ",v({},"slds-icon-text-success")," class to the icon."),(0,a.createElement)(c.default,{title:"Utility Warning"},(0,a.createElement)(s.default,null,(0,a.createElement)(r.UtilityIcon,{className:"slds-icon-text-success"}))),x({id:"Warning"},"Warning"),_({},"To change the fill of an icon to the warning text color, add the ",v({},"slds-icon-text-warning")," class to the icon."),(0,a.createElement)(c.default,{title:"Utility Warning"},(0,a.createElement)(s.default,null,(0,a.createElement)(r.UtilityIcon,{className:"slds-icon-text-warning"}))),x({id:"Error"},"Error"),_({},"To change the fill of an icon to the error text color, add the ",v({},"slds-icon-text-error")," class to the icon."),(0,a.createElement)(c.default,{title:"Utility Error"},(0,a.createElement)(s.default,null,(0,a.createElement)(r.UtilityIcon,{className:"slds-icon-text-error"}))),x({id:"Light"},"Light"),_({},"To change the fill of an icon to the light text color, add the ",v({},"slds-icon-text-light")," class to the icon."),(0,a.createElement)(c.default,{title:"Utility Light"},(0,a.createElement)(s.default,null,(0,a.createElement)(r.UtilityIcon,{className:"slds-icon-text-light"}))),x({id:"Background-Color"},"Background Color"),_({},"To change a background color for action, custom, or standard icons, use composed class names:"),(0,a.createElement)("code",{className:"docs"},".slds-icon-[sprite name]-[icon name]"),_({},"Place the class on the ",v({},".slds-icon_container"),"."),(0,a.createElement)(l.default,{toggleCode:!1},(0,a.createElement)("div",{className:"slds-icon_container slds-icon-standard-account"})),_({},"Some icon names have more than one word, separated by ",v({},"_")," underscores. Replace underscores with dashes when composing the class name. So ",v({},"log_a_call")," in the standard icon set becomes ",v({},".slds-icon-action-log-a-call"),"."),w({},S({},"For ",y({href:"/components/icons?variant=action"},"action")," icons, add the ",v({},".slds-icon_container_circle")," class to the container (",v({},".slds-icon_container"),"), which changes the background shape to a circle."),S({},y({href:"/components/icons?variant=doctype"},"Doctype")," icons have no background color."),S({},y({href:"/components/icons?variant=standard"},"Standard")," and ",y({href:"/components/icons?variant=custom"},"Custom")," icons have a rounded square shape and use a class on the container for the background color."),S({},y({href:"/components/icons?variant=base"},"Utility")," icons have no background color.")),b({id:"Size"},"Size"),_({},"Size modifiers can be added to the ",v({},"slds-icon")," element on all types of icons."),x({id:"XX-Small"},"XX-Small"),_({},"To change the size of an icon to xx-small, add the ",v({},"slds-icon_xx-small")," class to the icon."),(0,a.createElement)(c.default,{title:"Utility XX-Small"},(0,a.createElement)(s.default,null,(0,a.createElement)(r.UtilityIcon,{className:"slds-icon-text-default slds-icon_xx-small"}))),x({id:"X-Small"},"X-Small"),_({},"To change the size of an icon to x-small, add the ",v({},"slds-icon_x-small")," class to the icon."),(0,a.createElement)(c.default,{title:"Utility X-Small"},(0,a.createElement)(s.default,null,(0,a.createElement)(r.UtilityIcon,{className:"slds-icon-text-default slds-icon_x-small"}))),x({id:"Small"},"Small"),_({},"To change the size of an icon to small, add the ",v({},"slds-icon_small")," class to the icon."),(0,a.createElement)(c.default,{title:"Utility Small"},(0,a.createElement)(s.default,null,(0,a.createElement)(r.UtilityIcon,{className:"slds-icon-text-default slds-icon_small"}))),x({id:"Large"},"Large"),_({},"To change the size of an icon to large, add the ",v({},"slds-icon_large")," class to the icon."),(0,a.createElement)(c.default,{title:"Utility Large"},(0,a.createElement)(s.default,null,(0,a.createElement)(r.UtilityIcon,{className:"slds-icon-text-default slds-icon_large"}))),b({id:"Right-to-Left-Support"},"Right-to-Left Support"),_({},"To horizontally flip an icon to support bidirectionality (reading from right to left), use the ",v({},"slds-icon_flip")," class with the ",v({},"slds-icon_container")," class, and setting the ",v({},"dir")," attribute on any parent container, most often the parent component or on ",v({},"html")," itself."),(0,a.createElement)(s.default,null,(0,p.getDisplayElementById)(m.examples,"rtl-flipped")))};t.getContents=function(){return(0,o.createTableOfContents)(I())}},3:function(e,t){e.exports=JSBeautify}});