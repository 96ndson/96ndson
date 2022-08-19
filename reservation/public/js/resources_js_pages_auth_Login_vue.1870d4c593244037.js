(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_auth_Login_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/auth/Login.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/auth/Login.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************/
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: C:\\xampp\\htdocs\\96ndson\\reservation\\resources\\js\\pages\\auth\\Login.vue: Unexpected token, expected \"{\" (3:7)\n\n\u001b[0m \u001b[90m 1 |\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 2 |\u001b[39m \u001b[36mimport\u001b[39m { required\u001b[33m,\u001b[39m email\u001b[33m,\u001b[39m minLength } \u001b[36mfrom\u001b[39m \u001b[32m\"vuelidate/lib/validators\"\u001b[39m\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 3 |\u001b[39m \u001b[36mimport\u001b[39m \u001b[36mimport\u001b[39m \u001b[32m\"@/assets/<file-name>.css\"\u001b[39m\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m   |\u001b[39m        \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 4 |\u001b[39m \u001b[36mexport\u001b[39m \u001b[36mdefault\u001b[39m {\u001b[0m\n\u001b[0m \u001b[90m 5 |\u001b[39m   name\u001b[33m:\u001b[39m \u001b[32m\"Login\"\u001b[39m\u001b[33m,\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 6 |\u001b[39m   data() {\u001b[0m\n    at instantiate (C:\\xampp\\htdocs\\96ndson\\reservation\\node_modules\\@babel\\parser\\lib\\index.js:72:32)\n    at constructor (C:\\xampp\\htdocs\\96ndson\\reservation\\node_modules\\@babel\\parser\\lib\\index.js:359:12)\n    at Parser.raise (C:\\xampp\\htdocs\\96ndson\\reservation\\node_modules\\@babel\\parser\\lib\\index.js:3339:19)\n    at Parser.unexpected (C:\\xampp\\htdocs\\96ndson\\reservation\\node_modules\\@babel\\parser\\lib\\index.js:3377:16)\n    at Parser.expect (C:\\xampp\\htdocs\\96ndson\\reservation\\node_modules\\@babel\\parser\\lib\\index.js:4006:28)\n    at Parser.parseNamedImportSpecifiers (C:\\xampp\\htdocs\\96ndson\\reservation\\node_modules\\@babel\\parser\\lib\\index.js:16480:10)\n    at Parser.parseImport (C:\\xampp\\htdocs\\96ndson\\reservation\\node_modules\\@babel\\parser\\lib\\index.js:16309:39)\n    at Parser.parseStatementContent (C:\\xampp\\htdocs\\96ndson\\reservation\\node_modules\\@babel\\parser\\lib\\index.js:14753:27)\n    at Parser.parseStatement (C:\\xampp\\htdocs\\96ndson\\reservation\\node_modules\\@babel\\parser\\lib\\index.js:14643:17)\n    at Parser.parseBlockOrModuleBlockBody (C:\\xampp\\htdocs\\96ndson\\reservation\\node_modules\\@babel\\parser\\lib\\index.js:15286:25)");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/auth/Login.vue?vue&type=template&id=42c42d6a&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/auth/Login.vue?vue&type=template&id=42c42d6a& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("b-container", [_c("b-row", {
    staticClass: "justify-content-md-center mt-5"
  }, [_c("b-col", {
    attrs: {
      col: "",
      md: "5"
    }
  }, [_c("b-card", {
    attrs: {
      header: "Đăng nhập",
      "header-bg-variant": "primary",
      "header-text-variant": "white"
    }
  }, [_c("b-card-text", [_c("b-form", {
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.onSubmit.apply(null, arguments);
      }
    }
  }, [_c("b-form-group", {
    "class": {
      "form-group--error": _vm.$v.form.$error
    },
    attrs: {
      description: "Enter your email",
      label: "Email"
    }
  }, [_c("b-form-input", {
    model: {
      value: _vm.$v.form.email.$model,
      callback: function callback($$v) {
        _vm.$set(_vm.$v.form.email, "$model", typeof $$v === "string" ? $$v.trim() : $$v);
      },
      expression: "$v.form.email.$model"
    }
  }), _vm._v(" "), !_vm.$v.form.email.required ? _c("div", {
    staticClass: "error"
  }, [_vm._v("Email is required")]) : _vm._e(), _vm._v(" "), !_vm.$v.form.email.email ? _c("div", {
    staticClass: "error"
  }, [_vm._v("Email is invalid")]) : _vm._e()], 1), _vm._v(" "), _c("b-form-group", {
    "class": {
      "form-group--error": _vm.$v.form.$error
    },
    attrs: {
      description: "Enter your password",
      label: "Password"
    }
  }, [_c("b-form-input", {
    staticClass: "form-control",
    attrs: {
      type: "password"
    },
    model: {
      value: _vm.$v.form.password.$model,
      callback: function callback($$v) {
        _vm.$set(_vm.$v.form.password, "$model", typeof $$v === "string" ? $$v.trim() : $$v);
      },
      expression: "$v.form.password.$model"
    }
  }), _vm._v(" "), !_vm.$v.form.password.required ? _c("div", {
    staticClass: "error"
  }, [_vm._v("Password is required")]) : _vm._e(), _vm._v(" "), !_vm.$v.form.password.minLength ? _c("div", {
    staticClass: "error"
  }, [_vm._v("Password must be at least 6 characters")]) : _vm._e()], 1), _vm._v(" "), _c("div", {
    staticClass: "form-group",
    "class": {
      "form-group--error": _vm.$v.form.$error
    }
  }, [_vm.$v.form.$error ? _c("div", {
    staticClass: "error"
  }, [_vm._v("Form is invalid.")]) : _vm._e()]), _vm._v(" "), _c("tree-view", {
    attrs: {
      data: _vm.$v,
      options: {
        rootObjectKey: "$v",
        maxDepth: 2
      }
    }
  }), _vm._v(" "), _c("b-form-group", [_c("b-button", {
    attrs: {
      type: "submit",
      variant: "outline-primary"
    }
  }, [_vm._v("Login")])], 1)], 1)], 1)], 1)], 1)], 1)], 1);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/auth/Login.vue?vue&type=style&index=0&id=42c42d6a&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/auth/Login.vue?vue&type=style&index=0&id=42c42d6a&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/css-loader/dist/cjs.js):\nError: Can't resolve '@/assets/css/doc.scss' in 'C:\\xampp\\htdocs\\96ndson\\reservation\\resources\\js\\pages\\auth'\n    at finishWithoutResolve (C:\\xampp\\htdocs\\96ndson\\reservation\\node_modules\\enhanced-resolve\\lib\\Resolver.js:309:18)\n    at C:\\xampp\\htdocs\\96ndson\\reservation\\node_modules\\enhanced-resolve\\lib\\Resolver.js:386:15\n    at C:\\xampp\\htdocs\\96ndson\\reservation\\node_modules\\enhanced-resolve\\lib\\Resolver.js:435:5\n    at eval (eval at create (C:\\xampp\\htdocs\\96ndson\\reservation\\node_modules\\tapable\\lib\\HookCodeFactory.js:33:10), <anonymous>:16:1)\n    at C:\\xampp\\htdocs\\96ndson\\reservation\\node_modules\\enhanced-resolve\\lib\\Resolver.js:435:5\n    at eval (eval at create (C:\\xampp\\htdocs\\96ndson\\reservation\\node_modules\\tapable\\lib\\HookCodeFactory.js:33:10), <anonymous>:27:1)\n    at C:\\xampp\\htdocs\\96ndson\\reservation\\node_modules\\enhanced-resolve\\lib\\DescriptionFilePlugin.js:87:43\n    at C:\\xampp\\htdocs\\96ndson\\reservation\\node_modules\\enhanced-resolve\\lib\\Resolver.js:435:5\n    at eval (eval at create (C:\\xampp\\htdocs\\96ndson\\reservation\\node_modules\\tapable\\lib\\HookCodeFactory.js:33:10), <anonymous>:15:1)\n    at C:\\xampp\\htdocs\\96ndson\\reservation\\node_modules\\enhanced-resolve\\lib\\Resolver.js:435:5");

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/auth/Login.vue?vue&type=style&index=0&id=42c42d6a&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/auth/Login.vue?vue&type=style&index=0&id=42c42d6a&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_id_42c42d6a_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Login.vue?vue&type=style&index=0&id=42c42d6a&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/auth/Login.vue?vue&type=style&index=0&id=42c42d6a&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_id_42c42d6a_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_id_42c42d6a_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/pages/auth/Login.vue":
/*!*******************************************!*\
  !*** ./resources/js/pages/auth/Login.vue ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Login_vue_vue_type_template_id_42c42d6a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Login.vue?vue&type=template&id=42c42d6a& */ "./resources/js/pages/auth/Login.vue?vue&type=template&id=42c42d6a&");
