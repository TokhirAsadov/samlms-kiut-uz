/*! For license information please see 5371.2d10cc22.js.LICENSE.txt */
(self.webpackChunkkiut_client=self.webpackChunkkiut_client||[]).push([["5371"],{80359:function(e,n,t){"use strict";t.r(n);var l=t("58865");t("33948"),t("57640"),t("9924"),t("88921"),t("96248"),t("13599"),t("27561"),t("11477"),t("64362"),t("15389"),t("90401"),t("3440"),t("45164"),t("66244"),t("91238"),t("89772"),t("54837"),t("88910"),t("87485"),t("56767"),t("76651"),t("61437"),t("35285"),t("63252"),t("39865"),t("17454"),t("43847");var r=t("85893"),a=t("67294"),i=t("71893"),d=t("30297"),o=t("94757"),c=t("92037"),s=t("42154"),u=t("881"),f=t("94718"),x=t("60155"),h=t("89589"),p=t("16393");function m(){let e=(0,l._)(["\n  width: 100%;\n  padding: 20px;\n"]);return m=function(){return e},e}let b=i.default.div(m());n.default=e=>{let{dateInfo:n,setAllData:t,setOpen:l}=e,[i,m]=(0,a.useState)("");return(0,r.jsx)(b,{children:(0,r.jsx)("form",{onSubmit:e=>{e.preventDefault();let r=n.map(e=>({...e,radioValue:i}));Array.from(new Set(r.map(JSON.stringify))).map(JSON.parse),t([]),l(!1)},children:(0,r.jsxs)(s.default,{variant:"standard",sx:{width:"100%"},children:[(0,r.jsx)(u.default,{id:"demo-form-control-label-placement",children:(0,r.jsx)(h.default,{variant:"h6",sx:{color:"".concat(p.mainColor)},children:"Select the day format"})}),(0,r.jsxs)(o.default,{value:i,onChange:e=>m(e.target.value),"aria-labelledby":"demo-form-control-label-placement",name:"position",defaultValue:"Orientation week",sx:{mt:1},children:[(0,r.jsx)(c.default,{value:"Orientation week",control:(0,r.jsx)(d.default,{required:!0}),label:"Orientation week"}),(0,r.jsx)(c.default,{value:"Theoretical education",control:(0,r.jsx)(d.default,{required:!0}),label:"Theoretical education"}),(0,r.jsx)(c.default,{value:"Final exams",control:(0,r.jsx)(d.default,{required:!0}),label:"Final exams"}),(0,r.jsx)(c.default,{value:"Vacation",control:(0,r.jsx)(d.default,{required:!0}),label:"Vacation"}),(0,r.jsx)(c.default,{value:"Theoretical/Practical education",control:(0,r.jsx)(d.default,{required:!0}),label:"Theoretical/Practical education"})]}),(0,r.jsx)(f.default,{type:"submit",sx:{margin:"10px auto",padding:"5px 50px"},variant:"contained",endIcon:(0,r.jsx)(x.IoSave,{}),children:"Save"})]})})})}},75312:function(e,n,t){"use strict";t.r(n);var l=t("58865");t("33948"),t("57658"),t("64211"),t("41874"),t("2490"),t("57640"),t("9924"),t("31672"),t("59461");var r=t("85893"),a=t("67294"),i=t("71893");t("85159");var d=t("30381"),o=t.n(d),c=t("57024"),s=t("16393"),u=t("97367"),f=t("55693"),x=t("79352"),h=t("80359"),p=t("94718"),m=t("60155"),b=t("32392"),j=t("61261"),g=t("42154"),v=t("44025");function y(){let e=(0,l._)(["\n    width: 100%;\n    padding-top: 20px;\n    display: flex;\n    justify-content: end;\n    ","\n"]);return y=function(){return e},e}function w(){let e=(0,l._)(["\n    position: absolute;\n    top: 10px;\n    right: 10px;\n    width: 30px;\n    height: 30px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: #dcd7d7;\n    border-radius: 50%;\n    color: red;\n    font-size: 26px;\n    border: none;\n    cursor: pointer;\n    z-index: 1000;\n\n"]);return w=function(){return e},e}function k(){let e=(0,l._)(["\n    position: relative;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    width: 400px;\n    background-color: #FFFFFF;\n    border-radius: 10px;\n    ","\n"]);return k=function(){return e},e}function F(){let e=(0,l._)(["\n    font-size: 12px;\n    font-weight: normal;\n"]);return F=function(){return e},e}function C(){let e=(0,l._)(["\n    font-size: 10px;\n    font-weight: bold;\n    color: black;\n    width: 35px;\n    height: 35px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    text-align: center;\n    border: 1px solid black;\n    border-radius: 5px;\n    background-color: ",";\n"]);return C=function(){return e},e}function S(){let e=(0,l._)(["\n    display: flex;\n    align-items: center;\n    gap: 10px;\n"]);return S=function(){return e},e}function I(){let e=(0,l._)(["\n    margin-top: 20px;\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;\n    gap: 20px;\n    align-items: center;\n    ","\n    ","\n    ","\n"]);return I=function(){return e},e}function O(){let e=(0,l._)(["\n    margin: 20px;\n    display: flex;\n    gap: 30px;\n    flex-wrap: wrap;\n    align-items: center;\n    justify-content: space-between;\n    color: black;\n\n    p {\n        font-size: 17px;\n    }\n\n    ","\n"]);return O=function(){return e},e}function D(){let e=(0,l._)(["\n    width: 100%;\n    overflow: scroll;\n"]);return D=function(){return e},e}function _(){let e=(0,l._)(["\n    width: 100%;\n    border-collapse: collapse;\n    border-radius: 5px;\n\n    .selected {\n        background-color: rgba(0, 0, 0, 0.3) !important;\n    }\n\n    td, th {\n        border: 1px solid black;\n        border-collapse: collapse;\n        text-align: center;\n        padding: 8px;\n        color: black;\n    }\n\n    th {\n        color: #FFFFFF;\n        background-color: ",";\n    }\n\n    .itemday {\n        cursor: pointer;\n\n        :hover {\n            background-color: rgba(0, 0, 0, 0.3);\n        }\n    }\n\n"]);return _=function(){return e},e}function A(){let e=(0,l._)(["\n    width: 100%;\n    background-color: #ffffff;\n    min-height: 300px;\n    border-radius: 5px;\n    padding: 20px 10px;\n    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;\n"]);return A=function(){return e},e}function T(){let e=(0,l._)(["\n    padding: 1rem;\n    width: 100%;\n"]);return T=function(){return e},e}let M=i.default.div(y(),(0,c.extrasmall)({justifyContent:"center"})),N=i.default.button(w()),E=i.default.div(k(),(0,c.extrasmall)({width:"320px"})),V=i.default.h6(F()),P=i.default.div(C(),e=>e.bg||"#FFF"),q=i.default.div(S()),z=i.default.div(I(),(0,c.medium)({gridTemplateColumns:"1fr 1fr 1fr 1fr 1fr "}),(0,c.small)({gridTemplateColumns:"1fr 1fr 1fr 1fr "}),(0,c.extrasmall)({gridTemplateColumns:"1fr 1fr  "})),J=i.default.div(O(),(0,c.extrasmall)({justifyContent:"center"})),Y=i.default.div(D()),L=i.default.table(_(),s.mainColor),R=i.default.div(A()),U=i.default.div(T());n.default=()=>{let[e,n]=(0,a.useState)(+o()(new Date).format("YYYY")),[t,l]=(0,a.useState)(!1),[i,d]=(0,a.useState)(!1),[c,y]=(0,a.useState)([]),w=e=>{y([e]),l(!0)},k=()=>{y([]),l(!1)},F=[],C=(0,a.useCallback)((e,n)=>{let t=new Date(e,n-1,1).getDay(),l=new Date(e,n,0).getDate(),r=["January","February","March","April","May","June","July","August","September","October","November","December"][n-1],a=[],i=[],d=0;for(let r=1;r<=l;r++){let l=new Date(e,n-1,r).getDay();1===l?a.push(r):5===l&&i.push(r),l===t&&1!==r&&d++}return d=28===l&&0===t?4:31===l&&t>=5&&(a.length<5||i.length<5)?6:5,{monthName:r,MonDay:a,FriDay:i,weeks:d}},[F]);for(let n=9;n<=12;n++)F.push(C(+e,n));for(let n=1;n<=8;n++)F.push(C(+e+1,n));let S=[];for(let e=1;e<=52;e++)S.push(e);let I=e=>{let n=[],t=[];for(let l of e)n.push(...l.MonDay),t.push(...l.FriDay);return 0!==n.length&&n[0]>t[0]&&t.shift(),n.length!==t.length&&n.pop(),{mondaydata:n,fridaydata:t}},O=e=>{d(!0)},D=e=>{d(!1),l(!0)},_=(0,a.useCallback)(e=>{!c.some(n=>(null==n?void 0:n.weeksOrder)===(null==e?void 0:e.weeksOrder)&&n.level===e.level)&&y(n=>[...n,e])},[c]),A=(0,a.useMemo)(()=>_,[_]);return(0,r.jsxs)(U,{children:[(0,r.jsxs)(R,{children:[(0,r.jsxs)(J,{children:[(0,r.jsxs)(g.default,{sx:{width:"150px"},children:[(0,r.jsx)(b.default,{id:"demo-simple-select-label",children:"Select year"}),(0,r.jsx)(v.default,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:e,label:"Select year",onChange:e=>{n(e.target.value)},children:[2022,2023,2024,2025,2026,2027,2028,2029,2030].map((e,n)=>(0,r.jsx)(j.default,{value:e,children:e},n))})]}),(0,r.jsxs)("p",{children:[(0,r.jsxs)("b",{children:[" ",+e,"/",+e+1]})," academic year"]})]}),(0,r.jsx)(Y,{children:(0,r.jsx)(L,{children:(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{rowSpan:"4",children:"LEVEL"}),F.map((e,n)=>(0,r.jsx)("th",{colSpan:e.MonDay.length,children:e.monthName},n))]}),(0,r.jsx)("tr",{children:S.map((e,n)=>{let t=I(F).mondaydata[n];return(0,r.jsx)("td",{children:t||"-"},n)})}),(0,r.jsx)("tr",{children:S.map((e,n)=>{let t=I(F).fridaydata[n];return(0,r.jsx)("td",{children:t||"-"},n)})}),(0,r.jsx)("tr",{children:S.map((e,n)=>(0,r.jsx)("td",{style:{fontWeight:"bold"},children:e},n))}),[{level:1,faculty:[{name:"All directions"}]},{level:2,faculty:[{name:"All directions"},{name:"BANKING (Memorandums with banks)"}]},{level:3,faculty:[{name:"PRESCHOOL EDUCATION"},{name:"PRIMARY EDUCATION"}]}].map((e,n)=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("tr",{style:{textAlign:"center"},children:(0,r.jsxs)("th",{style:{textAlign:"center",background:"#007eb0"},children:[" ",1===e.level&&"I",2===e.level&&"II",3===e.level&&"III",4===e.level&&"IV"]})},n),e.faculty.map((n,t)=>(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:n.name}),S.map((t,l)=>{let a={weeksOrder:t,weekstart:I(F).mondaydata[l],weekend:I(F).fridaydata[l],level:e.level,faculty:n.name};return(0,r.jsx)("td",{className:"itemday ".concat(c.find(e=>e.weeksOrder===t&&(null==e?void 0:e.faculty)===(null==a?void 0:a.faculty)&&(null==e?void 0:e.level)==(null==a?void 0:a.level))?"selected":""),onClick:()=>w(a),onMouseDown:O,onMouseMove:()=>{i&&A(a)},onMouseUp:D,children:"-"},l)})]},t))]}))]})})}),(0,r.jsx)(M,{children:(0,r.jsx)(p.default,{variant:"contained",endIcon:(0,r.jsx)(m.IoSave,{}),children:" Save table"})}),(0,r.jsxs)(z,{children:[(0,r.jsx)("h6",{children:"Abbreviations:"}),(0,r.jsxs)(q,{children:[(0,r.jsx)(P,{bg:"",children:"OW"}),(0,r.jsx)(V,{children:"Orientation week"})]}),(0,r.jsxs)(q,{children:[(0,r.jsx)(P,{bg:"#bbcbc7",children:"TE"}),(0,r.jsx)(V,{children:"Theoretical education"})]}),(0,r.jsxs)(q,{children:[(0,r.jsx)(P,{bg:s.mainColor,children:"F"}),(0,r.jsx)(V,{children:"Final exams"})]}),(0,r.jsxs)(q,{children:[(0,r.jsx)(P,{bg:"#b28a8a",children:"V"}),(0,r.jsx)(V,{children:"Vacation"})]}),(0,r.jsxs)(q,{children:[(0,r.jsx)(P,{bg:"#00ffd3",children:"TE/PE"}),(0,r.jsx)(V,{children:"Theoretical/Practical education"})]})]})]}),(0,r.jsx)(u.default,{open:t,onClose:k,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,r.jsxs)(f.default,{component:E,children:[(0,r.jsx)(N,{onClick:k,children:(0,r.jsx)(x.RiCloseLine,{})}),(0,r.jsx)(h.default,{setOpen:l,dateInfo:c,setAllData:y})]})})]})}},85159:function(e){}}]);