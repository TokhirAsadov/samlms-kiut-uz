/*! For license information please see 2709.ddd0e93b.js.LICENSE.txt */
(self.webpackChunkkiut_client=self.webpackChunkkiut_client||[]).push([["2709"],{76135:function(e,t,a){"use strict";a.r(t);var l=a("58865");a("33948"),a("57640"),a("9924"),a("17727");var d=a("85893"),n=a("67294"),i=a("71893"),r=a("16393"),u=a("27233"),s=a("30381"),o=a.n(s),c=a("7104"),h=a("16356"),f=a("61261"),p=a("55693");function v(){let e=(0,l._)(["\n    width: 100%;\n    padding: 1rem;\n"]);return v=function(){return e},e}let m=i.default.div(v());t.default=()=>{let[e,t]=(0,n.useState)(!0),[a,l]=(0,n.useState)([]),[i,s]=(0,n.useState)([]),[v,b]=(0,n.useState)(""),{headers:g}=(0,r.getHeaders)(),j=(0,n.useCallback)(()=>{u.default.get(r.BASE_URL+"/dekanat/all",{headers:g}).then(e=>{s(e.data.obj.map(e=>null==e?void 0:e.owner))}).catch(e=>{})},[]),x=(0,n.useCallback)(e=>{u.default.get(r.BASE_URL+"/dataOfLastActive/findByCreatorId/".concat(e),{headers:g}).then(e=>{l(null==e?void 0:e.data.obj.map((e,t)=>({...e,count:t+1})))}).catch(e=>void 0).finally(()=>t(!1))},[v]),w=(0,n.useCallback)(()=>{u.default.get(r.BASE_URL+"/dataOfLastActive/findAll",{headers:g}).then(e=>{l(null==e?void 0:e.data.obj.map((e,t)=>({...e,count:t+1})))}).catch(e=>void 0).finally(()=>t(!1))},[]);return(0,n.useEffect)(()=>{j()},[]),(0,n.useEffect)(()=>{t(()=>!0),""===v?w():v&&x(v)},[v]),(0,d.jsx)(m,{children:(0,d.jsx)(c.Card,{children:(0,d.jsxs)(c.CardContent,{children:[(0,d.jsxs)(c.TextField,{sx:{width:300,mb:2},id:"outlined-select-currency",select:!0,label:"Deans",value:v,onChange:e=>b(e.target.value),children:[(0,d.jsx)(f.default,{value:"",children:(0,d.jsx)("em",{children:"None"})}),i&&i.map(e=>(0,d.jsx)(f.default,{value:null==e?void 0:e.id,children:null==e?void 0:e.fullName},null==e?void 0:e.id))]}),(0,d.jsx)(p.default,{sx:{display:"grid",gridTemplateColumns:"1fr ",gap:5},children:(0,d.jsx)(h.DataGrid,{style:{width:"100%"},columns:[{field:"count",headerName:"\u2116",width:40,sortable:!0,editable:!1},{field:"passage",headerName:"Action",width:400,editable:!1,renderCell:e=>(0,d.jsx)("p",{children:e.row.passage})},{field:"updatedAt",headerName:"Action date",width:200,editable:!1,sortable:!0,renderCell:e=>{var t;return(0,d.jsx)("p",{children:o()(null===(t=e.row)||void 0===t?void 0:t.updatedAt).format("DD.MM.YYYY HH:mm")})}}],rows:a||[],loading:e,components:{Toolbar:h.GridToolbar},autoHeight:!0,pageSize:20,rowsPerPageOptions:[20,30,50]})})]})})})}}}]);