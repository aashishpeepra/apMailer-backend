(this.webpackJsonpemailer=this.webpackJsonpemailer||[]).push([[5],{115:function(e,t,n){e.exports={Auth:"Auth_Auth__2w_rC",Auth_aside_img_holder:"Auth_Auth_aside_img_holder__29KoV"}},220:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return d}));var i=n(14),a=n(115),s=n.n(a),c=n(0),r=n.p+"static/media/apmailer.f1805c38.jpg",o=n(52),l=n(65),u=n(2);function d(e){var t=Object(c.useState)(""),n=Object(i.a)(t,2),a=n[0],d=n[1],h=Object(c.useState)(""),j=Object(i.a)(h,2),b=j[0],m=j[1],f=Object(c.useState)(!1),p=Object(i.a)(f,2),O=p[0],_=p[1],x=function(e){"email"===e.target.name?d(e.target.value):m(e.target.value)};return Object(u.jsxs)("main",{className:s.a.Auth,children:[Object(u.jsxs)("aside",{children:[Object(u.jsx)("h1",{children:"Welcome to AP Mailer"}),Object(u.jsx)("div",{className:s.a.Auth_aside_img_holder,children:Object(u.jsx)("img",{src:r,alt:"login to send mails with mailgun",id:"apmailerimg"})})]}),Object(u.jsxs)("section",{id:"user-login-form",children:[Object(u.jsx)("h3",{children:" Login "}),Object(u.jsxs)("form",{id:"login-form",method:"POST",children:[Object(u.jsxs)("fieldset",{children:[Object(u.jsx)("label",{htmlFor:"email",children:"Email"}),Object(u.jsx)("input",{placeholder:"@urlefy.com",type:"email",id:"email",name:"email",required:!0,autoComplete:"true",value:a,onChange:function(e){return x(e)},autoFocus:!0,autoSave:"true"})]}),Object(u.jsxs)("fieldset",{children:[Object(u.jsx)("label",{htmlFor:"password",children:"Password"}),Object(u.jsx)("input",{min:8,type:"password",id:"password",name:"password",required:!0,value:b,onChange:function(e){return x(e)}})]}),Object(u.jsx)("fieldset",{children:O?Object(u.jsx)(l.a,{}):Object(u.jsx)(o.a,{disable:O,submit:!0,func:function(t){t.preventDefault(),_(!0),fetch("/api/user/login",{method:"POST",headers:{"Content-Type":"application/json","API-Key":"secret"},body:JSON.stringify({email:a,password:b})}).then((function(t){t.json().then((function(t){console.log(t),_(!1),e.setAuth(t)}))})).catch((function(t){console.log(e,t),e.setAuth(void 0)}))},children:"Login"})})]})]})]})}},52:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var i=n(64),a=n.n(i),s=n(10),c=n(2);function r(e){switch(e.type){case"link":return Object(c.jsx)(s.b,{exact:!0,className:a.a.btn,activeClassName:a.a.active,to:e.to,children:e.children});default:return Object(c.jsx)("button",{disabled:e.disable,type:e.submit?"submit":"button",className:a.a.btn,onClick:e.func,children:e.children})}}},64:function(e,t,n){e.exports={btn:"Button_btn__3aZCs",active:"Button_active__1yeq5"}},65:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var i=n(66),a=n.n(i),s=n(2);function c(){return Object(s.jsx)("div",{className:a.a.loader})}},66:function(e,t,n){e.exports={loader:"loader_loader__2DUZy",load7:"loader_load7__2SvwV"}}}]);
//# sourceMappingURL=5.afa611c3.chunk.js.map