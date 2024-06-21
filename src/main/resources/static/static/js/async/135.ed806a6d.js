/*! For license information please see 135.ed806a6d.js.LICENSE.txt */
(self.webpackChunkkiut_client=self.webpackChunkkiut_client||[]).push([["135"],{87516:function(n,t,e){"use strict";e.r(t);var i=e("58865");e("33948"),e("57658"),e("25387"),e("72608"),e("2490");var o=e("85893"),l=e("67294"),r=e("71893"),a=e("50533"),d=e("2585"),u=e("16393"),s=e("76250"),c=e("27233"),f=e("90650"),p=e("97367"),x=e("55693"),h=e("79352"),m=e("89926"),v=e("57024");function g(){let n=(0,i._)(["\n  ","\n  ","\n  ","\n"]);return g=function(){return n},n}function b(){let n=(0,i._)(["\n  width: 30px;\n  height: 30px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: ",";\n  border-radius: 50%;\n  color: white;\n  font-size: 26px;\n  border: none;\n  position: absolute;\n  top: 10px;\n  right: 10px;\n"]);return b=function(){return n},n}function w(){let n=(0,i._)(["\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  margin-right: 10px;\n  font-size: 60px;\n  font-weight: 200;\n"]);return w=function(){return n},n}function y(){let n=(0,i._)(["\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  font-size: 30px;\n  font-weight: 500;\n"]);return y=function(){return n},n}function j(){let n=(0,i._)(["\n  width: 100px;\n  height: 100px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 40px;\n  background: #f7f7f7;\n  border-radius: 50%;\n"]);return j=function(){return n},n}function C(){let n=(0,i._)(["\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  font-size: 40px;\n"]);return C=function(){return n},n}function S(){let n=(0,i._)(["\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  gap: 50px;\n  flex-direction: column;\n  padding: 5px 20px!important;\n  margin-top: 10px!important;\n"]);return S=function(){return n},n}function k(){let n=(0,i._)(["\n  width: 450px;\n  border-radius: 0.75rem;\n  background-color: #fff;\n  min-height: 250px;\n  color: ",";\n  cursor: pointer;\n\n  &:hover{\n    box-shadow: rgba(99, 99, 99, 0.2) 0 2px 8px 0;\n  }\n"]);return k=function(){return n},n}function _(){let n=(0,i._)(["\n  width: 450px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 0.75rem;\n  background-color: #fff;\n  min-height: 250px;\n  \n  &:hover{\n    -webkit-box-shadow: 2px 3px 5px 1px rgba(81, 159, 219, 0.43);\n    -moz-box-shadow: 2px 3px 5px 1px rgba(81, 159, 219, 0.43);\n    box-shadow: 2px 3px 5px 1px rgba(81, 159, 219, 0.43);\n  }\n"]);return _=function(){return n},n}function z(){let n=(0,i._)(["\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  overflow: scroll;\n  flex-wrap: wrap;\n  gap: 20px;\n"]);return z=function(){return n},n}function I(){let n=(0,i._)(["\n  font-size: 22px;\n  color: ",";\n"]);return I=function(){return n},n}function D(){let n=(0,i._)(["\n  width: 100%;\n  margin-bottom: 20px!important;\n"]);return D=function(){return n},n}function N(){let n=(0,i._)(["\n  font-size: 24px;\n  color: ",";\n"]);return N=function(){return n},n}function R(){let n=(0,i._)(["\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  border-radius: 10px;\n  margin-top: 10px!important;\n  padding: 5px 10px!important;\n"]);return R=function(){return n},n}let B={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"80vw",height:"95vh",bgcolor:"#f7f7f7",boxShadow:24,borderRadius:3,outline:"none",p:2},E=r.default.div(g(),(0,v.medium)({width:"85vw !important",padding:"20px !important"}),(0,v.small)({width:"90vw !important",padding:"20px !important"}),(0,v.extrasmall)({width:"92vw !important",height:"90vh !important",padding:"15px !important"})),Y=(0,r.default)(f.motion.button)(b(),u.mainColor),H=r.default.div(w()),T=r.default.span(y()),A=r.default.span(j()),K=r.default.span(C()),L=r.default.div(S()),M=r.default.div(k(),u.mainColor),P=r.default.div(_()),F=r.default.div(z()),G=r.default.h4(I(),u.mainColor),O=r.default.div(D()),U=r.default.div(N(),u.mainColor),q=r.default.div(R());t.default=n=>{let{s:t}=n,e=(0,a.useSelector)(n=>{var e,i;return t?null==n?void 0:null===(e=n.secondBulim)||void 0===e?void 0:e.secondBulim:null==n?void 0:null===(i=n.bulim)||void 0===i?void 0:i.bulim}),[i,r]=(0,l.useState)([20,8]),[f,v]=(0,l.useState)(!0),[g,b]=(0,l.useState)(!1),{headers:w}=(0,u.getHeaders)();(0,l.useEffect)(()=>{c.default.get(u.BASE_URL+"/section/getStaffComeCountTodayStatistics?s="+t,{headers:w}).then(n=>{var t;let e=null==n?void 0:null===(t=n.data)||void 0===t?void 0:t.obj,i=[];(null==e?void 0:e.comeCount)!==null?i.push(null==e?void 0:e.comeCount):i.push(0),(null==e?void 0:e.comeCount)!==null?i.push((null==e?void 0:e.allCount)-(null==e?void 0:e.comeCount)):i.push(null==e?void 0:e.allCount),r(()=>i),v(!1)}).catch(n=>{})},[]);let y=()=>{b(!1)};return(0,o.jsx)(q,{children:(0,o.jsxs)(U,{children:[(0,o.jsx)(O,{children:(0,o.jsx)(G,{children:null==e?void 0:e.name})}),(0,o.jsxs)(F,{children:[(0,o.jsx)(M,{onClick:()=>{e&&b(!0)},children:(0,o.jsxs)(L,{children:[(0,o.jsx)(K,{children:(0,o.jsx)(A,{children:(0,o.jsx)(d.GiTeacher,{})})}),(0,o.jsxs)(T,{children:["Staffs",(0,o.jsx)(H,{children:e&&(null==i?void 0:i.reduce((n,t)=>n+t))?null==i?void 0:i.reduce((n,t)=>n+t):0})]})]})}),(0,o.jsx)(p.default,{open:g,onClose:y,"aria-labelledby":"keep-mounted-modal-title","aria-describedby":"keep-mounted-modal-description",children:(0,o.jsxs)(x.default,{sx:B,component:E,children:[(0,o.jsx)(Y,{onClick:y,whileHover:{rotate:180,scale:1.1},whileTap:{scale:.9},transition:{duration:.3},children:(0,o.jsx)(h.RiCloseLine,{})}),(0,o.jsx)("h2",{style:{textAlign:"center",color:u.mainColor},children:"Staff"}),(0,o.jsx)(m.default,{s:t})]})}),(0,o.jsx)(P,{children:(null==i?void 0:i.reduce((n,t)=>n+t))?(0,o.jsx)(s.default,{s:t,series:i,isSpinner:f}):"Not exists teachers"})]})]})})}},76250:function(n,t,e){"use strict";e.r(t);var i=e("58865");e("33948"),e("57640"),e("9924");var o=e("85893"),l=e("67294"),r=e("71893"),a=e("47229"),d=e("50533"),u=e("27233"),s=e("90650"),c=e("16393"),f=e("53432"),p=e("53669");function x(){let n=(0,i._)(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n"]);return x=function(){return n},n}let h=r.default.div(x());t.default=n=>{let{series:t,isSpinner:e,s:i}=n,[r,x]=(0,l.useState)(!1),[m,v]=(0,l.useState)(""),[g,b]=(0,l.useState)(!1),[w,y]=(0,l.useState)(""),[j,C]=(0,l.useState)(!1),S=(0,d.useSelector)(n=>{var t,e;return i?null==n?void 0:null===(t=n.secondBulim)||void 0===t?void 0:t.secondBulim:null==n?void 0:null===(e=n.bulim)||void 0===e?void 0:e.bulim}),[k,_]=(0,l.useState)({chart:{type:"donut",width:380,events:{dataPointSelection:function(n,t,e){1===e.dataPointIndex?b(!1):b(!0),1===e.dataPointIndex?y("Kelmaganlar"):y("Kelganlar"),C(!1),D(e.dataPointIndex,null==S?void 0:S.id),x(!0)}}},labels:["Kelganlar","Kelmaganlar"],title:{text:"Statistics Of Today",style:{fontSize:"12px",fontWeight:"bold",fontFamily:void 0,color:"".concat(c.mainColor)}},responsive:[{breakpoint:480,options:{chart:{width:200},legend:{position:"bottom"}}}],colors:[function(n){let{value:t,seriesIndex:e,w:i}=n;return"".concat(c.mainColor)},function(n){let{value:t,seriesIndex:e,w:i}=n;return t<i.config.series[0]/5?(v("#fff700"),"#fff700"):t>i.config.series[0]/5&&t<i.config.series[0]/2?(v("#f88017"),"#f88017"):(v("#f00"),"#f00")}],plotOptions:{pie:{expandOnClick:!1,size:400,height:"5%",donut:{size:"55%",labels:{show:!0,total:{show:!0,showAlways:!0,fontSize:"18px",color:"".concat(c.mainColor)}}}}}}),[z,I]=(0,l.useState)([]);(0,l.useEffect)(()=>{},[i]);let D=n=>{u.default.get(c.BASE_URL+"/section/getStatisticsForSectionDashboard?index="+n+"&sectionId="+(null==S?void 0:S.id)).then(n=>{var t,e;I(null==n?void 0:null===(e=n.data)||void 0===e?void 0:null===(t=e.obj)||void 0===t?void 0:t.map((n,t)=>({...n,id:t}))),C(!0)}).catch(n=>{})};return(0,o.jsx)(s.AnimateSharedLayout,{children:r?(0,o.jsx)(p.default,{setExpanded:()=>x(!1),isDefault:g,openColor:m,title:w,openTable:j,data:z}):(0,o.jsx)(s.motion.div,{layoutId:"kafedraId",style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"},children:(0,o.jsx)(h,{children:e?(0,o.jsx)(f.default,{}):(0,o.jsx)(a.default,{options:k,series:t,type:"donut",width:"350"})})})})}},53669:function(n,t,e){"use strict";e.r(t),e.d(t,{default:function(){return h}});var i=e("58865"),o=e("85893"),l=e("90650"),r=e("16356");e("67294");var a=e("30381"),d=e.n(a),u=e("71893"),s=e("53432"),c=e("16393"),f=e("51649");function p(){let n=(0,i._)(["\n  width: 100%;\n  min-height: 200px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin: 1.75rem 0 !important;\n  border-radius: 1rem;\n"]);return p=function(){return n},n}function x(){let n=(0,i._)(["\n  width: 100%;\n  display: flex;\n  gap: 10px;\n  margin: 5px !important;\n"]);return x=function(){return n},n}function h(n){let{data:t,setExpanded:e,openColor:i,isDefault:a,title:u,openTable:p}=n,x=[{field:"id",headerName:"ID",width:40,editable:!1},{field:"fullName",headerName:"Name",type:"string",width:300,editable:!1,renderCell:n=>{var t,e,i;return(0,o.jsxs)(v,{children:[(0,o.jsx)("img",{src:(null==n?void 0:null===(t=n.row)||void 0===t?void 0:t.photo)?c.BASE_URL+"/attachment/download/"+(null==n?void 0:null===(i=n.row)||void 0===i?void 0:null===(e=i.photo)||void 0===e?void 0:e.id):"",width:"50px",height:"50px",alt:null==n?void 0:n.value,style:{borderRadius:"50%"}}),(0,o.jsx)("span",{style:{display:"flex",alignItems:"center",justifyContent:"center",fontSize:"14px"},children:null==n?void 0:n.value})]})}},{field:"login",headerName:"Login",type:"string",width:300,editable:!1},{field:"email",headerName:"Email",type:"string",width:300,editable:!1},{field:"rfid",headerName:"RFID",type:"string",width:300,editable:!1},{field:"passport",headerName:"Passport",type:"string",width:300,editable:!1},{field:"time",headerName:"Kelgan vaqti \n".concat(d()(new Date).format("DD.MM.YYYY")),type:"string",width:180,editable:!1,renderCell:n=>{var t,e;return(0,o.jsx)(v,{children:(null==n?void 0:null===(t=n.row)||void 0===t?void 0:t.time)===null?"-":d()(null==n?void 0:null===(e=n.row)||void 0===e?void 0:e.time).format("DD.MM.YYYY HH:mm:ss")})}},{field:"positions",headerName:"Shtat birligi va lavozimi",type:"string",width:300,editable:!1}];return(0,o.jsxs)(l.motion.div,{className:"KafedraExpandedCard",style:{background:"".concat(a?"#0096DB":i),zIndex:"100",minHeight:"300px",position:"absolute",display:"flex"},transition:{duration:"0.2"},layoutId:"kafedraId",children:[(0,o.jsx)("div",{onClick:e,style:{width:"40px",height:"40px",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"50%",alignSelf:"flex-end",cursor:"pointer",color:"white",backgroundColor:"rgba(255,255,255,0.5)"},children:(0,o.jsx)(f.IoMdClose,{})}),(0,o.jsxs)("span",{children:[u," - ",null==t?void 0:t.length]}),(0,o.jsx)(m,{children:p?(0,o.jsx)(r.DataGrid,{density:"comfortable",style:{width:"100%",minHeight:"600px!important",borderRadius:"1rem",zIndex:"1000",backgroundColor:"#fff"},columns:x,rows:t,components:{Toolbar:r.GridToolbar},autoHeight:!0,pageSize:5,initialState:{...t.initialState,columns:{columnVisibilityModel:{id:!1,login:!1,card:!1,rfid:!1,email:!1,passport:!1}}}}):(0,o.jsx)(s.default,{})})]})}let m=u.default.div(p()),v=u.default.div(x())}}]);