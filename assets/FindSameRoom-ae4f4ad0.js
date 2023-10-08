import{d as e,A as r,B as n,C as t,D as i,F as a,G as o,H as l,r as s,I as c,J as d,K as p,L as u,M as g,O as h,P as f,Q as v,R as m,S as x,T as y,U as b,W as w,X as C,Y as $,Z as k,$ as S,a0 as z,a1 as P,a2 as R,a3 as A,a4 as N,a5 as D,a6 as B,a7 as I,a8 as _,a9 as O,aa as q,ab as W,c as E,e as T,f as j,t as L,b as F,w as U,u as G,j as M,h as H,a as X,ac as Y,i as V,n as Z,ad as J,ae as K,af as Q,ag as ee,ah as re,ai as ne,aj as te,z as ie}from"./index-1b97bd9c.js";const ae=e({name:"ChevronLeft",render:()=>r("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r("path",{d:"M10.3536 3.14645C10.5488 3.34171 10.5488 3.65829 10.3536 3.85355L6.20711 8L10.3536 12.1464C10.5488 12.3417 10.5488 12.6583 10.3536 12.8536C10.1583 13.0488 9.84171 13.0488 9.64645 12.8536L5.14645 8.35355C4.95118 8.15829 4.95118 7.84171 5.14645 7.64645L9.64645 3.14645C9.84171 2.95118 10.1583 2.95118 10.3536 3.14645Z",fill:"currentColor"}))}),oe=n("collapse","width: 100%;",[n("collapse-item","\n font-size: var(--n-font-size);\n color: var(--n-text-color);\n transition:\n color .3s var(--n-bezier),\n border-color .3s var(--n-bezier);\n margin: var(--n-item-margin);\n ",[t("disabled",[i("header","cursor: not-allowed;",[i("header-main","\n color: var(--n-title-text-color-disabled);\n "),n("collapse-item-arrow","\n color: var(--n-arrow-color-disabled);\n ")])]),n("collapse-item","margin-left: 32px;"),a("&:first-child","margin-top: 0;"),a("&:first-child >",[i("header","padding-top: 0;")]),t("left-arrow-placement",[i("header",[n("collapse-item-arrow","margin-right: 4px;")])]),t("right-arrow-placement",[i("header",[n("collapse-item-arrow","margin-left: 4px;")])]),i("content-wrapper",[i("content-inner","padding-top: 16px;"),o({duration:"0.15s"})]),t("active",[i("header",[t("active",[n("collapse-item-arrow","transform: rotate(90deg);")])])]),a("&:not(:first-child)","border-top: 1px solid var(--n-divider-color);"),i("header","\n font-size: var(--n-title-font-size);\n display: flex;\n flex-wrap: nowrap;\n align-items: center;\n transition: color .3s var(--n-bezier);\n position: relative;\n padding: var(--n-title-padding);\n color: var(--n-title-text-color);\n cursor: pointer;\n ",[i("header-main","\n display: flex;\n flex-wrap: nowrap;\n align-items: center;\n font-weight: var(--n-title-font-weight);\n transition: color .3s var(--n-bezier);\n flex: 1;\n color: var(--n-title-text-color);\n "),i("header-extra","\n display: flex;\n align-items: center;\n transition: color .3s var(--n-bezier);\n color: var(--n-text-color);\n "),n("collapse-item-arrow","\n display: flex;\n transition:\n transform .15s var(--n-bezier),\n color .3s var(--n-bezier);\n font-size: 18px;\n color: var(--n-arrow-color);\n ")])])]),le=Object.assign(Object.assign({},p.props),{defaultExpandedNames:{type:[Array,String],default:null},expandedNames:[Array,String],arrowPlacement:{type:String,default:"left"},accordion:{type:Boolean,default:!1},displayDirective:{type:String,default:"if"},onItemHeaderClick:[Function,Array],"onUpdate:expandedNames":[Function,Array],onUpdateExpandedNames:[Function,Array],onExpandedNamesChange:{type:[Function,Array],validator:()=>!0,default:void 0}}),se=f("n-collapse"),ce=e({name:"Collapse",props:le,setup(e,{slots:r}){const{mergedClsPrefixRef:n,inlineThemeDisabled:t,mergedRtlRef:i}=l(e),a=s(e.defaultExpandedNames),o=c((()=>e.expandedNames)),f=d(o,a),x=p("Collapse","-collapse",oe,v,e,n);function y(r){const{"onUpdate:expandedNames":n,onUpdateExpandedNames:t,onExpandedNamesChange:i}=e;t&&m(t,r),n&&m(n,r),i&&m(i,r),a.value=r}function b(r){const{onItemHeaderClick:n}=e;n&&m(n,r)}u(se,{props:e,mergedClsPrefixRef:n,expandedNamesRef:f,slots:r,toggleItem:function(r,n,t){const{accordion:i}=e,{value:a}=f;if(i)r?(y([n]),b({name:n,expanded:!0,event:t})):(y([]),b({name:n,expanded:!1,event:t}));else if(Array.isArray(a)){const e=a.slice(),r=e.findIndex((e=>n===e));~r?(e.splice(r,1),y(e),b({name:n,expanded:!1,event:t})):(e.push(n),y(e),b({name:n,expanded:!0,event:t}))}else y([n]),b({name:n,expanded:!0,event:t})}});const w=g("Collapse",i,n),C=c((()=>{const{common:{cubicBezierEaseInOut:e},self:{titleFontWeight:r,dividerColor:n,titlePadding:t,titleTextColor:i,titleTextColorDisabled:a,textColor:o,arrowColor:l,fontSize:s,titleFontSize:c,arrowColorDisabled:d,itemMargin:p}}=x.value;return{"--n-font-size":s,"--n-bezier":e,"--n-text-color":o,"--n-divider-color":n,"--n-title-padding":t,"--n-title-font-size":c,"--n-title-text-color":i,"--n-title-text-color-disabled":a,"--n-title-font-weight":r,"--n-arrow-color":l,"--n-arrow-color-disabled":d,"--n-item-margin":p}})),$=t?h("collapse",void 0,C,e):void 0;return{rtlEnabled:w,mergedTheme:x,mergedClsPrefix:n,cssVars:t?void 0:C,themeClass:null==$?void 0:$.themeClass,onRender:null==$?void 0:$.onRender}},render(){var e;return null===(e=this.onRender)||void 0===e||e.call(this),r("div",{class:[`${this.mergedClsPrefix}-collapse`,this.rtlEnabled&&`${this.mergedClsPrefix}-collapse--rtl`,this.themeClass],style:this.cssVars},this.$slots)}}),de=e({name:"CollapseItemContent",props:{displayDirective:{type:String,required:!0},show:Boolean,clsPrefix:{type:String,required:!0}},setup:e=>({onceTrue:x(y(e,"show"))}),render(){return r(C,null,{default:()=>{const{show:e,displayDirective:n,onceTrue:t,clsPrefix:i}=this,a="show"===n&&t,o=r("div",{class:`${i}-collapse-item__content-wrapper`},r("div",{class:`${i}-collapse-item__content-inner`},this.$slots));return a?b(o,[[w,e]]):e?o:null}})}}),pe=e({name:"CollapseItem",props:{title:String,name:[String,Number],disabled:Boolean,displayDirective:String},setup(e){const{mergedRtlRef:r}=l(e),n=$(),t=k((()=>{var r;return null!==(r=e.name)&&void 0!==r?r:n})),i=S(se);i||z("collapse-item","`n-collapse-item` must be placed inside `n-collapse`.");const{expandedNamesRef:a,props:o,mergedClsPrefixRef:s,slots:d}=i,p=c((()=>{const{value:e}=a;if(Array.isArray(e)){const{value:r}=t;return!~e.findIndex((e=>e===r))}if(e){const{value:r}=t;return r!==e}return!0}));return{rtlEnabled:g("Collapse",r,s),collapseSlots:d,randomName:n,mergedClsPrefix:s,collapsed:p,mergedDisplayDirective:c((()=>{const{displayDirective:r}=e;return r||o.displayDirective})),arrowPlacement:c((()=>o.arrowPlacement)),handleClick(r){i&&!e.disabled&&i.toggleItem(p.value,t.value,r)}}},render(){const{collapseSlots:e,$slots:n,arrowPlacement:t,collapsed:i,mergedDisplayDirective:a,mergedClsPrefix:o,disabled:l}=this,s=P(n.header,{collapsed:i},(()=>[this.title])),c=n["header-extra"]||e["header-extra"],d=n.arrow||e.arrow;return r("div",{class:[`${o}-collapse-item`,`${o}-collapse-item--${t}-arrow-placement`,l&&`${o}-collapse-item--disabled`,!i&&`${o}-collapse-item--active`]},r("div",{class:[`${o}-collapse-item__header`,!i&&`${o}-collapse-item__header--active`]},r("div",{class:`${o}-collapse-item__header-main`,onClick:this.handleClick},"right"===t&&s,r("div",{class:`${o}-collapse-item-arrow`,key:this.rtlEnabled?0:1},P(d,{collapsed:i},(()=>{var n;return[r(A,{clsPrefix:o},{default:null!==(n=e.expandIcon)&&void 0!==n?n:()=>this.rtlEnabled?r(ae,null):r(N,null)})]}))),"left"===t&&s),R(c,{collapsed:i},(e=>r("div",{class:`${o}-collapse-item__header-extra`,onClick:this.handleClick},e)))),r(de,{clsPrefix:o,displayDirective:a,show:!i},n))}}),ue=a([n("progress",{display:"inline-block"},[n("progress-icon","\n color: var(--n-icon-color);\n transition: color .3s var(--n-bezier);\n "),t("line","\n width: 100%;\n display: block;\n ",[n("progress-content","\n display: flex;\n align-items: center;\n ",[n("progress-graph",{flex:1})]),n("progress-custom-content",{marginLeft:"14px"}),n("progress-icon","\n width: 30px;\n padding-left: 14px;\n height: var(--n-icon-size-line);\n line-height: var(--n-icon-size-line);\n font-size: var(--n-icon-size-line);\n ",[t("as-text","\n color: var(--n-text-color-line-outer);\n text-align: center;\n width: 40px;\n font-size: var(--n-font-size);\n padding-left: 4px;\n transition: color .3s var(--n-bezier);\n ")])]),t("circle, dashboard",{width:"120px"},[n("progress-custom-content","\n position: absolute;\n left: 50%;\n top: 50%;\n transform: translateX(-50%) translateY(-50%);\n display: flex;\n align-items: center;\n justify-content: center;\n "),n("progress-text","\n position: absolute;\n left: 50%;\n top: 50%;\n transform: translateX(-50%) translateY(-50%);\n display: flex;\n align-items: center;\n color: inherit;\n font-size: var(--n-font-size-circle);\n color: var(--n-text-color-circle);\n font-weight: var(--n-font-weight-circle);\n transition: color .3s var(--n-bezier);\n white-space: nowrap;\n "),n("progress-icon","\n position: absolute;\n left: 50%;\n top: 50%;\n transform: translateX(-50%) translateY(-50%);\n display: flex;\n align-items: center;\n color: var(--n-icon-color);\n font-size: var(--n-icon-size-circle);\n ")]),t("multiple-circle","\n width: 200px;\n color: inherit;\n ",[n("progress-text","\n font-weight: var(--n-font-weight-circle);\n color: var(--n-text-color-circle);\n position: absolute;\n left: 50%;\n top: 50%;\n transform: translateX(-50%) translateY(-50%);\n display: flex;\n align-items: center;\n justify-content: center;\n transition: color .3s var(--n-bezier);\n ")]),n("progress-content",{position:"relative"}),n("progress-graph",{position:"relative"},[n("progress-graph-circle",[a("svg",{verticalAlign:"bottom"}),n("progress-graph-circle-fill","\n stroke: var(--n-fill-color);\n transition:\n opacity .3s var(--n-bezier),\n stroke .3s var(--n-bezier),\n stroke-dasharray .3s var(--n-bezier);\n ",[t("empty",{opacity:0})]),n("progress-graph-circle-rail","\n transition: stroke .3s var(--n-bezier);\n overflow: hidden;\n stroke: var(--n-rail-color);\n ")]),n("progress-graph-line",[t("indicator-inside",[n("progress-graph-line-rail","\n height: 16px;\n line-height: 16px;\n border-radius: 10px;\n ",[n("progress-graph-line-fill","\n height: inherit;\n border-radius: 10px;\n "),n("progress-graph-line-indicator","\n background: #0000;\n white-space: nowrap;\n text-align: right;\n margin-left: 14px;\n margin-right: 14px;\n height: inherit;\n font-size: 12px;\n color: var(--n-text-color-line-inner);\n transition: color .3s var(--n-bezier);\n ")])]),t("indicator-inside-label","\n height: 16px;\n display: flex;\n align-items: center;\n ",[n("progress-graph-line-rail","\n flex: 1;\n transition: background-color .3s var(--n-bezier);\n "),n("progress-graph-line-indicator","\n background: var(--n-fill-color);\n font-size: 12px;\n transform: translateZ(0);\n display: flex;\n vertical-align: middle;\n height: 16px;\n line-height: 16px;\n padding: 0 10px;\n border-radius: 10px;\n position: absolute;\n white-space: nowrap;\n color: var(--n-text-color-line-inner);\n transition:\n right .2s var(--n-bezier),\n color .3s var(--n-bezier),\n background-color .3s var(--n-bezier);\n ")]),n("progress-graph-line-rail","\n position: relative;\n overflow: hidden;\n height: var(--n-rail-height);\n border-radius: 5px;\n background-color: var(--n-rail-color);\n transition: background-color .3s var(--n-bezier);\n ",[n("progress-graph-line-fill","\n background: var(--n-fill-color);\n position: relative;\n border-radius: 5px;\n height: inherit;\n width: 100%;\n max-width: 0%;\n transition:\n background-color .3s var(--n-bezier),\n max-width .2s var(--n-bezier);\n ",[t("processing",[a("&::after",'\n content: "";\n background-image: var(--n-line-bg-processing);\n animation: progress-processing-animation 2s var(--n-bezier) infinite;\n ')])])])])])]),a("@keyframes progress-processing-animation","\n 0% {\n position: absolute;\n left: 0;\n top: 0;\n bottom: 0;\n right: 100%;\n opacity: 1;\n }\n 66% {\n position: absolute;\n left: 0;\n top: 0;\n bottom: 0;\n right: 0;\n opacity: 0;\n }\n 100% {\n position: absolute;\n left: 0;\n top: 0;\n bottom: 0;\n right: 0;\n opacity: 0;\n }\n ")]),ge={success:r(D,null),error:r(B,null),warning:r(I,null),info:r(_,null)},he=e({name:"ProgressLine",props:{clsPrefix:{type:String,required:!0},percentage:{type:Number,default:0},railColor:String,railStyle:[String,Object],fillColor:String,status:{type:String,required:!0},indicatorPlacement:{type:String,required:!0},indicatorTextColor:String,unit:{type:String,default:"%"},processing:{type:Boolean,required:!0},showIndicator:{type:Boolean,required:!0},height:[String,Number],railBorderRadius:[String,Number],fillBorderRadius:[String,Number]},setup(e,{slots:n}){const t=c((()=>O(e.height))),i=c((()=>void 0!==e.railBorderRadius?O(e.railBorderRadius):void 0!==e.height?O(e.height,{c:.5}):"")),a=c((()=>void 0!==e.fillBorderRadius?O(e.fillBorderRadius):void 0!==e.railBorderRadius?O(e.railBorderRadius):void 0!==e.height?O(e.height,{c:.5}):""));return()=>{const{indicatorPlacement:o,railColor:l,railStyle:s,percentage:c,unit:d,indicatorTextColor:p,status:u,showIndicator:g,fillColor:h,processing:f,clsPrefix:v}=e;return r("div",{class:`${v}-progress-content`,role:"none"},r("div",{class:`${v}-progress-graph`,"aria-hidden":!0},r("div",{class:[`${v}-progress-graph-line`,{[`${v}-progress-graph-line--indicator-${o}`]:!0}]},r("div",{class:`${v}-progress-graph-line-rail`,style:[{backgroundColor:l,height:t.value,borderRadius:i.value},s]},r("div",{class:[`${v}-progress-graph-line-fill`,f&&`${v}-progress-graph-line-fill--processing`],style:{maxWidth:`${e.percentage}%`,backgroundColor:h,height:t.value,lineHeight:t.value,borderRadius:a.value}},"inside"===o?r("div",{class:`${v}-progress-graph-line-indicator`,style:{color:p}},c,d):null)))),g&&"outside"===o?r("div",null,n.default?r("div",{class:`${v}-progress-custom-content`,style:{color:p},role:"none"},n.default()):"default"===u?r("div",{role:"none",class:`${v}-progress-icon ${v}-progress-icon--as-text`,style:{color:p}},c,d):r("div",{class:`${v}-progress-icon`,"aria-hidden":!0},r(A,{clsPrefix:v},{default:()=>ge[u]}))):null)}}}),fe={success:r(D,null),error:r(B,null),warning:r(I,null),info:r(_,null)},ve=e({name:"ProgressCircle",props:{clsPrefix:{type:String,required:!0},status:{type:String,required:!0},strokeWidth:{type:Number,required:!0},fillColor:String,railColor:String,railStyle:[String,Object],percentage:{type:Number,default:0},offsetDegree:{type:Number,default:0},showIndicator:{type:Boolean,required:!0},indicatorTextColor:String,unit:String,viewBoxWidth:{type:Number,required:!0},gapDegree:{type:Number,required:!0},gapOffsetDegree:{type:Number,default:0}},setup(e,{slots:n}){function t(r,n,t){const{gapDegree:i,viewBoxWidth:a,strokeWidth:o}=e,l=50,s=50+o/2;return{pathString:`M ${s},${s} m 0,50\n      a 50,50 0 1 1 0,-100\n      a 50,50 0 1 1 0,100`,pathStyle:{stroke:t,strokeDasharray:`${r/100*(2*Math.PI*l-i)}px ${8*a}px`,strokeDashoffset:`-${i/2}px`,transformOrigin:n?"center":void 0,transform:n?`rotate(${n}deg)`:void 0}}}return()=>{const{fillColor:i,railColor:a,strokeWidth:o,offsetDegree:l,status:s,percentage:c,showIndicator:d,indicatorTextColor:p,unit:u,gapOffsetDegree:g,clsPrefix:h}=e,{pathString:f,pathStyle:v}=t(100,0,a),{pathString:m,pathStyle:x}=t(c,l,i),y=100+o;return r("div",{class:`${h}-progress-content`,role:"none"},r("div",{class:`${h}-progress-graph`,"aria-hidden":!0},r("div",{class:`${h}-progress-graph-circle`,style:{transform:g?`rotate(${g}deg)`:void 0}},r("svg",{viewBox:`0 0 ${y} ${y}`},r("g",null,r("path",{class:`${h}-progress-graph-circle-rail`,d:f,"stroke-width":o,"stroke-linecap":"round",fill:"none",style:v})),r("g",null,r("path",{class:[`${h}-progress-graph-circle-fill`,0===c&&`${h}-progress-graph-circle-fill--empty`],d:m,"stroke-width":o,"stroke-linecap":"round",fill:"none",style:x}))))),d?r("div",null,n.default?r("div",{class:`${h}-progress-custom-content`,role:"none"},n.default()):"default"!==s?r("div",{class:`${h}-progress-icon`,"aria-hidden":!0},r(A,{clsPrefix:h},{default:()=>fe[s]})):r("div",{class:`${h}-progress-text`,style:{color:p},role:"none"},r("span",{class:`${h}-progress-text__percentage`},c),r("span",{class:`${h}-progress-text__unit`},u))):null)}}});function me(e,r,n=100){return`m ${n/2} ${n/2-e} a ${e} ${e} 0 1 1 0 ${2*e} a ${e} ${e} 0 1 1 0 -${2*e}`}const xe=e({name:"ProgressMultipleCircle",props:{clsPrefix:{type:String,required:!0},viewBoxWidth:{type:Number,required:!0},percentage:{type:Array,default:[0]},strokeWidth:{type:Number,required:!0},circleGap:{type:Number,required:!0},showIndicator:{type:Boolean,required:!0},fillColor:{type:Array,default:()=>[]},railColor:{type:Array,default:()=>[]},railStyle:{type:Array,default:()=>[]}},setup(e,{slots:n}){const t=c((()=>e.percentage.map(((r,n)=>`${Math.PI*r/100*(e.viewBoxWidth/2-e.strokeWidth/2*(1+2*n)-e.circleGap*n)*2}, ${8*e.viewBoxWidth}`))));return()=>{const{viewBoxWidth:i,strokeWidth:a,circleGap:o,showIndicator:l,fillColor:s,railColor:c,railStyle:d,percentage:p,clsPrefix:u}=e;return r("div",{class:`${u}-progress-content`,role:"none"},r("div",{class:`${u}-progress-graph`,"aria-hidden":!0},r("div",{class:`${u}-progress-graph-circle`},r("svg",{viewBox:`0 0 ${i} ${i}`},p.map(((e,n)=>r("g",{key:n},r("path",{class:`${u}-progress-graph-circle-rail`,d:me(i/2-a/2*(1+2*n)-o*n,0,i),"stroke-width":a,"stroke-linecap":"round",fill:"none",style:[{strokeDashoffset:0,stroke:c[n]},d[n]]}),r("path",{class:[`${u}-progress-graph-circle-fill`,0===e&&`${u}-progress-graph-circle-fill--empty`],d:me(i/2-a/2*(1+2*n)-o*n,0,i),"stroke-width":a,"stroke-linecap":"round",fill:"none",style:{strokeDasharray:t.value[n],strokeDashoffset:0,stroke:s[n]}}))))))),l&&n.default?r("div",null,r("div",{class:`${u}-progress-text`},n.default())):null)}}}),ye=e({name:"Progress",props:Object.assign(Object.assign({},p.props),{processing:Boolean,type:{type:String,default:"line"},gapDegree:Number,gapOffsetDegree:Number,status:{type:String,default:"default"},railColor:[String,Array],railStyle:[String,Array],color:[String,Array],viewBoxWidth:{type:Number,default:100},strokeWidth:{type:Number,default:7},percentage:[Number,Array],unit:{type:String,default:"%"},showIndicator:{type:Boolean,default:!0},indicatorPosition:{type:String,default:"outside"},indicatorPlacement:{type:String,default:"outside"},indicatorTextColor:String,circleGap:{type:Number,default:1},height:Number,borderRadius:[String,Number],fillBorderRadius:[String,Number],offsetDegree:Number}),setup(e){const r=c((()=>e.indicatorPlacement||e.indicatorPosition)),n=c((()=>e.gapDegree||0===e.gapDegree?e.gapDegree:"dashboard"===e.type?75:void 0)),{mergedClsPrefixRef:t,inlineThemeDisabled:i}=l(e),a=p("Progress","-progress",ue,q,e,t),o=c((()=>{const{status:r}=e,{common:{cubicBezierEaseInOut:n},self:{fontSize:t,fontSizeCircle:i,railColor:o,railHeight:l,iconSizeCircle:s,iconSizeLine:c,textColorCircle:d,textColorLineInner:p,textColorLineOuter:u,lineBgProcessing:g,fontWeightCircle:h,[W("iconColor",r)]:f,[W("fillColor",r)]:v}}=a.value;return{"--n-bezier":n,"--n-fill-color":v,"--n-font-size":t,"--n-font-size-circle":i,"--n-font-weight-circle":h,"--n-icon-color":f,"--n-icon-size-circle":s,"--n-icon-size-line":c,"--n-line-bg-processing":g,"--n-rail-color":o,"--n-rail-height":l,"--n-text-color-circle":d,"--n-text-color-line-inner":p,"--n-text-color-line-outer":u}})),s=i?h("progress",c((()=>e.status[0])),o,e):void 0;return{mergedClsPrefix:t,mergedIndicatorPlacement:r,gapDeg:n,cssVars:i?void 0:o,themeClass:null==s?void 0:s.themeClass,onRender:null==s?void 0:s.onRender}},render(){const{type:e,cssVars:n,indicatorTextColor:t,showIndicator:i,status:a,railColor:o,railStyle:l,color:s,percentage:c,viewBoxWidth:d,strokeWidth:p,mergedIndicatorPlacement:u,unit:g,borderRadius:h,fillBorderRadius:f,height:v,processing:m,circleGap:x,mergedClsPrefix:y,gapDeg:b,gapOffsetDegree:w,themeClass:C,$slots:$,onRender:k}=this;return null==k||k(),r("div",{class:[C,`${y}-progress`,`${y}-progress--${e}`,`${y}-progress--${a}`],style:n,"aria-valuemax":100,"aria-valuemin":0,"aria-valuenow":c,role:"circle"===e||"line"===e||"dashboard"===e?"progressbar":"none"},"circle"===e||"dashboard"===e?r(ve,{clsPrefix:y,status:a,showIndicator:i,indicatorTextColor:t,railColor:o,fillColor:s,railStyle:l,offsetDegree:this.offsetDegree,percentage:c,viewBoxWidth:d,strokeWidth:p,gapDegree:void 0===b?"dashboard"===e?75:0:b,gapOffsetDegree:w,unit:g},$):"line"===e?r(he,{clsPrefix:y,status:a,showIndicator:i,indicatorTextColor:t,railColor:o,fillColor:s,railStyle:l,percentage:c,processing:m,indicatorPlacement:u,unit:g,fillBorderRadius:f,railBorderRadius:h,height:v},$):"multiple-circle"===e?r(xe,{clsPrefix:y,strokeWidth:p,railColor:o,fillColor:s,railStyle:l,viewBoxWidth:d,percentage:c,showIndicator:i,circleGap:x},$):null)}}),be={class:"container"},we={class:"control"},Ce={key:0},$e={key:1},ke={style:{width:"min(400px, 100%)"}},Se={class:"log"},ze={key:0,class:"filter"},Pe={key:1,class:"result"},Re=ie(e({__name:"FindSameRoom",setup(e){const r=s(X.listServers()),n=s(0),t=s("info"),i=s([]),a=s(!1),o=s(!0),l=s([]),c=s({hideAllNotAutoRecord:!1,hideAllAutoRecord:!1,hideOnlyOneAutoRecord:!0});function d(){o.value=!o.value}function p(e){let r=0;return e.recorders.forEach((e=>{e.autoRecord&&r++})),(!c.value.hideAllAutoRecord||r!=e.recorders.length)&&((!c.value.hideAllNotAutoRecord||0!=r)&&(!c.value.hideOnlyOneAutoRecord||1!=r))}function u(){a.value=!0,function(){i.value.push("开始扫描");let e=0;const t={};r.value.forEach((async a=>{var s,c;try{const e={};null==(s=a.extraHeaders)||s.forEach((r=>{e[r.key]=r.value})),"basic"===(null==(c=a.auth)?void 0:c.type)&&(e.Authorization=`Basic ${btoa(`${a.auth.username}:${a.auth.password}`)}`);const r=new Y(a.path,e,a.id);i.value.push(`拉取 ${a.name} 的房间信息 开始...`);(await r.graphql("q","query q{ r:rooms{o:objectId n:name rc:roomConfig{a:autoRecord i:roomId}}}",null)).r.forEach((async e=>{t[e.rc.i]||(t[e.rc.i]={name:e.n,recorders:[]}),t[e.rc.i].recorders.push({id:a.id,autoRecord:e.rc.a})})),i.value.push(`拉取 ${a.name} 的房间信息 完成`)}catch(d){i.value.push(`拉取 ${a.name} 的房间信息 出错`),console.error(d)}if(e++,n.value=e/r.value.length*90,e==r.value.length){const e=[];for(const r in t)if(Object.prototype.hasOwnProperty.call(t,r)){const n=t[r];n.recorders.length>1&&e.push({roomId:r,name:n.name,recorders:n.recorders})}l.value=e,i.value.push("扫描完成"),n.value=100,o.value=!1}}))}()}return(e,s)=>(V(),E("div",be,[T("div",we,[a.value?(V(),E("p",$e,"共有"+L(r.value.length)+"个录播姬",1)):(V(),E("p",Ce,[j("共有"+L(r.value.length)+"个录播姬，点击",1),F(G(Z),{onClick:u},{default:U((()=>[j("开始")])),_:1}),j("扫描重复直播间")])),T("div",ke,[F(G(ye),{type:"line","show-indicator":!1,percentage:n.value,status:t.value},null,8,["percentage","status"])]),T("div",Se,[o.value?(V(),M(G(Z),{key:0,quaternary:"",size:"tiny",onClick:d},{default:U((()=>[j("隐藏日志")])),_:1})):(V(),M(G(Z),{key:1,quaternary:"",size:"tiny",onClick:d},{default:U((()=>[j("显示日志")])),_:1})),F(G(Q),{show:o.value},{default:U((()=>[(V(!0),E(J,null,K(i.value,((e,r)=>(V(),E("p",{key:r},L(e),1)))),128))])),_:1},8,["show"])])]),l.value.length>0?(V(),E("div",ze,[j(" 过滤： "),F(G(ee),{checked:c.value.hideOnlyOneAutoRecord,"onUpdate:checked":s[0]||(s[0]=e=>c.value.hideOnlyOneAutoRecord=e)},{default:U((()=>[j(" 隐藏只有一个自动录制的房间 ")])),_:1},8,["checked"]),F(G(ee),{checked:c.value.hideAllAutoRecord,"onUpdate:checked":s[1]||(s[1]=e=>c.value.hideAllAutoRecord=e)},{default:U((()=>[j(" 隐藏全部开启自动录制的房间 ")])),_:1},8,["checked"]),F(G(ee),{checked:c.value.hideAllNotAutoRecord,"onUpdate:checked":s[2]||(s[2]=e=>c.value.hideAllNotAutoRecord=e)},{default:U((()=>[j(" 隐藏全部禁用录制的房间 ")])),_:1},8,["checked"])])):H("",!0),l.value.length>0?(V(),E("div",Pe,[F(G(ce),null,{default:U((()=>[(V(!0),E(J,null,K(l.value,(e=>(V(),E(J,null,[p(e)?(V(),M(G(pe),{title:e.roomId+" - "+e.name,name:e.roomId,key:e.roomId},{default:U((()=>[F(G(re),{"x-gap":"12","y-gap":"12",cols:"1 750:2 1100:3 1450:4 1800:5 2150:6 2500:7 2850:8"},{default:U((()=>[(V(!0),E(J,null,K(e.recorders,(e=>(V(),M(G(ne),{key:e.id},{default:U((()=>{var n,t;return[F(G(te),{title:null==(t=e.id,n=r.value.find((e=>e.id==t)))?void 0:n.name},{default:U((()=>[j(" 自动录制："+L(e.autoRecord?"是":"否"),1)])),_:2},1032,["title"])]})),_:2},1024)))),128))])),_:2},1024)])),_:2},1032,["title","name"])):H("",!0)],64)))),256))])),_:1})])):H("",!0)]))}}),[["__scopeId","data-v-738e5067"]]);export{Re as default};