/* harmony import */ var _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Login.vue?vue&type=script&lang=js& */ "./resources/js/pages/auth/Login.vue?vue&type=script&lang=js&");
/* harmony import */ var _Login_vue_vue_type_style_index_0_id_42c42d6a_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Login.vue?vue&type=style&index=0&id=42c42d6a&lang=css& */ "./resources/js/pages/auth/Login.vue?vue&type=style&index=0&id=42c42d6a&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Login_vue_vue_type_template_id_42c42d6a___WEBPACK_IMPORTED_MODULE_0__.render,
  _Login_vue_vue_type_template_id_42c42d6a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/auth/Login.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/auth/Login.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/pages/auth/Login.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Login.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/auth/Login.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/auth/Login.vue?vue&type=template&id=42c42d6a&":
/*!**************************************************************************!*\
  !*** ./resources/js/pages/auth/Login.vue?vue&type=template&id=42c42d6a& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_42c42d6a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_42c42d6a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_42c42d6a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Login.vue?vue&type=template&id=42c42d6a& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/auth/Login.vue?vue&type=template&id=42c42d6a&");


/***/ }),

/***/ "./resources/js/pages/auth/Login.vue?vue&type=style&index=0&id=42c42d6a&lang=css&":
/*!****************************************************************************************!*\
  !*** ./resources/js/pages/auth/Login.vue?vue&type=style&index=0&id=42c42d6a&lang=css& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_id_42c42d6a_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Login.vue?vue&type=style&index=0&id=42c42d6a&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/auth/Login.vue?vue&type=style&index=0&id=42c42d6a&lang=css&");


/***/ })

}]);