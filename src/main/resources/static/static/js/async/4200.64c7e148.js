/*! For license information please see 4200.64c7e148.js.LICENSE.txt */
(self.webpackChunkkiut_client=self.webpackChunkkiut_client||[]).push([["4200"],{22955:function(e,n,t){"use strict";t.r(n);var a=t("58865");t("33948");var r=t("85893"),l=t("67294"),o=t("7104"),c=t("89583"),i=t("16356"),u=t("71893"),s=t("13912"),d=t("55693"),f=t("16393");function h(){let e=(0,a._)(["\n  display: flex;\n  align-items: center;\n  color: ",";\n  gap: 5px;\n\n  h1 {\n    margin: 0;\n    font-size: 30px;\n    font-weight: bold;\n\n  }\n"]);return h=function(){return e},e}function p(){let e=(0,a._)(["\n  width: 100%;\n  padding: 1rem;\n\n  .MuiDataGrid-columnHeaderTitleContainer {\n    justify-content: center;\n  }\n"]);return p=function(){return e},e}let m=u.default.div(h(),f.mainColor),x=u.default.div(p());n.default=e=>{let{dataForPage:n}=e,{columns:t,title:a,searchUrl:u}=n,[f,h]=(0,l.useState)([]),[p,g]=(0,l.useState)(!1);return(0,r.jsxs)(x,{children:[(0,r.jsxs)(m,{children:[(0,r.jsx)(c.FaClipboardList,{size:25}),(0,r.jsx)("h1",{children:a})]}),(0,r.jsx)(o.Card,{children:(0,r.jsxs)(o.CardContent,{children:[(0,r.jsx)(d.default,{sx:{mb:2},children:(0,r.jsx)(s.default,{setData:h,searchUrl:u,setIsLoading:g})}),(0,r.jsx)(i.DataGrid,{columns:t,rows:f||[],loading:p,components:{Toolbar:i.GridToolbar},rowsPerPageOptions:[10,30,50,70,100],autoHeight:!0,initialState:{columns:{columnVisibilityModel:{currents:!1,finals:!1,retakeN:!1}}}})]})})]})}},13912:function(e,n,t){"use strict";t.r(n),t("33948"),t("57640"),t("9924"),t("17727");var a=t("85893"),r=t("67294"),l=t("27233"),o=t("16393"),c=t("7104"),i=t("79623"),u=t("63750"),s=t("39711");n.default=e=>{let{searchUrl:n,setData:t,setIsLoading:d}=e,f=(0,r.useRef)(null),{headers:h}=(0,o.getHeaders)(),[p,m]=(0,r.useState)(""),x=(0,s.useLocation)(),g=(e,a)=>{l.default.get("".concat(o.BASE_URL).concat(n).concat(e),{headers:h,cancelToken:a.token}).then(e=>{let n=e.data.obj.obj;t(null==n?void 0:n.map((e,n)=>({...e,count:n+1})))}).catch(e=>{l.default.isCancel(e)}).finally(()=>{d(!1)})};(0,r.useEffect)(()=>{let e=l.default.CancelToken.source();return""!==p&&g(p,e),()=>{e.cancel("Operation canceled due to component unmount.")}},[x.key]);let j=e=>{m(e),f.current&&f.current.cancel("Operation canceled due to new request.");let n=l.default.CancelToken.source();f.current=n;let t=setTimeout(()=>{e.length>=3&&(d(!0),g(e,n))},300);return()=>{n&&n.cancel("Operation canceled due to component unmount."),clearTimeout(t)}};return(0,a.jsx)(c.TextField,{placeholder:"Search by ID card",size:"small",value:p,onChange:e=>j(e.target.value),id:"outlined-start-adornmentdfg",sx:{width:"300px"},InputProps:{startAdornment:(0,a.jsx)(i.default,{position:"start",children:(0,a.jsx)(u.BsSearch,{size:20})})}})}}}]);