exports.ids = [6];
exports.modules = {

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/profile/index.vue?vue&type=template&id=6d692016&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"profile-page"},[_vm._ssrNode("<div class=\"user-info\"><div class=\"container\"><div class=\"row\"><div class=\"col-xs-12 col-md-10 offset-md-1\"><img"+(_vm._ssrAttr("src",_vm.profile.image))+" class=\"user-img\"> <h4>"+_vm._ssrEscape(_vm._s(_vm.profile.username))+"</h4> <p>"+_vm._ssrEscape("\n            "+_vm._s(_vm.profile.bio)+"\n          ")+"</p> <button"+(_vm._ssrAttr("disabled",_vm.followButtonDisable))+" class=\"btn btn-sm btn-outline-secondary action-btn\"><i class=\"ion-plus-round\"></i>"+_vm._ssrEscape("\n             \n            "+_vm._s(_vm.follow)+"\n          ")+"</button></div></div></div></div> <div class=\"container\"><div class=\"row\"><div class=\"col-xs-12 col-md-10 offset-md-1\"><div class=\"articles-toggle\"><ul class=\"nav nav-pills outline-active\"><li class=\"nav-item\"><a href class=\"nav-link active\">My Articles</a></li> <li class=\"nav-item\"><a href class=\"nav-link\">Favorited Articles</a></li></ul></div> <div class=\"article-preview\"><div class=\"article-meta\"><a href><img src=\"http://i.imgur.com/Qr71crq.jpg\"></a> <div class=\"info\"><a href class=\"author\">Eric Simons</a> <span class=\"date\">January 20th</span></div> <button class=\"btn btn-outline-primary btn-sm pull-xs-right\"><i class=\"ion-heart\"></i> 29\n            </button></div> <a href class=\"preview-link\"><h1>How to build webapps that scale</h1> <p>This is the description for the post.</p> <span>Read more...</span></a></div> <div class=\"article-preview\"><div class=\"article-meta\"><a href><img src=\"http://i.imgur.com/N4VcUeJ.jpg\"></a> <div class=\"info\"><a href class=\"author\">Albert Pai</a> <span class=\"date\">January 20th</span></div> <button class=\"btn btn-outline-primary btn-sm pull-xs-right\"><i class=\"ion-heart\"></i> 32\n            </button></div> <a href class=\"preview-link\"><h1>The song you won't ever stop singing. No matter how hard you try.</h1> <p>This is the description for the post.</p> <span>Read more...</span> <ul class=\"tag-list\"><li class=\"tag-default tag-pill tag-outline\">Music</li> <li class=\"tag-default tag-pill tag-outline\">Song</li></ul></a></div></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/profile/index.vue?vue&type=template&id=6d692016&

// EXTERNAL MODULE: ./plugins/request.js
var request = __webpack_require__(6);

// CONCATENATED MODULE: ./api/profile.js

const getProfile = username => {
  return Object(request["b" /* request */])({
    method: 'GET',
    url: `/api/profiles/${username}`
  });
};
const followUser = username => {
  return Object(request["b" /* request */])({
    method: 'POST',
    url: `/api/profiles/${username}/follow`
  });
};
const unFollowUser = username => {
  return Object(request["b" /* request */])({
    method: 'DELETE',
    url: `/api/profiles/${username}/follow`
  });
};
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/profile/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var profilevue_type_script_lang_js_ = ({
  middleware: 'authenticated',
  name: 'profile',

  data() {
    return {
      username: '',
      bio: '',
      image: '',
      following: '',
      followButtonDisable: false
    };
  },

  async asyncData({
    params
  }) {
    const {
      data: {
        profile
      }
    } = await getProfile(params.username);
    console.log(profile);
    return {
      profile
    };
  },

  computed: {
    follow() {
      return this.profile.following ? `Unfollow ${this.profile.username}` : `Follow ${this.profile.username}`;
    }

  },
  methods: {
    async followPeople() {
      this.followButtonDisable = true;
      const follow = this.profile.following ? unFollowUser : followUser;
      const {
        data
      } = await follow(this.profile.username);
      console.log(data);
      this.profile.following = !this.profile.following;
      this.followButtonDisable = false;
    }

  },

  created() {}

});
// CONCATENATED MODULE: ./pages/profile/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_profilevue_type_script_lang_js_ = (profilevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/profile/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_profilevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "b6a14f9a"
  
)

/* harmony default export */ var pages_profile = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=6.js.map