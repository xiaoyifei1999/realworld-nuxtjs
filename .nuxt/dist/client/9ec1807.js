(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{187:function(t,e,r){"use strict";r.d(e,"d",(function(){return o})),r.d(e,"f",(function(){return c})),r.d(e,"a",(function(){return l})),r.d(e,"b",(function(){return d})),r.d(e,"c",(function(){return m})),r.d(e,"e",(function(){return f})),r.d(e,"g",(function(){return v}));var n=r(60),o=function(t){return Object(n.b)({method:"GET",url:"/api/articles",params:t})},c=function(t){return Object(n.b)({method:"GET",url:"/api/articles/feed",params:t})},l=function(t){return Object(n.b)({method:"POST",url:"/api/articles/".concat(t,"/favorite")})},d=function(t){return Object(n.b)({method:"DELETE",url:"/api/articles/".concat(t,"/favorite")})},m=function(t){return Object(n.b)({method:"GET",url:"/api/articles/".concat(t)})},f=function(t){return Object(n.b)({method:"GET",url:"/api/articles/".concat(t,"/comments")})},v=function(data){return Object(n.b)({method:"POST",url:"/api/articles",data:data})}},267:function(t,e,r){"use strict";r.r(e);r(36);var n=r(3),article=r(187),o={middleware:"authenticated",name:"EditorIndex",data:function(){return{article:{title:"",description:"",body:"",tagList:""}}},methods:{onSubmit:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(111),e.prev=1,e.next=4,Object(article.g)({article:t.article});case 4:r=e.sent,r.data,t.$router.push("/"),e.next=11;break;case 9:e.prev=9,e.t0=e.catch(1);case 11:case"end":return e.stop()}}),e,null,[[1,9]])})))()}}},c=r(23),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"editor-page"},[r("div",{staticClass:"container page"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-10 offset-md-1 col-xs-12"},[r("form",{on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[r("fieldset",[r("fieldset",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.article.description,expression:"article.description"}],staticClass:"form-control form-control-lg",attrs:{type:"text",placeholder:"Article Title"},domProps:{value:t.article.description},on:{input:function(e){e.target.composing||t.$set(t.article,"description",e.target.value)}}})]),t._v(" "),r("fieldset",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.article.title,expression:"article.title"}],staticClass:"form-control",attrs:{type:"text",placeholder:"What's this article about?"},domProps:{value:t.article.title},on:{input:function(e){e.target.composing||t.$set(t.article,"title",e.target.value)}}})]),t._v(" "),r("fieldset",{staticClass:"form-group"},[r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.article.body,expression:"article.body"}],staticClass:"form-control",attrs:{rows:"8",placeholder:"Write your article (in markdown)"},domProps:{value:t.article.body},on:{input:function(e){e.target.composing||t.$set(t.article,"body",e.target.value)}}})]),t._v(" "),r("fieldset",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.article.tagList,expression:"article.tagList"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Enter tags"},domProps:{value:t.article.tagList},on:{input:function(e){e.target.composing||t.$set(t.article,"tagList",e.target.value)}}}),t._v(" "),r("div",{staticClass:"tag-list"})]),t._v(" "),r("button",{staticClass:"btn btn-lg pull-xs-right btn-primary",attrs:{type:"button"},on:{click:t.onSubmit}},[t._v("\n              Publish Article\n            ")])])])])])])])}),[],!1,null,null,null);e.default=component.exports}}]);