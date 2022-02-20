"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Meetings_Documents_Create_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Meetings/Documents/Create.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Meetings/Documents/Create.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-vue3 */ "./node_modules/@inertiajs/inertia-vue3/dist/index.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {},
  props: {
    errors: Object,
    meeting: Object
  },
  data: function data() {
    return {
      form: (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)({})
    };
  },
  setup: function setup(props) {
    var form = (0,_inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_1__.useForm)({
      document: null,
      notes: null
    });

    function submit() {
      form.post('/meetings/documents/' + props.meeting.id, {
        _method: 'put',
        document: form.document
      });
    }

    return {
      form: form,
      submit: submit
    };
  },
  mounted: function mounted() {},
  name: "Document Create",
  sidebar: "Meetings"
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Meetings/Documents/Create.vue?vue&type=template&id=468415b1":
/*!******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Meetings/Documents/Create.vue?vue&type=template&id=468415b1 ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("title", null, "Add a document", -1
/* HOISTED */
);

var _hoisted_2 = {
  "class": "bg-white shadow overflow-hidden sm:rounded-lg"
};

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "px-4 py-5 sm:px-6"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", {
  "class": "text-lg leading-6 font-medium text-gray-900"
}, " Add document ")], -1
/* HOISTED */
);

var _hoisted_4 = {
  "class": "border-t border-gray-200 px-4 py-5 sm:px-6"
};
var _hoisted_5 = {
  "class": "space-y-8 divide-y divide-gray-200 sm:space-y-5"
};
var _hoisted_6 = {
  "class": "space-y-6 sm:space-y-5"
};
var _hoisted_7 = {
  "class": "sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"
};

var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "document",
  "class": "block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
}, " Document upload ", -1
/* HOISTED */
);

var _hoisted_9 = {
  "class": "mt-1 sm:mt-0 sm:col-span-2"
};
var _hoisted_10 = ["value"];
var _hoisted_11 = {
  "class": "sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"
};

var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "notes",
  "class": "block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
}, " Notes ", -1
/* HOISTED */
);

var _hoisted_13 = {
  "class": "mt-1 sm:mt-0 sm:col-span-2"
};

var _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "mt-2 text-sm text-gray-500"
}, "Notes about the document, not included in published output", -1
/* HOISTED */
);

var _hoisted_15 = ["textContent"];
var _hoisted_16 = {
  "class": "pt-5"
};
var _hoisted_17 = {
  "class": "flex justify-end"
};

var _hoisted_18 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  type: "button",
  "class": "inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
}, " Cancel » ", -1
/* HOISTED */
);

var _hoisted_19 = ["disabled"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Head = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Head");

  var _component_Link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Link");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Head, null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_1];
    }),
    _: 1
    /* STABLE */

  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [_hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
    onSubmit: _cache[2] || (_cache[2] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
      return $setup.submit && $setup.submit.apply($setup, arguments);
    }, ["prevent"])),
    "class": "space-y-8 divide-y divide-gray-200"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [_hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    onInput: _cache[0] || (_cache[0] = function ($event) {
      return $setup.form.document = $event.target.files[0];
    }),
    type: "file",
    id: "document",
    name: "document",
    "class": "block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
  }, null, 32
  /* HYDRATE_EVENTS */
  ), $setup.form.progress ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("progress", {
    key: 0,
    value: $setup.form.progress.percentage,
    max: "100"
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.form.progress.percentage) + "% ", 9
  /* TEXT, PROPS */
  , _hoisted_10)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [_hoisted_12, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $setup.form.notes = $event;
    }),
    id: "notes",
    name: "notes",
    rows: "3",
    "class": "max-w-lg shadow-sm block w-full focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border border-gray-300 rounded-md"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form.notes]]), _hoisted_14, $setup.form.errors.notes ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 0,
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.form.errors.notes),
    "class": "text-red-500 text-xs mt-1"
  }, null, 8
  /* PROPS */
  , _hoisted_15)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    href: "/meetings/".concat($props.meeting.id, "/edit"),
    "class": "ml-4 text-indigo-600 hover:text-indigo-900"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_18];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["href"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "submit",
    "class": "ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
    disabled: $setup.form.processing
  }, " Add document ", 8
  /* PROPS */
  , _hoisted_19)])])], 32
  /* HYDRATE_EVENTS */
  )])])], 64
  /* STABLE_FRAGMENT */
  );
}

/***/ }),

/***/ "./resources/js/Pages/Meetings/Documents/Create.vue":
/*!**********************************************************!*\
  !*** ./resources/js/Pages/Meetings/Documents/Create.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Create_vue_vue_type_template_id_468415b1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Create.vue?vue&type=template&id=468415b1 */ "./resources/js/Pages/Meetings/Documents/Create.vue?vue&type=template&id=468415b1");
/* harmony import */ var _Create_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Create.vue?vue&type=script&lang=js */ "./resources/js/Pages/Meetings/Documents/Create.vue?vue&type=script&lang=js");
/* harmony import */ var E_xampp_htdocs_upwork_mathsewell_meeting_poc_chw_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,E_xampp_htdocs_upwork_mathsewell_meeting_poc_chw_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Create_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Create_vue_vue_type_template_id_468415b1__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/Meetings/Documents/Create.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/Meetings/Documents/Create.vue?vue&type=script&lang=js":
/*!**********************************************************************************!*\
  !*** ./resources/js/Pages/Meetings/Documents/Create.vue?vue&type=script&lang=js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Create_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Create_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Create.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Meetings/Documents/Create.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Meetings/Documents/Create.vue?vue&type=template&id=468415b1":
/*!****************************************************************************************!*\
  !*** ./resources/js/Pages/Meetings/Documents/Create.vue?vue&type=template&id=468415b1 ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Create_vue_vue_type_template_id_468415b1__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Create_vue_vue_type_template_id_468415b1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Create.vue?vue&type=template&id=468415b1 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Meetings/Documents/Create.vue?vue&type=template&id=468415b1");


/***/ })

}]);