/*! For license information please see 2038.b7893942.js.LICENSE.txt */
(self.webpackChunkkiut_client=self.webpackChunkkiut_client||[]).push([["2038"],{27960:function(e,l,n){"use strict";n.r(l);var t=n("58865");n("33948"),n("57640"),n("9924"),n("31672"),n("59461"),n("2490"),n("88449"),n("19894"),n("68216"),n("79433");var o=n("85893"),i=n("67294"),a=n("71893"),d=n("16393"),r=n("27233"),u=n("86893"),s=n("63750"),c=n("53432"),h=n("16356"),v=n("97367"),f=n("55693"),p=n("79352"),m=n("52861"),x=n("89583"),g=n("90650"),b=n("57024"),j=n("44118"),C=n("15352"),y=n("39628"),w=n("17171"),S=n("72132"),k=n("94718"),E=n("7104");function N(){let e=(0,t._)(["\n    height: 80px;\n    padding-top: 10px;\n    display: grid;\n    overflow-y: scroll;\n    grid-template-columns: repeat(3, 1fr);\n    gap: 30px;\n    ","\n    ","\n    ","\n"]);return N=function(){return e},e}function _(){let e=(0,t._)(["\n    width: 30px;\n    height: 30px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: ",";\n    border-radius: 50%;\n    color: white;\n    font-size: 26px;\n    border: none;\n    position: absolute;\n    top: 10px;\n    right: 10px;\n"]);return _=function(){return e},e}function O(){let e=(0,t._)(["\n    ","\n    ","\n    ","\n"]);return O=function(){return e},e}function B(){let e=(0,t._)(["\n    width: 30px;\n    height: 30px;\n    background-color: #fff;\n    font-size: 20px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border: 1px solid ",";\n    border-radius: 0.5rem;\n    color: ",";\n    padding: 5px !important;\n\n    &:hover {\n        transform: scale(1.1);\n    }\n\n"]);return B=function(){return e},e}function D(){let e=(0,t._)(["\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 10px;\n    margin: 5px !important;\n"]);return D=function(){return e},e}function R(){let e=(0,t._)(["\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    padding: 1rem;\n    .MuiDataGrid-columnHeaderTitleContainer {\n        justify-content: center;\n    }\n"]);return R=function(){return e},e}let T=(0,o.jsx)(y.default,{fontSize:"small"}),L=(0,o.jsx)(w.default,{fontSize:"small"}),U=a.default.div(N(),(0,b.medium)({height:"100%",gridTemplateColumns:"1fr",gap:"15px"}),(0,b.small)({height:"100%",gridTemplateColumns:"1fr",gap:"15px"}),(0,b.extrasmall)({height:"100%",gridTemplateColumns:"1fr",gap:"15px"})),A=(0,a.default)(g.motion.button)(_(),d.mainColor),H={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"900px",display:"flex",flexDirection:"column",gap:"20px",bgcolor:"background.paper",boxShadow:24,borderRadius:3,p:4},z=a.default.div(O(),(0,b.medium)({width:"97vw !important",height:"60vh !important"}),(0,b.small)({width:"97vw !important",height:"60vh !important"}),(0,b.extrasmall)({width:"97vw !important",height:"60vh !important"})),F=a.default.button(B(),e=>e.color,e=>e.color),P=a.default.div(D()),W=a.default.div(R());l.default=()=>{let{headers:e}=(0,d.getHeaders)(),[l,n]=(0,i.useState)(!1),[t,a]=(0,i.useState)([]),[g,b]=(0,i.useState)(null),[y,w]=(0,i.useState)([]),[N,_]=(0,i.useState)(!1),[O,B]=(0,i.useState)({id:null,name:null,shortName:null,schoolCode:null,school:null}),D=[{field:"count",headerName:"\u2116",width:40,align:"center",editable:!1},{field:"name",headerName:"Name",flex:1,minWidth:300,editable:!1},{field:"shortName",headerName:"Short name",flex:.2,minWidth:150,align:"center",editable:!1},{field:"school",headerName:"School",flex:.8,minWidth:250,editable:!1},{field:"service",headerName:"Service",flex:.3,minWidth:100,editable:!1,renderCell:e=>(0,o.jsxs)(P,{children:[(0,o.jsx)(F,{color:d.mainColor,onClick:()=>{var l,n;return V(null==e?void 0:null===(l=e.row)||void 0===l?void 0:l.id,null==e?void 0:null===(n=e.row)||void 0===n?void 0:n.school)},children:(0,o.jsx)(u.FiEdit,{})}),(0,o.jsx)(F,{color:"red",onClick:()=>{var l,n;return q(null==e?void 0:null===(l=e.row)||void 0===l?void 0:l.id,null==e?void 0:null===(n=e.row)||void 0===n?void 0:n.name)},children:(0,o.jsx)(s.BsTrash,{})})]})}],R=()=>{_(!1)},G=()=>{r.default.get(d.BASE_URL+"/school/findAll",{headers:e}).then(e=>{var l,n;w(null==e?void 0:null===(n=e.data)||void 0===n?void 0:null===(l=n.obj)||void 0===l?void 0:l.map(e=>({label:null==e?void 0:e.nameEn,value:null==e?void 0:e.code})))}).catch(e=>{})},I=()=>{r.default.get(d.BASE_URL+"/faculty/getDirectionsOfFaculty",{headers:e}).then(e=>{var l,t;a(null==e?void 0:null===(t=e.data)||void 0===t?void 0:null===(l=t.obj)||void 0===l?void 0:l.map((e,l)=>({...e,count:l+1}))),n(!1)}).catch(e=>{})},M=e=>{B(l=>({...l,[e.target.name]:e.target.value}))};(0,i.useEffect)(()=>{G(),I()},[]),(0,i.useEffect)(()=>{},[t]),(0,i.useEffect)(()=>{},[O]),(0,i.useEffect)(()=>{l&&I()},[l]);let V=(e,l)=>{(null==y?void 0:y.length)>0&&b(e=>({...null==y?void 0:y.find(e=>(null==e?void 0:e.label)===l)})),(null==y?void 0:y.length)>0&&B(n=>{var o;return{...null==t?void 0:t.find(l=>(null==l?void 0:l.id)===e),schoolCode:null==y?void 0:null===(o=y.find(e=>(null==e?void 0:e.label)===l))||void 0===o?void 0:o.value}}),_(!0)},q=(l,n)=>{B({id:null,shortName:null,schoolCode:null,school:null}),window.confirm("Do you want to delete ".concat(n,"?"))&&(r.default.delete("".concat(d.BASE_URL,"/faculty/deleteFaculty/").concat(l),{headers:e}).then(e=>{var n;a(null==t?void 0:t.filter(e=>(null==e?void 0:e.id)!==l)),S.toast.success(null==e?void 0:null===(n=e.data)||void 0===n?void 0:n.message,{position:"top-right",autoClose:!1,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"})}).catch(e=>{}),S.toast.success("Deleted successfully",{position:"top-right",autoClose:!1,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"}))},J=l=>{delete l.id,delete l.school,Object.values(l).every(e=>null!==e&&e)?r.default.post(d.BASE_URL+"/faculty/saveDirection",{...l,id:null},{headers:e}).then(e=>{_(!1),b(null),I(),S.toast.success("".concat(null==l?void 0:l.name," direction has been saved successfully!."))}).catch(e=>{var l,n;S.toast.error(null==e?void 0:null===(n=e.response)||void 0===n?void 0:null===(l=n.data)||void 0===l?void 0:l.message)}):S.toast.warning("Empty any field..")},K=l=>{delete l.school,Object.values(l).every(e=>null!==e&&e)?r.default.post(d.BASE_URL+"/faculty/saveDirection",l,{headers:e}).then(e=>{_(!1),I(),S.toast.success("".concat(null==l?void 0:l.name," direction has been updated successfully!."))}).catch(e=>{var l,n;S.toast.error(null==e?void 0:null===(n=e.response)||void 0===n?void 0:null===(l=n.data)||void 0===l?void 0:l.message)}):S.toast.warning("Empty any field..")};return(0,o.jsxs)(W,{children:[(0,o.jsx)(f.default,{display:"flex",justifyContent:"end",children:(0,o.jsx)(k.default,{sx:{width:"220px"},variant:"contained",onClick:()=>{_(!0),b(null),B({id:null,name:null,shortName:null,schoolCode:null,school:null})},children:"Create new direction"})}),l&&(null==t?void 0:t.length)>0?(0,o.jsx)(c.default,{}):(0,o.jsx)(E.Card,{children:(0,o.jsx)(E.CardContent,{children:(0,o.jsx)(h.DataGrid,{columns:D,rows:t,components:{Toolbar:h.GridToolbar},rowsPerPageOptions:[10,20,30,40,50,100],autoHeight:!0,initialState:{columns:{columnVisibilityModel:{id:!1}},pagination:{pageSize:10}}})})}),(0,o.jsx)(v.default,{open:N,onClose:R,"aria-labelledby":"keep-mounted-modal-title","aria-describedby":"keep-mounted-modal-description",children:(0,o.jsxs)(f.default,{sx:H,component:z,children:[(0,o.jsx)(A,{onClick:R,whileHover:{rotate:180,scale:1.1},whileTap:{scale:.9},transition:{duration:.3},children:(0,o.jsx)(p.RiCloseLine,{})}),(0,o.jsx)("h3",{style:{color:"".concat(d.mainColor)},children:(null==O?void 0:O.id)!==null&&(null==O?void 0:O.id)?"Update direction":"Create new direction"}),(0,o.jsxs)(U,{children:[(0,o.jsx)(m.default,{id:"outlined-basic",label:"Name",variant:"outlined",value:null==O?void 0:O.name,name:"name",onChange:M}),(0,o.jsx)(m.default,{id:"outlined-basic",label:"Short name",variant:"outlined",value:null==O?void 0:O.shortName,name:"shortName",onChange:M}),(0,o.jsx)(j.default,{id:"checkboxes-tags-demo",options:y,disableCloseOnSelect:!0,getOptionLabel:e=>null==e?void 0:e.label,value:g,onChange:(e,l)=>{b(l),B(e=>({...e,schoolCode:null==l?void 0:l.value}))},renderOption:(e,l,n)=>{let{selected:t}=n;return(0,o.jsxs)("li",{...e,children:[(0,o.jsx)(C.default,{icon:T,checkedIcon:L,style:{marginRight:8},checked:t}),null==l?void 0:l.label]})},renderInput:e=>(0,o.jsx)(m.default,{...e,label:"School",placeholder:"School"})})]}),(0,o.jsx)(f.default,{sx:{display:"flex",justifyContent:"end"},children:(0,o.jsx)(k.default,{variant:"contained",endIcon:(null==O?void 0:O.id)!==null&&(null==O?void 0:O.id)?(0,o.jsx)(u.FiEdit,{}):(0,o.jsx)(x.FaSave,{}),onClick:()=>(null==O?void 0:O.id)!==null&&(null==O?void 0:O.id)?K(O):J(O),children:(null==O?void 0:O.id)!==null&&(null==O?void 0:O.id)?"Update":" Save"})})]})})]})}}}]);