(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[3],{298:function(t,e,s){t.exports={item:"Post_item__hUpku"}},299:function(t,e,s){t.exports={postsBlock:"MyPosts_postsBlock__I0WXr",posts:"MyPosts_posts__193IZ"}},300:function(t,e,s){},301:function(t,e,s){t.exports={content:"ProfileInfo_content__3TEvy",diskBlock:"ProfileInfo_diskBlock__1fTJt"}},303:function(t,e,s){"use strict";s.r(e);var n=s(3),a=s(35),o=s(36),c=s(38),i=s(37),r=s(0),u=s.n(r),p=s(14),j=s(92),l=s(39),d=s(298),b=s.n(d),f=s(1),h=function(t){return Object(f.jsxs)("div",{className:b.a.item,children:[Object(f.jsx)("img",{src:"https://funpick.ru/wp-content/uploads/2018/02/Ava-pats-12.jpg",alt:"avatar"}),t.message,Object(f.jsxs)("div",{children:[Object(f.jsx)("span",{children:"like:"}),t.likesCount]})]})},O=s(86),x=s(124),m=s(71),v=s(33),g=s(299),k=s.n(g),P=u.a.memo((function(t){var e=Object(l.a)(t.posts).reverse().map((function(t){return Object(f.jsx)(h,{id:t.id,message:t.message,likesCount:t.likesCount},t.id)}));return Object(f.jsxs)("div",{children:[Object(f.jsxs)("div",{className:k.a.postsBlock,children:[Object(f.jsx)("h3",{children:"My posts"}),Object(f.jsx)(_,{onSubmit:function(e){t.addPost(e.newPostText)}})]}),Object(f.jsx)("div",{className:k.a.posts,children:e})]})})),S=Object(m.a)(5),_=Object(x.a)({form:"profileAddNewPostFormRedux"})((function(t){return Object(f.jsxs)("form",{onSubmit:t.handleSubmit,children:[Object(f.jsx)(O.a,{component:v.b,placeholder:"Post message",name:"newPostText",validate:[m.b,S]}),Object(f.jsx)("div",{children:Object(f.jsx)("button",{children:"Add post"})})]})})),y=P,T=Object(p.b)((function(t){return{posts:t.profilePage.posts,newPostText:t.profilePage.newPostText}}),(function(t){return{addPost:function(e){t(Object(j.a)(e))}}}))(y),w=s(300),N=s.n(w),B=s(40),I=s(102),A=s(125),C=function(t){var e=Object(r.useState)(!1),s=Object(A.a)(e,2),n=s[0],a=s[1],o=Object(r.useState)(t.status),c=Object(A.a)(o,2),i=c[0],u=c[1];Object(r.useEffect)((function(){u(t.status)}),[t.status]);return Object(f.jsxs)("div",{children:[!n&&Object(f.jsx)("div",{children:Object(f.jsx)("span",{onDoubleClick:function(){a(!0)},children:t.status})}),n&&Object(f.jsx)("div",{children:Object(f.jsx)("input",{autoFocus:!0,onBlur:function(){a(!1),t.updateStatus(i)},onChange:function(t){u(t.currentTarget.value)},value:i})})]})},U=s(301),M=s.n(U),F=function(t){var e=t.profile,s=t.status,n=t.updateStatus;return e?Object(f.jsx)("div",{className:M.a.content,children:Object(f.jsxs)("div",{className:M.a.diskBlock,children:[Object(f.jsx)("img",{src:null!=e.photos.large?e.photos.large:I.a,alt:"avatar"}),Object(f.jsx)(C,{status:s,updateStatus:n})]})}):Object(f.jsx)(B.a,{})},J=function(t){return Object(f.jsxs)("div",{className:N.a.content,children:[Object(f.jsx)(F,{profile:t.profile,status:t.status,updateStatus:t.updateStatus}),Object(f.jsx)(T,{})]})},z=s(11),D=s(9),E=function(t){Object(c.a)(s,t);var e=Object(i.a)(s);function s(){return Object(a.a)(this,s),e.apply(this,arguments)}return Object(o.a)(s,[{key:"componentDidMount",value:function(){var t=this.props.match.params.userId;t||(t=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getUserProfile(t),this.props.getStatus(t)}},{key:"render",value:function(){return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)(J,Object(n.a)(Object(n.a)({},this.props),{},{profile:this.props.profile,status:this.props.status||"NO STATUS",updateStatus:this.props.updateStatus}))})}}]),s}(u.a.Component);e.default=Object(D.d)(Object(p.b)((function(t){return{profile:t.profilePage.profile,status:t.profilePage.status,authorizedUserId:t.auth.id,isAuth:t.auth.isAuth}}),{getUserProfile:j.c,getStatus:j.b,updateStatus:j.e}),z.f)(E)}}]);
//# sourceMappingURL=3.905e53cf.chunk.js.map