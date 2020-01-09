(this["webpackJsonpcustomers-app-sample"]=this["webpackJsonpcustomers-app-sample"]||[]).push([[0],{40:function(e,a,t){e.exports=t(72)},72:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(35),l=t.n(c),s=t(13),o=t(14),i=(t(45),t(2)),m=t.n(i),u=t(6),p=t(7),h=t(9),d=t(8),b=t(10),f=t(39),E=t(18),v=t(12),y=t.n(v),C=r.a.createContext(),g=function(e,a){switch(a.type){case"DELETE_CONTACT":return Object(E.a)({},e,{contacts:e.contacts.filter((function(e){return e.id!==a.payload}))});case"ADD_CONTACT":return Object(E.a)({},e,{contacts:[a.payload].concat(Object(f.a)(e.contacts))});case"UPDATE_CONTACT":return Object(E.a)({},e,{contacts:e.contacts.map((function(e){return e.id===a.payload.id?e=a.payload:e}))});default:return e}},N=function(e){function a(){var e,t;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(h.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(r)))).state={contacts:[],dispatch:function(e){t.setState((function(a){return g(a,e)}))}},t}return Object(b.a)(a,e),Object(p.a)(a,[{key:"componentDidMount",value:function(){var e;return m.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,m.a.awrap(y.a.get("https://jsonplaceholder.typicode.com/users"));case 2:e=a.sent,this.setState({contacts:e.data});case 4:case"end":return a.stop()}}),null,this)}},{key:"render",value:function(){return r.a.createElement(C.Provider,{value:this.state},this.props.children)}}]),a}(n.Component),O=C.Consumer,j=function(e){var a=e.branding;return r.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0"},r.a.createElement("div",{className:"container"},r.a.createElement("a",{href:"/",className:"navbar-brand"},a),r.a.createElement("div",null,r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(s.b,{to:"/",className:"nav-link"},r.a.createElement("i",{className:"fas fa-home"}),"Home")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(s.b,{to:"/contact/add",className:"nav-link"},r.a.createElement("i",{className:"fas fa-plus"}),"Add Contact")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(s.b,{to:"/about",className:"nav-link"},r.a.createElement("i",{className:"fas fa-question"}),"About"))))))};j.defaultProps={branding:"Contact Manager"};var k=j,x=function(e){function a(){var e,t;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(h.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(r)))).state={showContactInfo:!1},t.handleShowClick=function(){t.setState({showContactInfo:!t.state.showContactInfo})},t.handleDeleteClick=function(e,a){return m.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m.a.awrap(y.a.delete("https://jsonplaceholder.typicode.com/users/".concat(e)));case 2:200===t.sent.status&&a({type:"DELETE_CONTACT",payload:e});case 4:case"end":return t.stop()}}))},t}return Object(b.a)(a,e),Object(p.a)(a,[{key:"render",value:function(){var e=this,a=this.props.contact,t=a.name,n=a.email,c=a.phone,l=a.id,o=this.state.showContactInfo;return r.a.createElement(O,null,(function(a){var i=a.dispatch;return r.a.createElement("div",{className:"card card-body mb-3"},r.a.createElement("h4",null,t," ",r.a.createElement("i",{onClick:e.handleShowClick,className:"fas fa-sort-down",style:{cursor:"pointer"}}),r.a.createElement("i",{className:"fas fa-times",style:{cursor:"pointer",float:"right",color:"red"},onClick:e.handleDeleteClick.bind(e,l,i)}),r.a.createElement(s.b,{to:"/contact/edit/".concat(l)},r.a.createElement("i",{className:"fas fa-pencil-alt",style:{cursor:"pointer",float:"right",color:"black",marginRight:"1rem"}}))),o?r.a.createElement("ul",{className:"list-group"},r.a.createElement("li",{className:"list-group-item"},n),r.a.createElement("li",{className:"list-group-item"},c)):null)}))}}]),a}(n.Component),w=function(e){function a(){return Object(u.a)(this,a),Object(h.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(b.a)(a,e),Object(p.a)(a,[{key:"render",value:function(){return r.a.createElement(O,null,(function(e){var a=e.contacts;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"display-4 mb-2"},r.a.createElement("span",{className:"text-danger"},"Contact")," List"),a.map((function(e){return r.a.createElement(x,{key:e.id,contact:e})})))}))}}]),a}(n.Component),S=t(16),A=t(38),T=t.n(A),D=function(e){var a=e.label,t=e.name,n=e.value,c=e.placeholder,l=e.type,s=e.onChange,o=e.error;return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:t},a),r.a.createElement("input",{type:l,name:t,className:T()("form-control form-control-lg",{"is-invalid":o}),placeholder:c,value:n,onChange:s}),o&&r.a.createElement("div",{className:"invalid-feedback"},o))};D.defaultProps={type:"text"};var P=D,q=(t(32),function(e){function a(){var e,t;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(h.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(r)))).state={name:"",email:"",phone:"",errors:{}},t.handleChange=function(e){return t.setState(Object(S.a)({},e.target.name,e.target.value))},t.onSubmit=function(e,a){var n,r,c,l,s,o;return m.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:if(a.preventDefault(),n=t.state,r=n.name,c=n.email,l=n.phone,""!==r){i.next=5;break}return t.setState({errors:{name:"Name is required"}}),i.abrupt("return");case 5:if(""!==c){i.next=8;break}return t.setState({errors:{email:"Email is required"}}),i.abrupt("return");case 8:if(""!==l){i.next=11;break}return t.setState({errors:{phone:"Phone is required"}}),i.abrupt("return");case 11:return s={name:r,email:c,phone:l},i.next=14,m.a.awrap(y.a.post("https://jsonplaceholder.typicode.com/users",s));case 14:201===(o=i.sent).status&&e({type:"ADD_CONTACT",payload:o.data}),t.setState({name:"",email:"",phone:"",errors:{}}),t.props.history.push("/");case 18:case"end":return i.stop()}}))},t}return Object(b.a)(a,e),Object(p.a)(a,[{key:"render",value:function(){var e=this,a=this.state,t=a.name,n=a.email,c=a.phone,l=a.errors;return r.a.createElement(O,null,(function(a){var s=a.dispatch;return r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"card-header"},"Add Contact"),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:e.onSubmit.bind(e,s)},r.a.createElement(P,{label:"Name",name:"name",placeholder:"Enter name",value:t,onChange:e.handleChange,error:l.name}),r.a.createElement(P,{label:"Email",name:"email",type:"email",placeholder:"Enter email",value:n,onChange:e.handleChange,error:l.email}),r.a.createElement(P,{label:"Phone",name:"phone",type:"tel",placeholder:"Enter phone number",value:c,onChange:e.handleChange,error:l.phone}),r.a.createElement("input",{type:"submit",value:"Add Contact",className:"btn btn-block btn-light"}))))}))}}]),a}(n.Component)),_=function(e){function a(){var e,t;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(h.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(r)))).state={name:"",email:"",phone:"",errors:{}},t.handleChange=function(e){return t.setState(Object(S.a)({},e.target.name,e.target.value))},t.onSubmit=function(e,a){var n,r,c,l,s,o,i;return m.a.async((function(u){for(;;)switch(u.prev=u.next){case 0:if(a.preventDefault(),n=t.state,r=n.name,c=n.email,l=n.phone,""!==r){u.next=5;break}return t.setState({errors:{name:"Name is required"}}),u.abrupt("return");case 5:if(""!==c){u.next=8;break}return t.setState({errors:{email:"Email is required"}}),u.abrupt("return");case 8:if(""!==l){u.next=11;break}return t.setState({errors:{phone:"Phone is required"}}),u.abrupt("return");case 11:return s={name:r,email:c,phone:l},o=t.props.match.params.id,u.next=15,m.a.awrap(y.a.put("https://jsonplaceholder.typicode.com/users/".concat(o),s));case 15:200===(i=u.sent).status&&e({type:"UPDATE_CONTACT",payload:i.data}),t.setState({name:"",email:"",phone:"",errors:{}}),t.props.history.push("/");case 19:case"end":return u.stop()}}))},t}return Object(b.a)(a,e),Object(p.a)(a,[{key:"componentDidMount",value:function(){var e,a,t;return m.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return e=this.props.match.params.id,n.next=3,m.a.awrap(y.a.get("https://jsonplaceholder.typicode.com/users/".concat(e)));case 3:a=n.sent,t=a.data,this.setState({name:t.name,email:t.email,phone:t.phone});case 6:case"end":return n.stop()}}),null,this)}},{key:"render",value:function(){var e=this,a=this.state,t=a.name,n=a.email,c=a.phone,l=a.errors;return r.a.createElement(O,null,(function(a){var s=a.dispatch;return r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"card-header"},"Edit Contact"),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:e.onSubmit.bind(e,s)},r.a.createElement(P,{label:"Name",name:"name",placeholder:"Enter name",value:t,onChange:e.handleChange,error:l.name}),r.a.createElement(P,{label:"Email",name:"email",type:"email",placeholder:"Enter email",value:n,onChange:e.handleChange,error:l.email}),r.a.createElement(P,{label:"Phone",name:"phone",type:"tel",placeholder:"Enter phone number",value:c,onChange:e.handleChange,error:l.phone}),r.a.createElement("input",{type:"submit",value:"Update Contact",className:"btn btn-block btn-light"}))))}))}}]),a}(n.Component);function I(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"display-4"},"About Contact Manager"),r.a.createElement("p",{className:"lead"},"Demo app for managing contacts"),r.a.createElement("p",{className:"text-secondary"},"Version 1.0.0"))}function M(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"display-4"},"Page Not Found."),r.a.createElement("p",{className:"lead"},"Sorry that page doesn't exist."))}var F=function(){return r.a.createElement(N,null,r.a.createElement(s.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(k,{branding:"Contact Manager"}),r.a.createElement("div",{className:"container"},r.a.createElement(o.c,null,r.a.createElement(o.a,{exact:!0,path:"/",component:w}),r.a.createElement(o.a,{exact:!0,path:"/contact/add",component:q}),r.a.createElement(o.a,{exact:!0,path:"/contact/edit/:id",component:_}),r.a.createElement(o.a,{exact:!0,path:"/about",component:I}),r.a.createElement(o.a,{component:M}))))))};l.a.render(r.a.createElement(F,null),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.4f3258e0.chunk.js.map