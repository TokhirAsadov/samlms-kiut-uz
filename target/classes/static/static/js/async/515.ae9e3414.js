/*! For license information please see 515.ae9e3414.js.LICENSE.txt */
(self.webpackChunkkiut_client=self.webpackChunkkiut_client||[]).push([["515"],{95774:function(n,t,e){"use strict";e.r(t),e.d(t,{CircularProgressbar:function(){return i}});var l=e("67294"),o=function(n,t){return(o=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var e in t)t.hasOwnProperty(e)&&(n[e]=t[e])})(n,t)};function r(n){var t=n.className,e=n.counterClockwise,o=n.dashRatio,r=n.pathRadius,i=n.strokeWidth,a=n.style;return(0,l.createElement)("path",{className:t,style:Object.assign({},a,function(n){var t=n.counterClockwise,e=n.dashRatio,l=2*Math.PI*n.pathRadius,o=(1-e)*l;return{strokeDasharray:l+"px "+l+"px",strokeDashoffset:(t?-o:o)+"px"}}({pathRadius:r,dashRatio:o,counterClockwise:e})),d:function(n){var t=n.pathRadius,e=n.counterClockwise,l=e?1:0;return"\n      M 50,50\n      m 0,-"+t+"\n      a "+t+","+t+" "+l+" 1 1 0,"+2*t+"\n      a "+t+","+t+" "+l+" 1 1 0,-"+2*t+"\n    "}({pathRadius:r,counterClockwise:e}),strokeWidth:i,fillOpacity:0})}var i=function(n){function t(){return null!==n&&n.apply(this,arguments)||this}return!function(n,t){function e(){this.constructor=n}o(n,t),n.prototype=null===t?Object.create(t):(e.prototype=t.prototype,new e)}(t,n),t.prototype.getBackgroundPadding=function(){return this.props.background?this.props.backgroundPadding:0},t.prototype.getPathRadius=function(){return 50-this.props.strokeWidth/2-this.getBackgroundPadding()},t.prototype.getPathRatio=function(){var n=this.props,t=n.value,e=n.minValue,l=n.maxValue;return(Math.min(Math.max(t,e),l)-e)/(l-e)},t.prototype.render=function(){var n=this.props,t=n.circleRatio,e=n.className,o=n.classes,i=n.counterClockwise,a=n.styles,u=n.strokeWidth,d=n.text,s=this.getPathRadius(),c=this.getPathRatio();return(0,l.createElement)("svg",{className:o.root+" "+e,style:a.root,viewBox:"0 0 100 100","data-test-id":"CircularProgressbar"},this.props.background?(0,l.createElement)("circle",{className:o.background,style:a.background,cx:50,cy:50,r:50}):null,(0,l.createElement)(r,{className:o.trail,counterClockwise:i,dashRatio:t,pathRadius:s,strokeWidth:u,style:a.trail}),(0,l.createElement)(r,{className:o.path,counterClockwise:i,dashRatio:c*t,pathRadius:s,strokeWidth:u,style:a.path}),d?(0,l.createElement)("text",{className:o.text,style:a.text,x:50,y:50},d):null)},t.defaultProps={background:!1,backgroundPadding:0,circleRatio:1,classes:{root:"CircularProgressbar",trail:"CircularProgressbar-trail",path:"CircularProgressbar-path",text:"CircularProgressbar-text",background:"CircularProgressbar-background"},counterClockwise:!1,className:"",maxValue:100,minValue:0,strokeWidth:8,styles:{root:{},trail:{},path:{},text:{},background:{}},text:""},t}(l.Component)},35255:function(n,t,e){"use strict";e.r(t);var l=e("58865");e("33948"),e("88449"),e("19894"),e("2490"),e("57640"),e("9924"),e("57658");var o=e("85893"),r=e("67294"),i=e("71893"),a=e("16393"),u=e("79101"),d=e("30981"),s=e("27233"),c=e("50533"),p=e("30381"),f=e.n(p),v=e("57024"),m=e("92120"),h=e("55693"),x=e("7104");function g(){let n=(0,l._)(["\n  margin: 10px 0 10px;\n  width: 100%;\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 30px;\n  ","\n  ","\n  ","\n  ","\n\n"]);return g=function(){return n},n}function b(){let n=(0,l._)(["\n  width: 100%;\n  padding: 1rem;\n"]);return b=function(){return n},n}let C=i.default.div(g(),(0,v.large)({gridTemplateColumns:" repeat(3, 1fr)"}),(0,v.medium)({gridTemplateColumns:" repeat(2, 1fr)"}),(0,v.small)({gridTemplateColumns:" repeat(2, 1fr)"}),(0,v.extrasmall)({gridTemplateColumns:" repeat(1, 1fr)",gap:"20px"})),y=i.default.div(b());t.default=()=>{let[n,t]=(0,r.useState)([]),[e,l]=(0,r.useState)(0),i=(0,c.useDispatch)(),[p,v]=(0,r.useState)(!1),{headers:g}=(0,a.getHeaders)();(0,r.useEffect)(()=>{b(),l(0),s.default.get(a.BASE_URL+a.DEKAN.GET+"?endTime=".concat(f()(new Date).format("yyyy.MM.DD")," 23:59&startTime=").concat(f()(new Date).format("yyyy.MM.DD")," 00:00"),{headers:g}).then(n=>{var e,o,r,i,a,u,d,s;let c=[],p=0,f=0;null===(o=n.data)||void 0===o||null===(e=o.filter(n=>1===n.level))||void 0===e||e.map(n=>{p+=Number(n.comeCount),f+=Number(n.allCount)}),c.push({level:1,comeCount:p,allCount:f});let m=0,h=0;null===(i=n.data)||void 0===i||null===(r=i.filter(n=>2===n.level))||void 0===r||r.map(n=>{m+=Number(n.comeCount),h+=Number(n.allCount)}),c.push({level:2,comeCount:m,allCount:h});let x=0,g=0;null===(u=n.data)||void 0===u||null===(a=u.filter(n=>3===n.level))||void 0===a||a.map(n=>{x+=Number(n.comeCount),g+=Number(n.allCount)}),c.push({level:3,comeCount:x,allCount:g});let b=0,C=0;null===(s=n.data)||void 0===s||null===(d=s.filter(n=>4===n.level))||void 0===d||d.map(n=>{b+=Number(n.comeCount),C+=Number(n.allCount)}),c.push({level:4,comeCount:b,allCount:C}),t(c),(null==c?void 0:c.length)===4&&v(!0),l(0),n.data.map(n=>{null!==n.comeCount&&l(t=>t+parseInt(n.comeCount))})}).catch(n=>{v(!0)})},[]);let b=async()=>{await s.default.get(a.BASE_URL+"/education/educationYearsForSelected",{headers:g}).then(n=>{var t,e;i((0,m.fetchEducationYear)(null==n?void 0:null===(e=n.data)||void 0===e?void 0:null===(t=e.obj)||void 0===t?void 0:t[0]))}).catch(n=>{})};return(0,o.jsxs)(y,{children:[!0===p?(0,o.jsx)(C,{children:n&&(null==n?void 0:n.map(n=>(0,o.jsx)(u.default,{course:n.level,comeCount:n.comeCount,allCount:n.allCount},n.level)))}):(0,o.jsx)(C,{children:Array.from({length:4}).map(n=>(0,o.jsx)(h.default,{sx:{height:"150px"},children:(0,o.jsx)(x.Skeleton,{sx:{transform:"scale(1)",height:"150px"}})},n))}),(0,o.jsx)(d.default,{allComeCount:e})]})}},79101:function(n,t,e){"use strict";e.r(t);var l=e("58865"),o=e("85893");e("67294");var r=e("71893"),i=e("95774");e("59758");var a=e("16393");function u(){let n=(0,l._)(["\n    width: 80px !important;\n    height: 80px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n"]);return u=function(){return n},n}function d(){let n=(0,l._)(["\n    font-size: 30px;\n    font-weight: 600;\n"]);return d=function(){return n},n}function s(){let n=(0,l._)(["\n    font-size: 14px;\n    font-weight: 300;\n"]);return s=function(){return n},n}function c(){let n=(0,l._)(["\n    display: flex;\n    justify-content: flex-start;\n    flex-direction: column;\n    color: ",";\n"]);return c=function(){return n},n}function p(){let n=(0,l._)(["\n    position: relative;\n    width: 100%;\n    min-height: 120px;\n    background-color: #fff;\n    border-radius: 10px;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 5px 20px;\n    cursor: pointer;\n\n"]);return p=function(){return n},n}let f=r.default.span(u()),v=r.default.span(d()),m=r.default.span(s()),h=r.default.div(c(),n=>n.color),x=r.default.div(p());t.default=n=>{let{course:t,comeCount:e,allCount:l}=n;return(0,o.jsxs)(x,{children:[(0,o.jsxs)(h,{color:1===t?a.mainColor:2===t?"#FD8539":3===t?"#2ED480":"#FE6D8E",children:[(0,o.jsxs)(m,{children:["Course - ",t]}),(0,o.jsx)(v,{children:e}),(0,o.jsx)(v,{children:l})]}),e&&l&&(0,o.jsx)(f,{children:(0,o.jsx)(i.CircularProgressbar,{value:Math.ceil(e/l*100),text:"".concat(Math.ceil(e/l*100),"%"),styles:{pathTransition:"none",path:{stroke:1===t?a.mainColor:2===t?"#FD8539":3===t?"#2ED480":"#FE6D8E",strokeWidth:"20px",transformOrigin:"center center",filter:"drop-shadow(2px 4px 6px ".concat(1===t?a.mainColor:2===t?"#FD8539":3===t?"#2ED480":"#FE6D8E",")")},root:{width:"4rem",overflow:"visible"},text:{fill:"".concat(1===t?a.mainColor:2===t?"#FD8539":3===t?"#2ED480":"#FE6D8E"),fontSize:"20px"},trail:{strokeWidth:"24px",transformOrigin:"center center",stroke:"#F2F6FC"}}})})]})}},92921:function(n,t,e){"use strict";e.r(t);var l=e("58865");e("33948"),e("25387"),e("72608"),e("2490"),e("31672"),e("59461"),e("57658"),e("57640"),e("9924"),e("33792");var o=e("85893"),r=e("67294"),i=e("45697"),a=e.n(i),u=e("71893"),d=e("16393");e("1490");var s=e("27233"),c=e("50533"),p=e("30381"),f=e.n(p),v=e("55693"),m=e("44025"),h=e("42154"),x=e("32392"),g=e("61261"),b=e("89583"),C=e("3506"),y=e("57024"),j=e("71982"),k=e("33217"),w=e("22092");e("18351");var _=e("72625"),D=e("78951"),N=e("37595"),E=e("94718");function S(){let n=(0,l._)(["\n    display: flex;\n    justify-content: end;\n    margin-bottom: 20px;\n"]);return S=function(){return n},n}function R(){let n=(0,l._)(["\n    margin: 0 auto;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 30px;\n    height: 30px;\n    background-color: red;\n    color: white;\n    border-radius: 50%;\n"]);return R=function(){return n},n}function T(){let n=(0,l._)(["\n    h6 {\n        font-size: 11px;\n        font-weight: bold;\n        color: #000000;\n    }\n\n    p {\n        font-size: 10px;\n        font-weight: normal;\n        color: silver;\n    }\n\n"]);return T=function(){return n},n}function P(){let n=(0,l._)(["\n    width: 30px;\n    height: 30px;\n    border-radius: 50%;\n    margin: 0 auto;\n\n"]);return P=function(){return n},n}function F(){let n=(0,l._)(["\n    margin-top: 15px;\n    display: grid;\n    grid-template-columns: 0.2fr 1fr 0.2fr;\n    align-items: center;\n    gap: 5px;\n\n"]);return F=function(){return n},n}function M(){let n=(0,l._)(["\n    margin-top: 20px;\n\n    h5 {\n        text-align: center;\n    }\n"]);return M=function(){return n},n}function O(){let n=(0,l._)(["\n    font-size: 15px;\n    font-weight: bold;\n    color: ",";\n"]);return O=function(){return n},n}function W(){let n=(0,l._)(["\n    border-radius: 8px;\n    background-color: #fff;\n    padding: 10px;\n    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;\n"]);return W=function(){return n},n}function A(){let n=(0,l._)(["\n    font-size: 13px;\n    width: 200px !important;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    cursor: pointer;\n    border-radius: 8px !important;;\n    color: ",";\n    padding: 5px 20px !important;\n    height: 42px !important;\n    margin: 5px !important;\n    box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;\n\n    &:hover {\n        color: #ffffff !important;\n        background-color: #5093f1 !important;\n    }\n\n    &.Mui-selected {\n        color: #ffffff !important;\n        background-color: #5093f1 !important;\n    }\n"]);return A=function(){return n},n}function z(){let n=(0,l._)(["\n    width: ",";\n    height: 100%;\n    background-color: ",";\n"]);return z=function(){return n},n}function Y(){let n=(0,l._)(["\n    display: flex;\n    width: 100%;\n    overflow: hidden;\n    height: 8.5px;\n    border-radius: 5px;\n"]);return Y=function(){return n},n}function B(){let n=(0,l._)(["\n    display: flex;\n    align-items: center;\n    gap: 5px;\n    color: ",";\n"]);return B=function(){return n},n}function U(){let n=(0,l._)(["\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n"]);return U=function(){return n},n}function I(){let n=(0,l._)(["\n    font-size: 14px;\n"]);return I=function(){return n},n}function G(){let n=(0,l._)(["\n    width: 100%;\n"]);return G=function(){return n},n}function L(){let n=(0,l._)(["\n    width: 100%;\n    padding: 10px;\n    background-color: #fff;\n    display: flex;\n    align-items: center;\n    margin: 0 auto;\n    gap: 10px;\n    border-radius: 5px;\n    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;\n    cursor: pointer;\n    transition: 0.06s;\n\n    &:hover {\n        transform: scale(1.05);\n    }\n"]);return L=function(){return n},n}function H(){let n=(0,l._)(["\n    width: 100%;\n    min-width: 300px;\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr 1fr;\n    gap: 40px;\n    margin-bottom: 40px;\n    ","\n    ","\n"]);return H=function(){return n},n}function V(){let n=(0,l._)(["\n    width: 100%;\n    min-width: 300px;\n    display: grid;\n    grid-template-columns: auto auto auto auto;\n    gap: 40px;\n    ","\n    ","\n"]);return V=function(){return n},n}function q(){let n=(0,l._)(["\n    width: 100%;\n    margin-top: 10px;\n    color: ",";\n"]);return q=function(){return n},n}let K=u.default.div(S()),J=u.default.div(R()),Q=u.default.div(T()),X=u.default.div(P()),Z=u.default.div(F()),$=u.default.div(M()),nn=u.default.p(O(),n=>n.cl),nt=u.default.div(W()),ne=u.default.div(A(),d.mainColor),nl=u.default.div(z(),n=>n.width,n=>n.bgcolor),no=u.default.div(Y()),nr=u.default.h6(B(),n=>n.color),ni=u.default.div(U()),na=u.default.h6(I()),nu=u.default.div(G()),nd=u.default.div(L()),ns=u.default.div(H(),(0,y.small)({gridTemplateColumns:"auto auto"}),(0,y.extrasmall)({gridTemplateColumns:"auto"})),nc=u.default.div(V(),(0,y.small)({gridTemplateColumns:"auto auto"}),(0,y.extrasmall)({gridTemplateColumns:"auto"})),np=u.default.div(q(),d.mainColor);t.default=()=>{let[n,t]=(0,r.useState)([]),e=(0,c.useSelector)(n=>{var t;return null==n?void 0:null===(t=n.dekanat)||void 0===t?void 0:t.dekanat}),l=(0,c.useSelector)(n=>{var t;return null==n?void 0:null===(t=n.educationYear)||void 0===t?void 0:t.educationYear}),{headers:i}=(0,d.getHeaders)(),[u,p]=(0,r.useState)([]),[y,S]=(0,r.useState)(0),[R,T]=(0,r.useState)(!0),P=n=>{A(n.target.value)};function F(n,t){return n&&t?Math.ceil(100*t/n):0}function M(n){let{children:t,value:e,index:l,...r}=n;return(0,o.jsx)("div",{role:"tabpanel",hidden:e!==l,id:"simple-tabpanel-".concat(l),"aria-labelledby":"simple-tab-".concat(l),...r,children:e===l&&(0,o.jsx)(v.default,{sx:{p:0},children:(0,o.jsx)("div",{children:t})})})}(0,r.useEffect)(()=>{s.default.get(d.BASE_URL+d.DEKAN.GET_GROUP_STATISTICS+"?endTime=".concat(f()(new Date).format("yyyy.MM.DD")," 23%3A59&&startTime=").concat(f()(new Date).format("yyyy.MM.DD")," 00%3A00"),{headers:i}).then(n=>{var t;p(null===(t=n.data)||void 0===t?void 0:t.reduce((n,t)=>{let{name:e,allCount:l,comeCount:o,level:r}=t,i=e.split("-")[0],a=n.find(n=>n.title===i);return a?a.groups.push({name:e,allCount:l,comeCount:o,level:r}):n.push({title:i,groups:[{name:e,allCount:l,comeCount:o,level:r}]}),n},[]))}).catch(n=>{})},[]),M.propTypes={children:a().node,index:a().number.isRequired,value:a().number.isRequired};let O=[5,10,20,30,40,50],[W,A]=(0,r.useState)(O[0]),z=[1,2,3,4,5],[Y,B]=(0,r.useState)({date:new Date,dateFrom:f()().startOf("isoWeek").toDate(),dateTo:f()().endOf("isoWeek").toDate(),weekNumber:f()().isoWeek(),weekDay:f()().day()}),[U,I]=(0,r.useState)([]),[G,L]=(0,r.useState)([]);(0,r.useEffect)(()=>{var n,o,r,i,a,c;t([]),T(!0),(null==u?void 0:u.length)>0&&e&&l&&s.default.get("".concat(d.BASE_URL,"/timeTableByWeekOfYear/studentStatisticsWithWeekOfEduYear/").concat(null==l?void 0:l.id,"?facultyId=").concat(null==e?void 0:null===(o=e.faculties)||void 0===o?void 0:null===(n=o.find(n=>{var t,e;return(null==n?void 0:n.shortName)===(null==u?void 0:null===(e=u[y])||void 0===e?void 0:null===(t=e.title)||void 0===t?void 0:t.substring(0,3))}))||void 0===n?void 0:n.id,"&facultyShortName=").concat(null==e?void 0:null===(i=e.faculties)||void 0===i?void 0:null===(r=i.find(n=>{var t,e;return(null==n?void 0:n.shortName)===(null==u?void 0:null===(e=u[y])||void 0===e?void 0:null===(t=e.title)||void 0===t?void 0:t.substring(0,3))}))||void 0===r?void 0:r.shortName,"&eduType=").concat(null==e?void 0:null===(a=e.eduType)||void 0===a?void 0:a.name,"&eduTypeId=").concat(null==e?void 0:null===(c=e.eduType)||void 0===c?void 0:c.id)).then(n=>{var e,l,o,r,i,a;I(null==n?void 0:null===(l=n.data)||void 0===l?void 0:null===(e=l.obj)||void 0===e?void 0:e.map(n=>{let t=[];return null==n||n.map(n=>{z.map(e=>{var l,o,r,i;(null==n?void 0:n.sortNumber)===(null==Y?void 0:Y.weekNumber)?e<=(null==Y?void 0:Y.weekDay)&&t.push(null==n?void 0:null===(o=n[e])||void 0===o?void 0:null===(l=o.statistics)||void 0===l?void 0:l.map(t=>({...t,day:e,week:null==n?void 0:n.sortNumber}))):t.push(null==n?void 0:null===(i=n[e])||void 0===i?void 0:null===(r=i.statistics)||void 0===r?void 0:r.map(t=>({...t,day:e,week:null==n?void 0:n.sortNumber})))})}),Object.values(function(n){return n.reduce((n,t)=>{let e=null==t?void 0:t.fullName;return n[e]?n[e].push(t):n[e]=[t],n},{})}(null==t?void 0:t.flat()))})),L(null==n?void 0:null===(r=n.data)||void 0===r?void 0:null===(o=r.secondObj)||void 0===o?void 0:o.map(n=>null==n?void 0:n.map(n=>({...n,count:Object.values(function(n){return n.reduce((n,t)=>(n[t]?n[t].push(t):n[t]=[t],n),{})}(null==n?void 0:n.count))})))),null==n||null===(a=n.data)||void 0===a||null===(i=a.obj)||void 0===i||i.map(n=>{n.map(n=>{(null==n?void 0:n.sortNumber)===(null==Y?void 0:Y.weekNumber)?z.map(e=>{e<=(null==Y?void 0:Y.weekDay)&&t(t=>{var l;return[...t,...null==n?void 0:null===(l=n[e])||void 0===l?void 0:l.statistics]})}):z.map(e=>{t(t=>{var l;return[...t,...null==n?void 0:null===(l=n[e])||void 0===l?void 0:l.statistics]})})})}),T(!1)}).catch(n=>{T(!1)})},[l,y,u]);(0,r.useEffect)(()=>{},[y]);let H=n=>{if(!n||0===n.length)return;let t=n.sort((n,t)=>n.name.toUpperCase().localeCompare(t.name.toUpperCase())),e=[["\u2116","Group Name","All Students","Students Came","Percent","Level","".concat(f()().format("DD.MM.YYYY HH:mm"))],...t.map((n,t)=>[t+1,n.name,n.allCount,n.comeCount||0,F(n.allCount,n.comeCount||0),n.level])],l=N.utils.book_new(),o=N.utils.aoa_to_sheet(e);N.utils.book_append_sheet(l,o,"GroupData");let r="".concat(t[0].name.substring(0,t[0].name.indexOf("-")),"-groups.xlsx");N.writeFile(l,r)};return(0,o.jsxs)(np,{id:"chart",children:[(0,o.jsx)("div",{className:"dekantabs",children:(0,o.jsx)(k.default,{variant:"scrollable",scrollButtons:!0,allowScrollButtonsMobile:!0,value:y,onChange:(n,t)=>{S(t)},indicatorColor:"","aria-label":"basic tabs example",children:null==u?void 0:u.map((n,t)=>{var e;return(0,o.jsx)(w.default,{component:ne,label:null==n?void 0:n.title,...(e=t,{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)})},t)})})}),null==u?void 0:u.map((n,t)=>{var e,l;return(0,o.jsxs)(M,{value:y,index:t,children:[(0,o.jsx)(K,{children:(0,o.jsxs)(h.default,{sx:{minWidth:100},size:"small",children:[(0,o.jsx)(x.default,{id:"select-label",children:"Size"}),(0,o.jsx)(m.default,{labelId:"select-label",id:"select-small-size",value:W,label:"Size",onChange:P,children:O.map((n,t)=>(0,o.jsx)(g.default,{value:n,children:n},t))})]})}),(0,o.jsxs)(ns,{children:[R&&Array.from({length:4}).map((n,t)=>(0,o.jsxs)(nt,{children:[(0,o.jsxs)(nn,{cl:0===t&&"".concat(d.mainColor)||1===t&&"#FD8539"||2===t&&"#2ED480"||3===t&&"#FE6D8E",children:[t+1,"-Course"]}),(0,o.jsx)($,{children:(0,o.jsxs)(v.default,{sx:{width:"100%"},children:[(0,o.jsx)(j.default,{}),(0,o.jsx)(j.default,{animation:"wave"}),(0,o.jsx)(j.default,{animation:!1})]})})]},t)),!R&&(null==U?void 0:U.map((n,t)=>{var e,l,r;return(0,o.jsxs)(nt,{children:[(0,o.jsxs)(nn,{cl:0===t&&"".concat(d.mainColor)||1===t&&"#FD8539"||2===t&&"#2ED480"||3===t&&"#FE6D8E",children:[t+1,"-Course"]}),(0,o.jsx)($,{children:n.length>0?null==n?void 0:null===(r=n.sort(function(n,t){return(null==n?void 0:n.length)<(null==t?void 0:t.length)?1:(null==n?void 0:n.length)>(null==t?void 0:t.length)?-1:0}))||void 0===r?void 0:null===(l=r.map((n,e)=>{let l=0;return null==n||n.map(n=>{let e=f()().isoWeek(),o=f()().format("DD");if(e>n.week&&Number(o)>n.day){var r,i,a,u,d,s,c,p;(null==G?void 0:null===(u=G[t])||void 0===u?void 0:null===(a=u.find(t=>(null==t?void 0:t.week)===(null==n?void 0:n.week)&&t.groupName===(null==n?void 0:n.groupName)))||void 0===a?void 0:null===(i=a.count)||void 0===i?void 0:null===(r=i[(null==n?void 0:n.day)-1])||void 0===r?void 0:r.length)&&(l+=null==G?void 0:null===(p=G[t])||void 0===p?void 0:null===(c=p.find(t=>(null==t?void 0:t.week)===(null==n?void 0:n.week)&&(null==t?void 0:t.groupName)===(null==n?void 0:n.groupName)))||void 0===c?void 0:null===(s=c.count)||void 0===s?void 0:null===(d=s[(null==n?void 0:n.day)-1])||void 0===d?void 0:d.length)}}),{...n,counter:l}}))||void 0===l?void 0:null===(e=l.sort(function(n,t){return(null==n?void 0:n.counter)<(null==t?void 0:t.counter)?1:(null==n?void 0:n.counter)>(null==t?void 0:t.counter)?-1:0}))||void 0===e?void 0:e.map((n,t)=>{var e,l;return t<W&&(0,o.jsxs)(Z,{children:[(0,o.jsx)(X,{children:(0,o.jsx)("img",{style:{width:"100%"},src:(null==n?void 0:n.avatarimg)?null==n?void 0:n.avatarimg:_,alt:"avatar"})}),(0,o.jsxs)(Q,{children:[(0,o.jsx)("h6",{children:null==n?void 0:null===(e=n[0])||void 0===e?void 0:e.fullName}),(0,o.jsx)("p",{children:null==n?void 0:null===(l=n[0])||void 0===l?void 0:l.groupName})]}),(0,o.jsx)(J,{children:null==n?void 0:n.counter})]},t)}):(0,o.jsx)(v.default,{children:(0,o.jsx)(D.default,{w:150,h:130})})})]},t)}))]}),(0,o.jsx)(nc,{children:null===(l=n.groups)||void 0===l?void 0:null===(e=l.sort((n,t)=>{let e=n.name.toUpperCase(),l=t.name.toUpperCase();return e<l?-1:e>l?1:0}))||void 0===e?void 0:e.map((n,t)=>(0,o.jsx)(nd,{children:(0,o.jsxs)(nu,{children:[(0,o.jsxs)(na,{children:[(0,o.jsx)(b.FaLayerGroup,{})," ",n.name]}),(0,o.jsxs)(ni,{children:[(0,o.jsx)(nr,{color:"#9cd365",children:n.allCount}),(0,o.jsxs)(nr,{color:d.mainColor,children:[F(n.allCount,n.comeCount),"%"]})]}),(0,o.jsxs)(no,{children:[(0,o.jsx)(C.default,{title:"kelgan:".concat(n.comeCount),children:(0,o.jsx)(nl,{bgcolor:d.mainColor,width:"".concat(F(n.allCount,n.comeCount),"%")})}),(0,o.jsx)(C.default,{title:"kelmagan:".concat(n.allCount-n.comeCount),children:(0,o.jsx)(nl,{bgcolor:"red",width:"".concat(100-F(n.allCount,n.comeCount),"%")})})]})]})},t))}),(0,o.jsx)(v.default,{display:"flex",justifyContent:"end",marginY:2,children:(0,o.jsx)(E.default,{variant:"contained",onClick:()=>H(n.groups),children:"export to excel"})})]},t)})]})}},30981:function(n,t,e){"use strict";e.r(t);var l=e("58865"),o=e("85893");e("67294");var r=e("71893"),i=e("16393"),a=e("92921");function u(){let n=(0,l._)(["\n  min-height: 360px;\n  width: 100%;\n  border-radius: 10px;\n  margin-top: 15px!important;\n  padding: 10px!important;\n  background-color: #fff; \n  color: ",";\n"]);return u=function(){return n},n}let d=r.default.div(u(),i.mainColor);t.default=n=>{let{allComeCount:t}=n;return(0,o.jsx)(d,{children:(0,o.jsx)(a.default,{})})}},59758:function(n){},1490:function(n){},18351:function(n){}}]);