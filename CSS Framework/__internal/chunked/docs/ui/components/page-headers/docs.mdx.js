var SLDS=SLDS||{};SLDS["__internal/chunked/docs/ui/components/page-headers/docs.mdx.js"]=function(e){function t(t){for(var l,n,d=t[0],i=t[1],o=t[2],c=0,m=[];c<d.length;c++)n=d[c],s[n]&&m.push(s[n][0]),s[n]=0;for(l in i)Object.prototype.hasOwnProperty.call(i,l)&&(e[l]=i[l]);for(u&&u(t);m.length;)m.shift()();return r.push.apply(r,o||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],l=!0,d=1;d<a.length;d++){var i=a[d];0!==s[i]&&(l=!1)}l&&(r.splice(t--,1),e=n(n.s=a[0]))}return e}var l={},s={1:0},r=[];function n(t){if(l[t])return l[t].exports;var a=l[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=l,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:a})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/assets/scripts/bundle/";var d=this.webpackJsonpSLDS___internal_chunked_docs=this.webpackJsonpSLDS___internal_chunked_docs||[],i=d.push.bind(d);d.push=t,d=d.slice();for(var o=0;o<d.length;o++)t(d[o]);var u=i;return r.push([119,0]),a()}({0:function(e,t){e.exports=React},114:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.RelatedList=void 0;var l=u(a(0)),s=u(a(85)),r=u(a(7)),n=a(14),d=a(35),i=a(15),o=a(38);function u(e){return e&&e.__esModule?e:{default:e}}var c=s.default.Crumb,m=t.RelatedList=function(e){return l.default.createElement(o.PageHeader,{isRelatedList:!0},l.default.createElement(o.PageHeaderRow,null,l.default.createElement(o.PageHeaderColumn,{type:"title"},l.default.createElement(s.default,{className:"slds-m-bottom_xx-small"},l.default.createElement(c,{href:"javascript:void(0);"},"Accounts"),l.default.createElement(c,{href:"javascript:void(0);"},"Company One")),l.default.createElement(o.PageHeaderTitle,{titleText:"Contacts (will truncate)"})),l.default.createElement(o.PageHeaderColumn,{type:"actions"},l.default.createElement(o.PageHeaderControls,null,l.default.createElement(o.PageHeaderControl,null,l.default.createElement(d.ButtonGroupList,null,l.default.createElement(d.ButtonGroupListItem,null,l.default.createElement(n.Button,{isNeutral:!0},"Add Contact")),l.default.createElement(d.ButtonGroupListItem,null,l.default.createElement(i.Trigger,{triggerIcon:l.default.createElement(r.default,{className:"slds-button_icon-border-filled",symbol:"down","aria-haspopup":"true",assistiveText:"More Actions",title:"More Actions"})}))))))),l.default.createElement(o.PageHeaderRow,null,l.default.createElement(o.PageHeaderColumn,{type:"meta"},l.default.createElement(o.PageHeaderMetaText,null,"10 items • sorted by name")),l.default.createElement(o.PageHeaderColumn,{type:"controls"},l.default.createElement(o.PageHeaderControls,null,l.default.createElement(o.PageHeaderControl,null,l.default.createElement(i.Trigger,{triggerIcon:l.default.createElement(r.default,{className:"slds-button_icon-more",symbol:"table",hasDropdown:!0,assistiveText:"Change view",title:"Change view"})})),l.default.createElement(o.PageHeaderControl,null,l.default.createElement(d.ButtonGroupList,null,l.default.createElement(d.ButtonGroupListItem,null,l.default.createElement(r.default,{className:"slds-button_icon-border",symbol:"chart",assistiveText:"Chart",title:"Chart"})),l.default.createElement(d.ButtonGroupListItem,null,l.default.createElement(r.default,{className:"slds-button_icon-border",symbol:"filterList",assistiveText:"Filter List",title:"Filter List"})),l.default.createElement(d.ButtonGroupListItem,null,l.default.createElement(i.Trigger,{triggerIcon:l.default.createElement(r.default,{className:"slds-button_icon-more",symbol:"sort",hasDropdown:!0,assistiveText:"Sort List",title:"Sort List"})}))))))))};t.default=l.default.createElement(m,null)},115:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.RecordHomeVertical=void 0;var l=c(a(0)),s=a(22),r=a(14),n=a(53),d=a(35),i=c(a(7)),o=a(15),u=a(38);function c(e){return e&&e.__esModule?e:{default:e}}var m=t.RecordHomeVertical=function(e){return l.default.createElement("div",{className:"demo-only",style:{width:"300px"}},l.default.createElement(u.PageHeader,{isVertical:!0},l.default.createElement(u.PageHeaderTitle,{symbol:"opportunity",titleText:"Burlington Textile Weaving Plant Generator",isVertical:!0}),l.default.createElement(u.PageHeaderControls,null,l.default.createElement(n.StatefulButton,{isNeutral:!0,isNotSelected:!0}),l.default.createElement(d.ButtonGroupList,null,l.default.createElement(d.ButtonGroupListItem,null,l.default.createElement(r.Button,{isNeutral:!0},"Edit")),l.default.createElement(d.ButtonGroupListItem,null,l.default.createElement(r.Button,{isNeutral:!0},"Delete")),l.default.createElement(d.ButtonGroupListItem,null,l.default.createElement(i.default,{className:"slds-button_icon-border-filled",symbol:"down","aria-haspopup":"true",assistiveText:"More Actions",title:"More Actions"})))),l.default.createElement(u.PageHeaderDetailList,null,l.default.createElement(u.PageHeaderDetailListItem,null,l.default.createElement(u.PageHeaderDetailTitle,{title:"Field 1"},"Account Name"),l.default.createElement(u.PageHeaderDetailBody,{title:"Burlington Textile Weaving Plant Generator",isVertical:!0},l.default.createElement("a",{href:"javascript:void(0);"},"Burlington Textile Weaving Plant Generator"))),l.default.createElement(u.PageHeaderDetailListItem,null,l.default.createElement(u.PageHeaderDetailTitle,{title:"Address (2)"},"Address (2)",l.default.createElement(o.Trigger,{triggerIcon:l.default.createElement(i.default,{className:"slds-button_icon",iconClassName:"slds-button__icon_small",symbol:"down","aria-haspopup":"true",assistiveText:"More Actions",title:"More Actions"})})),l.default.createElement(u.PageHeaderDetailBody,{title:"Multiple Values",isVertical:!0},l.default.createElement("div",null,"1 Market St"),l.default.createElement("div",null,"San Francisco, CA 94105"))),l.default.createElement(u.PageHeaderDetailListItem,null,l.default.createElement(u.PageHeaderDetailTitle,{title:"Close Date"},"Close Date"),l.default.createElement(u.PageHeaderDetailBody,{title:"11/1/2018",isVertical:!0},"11/1/2018")),l.default.createElement(u.PageHeaderDetailListItem,null,l.default.createElement(u.PageHeaderDetailTitle,{title:"Opportunity Owner"},"Opportunity Owner"),l.default.createElement(u.PageHeaderDetailBody,{title:"Hyperlink",isVertical:!0},l.default.createElement("div",{className:"slds-media slds-media_small"},l.default.createElement("div",{className:"slds-media__figure"},l.default.createElement(s.Avatar,{className:"slds-avatar_circle slds-avatar_x-small"},l.default.createElement("img",{alt:"Person name",src:"/assets/images/avatar2.jpg",title:"User avatar"}))),l.default.createElement("div",{className:"slds-media__body"},l.default.createElement("a",{href:"javascript:void(0);"},"Jeanette Gomez"))))),l.default.createElement(u.PageHeaderDetailListItem,null,l.default.createElement(u.PageHeaderDetailTitle,{title:"Amount"},"Amount"),l.default.createElement(u.PageHeaderDetailBody,{title:"$375,000.00",isVertical:!0},"$375,000.00")))))};t.default=l.default.createElement(m,null)},116:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.RecordHome=void 0;var l=u(a(0)),s=u(a(7)),r=a(14),n=a(35),d=a(15),i=a(53),o=a(38);function u(e){return e&&e.__esModule?e:{default:e}}var c=t.RecordHome=function(e){return l.default.createElement(o.PageHeader,{isRecordHome:!0},l.default.createElement(o.PageHeaderRow,null,l.default.createElement(o.PageHeaderColumn,{type:"title"},l.default.createElement(o.PageHeaderTitle,{symbol:"opportunity",objectName:"Opportunity",titleText:"Acme - 1,200 Widgets"})),l.default.createElement(o.PageHeaderColumn,{type:"actions"},l.default.createElement(o.PageHeaderControls,null,l.default.createElement(o.PageHeaderControl,null,l.default.createElement(i.StatefulButton,{isNotSelected:!0,isNeutral:!0})),l.default.createElement(o.PageHeaderControl,null,l.default.createElement(n.ButtonGroupList,null,l.default.createElement(n.ButtonGroupListItem,null,l.default.createElement(r.Button,{isNeutral:!0},"Edit")),l.default.createElement(n.ButtonGroupListItem,null,l.default.createElement(r.Button,{isNeutral:!0},"Delete")),l.default.createElement(n.ButtonGroupListItem,null,l.default.createElement(r.Button,{isNeutral:!0},"Clone")),l.default.createElement(n.ButtonGroupListItem,null,l.default.createElement(d.Trigger,{triggerIcon:l.default.createElement(s.default,{className:"slds-button_icon-border-filled",symbol:"down","aria-haspopup":"true",assistiveText:"More Actions",title:"More Actions"})}))))))),l.default.createElement(o.PageHeaderRow,{hasGutters:!0},l.default.createElement(o.PageHeaderColumn,{type:"details"},l.default.createElement(o.PageHeaderDetailRow,null,l.default.createElement(o.PageHeaderDetailItem,null,l.default.createElement(o.PageHeaderDetailTitle,{title:"Field 1"},"Field 1"),l.default.createElement(o.PageHeaderDetailBody,{title:"Description that demonstrates truncation with a long text field."},"Description that demonstrates truncation with a long text field.")),l.default.createElement(o.PageHeaderDetailItem,null,l.default.createElement(o.PageHeaderDetailTitle,{title:"Field 2 (3)"},"Field 2 (3)",l.default.createElement(d.Trigger,{triggerIcon:l.default.createElement(s.default,{className:"slds-button_icon",iconClassName:"slds-button__icon_small",symbol:"down","aria-haspopup":"true",assistiveText:"More Actions",title:"More Actions"})})),l.default.createElement(o.PageHeaderDetailBody,{title:"Multiple Values"},"Multiple Values")),l.default.createElement(o.PageHeaderDetailItem,null,l.default.createElement(o.PageHeaderDetailTitle,{title:"Field 3"},"Field 3"),l.default.createElement(o.PageHeaderDetailBody,{title:"Hyperlink"},l.default.createElement("a",{href:"javascript:void(0);"},"Hyperlink"))),l.default.createElement(o.PageHeaderDetailItem,null,l.default.createElement(o.PageHeaderDetailTitle,{title:"Field 4"},"Field 4"),l.default.createElement(o.PageHeaderDetailBody,{title:"Description (2-line truncation—must use JS to truncate)."},"Description (2-line truncati..."))))))};t.default=l.default.createElement(c,null)},117:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.examples=t.ObjectHome=void 0;var l=u(a(0)),s=a(14),r=u(a(7)),n=a(35),d=u(a(27)),i=a(15),o=a(38);function u(e){return e&&e.__esModule?e:{default:e}}var c=t.ObjectHome=function(e){return l.default.createElement(o.PageHeader,null,l.default.createElement(o.PageHeaderRow,null,l.default.createElement(o.PageHeaderColumn,{type:"title"},l.default.createElement(o.PageHeaderTitle,{symbol:"opportunity",objectName:"Opportunities",titleText:"Recently Viewed",hasSwitcher:!0})),l.default.createElement(o.PageHeaderColumn,{type:"actions"},l.default.createElement(o.PageHeaderControls,null,l.default.createElement(o.PageHeaderControl,null,l.default.createElement(n.ButtonGroupList,null,l.default.createElement(n.ButtonGroupListItem,null,l.default.createElement(s.Button,{isNeutral:!0},"New")),l.default.createElement(n.ButtonGroupListItem,null,l.default.createElement(i.Trigger,{triggerIcon:l.default.createElement(r.default,{className:"slds-button_icon-border-filled",symbol:"down","aria-haspopup":"true",assistiveText:"More Actions",title:"More Actions"})}))))))),l.default.createElement(o.PageHeaderRow,null,l.default.createElement(o.PageHeaderColumn,{type:"meta"},l.default.createElement(o.PageHeaderMetaText,null,"10 items • Updated 13 minutes ago")),l.default.createElement(o.PageHeaderColumn,{type:"controls"},l.default.createElement(o.PageHeaderControls,null,l.default.createElement(o.PageHeaderControl,null,l.default.createElement(i.Trigger,{triggerIcon:l.default.createElement(r.default,{className:"slds-button_icon-more",symbol:"settings",hasDropdown:!0,assistiveText:"List View Controls",title:"List View Controls"})})),l.default.createElement(o.PageHeaderControl,null,l.default.createElement(i.Trigger,{triggerIcon:l.default.createElement(r.default,{className:"slds-button_icon-more",symbol:"table",hasDropdown:!0,assistiveText:"Change view",title:"Change view"})})),l.default.createElement(o.PageHeaderControl,null,l.default.createElement(r.default,{className:"slds-button_icon-border-filled",symbol:"edit",assistiveText:"Edit List",title:"Edit List"})),l.default.createElement(o.PageHeaderControl,null,l.default.createElement(r.default,{className:"slds-button_icon-border-filled",symbol:"refresh",assistiveText:"Refresh List",title:"Refresh List"})),l.default.createElement(o.PageHeaderControl,null,l.default.createElement(n.ButtonGroupList,null,l.default.createElement(n.ButtonGroupListItem,null,l.default.createElement(r.default,{className:"slds-button_icon-border-filled",symbol:"chart",assistiveText:"Charts",title:"Charts"})),l.default.createElement(n.ButtonGroupListItem,null,l.default.createElement(r.default,{className:"slds-button_icon-border-filled",symbol:"filterList",assistiveText:"Filters",title:"Filters"}))))))))};t.default=l.default.createElement(c,null);t.examples=[{id:"base-extra-long",label:"Base with extra long name",element:l.default.createElement(o.PageHeader,null,l.default.createElement(o.PageHeaderRow,null,l.default.createElement(o.PageHeaderColumn,{type:"title"},l.default.createElement(o.PageHeaderTitle,{symbol:"opportunity",objectName:"Opportunities",titleText:"Recently Viewed listssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss",hasSwitcher:!0})),l.default.createElement(o.PageHeaderColumn,{type:"actions"},l.default.createElement(o.PageHeaderControls,null,l.default.createElement(o.PageHeaderControl,null,l.default.createElement(n.ButtonGroupList,null,l.default.createElement(n.ButtonGroupListItem,null,l.default.createElement(s.Button,{isNeutral:!0},"New")),l.default.createElement(n.ButtonGroupListItem,null,l.default.createElement(r.default,{className:"slds-button_icon-border-filled",symbol:"down","aria-haspopup":"true",assistiveText:"More Actions",title:"More Actions"}))))))),l.default.createElement(o.PageHeaderRow,null,l.default.createElement(o.PageHeaderColumn,{type:"meta"},l.default.createElement(o.PageHeaderMetaText,null,"10 items • Updated 13 minutes ago")),l.default.createElement(o.PageHeaderColumn,{type:"controls"},l.default.createElement(o.PageHeaderControls,null,l.default.createElement(o.PageHeaderControl,null,l.default.createElement(i.Trigger,{triggerIcon:l.default.createElement(r.default,{className:"slds-button_icon-more",symbol:"settings",hasDropdown:!0,assistiveText:"List View Controls",title:"List View Controls"})})),l.default.createElement(o.PageHeaderControl,null,l.default.createElement(i.Trigger,{triggerIcon:l.default.createElement(r.default,{className:"slds-button_icon-more",symbol:"table",hasDropdown:!0,assistiveText:"Change view",title:"Change view"})})),l.default.createElement(o.PageHeaderControl,null,l.default.createElement(r.default,{className:"slds-button_icon-border-filled",symbol:"edit",assistiveText:"Edit List",title:"Edit List"})),l.default.createElement(o.PageHeaderControl,null,l.default.createElement(r.default,{className:"slds-button_icon-border-filled",symbol:"refresh",assistiveText:"Refresh List",title:"Refresh List"})),l.default.createElement(o.PageHeaderControl,null,l.default.createElement(n.ButtonGroupList,null,l.default.createElement(n.ButtonGroupListItem,null,l.default.createElement(r.default,{className:"slds-button_icon-border-filled",symbol:"chart",assistiveText:"Charts",title:"Charts"})),l.default.createElement(n.ButtonGroupListItem,null,l.default.createElement(r.default,{className:"slds-button_icon-border-filled",symbol:"filterList",assistiveText:"Filters",title:"Filters"}))))))))},{id:"card",label:"Inside a card",element:l.default.createElement(d.default,null,l.default.createElement(c,null))},{id:"tab-card",label:"Inside a tabs card",element:l.default.createElement("div",{className:"slds-tabs_card"},l.default.createElement(c,null))}]},118:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.PageHeaderBase=void 0;var l=function(e){return e&&e.__esModule?e:{default:e}}(a(0)),s=a(38);var r=t.PageHeaderBase=function(e){return l.default.createElement(s.PageHeader,null,l.default.createElement(s.PageHeaderRow,null,l.default.createElement(s.PageHeaderColumn,{type:"title"},l.default.createElement(s.PageHeaderTitle,{titleText:"Rohde Corp - 80,000 Widgets",metaText:"Mark Jaeckal • Unlimited Customer • 11/13/15",symbol:"opportunity"}))))};t.default=l.default.createElement(r,null)},119:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getContents=t.getElement=void 0;var l=a(0),s=(p(l),a(4)),r=p(s),n=p(a(5)),d=(p(a(10)),p(a(8)),a(1)),i=f(a(118)),o=f(a(117)),u=f(a(116)),c=f(a(115)),m=f(a(114));function f(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}function p(e){return e&&e.__esModule?e:{default:e}}var g=s.factories.code,E=s.factories.h1,h=s.factories.h2,y=s.factories.h3,b=s.factories.li,H=s.factories.p,P=s.factories.strong,_=s.factories.ul,v=t.getElement=function(){return(0,l.createElement)(r.default,{},(0,l.createElement)("div",{className:"lead doc"},"Page headers are used at the top of several page types. They use the `.slds-page-header` class as a base and are comprised of multiple components."),E({id:"Base"},"Base"),(0,l.createElement)(n.default,null,i.default),H({},"The page header contains the Title of the page, and supporting details. For large form factors, it may include actions."),E({id:"Object-Home"},"Object Home"),(0,l.createElement)(n.default,null,o.default),H({},"The title for the Object Home page header is a filtering component. The ",g({},".slds-text-focus")," class is placed on the media object that contains the title and down icon to simulate a hover and focus state of a link."),H({},"This component is created entirely of existing components like buttons, button groups, and icons."),h({id:"Examples"},"Examples"),y({id:"With-extra-long-name"},"With extra long name"),(0,l.createElement)(n.default,null,(0,d.getDisplayElementById)(o.examples,"base-extra-long")),y({id:"Inside-a-card"},"Inside a card"),(0,l.createElement)(n.default,null,(0,d.getDisplayElementById)(o.examples,"card")),y({id:"Inside-a-tabs-card"},"Inside a tabs card"),(0,l.createElement)(n.default,null,(0,d.getDisplayElementById)(o.examples,"tab-card")),E({id:"Record-Home"},"Record Home"),(0,l.createElement)(n.default,null,u.default),H({},"Page header record home contains up to four compact layout fields. They're contained in the ",g({},".slds-page-header__detail-row")," div. That div contains the top and bottom spacing needed for this version of the page header."),H({},"When text is truncated, the full text should be placed in a tooltip on hover (currently shown in the title attribute). One line truncation is created by using the ",g({},".slds-truncate")," class. Two line truncation must be achieved using JavaScript."),H({},"The page header is located at the top of every record home. It includes the record title and compact layout for a record. Excluding the title, the page header displays 4 compact layout fields. Similar data types can be rolled up and be displayed as a single field."),H({},P({},"Record Title")),_({},b({},"Display Record Type icon to the left of the title"),b({},"Record Type is displayed above the title"),b({},"When required, follow action is displayed to the right of the record title"),b({},"Display one line of text, truncate when the length conflicts with the page level actions")),H({},"As shown in Field 3, web addresses and email addresses should be parsed and displayed as hyperlinks linking to the appropriate mailto: or web url. Do not modify the user's input, display as intended."),H({},"When text is truncated, display full field text in browser tooltip on hover."),H({},"Display addresses in two lines. Street address on first line, City, State and Postal Code on line 2. For lengthy addresses, truncate each line individually based on the available width of the area using the ",g({},".slds-truncate")," class. Display the full address via browser tooltip."),E({id:"Record-Home-Vertical"},"Record Home Vertical"),(0,l.createElement)(n.default,null,c.default),H({},"Vertical page header record home contains up to seven compact layout fields. They're contained in the ",g({},".slds-page-header__detail-row")," div.","The heading does not truncate. This is typically used in more compact layouts where more vertical space is desired."),E({id:"Related-List"},"Related List"),(0,l.createElement)(n.default,null,m.default),H({},"The Related List page header is similar to the Object Home page header. It includes a breadcrumb component at the top and the title is truncated."))};t.getContents=function(){return(0,s.createTableOfContents)(v())}},3:function(e,t){e.exports=JSBeautify},38:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.PageHeaderDetailBody=t.PageHeaderDetailTitle=t.PageHeaderDetailListItem=t.PageHeaderDetailItem=t.PageHeaderDetailList=t.PageHeaderDetailRow=t.PageHeaderControl=t.PageHeaderControls=t.PageHeaderMetaText=t.PageHeaderTitle=t.PageHeaderColumn=t.PageHeaderRow=t.PageHeader=void 0;var l=u(a(0)),s=u(a(6)),r=u(a(2)),n=u(a(7)),d=a(15),i=u(a(36)),o=a(19);function u(e){return e&&e.__esModule?e:{default:e}}var c=function(e){return l.default.createElement(o.StandardIcon,{symbol:e.type,className:"slds-page-header__icon",assistiveText:e.assistiveText,title:e.title})};c.propTypes={assistiveText:s.default.oneOfType([s.default.string,s.default.bool]),title:s.default.oneOfType([s.default.string,s.default.bool]),type:s.default.string.isRequired},(t.PageHeader=function(e){return l.default.createElement("div",{className:(0,r.default)("slds-page-header",{"slds-page-header_vertical":e.isVertical,"slds-page-header_related-list":e.isRelatedList,"slds-page-header_record-home":e.isRecordHome})},e.children)}).propTypes={children:s.default.node,isRelatedList:s.default.bool,isVertical:s.default.bool,isRecordHome:s.default.bool},(t.PageHeaderRow=function(e){return l.default.createElement("div",{className:(0,r.default)("slds-page-header__row",{"slds-page-header__row_gutters":e.hasGutters})},e.children)}).propTypes={children:s.default.node,hasGutters:s.default.bool},(t.PageHeaderColumn=function(e){return l.default.createElement("div",{className:(0,r.default)({"slds-page-header__col-actions":"actions"===e.type,"slds-page-header__col-controls":"controls"===e.type,"slds-page-header__col-details":"details"===e.type,"slds-page-header__col-meta":"meta"===e.type,"slds-page-header__col-title":"title"===e.type})},e.children)}).propTypes={children:s.default.node,type:s.default.string},(t.PageHeaderTitle=function(e){return l.default.createElement(i.default,{figureLeft:e.symbol&&l.default.createElement(c,{assistiveText:!e.objectName&&e.symbol,title:!e.objectName&&e.symbol,type:e.symbol})},l.default.createElement("div",{className:"slds-page-header__name"},l.default.createElement("div",{className:"slds-page-header__name-title"},l.default.createElement("h1",null,e.objectName&&!e.metaText?l.default.createElement("span",null,e.objectName):null,l.default.createElement("span",{className:(0,r.default)("slds-page-header__title",!e.isVertical&&"slds-truncate",e.isVertical&&"slds-hyphenate"),title:e.titleText},e.titleText))),e.hasSwitcher&&l.default.createElement("div",{className:"slds-page-header__name-switcher"},l.default.createElement(d.Trigger,{triggerIcon:l.default.createElement(n.default,{"aria-haspopup":"true",assistiveText:"Switch list view",className:"slds-button_icon-small",iconClassName:"slds-icon_x-small",symbol:"down",title:"Switch list view"})}))),e.metaText&&l.default.createElement("p",{className:"slds-page-header__name-meta"},e.metaText))}).propTypes={symbol:s.default.string,objectName:s.default.string,hasSwitcher:s.default.bool,metaText:s.default.string,titleText:s.default.string.isRequired,isVertical:s.default.bool},(t.PageHeaderMetaText=function(e){return l.default.createElement("p",{className:"slds-page-header__meta-text"},e.children)}).propTypes={children:s.default.node},(t.PageHeaderControls=function(e){return l.default.createElement("div",{className:"slds-page-header__controls"},e.children)}).propTypes={children:s.default.node},(t.PageHeaderControl=function(e){return l.default.createElement("div",{className:"slds-page-header__control"},e.children)}).propTypes={children:s.default.node},(t.PageHeaderDetailRow=function(e){return l.default.createElement("ul",{className:"slds-page-header__detail-row"},e.children)}).propTypes={children:s.default.node},(t.PageHeaderDetailList=function(e){return l.default.createElement("ul",{className:"slds-page-header__detail-list"},e.children)}).propTypes={children:s.default.node},(t.PageHeaderDetailItem=function(e){return l.default.createElement("li",{className:"slds-page-header__detail-block"},e.children)}).propTypes={children:s.default.node},(t.PageHeaderDetailListItem=function(e){return l.default.createElement("li",{className:"slds-page-header__detail-item"},e.children)}).propTypes={children:s.default.node},(t.PageHeaderDetailTitle=function(e){return l.default.createElement("div",{className:(0,r.default)("slds-text-title",!e.isVertical&&"slds-truncate"),title:e.title},e.children)}).propTypes={children:s.default.node,title:s.default.string,isVertical:s.default.bool},(t.PageHeaderDetailBody=function(e){return l.default.createElement("div",{className:e.isVertical?null:"slds-truncate",title:e.title},e.children)}).propTypes={children:s.default.node,title:s.default.string,isVertical:s.default.bool}}});