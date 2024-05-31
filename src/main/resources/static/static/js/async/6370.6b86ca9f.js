/*! For license information please see 6370.6b86ca9f.js.LICENSE.txt */
(self.webpackChunkkiut_client=self.webpackChunkkiut_client||[]).push([["6370"],{75257:function(e,t,n){"use strict";n.r(t);var a=n("58865");n("33948"),n("57640"),n("9924");var l=n("85893"),i=n("67294"),r=n("71893"),d=n("16393"),o=n("27233"),s=n("72132"),u=n("16356"),c=n("57024"),h=n("89583"),m=n("7104"),p=n("94718"),g=n("78258"),f=n("55693");function x(){let e=(0,a._)(["\n    ","\n"]);return x=function(){return e},e}function T(){let e=(0,a._)(["\n    width: 250px;\n    height: 50px;\n    background: white;\n    font-size: 14px;\n    border-radius: 7px;\n    padding: 5px;\n    cursor: pointer;\n    border: 1px solid ",";\n    color: ",";\n    box-shadow: rgba(149, 157, 165, 0.2) 0 8px 24px;\n\n    &:focus {\n        outline: none;\n    }\n\n    option {\n        color: black;\n        background: white;\n        font-weight: 300;\n        display: flex;\n        white-space: pre;\n        min-height: 20px;\n        padding: 0px 2px 1px;\n    }\n\n    ",""]);return T=function(){return e},e}function j(){let e=(0,a._)(["\n    width: 100%;\n    margin-top: 10px;\n    margin-bottom: 30px;\n    display: grid;\n    grid-template-columns:repeat(4, 1fr);\n    gap: 30px;\n    justify-items: center;\n    align-items: center;\n    ","\n    ","\n    ",""]);return j=function(){return e},e}function D(){let e=(0,a._)(["\n    width: 100%;\n    height: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    flex-direction: column;\n"]);return D=function(){return e},e}function _(){let e=(0,a._)(["\n    margin-top: 20px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n    width: 100%;\n    min-height: 380px;\n    margin-bottom: 50px !important;\n"]);return _=function(){return e},e}let E=r.default.div(x(),(0,c.extrasmall)({width:"80% !important"})),b=r.default.select(T(),d.mainColor,d.mainColor,(0,c.extrasmall)({width:"80%"})),w=r.default.div(j(),(0,c.medium)({gridTemplateColumns:"repeat(2,1fr)"}),(0,c.small)({gridTemplateColumns:"repeat(1,1fr)"}),(0,c.extrasmall)({gridTemplateColumns:"repeat(1,1fr)"})),C=r.default.div(D()),S=r.default.div(_());t.default=()=>{let[e,t]=(0,i.useState)(1),[n,a]=(0,i.useState)([]),[r,c]=(0,i.useState)(""),[x,T]=(0,i.useState)(""),[j,D]=(0,i.useState)([]),[_,A]=(0,i.useState)(!1),[v,N]=(0,i.useState)(!1),[U,Y]=(0,i.useState)(""),[L,F]=(0,i.useState)(""),[R,y]=(0,i.useState)([]),[O,k]=(0,i.useState)(new Date),[B,G]=(0,i.useState)({startTime:"",endTime:""}),H=e=>{var t=new Date(e),n=""+(t.getMonth()+1),a=""+t.getDate(),l=t.getFullYear();let i="00",r="00";return n.length<2&&(n="0"+n),a.length<2&&(a="0"+a),i.length<2&&(i="0"+i),r.length<2&&(r="0"+r),[[l,n,a].join("-"),"T",i,":",r].join("")},I=e=>{var t=new Date(e),n=""+(t.getMonth()+1),a=""+t.getDate(),l=t.getFullYear();let i=new Date,r="",d="";return e.getDate()===i.getDate()&&e.getMonth()===i.getMonth()&&e.getFullYear()===i.getFullYear()?(r=""+i.getHours(),d=""+i.getMinutes()):(a=""+t.getDate(),r="23",d="59"),n.length<2&&(n="0"+n),a.length<2&&(a="0"+a),r.length<2&&(r="0"+r),d.length<2&&(d="0"+d),[[l,n,a].join("-"),"T",r,":",d].join("")},V=e=>{t(e)};(0,i.useEffect)(()=>{""!==e&&o.default.get(d.BASE_URL+d.STUDENT.GET_FACULTY_BY_COURSE_LEVEL+e).then(e=>{a(t=>[...e.data.obj]),c(()=>e.data.obj[0]),A(!1)}).catch(e=>{})},[e]);let M=e=>{e=e.trim(),D([]),T(""),c(e)};(0,i.useEffect)(()=>{""!==r&&o.default.get(d.BASE_URL+d.STUDENT.GET_GROUPS_BY_LEVEL_AND_FACULTY_NAME+e+"?facultyName="+r).then(e=>{D(()=>[...e.data.obj]),T(()=>e.data.obj[0])}).catch(e=>{s.toast.error(e.data)})},[r]);let z=e=>{T(e)},P=e=>{""===e?N(()=>!1):"OTHER_DAY"===e&&(Y(()=>e),N(()=>!0)),"TODAY"===e&&(Y(()=>e),k(new Date),N(()=>!1))};return(0,i.useEffect)(()=>{o.default.get(d.BASE_URL+d.STUDENT.GET_FACULTY_BY_COURSE_LEVEL+e).then(e=>{a(e.data.obj),c(e.data.obj[0])}).catch(e=>{})},[e]),(0,i.useEffect)(()=>{o.default.get(d.BASE_URL+d.STUDENT.GET_GROUPS_BY_LEVEL_AND_FACULTY_NAME+e+"?facultyName="+r).then(e=>{D(()=>[...e.data.obj]),T(()=>e.data.obj[0]),A(!1)}).catch(e=>{})},[r,e]),(0,i.useEffect)(()=>{A(!0),o.default.get(d.BASE_URL+d.STUDENT.GET_STUDENT_WITH_RFID_FOR_TODAY+x).then(e=>{var t;null===(t=e.data.obj)||void 0===t||t.map(e=>(null!==e.dateAsc&&(e.dateAsc=new Date(e.dateAsc)),null!==e.dateDesc&&(e.dateDesc=new Date(e.dateDesc)),e)),y(e.data.obj),A(!1)})},[x]),(0,l.jsxs)(C,{children:[(0,l.jsxs)(w,{children:[(0,l.jsxs)(b,{onChange:e=>V(e.target.value),children:[(0,l.jsx)("option",{value:"",disabled:!0,children:"Select Course"}),(0,l.jsx)("option",{value:"1",children:"Course - 1"}),(0,l.jsx)("option",{value:"2",children:"Course - 2"}),(0,l.jsx)("option",{value:"3",children:"Course - 3"}),(0,l.jsx)("option",{value:"4",children:"Course - 4"})]}),(0,l.jsx)(b,{value:r,onChange:e=>M(e.target.value),children:n&&n.map(e=>(0,l.jsx)("option",{value:e,children:e},e))}),(0,l.jsx)(b,{value:x,onChange:e=>z(e.target.value),children:j&&j.map((e,t)=>(0,l.jsx)("option",{value:e,children:e},t))}),(0,l.jsxs)(b,{isOtherDay:v,onChange:e=>P(e.target.value),children:[(0,l.jsx)("option",{value:"",disabled:!0,children:"Time"}),(0,l.jsx)("option",{value:"TODAY",children:"TODAY"}),(0,l.jsx)("option",{value:"OTHER_DAY",children:"OTHER DAY"})]}),v&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(m.TextField,{component:E,sx:{width:"250px"},InputLabelProps:{shrink:!0,required:!0},label:"Date",type:"date",id:"end",size:"medium",onChange:e=>F(new Date(e.target.value))}),(0,l.jsx)(p.default,{component:E,sx:{width:"250px"},variant:"contained",endIcon:(0,l.jsx)(h.FaFilter,{}),onClick:()=>{if(y(()=>[]),"OTHER_DAY"===U){A(!0);let e=H(L),t=I(L);B.endTime=t,B.startTime=e,o.default.post(d.BASE_URL+d.STUDENT.GET_STUDENT_WITH_RFID+"?endTime="+B.endTime+"&groupName="+x+"&startTime="+B.startTime).then(e=>{e.data.obj.map(async e=>(null!==e.dateAsc&&(e.dateAsc=new Date(e.dateAsc)),null!==e.dateDesc&&(e.dateDesc=new Date(e.dateDesc)),e)),y(()=>[...e.data.obj]),A(!1)}).catch(e=>{A(!1)})}},size:"large",children:"Filter"})]})]}),(0,l.jsx)(S,{children:(0,l.jsx)(m.Card,{style:{width:"100%"},children:(0,l.jsxs)(m.CardContent,{children:[_&&(0,l.jsx)(f.default,{sx:{width:"100%"},children:(0,l.jsx)(g.default,{})}),(0,l.jsx)(u.DataGrid,{style:{width:"100%",minHeight:"300px!important"},columns:[{field:"id",headerName:"ID",width:40,editable:!1},{field:"fullName",headerName:"Full Name",width:180,editable:!1},{field:"cardNo",headerName:"Card Number",width:180,editable:!1},{field:"dateAsc",headerName:"Come In",type:"dateTime",width:180,editable:!1,renderCell:e=>""!==e.formattedValue?(0,l.jsx)("p",{children:e.formattedValue}):(0,l.jsx)("p",{children:"kelmagan"})},{field:"dateDesc",headerName:"Come Out",type:"dateTime",width:180,editable:!1,renderCell:e=>""!==e.formattedValue?(0,l.jsx)("p",{children:e.formattedValue}):(0,l.jsx)("p",{children:"kelmagan"})}],rows:R||[],components:{Toolbar:u.GridToolbar},loading:_,autoHeight:!0})]})})})]})}}}]);