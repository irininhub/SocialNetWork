(this["webpackJsonpreact-kabzda1"]=this["webpackJsonpreact-kabzda1"]||[]).push([[3],{296:function(e,t,a){e.exports={content:"ProfileInfo_content__3pXMq",block:"ProfileInfo_block__nZNC9",avatar:"ProfileInfo_avatar__1U6qH"}},297:function(e,t,a){e.exports={postsblock:"MyPosts_postsblock__3LduG",posts:"MyPosts_posts__3-g2t"}},298:function(e,t,a){e.exports={item:"Post_item__3w8Vp"}},299:function(e,t,a){"use strict";a.r(t);var n=a(33),s=a(34),r=a(36),o=a(35),u=a(0),c=a.n(u),l=a(296),i=a.n(l),p=a(47),m=a(130),f=function(e){var t=Object(u.useState)(!1),a=Object(m.a)(t,2),n=a[0],s=a[1],r=Object(u.useState)(e.status),o=Object(m.a)(r,2),l=o[0],i=o[1];Object(u.useEffect)((function(){i(e.status)}),[e.status]);return c.a.createElement("div",null,!n&&c.a.createElement("div",null,c.a.createElement("span",{onDoubleClick:function(){s(!0)}},e.status||"-------")),n&&c.a.createElement("div",null,c.a.createElement("input",{autoFocus:!0,onBlur:function(){s(!1),e.updateStatus(l)},value:l,onChange:function(e){i(e.currentTarget.value)}})))},d=function(e){return e.profile?c.a.createElement("div",{className:i.a.content},c.a.createElement("div",{className:i.a.block},c.a.createElement("div",{className:i.a.avatar},c.a.createElement("img",{src:e.profile.photos.large})),c.a.createElement(f,{status:e.status,updateStatus:e.updateStatus}))):c.a.createElement(p.a,null)},b=a(95),E=a(13),v=a(297),h=a.n(v),g=a(298),O=a.n(g),_=function(e){return c.a.createElement("div",{className:O.a.item},c.a.createElement("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6FmOPt2sOxh1UoaxrNcWE6S29aHGGmqV50EGLiKzTaqpTCtLijg&s"}),e.message,c.a.createElement("div",null,c.a.createElement("span",null,"Likes ",e.likes)))},j=a(128),k=a(129),P=a(96),S=a(64),N=c.a.memo((function(e){var t=e.posts.map((function(e){return c.a.createElement(_,{message:e.message,likes:e.likes})}));return c.a.createElement("div",{className:h.a.postsblock},c.a.createElement("h3",null,"My posts"),c.a.createElement("div",null,c.a.createElement(y,{onSubmit:function(t){e.addPost(t.newPostElement)}})),c.a.createElement("div",{className:h.a.posts},t))})),w=Object(P.a)(30),y=Object(k.a)({form:"newPost"})((function(e){return c.a.createElement("form",{onSubmit:e.handleSubmit},c.a.createElement("div",null,c.a.createElement(j.a,{name:"newPostElement",component:S.b,validate:[P.b,w],placeholder:"New post text"})),c.a.createElement("div",null,c.a.createElement("button",null,"Add post")))})),I=N,x=Object(E.b)((function(e){return{posts:e.profilePage.posts}}),(function(e){return{addPost:function(t){e(Object(b.a)(t))}}}))(I),U=function(e){return c.a.createElement("div",null,c.a.createElement(d,{profile:e.profile,status:e.status,updateStatus:e.updateStatus}),c.a.createElement(x,null))},q=a(9),z=a(8),C=function(e){Object(r.a)(a,e);var t=Object(o.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.match.params.userId;e||(e=this.props.authorizedUserId),this.props.getUserProfile(e),this.props.getStatus(e)}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(U,Object.assign({},this.props,{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus})))}}]),a}(c.a.Component);t.default=Object(z.d)(Object(E.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorizedUserId:e.auth.userId,isAuth:e.auth.isAuth}}),{getUserProfile:b.d,getStatus:b.c,updateStatus:b.e}),q.f)(C)}}]);
//# sourceMappingURL=3.9e9a2d09.chunk.js.map