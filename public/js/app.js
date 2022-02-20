(self["webpackChunk"] = self["webpackChunk"] || []).push([["/js/app"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layout/App.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layout/App.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Shared_MenuProfile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Shared/MenuProfile */ "./resources/js/Shared/MenuProfile.vue");
/* harmony import */ var _Shared_MenuNotification__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Shared/MenuNotification */ "./resources/js/Shared/MenuNotification.vue");
/* harmony import */ var _Shared_MenuSearch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Shared/MenuSearch */ "./resources/js/Shared/MenuSearch.vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _headlessui_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @headlessui/vue */ "./node_modules/@headlessui/vue/dist/headlessui.esm.js");
/* harmony import */ var _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @heroicons/vue/outline */ "./node_modules/@heroicons/vue/outline/esm/index.js");
/* harmony import */ var _heroicons_vue_solid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @heroicons/vue/solid */ "./node_modules/@heroicons/vue/solid/esm/index.js");







/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    Dialog: _headlessui_vue__WEBPACK_IMPORTED_MODULE_6__.Dialog,
    DialogOverlay: _headlessui_vue__WEBPACK_IMPORTED_MODULE_6__.DialogOverlay,
    Disclosure: _headlessui_vue__WEBPACK_IMPORTED_MODULE_6__.Disclosure,
    DisclosureButton: _headlessui_vue__WEBPACK_IMPORTED_MODULE_6__.DisclosureButton,
    DisclosurePanel: _headlessui_vue__WEBPACK_IMPORTED_MODULE_6__.DisclosurePanel,
    Menu: _headlessui_vue__WEBPACK_IMPORTED_MODULE_6__.Menu,
    MenuButton: _headlessui_vue__WEBPACK_IMPORTED_MODULE_6__.MenuButton,
    MenuItem: _headlessui_vue__WEBPACK_IMPORTED_MODULE_6__.MenuItem,
    MenuItems: _headlessui_vue__WEBPACK_IMPORTED_MODULE_6__.MenuItems,
    TransitionChild: _headlessui_vue__WEBPACK_IMPORTED_MODULE_6__.TransitionChild,
    TransitionRoot: _headlessui_vue__WEBPACK_IMPORTED_MODULE_6__.TransitionRoot,
    BellIcon: _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_4__.BellIcon,
    MenuAlt2Icon: _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_4__.MenuAlt2Icon,
    SearchIcon: _heroicons_vue_solid__WEBPACK_IMPORTED_MODULE_5__.SearchIcon,
    XIcon: _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_4__.XIcon,
    HomeIcon: _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_4__.HomeIcon,
    CheckCircleIcon: _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_4__.CheckCircleIcon,
    ExclamationIcon: _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_4__.ExclamationIcon,
    InformationCircleIcon: _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_4__.InformationCircleIcon,
    MenuProfile: _Shared_MenuProfile__WEBPACK_IMPORTED_MODULE_0__["default"],
    MenuNotification: _Shared_MenuNotification__WEBPACK_IMPORTED_MODULE_1__["default"],
    MenuSearch: _Shared_MenuSearch__WEBPACK_IMPORTED_MODULE_2__["default"],
    Permissions: Permissions
  },
  setup: function setup() {
    var sidebarOpen = (0,vue__WEBPACK_IMPORTED_MODULE_3__.ref)(false);
    return {
      sidebarOpen: sidebarOpen
    };
  },
  computed: {
    full_name: function full_name() {
      return this.$page.props.auth.user.forenames + " " + this.$page.props.auth.user.surname;
    }
  },
  props: {
    title: String,
    breadcrumbs: Array
  },
  beforeUpdate: function beforeUpdate() {
    var location = this.$page.component.split('/');
    this.$page.props.navigation.every(function (element, index, array) {
      element.current = false;
      return element;
    });

    if (Array.isArray(location)) {
      this.$page.props.navigation.find(function (element) {
        return element.name === location[0];
      }).current = true;
    } else {
      this.$page.props.navigation.find(function (element) {
        return element.name === location;
      }).current = true;
    }
  },
  data: function data() {
    return {
      notifications: [],
      pages: []
    };
  },
  methods: {
    closeNotification: function closeNotification(notification) {
      this.notifications.splice(notification, 1);
    }
  },
  name: "app"
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/MenuNotification.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/MenuNotification.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @heroicons/vue/outline */ "./node_modules/@heroicons/vue/outline/esm/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    BellIcon: _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_0__.BellIcon
  },
  setup: function setup() {
    return {};
  },
  name: "MenuNotification"
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/MenuProfile.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/MenuProfile.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _headlessui_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @headlessui/vue */ "./node_modules/@headlessui/vue/dist/headlessui.esm.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    Menu: _headlessui_vue__WEBPACK_IMPORTED_MODULE_0__.Menu,
    MenuButton: _headlessui_vue__WEBPACK_IMPORTED_MODULE_0__.MenuButton,
    MenuItem: _headlessui_vue__WEBPACK_IMPORTED_MODULE_0__.MenuItem,
    MenuItems: _headlessui_vue__WEBPACK_IMPORTED_MODULE_0__.MenuItems,
    TransitionChild: _headlessui_vue__WEBPACK_IMPORTED_MODULE_0__.TransitionChild,
    TransitionRoot: _headlessui_vue__WEBPACK_IMPORTED_MODULE_0__.TransitionRoot
  },
  setup: function setup() {
    return {};
  },
  computed: {
    full_name: function full_name() {
      return this.$page.props.auth.user.forenames + " " + this.$page.props.auth.user.surname;
    }
  },
  name: "MenuProfile"
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/MenuSearch.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/MenuSearch.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @heroicons/vue/outline */ "./node_modules/@heroicons/vue/outline/esm/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    SearchIcon: _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_0__.SearchIcon
  },
  setup: function setup() {
    return {};
  },
  name: "MenuSearch"
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/mixins/Permissions.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/mixins/Permissions.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  methods: {
    $can: function $can(permissionName) {
      return Permissions.indexOf(permissionName) !== -1;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layout/App.vue?vue&type=template&id=7cbbacba":
/*!*********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layout/App.vue?vue&type=template&id=7cbbacba ***!
  \*********************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("title", null, "Project Management", -1
/* HOISTED */
);

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("meta", {
  name: "description",
  content: "",
  "head-key": "description"
}, null, -1
/* HOISTED */
);

var _hoisted_3 = {
  "class": "relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-white"
};
var _hoisted_4 = {
  "class": "absolute top-0 right-0 -mr-12 pt-2"
};

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "sr-only"
}, "Close sidebar", -1
/* HOISTED */
);

var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "flex-shrink-0 flex items-center justify-items-center px-4"
}, null, -1
/* HOISTED */
);

var _hoisted_7 = {
  "class": "mt-5 flex-1 h-0 overflow-y-auto"
};
var _hoisted_8 = {
  "class": "flex-1 px-2 space-y-1 bg-white",
  "aria-label": "Sidebar"
};
var _hoisted_9 = {
  key: 0
};
var _hoisted_10 = ["innerHTML"];
var _hoisted_11 = ["innerHTML"];
var _hoisted_12 = {
  "class": "flex-1"
};

var _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M6 6L14 10L6 14V6Z",
  fill: "currentColor"
}, null, -1
/* HOISTED */
);

var _hoisted_14 = [_hoisted_13];

var _hoisted_15 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "flex-shrink-0 w-14",
  "aria-hidden": "true"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Dummy element to force sidebar to shrink to fit close icon ")], -1
/* HOISTED */
);

var _hoisted_16 = {
  "class": "hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0"
};
var _hoisted_17 = {
  "class": "flex flex-col flex-grow border-r border-gray-200 pt-5 bg-white overflow-y-auto"
};

var _hoisted_18 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "flex items-center justify-items-center flex-shrink-0 px-4"
}, null, -1
/* HOISTED */
);

var _hoisted_19 = {
  "class": "mt-5 flex-grow flex flex-col"
};
var _hoisted_20 = {
  "class": "flex-1 px-2 space-y-1 bg-white",
  "aria-label": "Sidebar"
};
var _hoisted_21 = {
  key: 0
};
var _hoisted_22 = ["innerHTML"];
var _hoisted_23 = ["innerHTML"];
var _hoisted_24 = {
  "class": "flex-1"
};

var _hoisted_25 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M6 6L14 10L6 14V6Z",
  fill: "currentColor"
}, null, -1
/* HOISTED */
);

var _hoisted_26 = [_hoisted_25];
var _hoisted_27 = {
  "class": "md:pl-64 flex flex-col flex-1"
};
var _hoisted_28 = {
  "class": "sticky top-0 z-10 flex-shrink-0 flex h-16 bg-white shadow"
};

var _hoisted_29 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "sr-only"
}, "Open sidebar", -1
/* HOISTED */
);

var _hoisted_30 = {
  "class": "flex-1 px-4 flex justify-between"
};
var _hoisted_31 = {
  "class": "flex-1 flex"
};
var _hoisted_32 = {
  "class": "ml-4 flex items-center md:ml-6"
};
var _hoisted_33 = {
  "class": "bg-white border-b border-gray-200 flex",
  "aria-label": "Breadcrumb"
};
var _hoisted_34 = {
  role: "list",
  "class": "max-w-screen-xl w-full mx-auto px-4 flex space-x-4 sm:px-6 lg:px-8"
};
var _hoisted_35 = {
  "class": "flex"
};
var _hoisted_36 = {
  "class": "flex items-center"
};
var _hoisted_37 = {
  href: "/",
  "class": "text-gray-400 hover:text-gray-500"
};

var _hoisted_38 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "sr-only"
}, "Home", -1
/* HOISTED */
);

var _hoisted_39 = {
  "class": "flex items-center"
};

var _hoisted_40 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  "class": "flex-shrink-0 w-6 h-full text-gray-200",
  viewBox: "0 0 24 44",
  preserveAspectRatio: "none",
  fill: "currentColor",
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M.293 0l22 22-22 22h1.414l22-22-22-22H.293z"
})], -1
/* HOISTED */
);

var _hoisted_41 = ["href", "aria-current"];
var _hoisted_42 = {
  "class": "flex-1"
};
var _hoisted_43 = {
  "class": "py-6"
};
var _hoisted_44 = {
  "class": "max-w-7xl mx-auto px-4 sm:px-6 md:px-8"
};
var _hoisted_45 = {
  "class": "text-2xl font-semibold text-gray-900"
};
var _hoisted_46 = {
  "class": "max-w-7xl mx-auto px-4 sm:px-6 md:px-8"
};
var _hoisted_47 = {
  "aria-live": "assertive",
  "class": "fixed top-16 inset-0 flex items-end px-4 py-6 pointer-events-none sm:p-6 sm:items-start"
};
var _hoisted_48 = {
  "class": "w-full flex flex-col items-center space-y-4 sm:items-end"
};
var _hoisted_49 = {
  "class": "max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden"
};
var _hoisted_50 = {
  "class": "p-4"
};
var _hoisted_51 = {
  "class": "flex items-start"
};
var _hoisted_52 = {
  key: 0,
  "class": "flex-shrink-0"
};
var _hoisted_53 = {
  key: 1,
  "class": "flex-shrink-0"
};
var _hoisted_54 = {
  key: 2,
  "class": "flex-shrink-0"
};
var _hoisted_55 = {
  key: 3,
  "class": "flex-shrink-0"
};
var _hoisted_56 = {
  "class": "ml-3 w-0 flex-1 pt-0.5"
};
var _hoisted_57 = ["textContent"];
var _hoisted_58 = ["textContent"];
var _hoisted_59 = {
  "class": "ml-4 flex-shrink-0 flex"
};
var _hoisted_60 = ["onClick"];

var _hoisted_61 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "sr-only"
}, "Close", -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _this = this;

  var _component_Head = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Head");

  var _component_DialogOverlay = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("DialogOverlay");

  var _component_TransitionChild = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("TransitionChild");

  var _component_XIcon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("XIcon");

  var _component_Link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Link");

  var _component_DisclosureButton = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("DisclosureButton");

  var _component_DisclosurePanel = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("DisclosurePanel");

  var _component_Disclosure = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Disclosure");

  var _component_Dialog = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Dialog");

  var _component_TransitionRoot = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("TransitionRoot");

  var _component_MenuAlt2Icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("MenuAlt2Icon");

  var _component_MenuSearch = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("MenuSearch");

  var _component_MenuNotification = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("MenuNotification");

  var _component_MenuProfile = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("MenuProfile");

  var _component_HomeIcon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("HomeIcon");

  var _component_CheckCircleIcon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("CheckCircleIcon");

  var _component_ExclamationIcon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ExclamationIcon");

  var _component_InformationCircleIcon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("InformationCircleIcon");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Head, null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_1, _hoisted_2];
    }),
    _: 1
    /* STABLE */

  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_TransitionRoot, {
    as: "template",
    show: $setup.sidebarOpen
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Dialog, {
        as: "div",
        "class": "fixed inset-0 flex z-40 md:hidden",
        onClose: _cache[1] || (_cache[1] = function ($event) {
          return $setup.sidebarOpen = false;
        })
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_TransitionChild, {
            as: "template",
            enter: "transition-opacity ease-linear duration-300",
            "enter-from": "opacity-0",
            "enter-to": "opacity-100",
            leave: "transition-opacity ease-linear duration-300",
            "leave-from": "opacity-100",
            "leave-to": "opacity-0"
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_DialogOverlay, {
                "class": "fixed inset-0 bg-gray-600 bg-opacity-75"
              })];
            }),
            _: 1
            /* STABLE */

          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_TransitionChild, {
            as: "template",
            enter: "transition ease-in-out duration-300 transform",
            "enter-from": "-translate-x-full",
            "enter-to": "translate-x-0",
            leave: "transition ease-in-out duration-300 transform",
            "leave-from": "translate-x-0",
            "leave-to": "-translate-x-full"
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_TransitionChild, {
                as: "template",
                enter: "ease-in-out duration-300",
                "enter-from": "opacity-0",
                "enter-to": "opacity-100",
                leave: "ease-in-out duration-300",
                "leave-from": "opacity-100",
                "leave-to": "opacity-0"
              }, {
                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
                    type: "button",
                    "class": "ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white",
                    onClick: _cache[0] || (_cache[0] = function ($event) {
                      return $setup.sidebarOpen = false;
                    })
                  }, [_hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_XIcon, {
                    "class": "h-6 w-6 text-white",
                    "aria-hidden": "true"
                  })])])];
                }),
                _: 1
                /* STABLE */

              }), _hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("nav", _hoisted_8, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_this.$page.props.navigation, function (item) {
                return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                  key: item.name
                }, [!item.children ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_9, [_ctx.$can(item.permission) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Link, {
                  key: 0,
                  href: item.href,
                  "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([_ctx.$page.component === item.component ? 'bg-gray-100 text-gray-900' : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900', 'group w-full flex items-center pl-2 py-2 text-sm font-medium rounded-md'])
                }, {
                  "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                    return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
                      innerHTML: item.icon,
                      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500', 'mr-3 flex-shrink-0 h-6 w-6']),
                      "aria-hidden": "true"
                    }, null, 10
                    /* CLASS, PROPS */
                    , _hoisted_10), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.name), 1
                    /* TEXT */
                    )];
                  }),
                  _: 2
                  /* DYNAMIC */

                }, 1032
                /* PROPS, DYNAMIC_SLOTS */
                , ["href", "class"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Disclosure, {
                  key: 1,
                  as: "div",
                  "class": "space-y-1"
                }, {
                  "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (_ref) {
                    var open = _ref.open;
                    return [_ctx.$can(item.permission) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_DisclosureButton, {
                      key: 0,
                      "class": "bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900 group w-full flex items-center pl-2 pr-1 py-2 text-left text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    }, {
                      "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                        return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
                          innerHTML: item.icon,
                          "class": "mr-3 flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500",
                          "aria-hidden": "true"
                        }, null, 8
                        /* PROPS */
                        , _hoisted_11), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_12, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.name), 1
                        /* TEXT */
                        ), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", {
                          "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([open ? 'text-gray-400 rotate-90' : 'text-gray-300', 'ml-3 flex-shrink-0 h-5 w-5 transform group-hover:text-gray-400 transition-colors ease-in-out duration-150']),
                          viewBox: "0 0 20 20",
                          "aria-hidden": "true"
                        }, _hoisted_14, 2
                        /* CLASS */
                        ))];
                      }),
                      _: 2
                      /* DYNAMIC */

                    }, 1024
                    /* DYNAMIC_SLOTS */
                    )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_DisclosurePanel, {
                      "class": "space-y-1"
                    }, {
                      "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                        return [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(item.children, function (subItem) {
                          return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", null, [_ctx.$can(subItem.permission) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Link, {
                            key: subItem.name,
                            as: "a",
                            href: subItem.href,
                            "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([_ctx.$page.component === subItem.component ? 'bg-gray-100 text-gray-900' : 'bg-white text-gray-600 hover:text-gray-900 hover:bg-gray-50', 'group w-full flex items-center pl-11 pr-2 py-2 text-sm font-medium rounded-md'])
                          }, {
                            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(subItem.name), 1
                              /* TEXT */
                              )];
                            }),
                            _: 2
                            /* DYNAMIC */

                          }, 1032
                          /* PROPS, DYNAMIC_SLOTS */
                          , ["href", "class"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]);
                        }), 256
                        /* UNKEYED_FRAGMENT */
                        ))];
                      }),
                      _: 2
                      /* DYNAMIC */

                    }, 1024
                    /* DYNAMIC_SLOTS */
                    )];
                  }),
                  _: 2
                  /* DYNAMIC */

                }, 1024
                /* DYNAMIC_SLOTS */
                ))], 64
                /* STABLE_FRAGMENT */
                );
              }), 128
              /* KEYED_FRAGMENT */
              ))])])])];
            }),
            _: 1
            /* STABLE */

          }), _hoisted_15];
        }),
        _: 1
        /* STABLE */

      })];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["show"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Static sidebar for desktop "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Sidebar component, swap this element with another sidebar if you like "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, [_hoisted_18, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_19, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("nav", _hoisted_20, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(this.$page.props.navigation, function (item) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      key: item.name
    }, [!item.children ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_21, [_ctx.$can(item.permission) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Link, {
      key: 0,
      href: item.href,
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([_ctx.$page.component === item.component ? 'bg-gray-100 text-gray-900' : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900', 'group w-full flex items-center pl-2 py-2 text-sm font-medium rounded-md'])
    }, {
      "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
        return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
          innerHTML: item.icon,
          "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500', 'mr-3 flex-shrink-0 h-6 w-6']),
          "aria-hidden": "true"
        }, null, 10
        /* CLASS, PROPS */
        , _hoisted_22), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.name), 1
        /* TEXT */
        )];
      }),
      _: 2
      /* DYNAMIC */

    }, 1032
    /* PROPS, DYNAMIC_SLOTS */
    , ["href", "class"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Disclosure, {
      key: 1,
      as: "div",
      "class": "space-y-1"
    }, {
      "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (_ref2) {
        var open = _ref2.open;
        return [_ctx.$can(item.permission) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_DisclosureButton, {
          key: 0,
          "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([item.current ? 'bg-gray-100 text-gray-900' : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900', 'group w-full flex items-center pl-2 pr-1 py-2 text-left text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500'])
        }, {
          "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
            return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
              innerHTML: item.icon,
              "class": "mr-3 flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500",
              "aria-hidden": "true"
            }, null, 8
            /* PROPS */
            , _hoisted_23), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_24, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.name), 1
            /* TEXT */
            ), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", {
              "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([open ? 'text-gray-400 rotate-90' : 'text-gray-300', 'ml-3 flex-shrink-0 h-5 w-5 transform group-hover:text-gray-400 transition-colors ease-in-out duration-150']),
              viewBox: "0 0 20 20",
              "aria-hidden": "true"
            }, _hoisted_26, 2
            /* CLASS */
            ))];
          }),
          _: 2
          /* DYNAMIC */

        }, 1032
        /* PROPS, DYNAMIC_SLOTS */
        , ["class"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_DisclosurePanel, {
          "class": "space-y-1"
        }, {
          "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
            return [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(item.children, function (subItem) {
              return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", null, [_ctx.$can(subItem.permission) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Link, {
                key: subItem.name,
                as: "a",
                href: subItem.href,
                "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([_ctx.$page.component === subItem.component ? 'bg-gray-100 text-gray-900' : 'bg-white text-gray-600 hover:text-gray-900 hover:bg-gray-50', 'group w-full flex items-center pl-11 pr-2 py-2 text-sm font-medium rounded-md'])
              }, {
                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(subItem.name), 1
                  /* TEXT */
                  )];
                }),
                _: 2
                /* DYNAMIC */

              }, 1032
              /* PROPS, DYNAMIC_SLOTS */
              , ["href", "class"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]);
            }), 256
            /* UNKEYED_FRAGMENT */
            ))];
          }),
          _: 2
          /* DYNAMIC */

        }, 1024
        /* DYNAMIC_SLOTS */
        )];
      }),
      _: 2
      /* DYNAMIC */

    }, 1024
    /* DYNAMIC_SLOTS */
    ))], 64
    /* STABLE_FRAGMENT */
    );
  }), 128
  /* KEYED_FRAGMENT */
  ))])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_27, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_28, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden",
    onClick: _cache[2] || (_cache[2] = function ($event) {
      return $setup.sidebarOpen = true;
    })
  }, [_hoisted_29, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_MenuAlt2Icon, {
    "class": "h-6 w-6",
    "aria-hidden": "true"
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_30, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_31, [_ctx.$can('view-menu-search') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_MenuSearch, {
    key: 0
  })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_32, [_ctx.$can('view-notification') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_MenuNotification, {
    key: 0
  })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Profile dropdown "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_MenuProfile)])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("nav", _hoisted_33, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ol", _hoisted_34, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_35, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_36, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_37, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_HomeIcon, {
    "class": "flex-shrink-0 h-5 w-5",
    "aria-hidden": "true"
  }), _hoisted_38])])]), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.breadcrumbs, function (page) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", {
      key: page.name,
      "class": "flex"
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_39, [_hoisted_40, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
      href: page.href,
      "class": "ml-4 text-sm font-medium text-gray-500 hover:text-gray-700",
      "aria-current": page.current ? 'page' : undefined
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(page.name), 9
    /* TEXT, PROPS */
    , _hoisted_41)])]);
  }), 128
  /* KEYED_FRAGMENT */
  ))])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("main", _hoisted_42, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_43, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_44, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", _hoisted_45, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.title), 1
  /* TEXT */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_46, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" /End main content ")])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Global notification live region "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_47, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_48, [$data.notifications.length > 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: 0
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.notifications, function (notification, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Transition, {
      key: index,
      "enter-active-class": "transform ease-out duration-300 transition",
      "enter-from-class": "translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2",
      "enter-to-class": "translate-y-0 opacity-100 sm:translate-x-0",
      "leave-active-class": "transition ease-in duration-100",
      "leave-from-class": "opacity-100",
      "leave-to-class": "opacity-0"
    }, {
      "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
        return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_49, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_50, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_51, [notification.type === 'success' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_52, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_CheckCircleIcon, {
          "class": "h-6 w-6 text-green-400",
          "aria-hidden": "true"
        })])) : notification.type === 'error' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_53, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ExclamationIcon, {
          "class": "h-6 w-6 text-red-600",
          "aria-hidden": "true"
        })])) : notification.type === 'attention' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_54, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ExclamationIcon, {
          "class": "h-5 w-5 text-yellow-400",
          "aria-hidden": "true"
        })])) : notification.type === 'information' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_55, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_InformationCircleIcon, {
          "class": "h-5 w-5 text-blue-400",
          "aria-hidden": "true"
        })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_56, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
          "class": "text-sm font-medium text-gray-900",
          textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(notification.title)
        }, null, 8
        /* PROPS */
        , _hoisted_57), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
          "class": "mt-1 text-sm text-gray-500",
          textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(notification.content)
        }, null, 8
        /* PROPS */
        , _hoisted_58)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_59, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
          onClick: function onClick($event) {
            return $options.closeNotification(index);
          },
          "class": "bg-white rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        }, [_hoisted_61, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_XIcon, {
          "class": "h-5 w-5",
          "aria-hidden": "true"
        })], 8
        /* PROPS */
        , _hoisted_60)])])])])];
      }),
      _: 2
      /* DYNAMIC */

    }, 1024
    /* DYNAMIC_SLOTS */
    );
  }), 128
  /* KEYED_FRAGMENT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])], 64
  /* STABLE_FRAGMENT */
  );
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/MenuNotification.vue?vue&type=template&id=6dea9c46":
/*!**********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/MenuNotification.vue?vue&type=template&id=6dea9c46 ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  type: "button",
  "class": "bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
};

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "sr-only"
}, "View notifications", -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_BellIcon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("BellIcon");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", _hoisted_1, [_hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_BellIcon, {
    "class": "h-6 w-6",
    "aria-hidden": "true"
  })]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/MenuProfile.vue?vue&type=template&id=18eb539e":
/*!*****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/MenuProfile.vue?vue&type=template&id=18eb539e ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "sr-only"
}, "Open user menu", -1
/* HOISTED */
);

var _hoisted_2 = ["src", "alt"];
var _hoisted_3 = {
  key: 0,
  href: "/user/profile",
  "class": "block px-4 py-2 text-sm text-gray-700"
};

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Sign out");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _this = this;

  var _component_MenuButton = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("MenuButton");

  var _component_Link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Link");

  var _component_MenuItems = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("MenuItems");

  var _component_Menu = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Menu");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Menu, {
    as: "div",
    "class": "ml-3 relative"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_MenuButton, {
        "class": "max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [_hoisted_1, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
            "class": "h-8 w-8 rounded-full",
            src: _this.$page.props.auth.user.profile_url,
            alt: $options.full_name
          }, null, 8
          /* PROPS */
          , _hoisted_2)];
        }),
        _: 1
        /* STABLE */

      })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(vue__WEBPACK_IMPORTED_MODULE_0__.Transition, {
        "enter-active-class": "transition ease-out duration-100",
        "enter-from-class": "transform opacity-0 scale-95",
        "enter-to-class": "transform opacity-100 scale-100",
        "leave-active-class": "transition ease-in duration-75",
        "leave-from-class": "transform opacity-100 scale-100",
        "leave-to-class": "transform opacity-0 scale-95"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_MenuItems, {
            "class": "origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [_ctx.$can('manage-profile') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("a", _hoisted_3, "Your Profile")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
                href: "/logout",
                "class": "block px-4 py-2 text-sm text-gray-700",
                method: "post",
                as: "button"
              }, {
                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                  return [_hoisted_4];
                }),
                _: 1
                /* STABLE */

              })];
            }),
            _: 1
            /* STABLE */

          })];
        }),
        _: 1
        /* STABLE */

      })];
    }),
    _: 1
    /* STABLE */

  });
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/MenuSearch.vue?vue&type=template&id=b6fefe7a":
/*!****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/MenuSearch.vue?vue&type=template&id=b6fefe7a ***!
  \****************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "w-full flex md:ml-0",
  action: "#",
  method: "get"
};

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "search-field",
  "class": "sr-only"
}, "Search", -1
/* HOISTED */
);

var _hoisted_3 = {
  "class": "relative w-full text-gray-400 focus-within:text-gray-600"
};
var _hoisted_4 = {
  "class": "absolute inset-y-0 left-0 flex items-center pointer-events-none"
};

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
  id: "search-field",
  "class": "block w-full h-full pl-8 pr-3 py-2 border-transparent text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-0 focus:border-transparent sm:text-sm",
  placeholder: "Search",
  type: "search",
  name: "search"
}, null, -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_SearchIcon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("SearchIcon");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("form", _hoisted_1, [_hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_SearchIcon, {
    "class": "h-5 w-5",
    "aria-hidden": "true"
  })]), _hoisted_5])]);
}

/***/ }),

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var alpinejs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! alpinejs */ "./node_modules/alpinejs/dist/module.esm.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @inertiajs/inertia-vue3 */ "./node_modules/@inertiajs/inertia-vue3/dist/index.js");
/* harmony import */ var _inertiajs_progress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @inertiajs/progress */ "./node_modules/@inertiajs/progress/dist/index.js");
/* harmony import */ var _Layout_App__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Layout/App */ "./resources/js/Layout/App.vue");
/* harmony import */ var _mixins_Permissions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mixins/Permissions */ "./resources/js/mixins/Permissions.vue");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

__webpack_require__(/*! ./bootstrap */ "./resources/js/bootstrap.js");


window.Alpine = alpinejs__WEBPACK_IMPORTED_MODULE_1__["default"];
alpinejs__WEBPACK_IMPORTED_MODULE_1__["default"].start(); // Setup of the Inertia app






(0,_inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_3__.createInertiaApp)({
  resolve: function () {
    var _resolve = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(name) {
      var _page$layout;

      var page;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return __webpack_require__("./resources/js/Pages lazy recursive ^\\.\\/.*$")("./".concat(name));

            case 2:
              page = _context.sent["default"];
              (_page$layout = page.layout) !== null && _page$layout !== void 0 ? _page$layout : page.layout = _Layout_App__WEBPACK_IMPORTED_MODULE_5__["default"]; // Set default layout if no other layout provided

              return _context.abrupt("return", page);

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    function resolve(_x) {
      return _resolve.apply(this, arguments);
    }

    return resolve;
  }(),
  setup: function setup(_ref) {
    var el = _ref.el,
        App = _ref.App,
        props = _ref.props,
        plugin = _ref.plugin;
    (0,vue__WEBPACK_IMPORTED_MODULE_2__.createApp)({
      render: function render() {
        return (0,vue__WEBPACK_IMPORTED_MODULE_2__.h)(App, props);
      }
    }).use(plugin).component("Link", _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_3__.Link).component("Head", _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_3__.Head).mixin(_mixins_Permissions__WEBPACK_IMPORTED_MODULE_6__["default"]).mount(el);
  },
  title: function title(_title) {
    return "Laravel: " + _title;
  }
});
_inertiajs_progress__WEBPACK_IMPORTED_MODULE_4__.InertiaProgress.init({
  color: 'red',
  showSpinner: true
});

/***/ }),

/***/ "./resources/js/bootstrap.js":
/*!***********************************!*\
  !*** ./resources/js/bootstrap.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var laravel_echo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! laravel-echo */ "./node_modules/laravel-echo/dist/echo.js");
/* harmony import */ var pusher_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pusher-js */ "./node_modules/pusher-js/dist/web/pusher.js");
/* harmony import */ var pusher_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(pusher_js__WEBPACK_IMPORTED_MODULE_1__);
window._ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */


 // window.Pusher = require('pusher-js');

window.Echo = new laravel_echo__WEBPACK_IMPORTED_MODULE_0__["default"]({
  broadcaster: 'pusher',
  key: "",
  cluster: "mt1",
  forceTLS: true
});

/***/ }),

/***/ "./resources/css/app.css":
/*!*******************************!*\
  !*** ./resources/css/app.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./resources/js/Layout/App.vue":
/*!*************************************!*\
  !*** ./resources/js/Layout/App.vue ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _App_vue_vue_type_template_id_7cbbacba__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=7cbbacba */ "./resources/js/Layout/App.vue?vue&type=template&id=7cbbacba");
/* harmony import */ var _App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js */ "./resources/js/Layout/App.vue?vue&type=script&lang=js");
/* harmony import */ var E_xampp_htdocs_upwork_mathsewell_meeting_poc_chw_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,E_xampp_htdocs_upwork_mathsewell_meeting_poc_chw_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_App_vue_vue_type_template_id_7cbbacba__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Layout/App.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Shared/MenuNotification.vue":
/*!**************************************************!*\
  !*** ./resources/js/Shared/MenuNotification.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MenuNotification_vue_vue_type_template_id_6dea9c46__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MenuNotification.vue?vue&type=template&id=6dea9c46 */ "./resources/js/Shared/MenuNotification.vue?vue&type=template&id=6dea9c46");
/* harmony import */ var _MenuNotification_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MenuNotification.vue?vue&type=script&lang=js */ "./resources/js/Shared/MenuNotification.vue?vue&type=script&lang=js");
/* harmony import */ var E_xampp_htdocs_upwork_mathsewell_meeting_poc_chw_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,E_xampp_htdocs_upwork_mathsewell_meeting_poc_chw_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_MenuNotification_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_MenuNotification_vue_vue_type_template_id_6dea9c46__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Shared/MenuNotification.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Shared/MenuProfile.vue":
/*!*********************************************!*\
  !*** ./resources/js/Shared/MenuProfile.vue ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MenuProfile_vue_vue_type_template_id_18eb539e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MenuProfile.vue?vue&type=template&id=18eb539e */ "./resources/js/Shared/MenuProfile.vue?vue&type=template&id=18eb539e");
/* harmony import */ var _MenuProfile_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MenuProfile.vue?vue&type=script&lang=js */ "./resources/js/Shared/MenuProfile.vue?vue&type=script&lang=js");
/* harmony import */ var E_xampp_htdocs_upwork_mathsewell_meeting_poc_chw_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,E_xampp_htdocs_upwork_mathsewell_meeting_poc_chw_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_MenuProfile_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_MenuProfile_vue_vue_type_template_id_18eb539e__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Shared/MenuProfile.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Shared/MenuSearch.vue":
/*!********************************************!*\
  !*** ./resources/js/Shared/MenuSearch.vue ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MenuSearch_vue_vue_type_template_id_b6fefe7a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MenuSearch.vue?vue&type=template&id=b6fefe7a */ "./resources/js/Shared/MenuSearch.vue?vue&type=template&id=b6fefe7a");
/* harmony import */ var _MenuSearch_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MenuSearch.vue?vue&type=script&lang=js */ "./resources/js/Shared/MenuSearch.vue?vue&type=script&lang=js");
/* harmony import */ var E_xampp_htdocs_upwork_mathsewell_meeting_poc_chw_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,E_xampp_htdocs_upwork_mathsewell_meeting_poc_chw_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_MenuSearch_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_MenuSearch_vue_vue_type_template_id_b6fefe7a__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Shared/MenuSearch.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/mixins/Permissions.vue":
/*!*********************************************!*\
  !*** ./resources/js/mixins/Permissions.vue ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Permissions_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Permissions.vue?vue&type=script&lang=js */ "./resources/js/mixins/Permissions.vue?vue&type=script&lang=js");
/* harmony import */ var E_xampp_htdocs_upwork_mathsewell_meeting_poc_chw_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");



;
const __exports__ = /*#__PURE__*/(0,E_xampp_htdocs_upwork_mathsewell_meeting_poc_chw_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_Permissions_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"], [['__file',"resources/js/mixins/Permissions.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Layout/App.vue?vue&type=script&lang=js":
/*!*************************************************************!*\
  !*** ./resources/js/Layout/App.vue?vue&type=script&lang=js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./App.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layout/App.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Shared/MenuNotification.vue?vue&type=script&lang=js":
/*!**************************************************************************!*\
  !*** ./resources/js/Shared/MenuNotification.vue?vue&type=script&lang=js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MenuNotification_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MenuNotification_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./MenuNotification.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/MenuNotification.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Shared/MenuProfile.vue?vue&type=script&lang=js":
/*!*********************************************************************!*\
  !*** ./resources/js/Shared/MenuProfile.vue?vue&type=script&lang=js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MenuProfile_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MenuProfile_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./MenuProfile.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/MenuProfile.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Shared/MenuSearch.vue?vue&type=script&lang=js":
/*!********************************************************************!*\
  !*** ./resources/js/Shared/MenuSearch.vue?vue&type=script&lang=js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MenuSearch_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MenuSearch_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./MenuSearch.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/MenuSearch.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/mixins/Permissions.vue?vue&type=script&lang=js":
/*!*********************************************************************!*\
  !*** ./resources/js/mixins/Permissions.vue?vue&type=script&lang=js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Permissions_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Permissions_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Permissions.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/mixins/Permissions.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Layout/App.vue?vue&type=template&id=7cbbacba":
/*!*******************************************************************!*\
  !*** ./resources/js/Layout/App.vue?vue&type=template&id=7cbbacba ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_App_vue_vue_type_template_id_7cbbacba__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_App_vue_vue_type_template_id_7cbbacba__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./App.vue?vue&type=template&id=7cbbacba */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layout/App.vue?vue&type=template&id=7cbbacba");


/***/ }),

/***/ "./resources/js/Shared/MenuNotification.vue?vue&type=template&id=6dea9c46":
/*!********************************************************************************!*\
  !*** ./resources/js/Shared/MenuNotification.vue?vue&type=template&id=6dea9c46 ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MenuNotification_vue_vue_type_template_id_6dea9c46__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MenuNotification_vue_vue_type_template_id_6dea9c46__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./MenuNotification.vue?vue&type=template&id=6dea9c46 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/MenuNotification.vue?vue&type=template&id=6dea9c46");


/***/ }),

/***/ "./resources/js/Shared/MenuProfile.vue?vue&type=template&id=18eb539e":
/*!***************************************************************************!*\
  !*** ./resources/js/Shared/MenuProfile.vue?vue&type=template&id=18eb539e ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MenuProfile_vue_vue_type_template_id_18eb539e__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MenuProfile_vue_vue_type_template_id_18eb539e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./MenuProfile.vue?vue&type=template&id=18eb539e */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/MenuProfile.vue?vue&type=template&id=18eb539e");


/***/ }),

/***/ "./resources/js/Shared/MenuSearch.vue?vue&type=template&id=b6fefe7a":
/*!**************************************************************************!*\
  !*** ./resources/js/Shared/MenuSearch.vue?vue&type=template&id=b6fefe7a ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MenuSearch_vue_vue_type_template_id_b6fefe7a__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MenuSearch_vue_vue_type_template_id_b6fefe7a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./MenuSearch.vue?vue&type=template&id=b6fefe7a */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/MenuSearch.vue?vue&type=template&id=b6fefe7a");


/***/ }),

/***/ "./resources/js/Pages lazy recursive ^\\.\\/.*$":
/*!************************************************************!*\
  !*** ./resources/js/Pages/ lazy ^\.\/.*$ namespace object ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./Meetings/Attendees/Create": [
		"./resources/js/Pages/Meetings/Attendees/Create.vue",
		"resources_js_Pages_Meetings_Attendees_Create_vue"
	],
	"./Meetings/Attendees/Create.vue": [
		"./resources/js/Pages/Meetings/Attendees/Create.vue",
		"resources_js_Pages_Meetings_Attendees_Create_vue"
	],
	"./Meetings/Create": [
		"./resources/js/Pages/Meetings/Create.vue",
		"resources_js_Pages_Meetings_Create_vue"
	],
	"./Meetings/Create.vue": [
		"./resources/js/Pages/Meetings/Create.vue",
		"resources_js_Pages_Meetings_Create_vue"
	],
	"./Meetings/Documents/Create": [
		"./resources/js/Pages/Meetings/Documents/Create.vue",
		"resources_js_Pages_Meetings_Documents_Create_vue"
	],
	"./Meetings/Documents/Create.vue": [
		"./resources/js/Pages/Meetings/Documents/Create.vue",
		"resources_js_Pages_Meetings_Documents_Create_vue"
	],
	"./Meetings/Edit": [
		"./resources/js/Pages/Meetings/Edit.vue",
		"/js/vendor",
		"resources_js_Pages_Meetings_Edit_vue"
	],
	"./Meetings/Edit.vue": [
		"./resources/js/Pages/Meetings/Edit.vue",
		"/js/vendor",
		"resources_js_Pages_Meetings_Edit_vue"
	],
	"./Meetings/Index": [
		"./resources/js/Pages/Meetings/Index.vue",
		"/js/vendor",
		"resources_js_Pages_Meetings_Index_vue"
	],
	"./Meetings/Index.vue": [
		"./resources/js/Pages/Meetings/Index.vue",
		"/js/vendor",
		"resources_js_Pages_Meetings_Index_vue"
	],
	"./Meetings/Show": [
		"./resources/js/Pages/Meetings/Show.vue",
		"resources_js_Pages_Meetings_Show_vue"
	],
	"./Meetings/Show.vue": [
		"./resources/js/Pages/Meetings/Show.vue",
		"resources_js_Pages_Meetings_Show_vue"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = "./resources/js/Pages lazy recursive ^\\.\\/.*$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "?2128":
/*!********************************!*\
  !*** ./util.inspect (ignored) ***!
  \********************************/
/***/ (() => {

/* (ignored) */

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["css/app","/js/vendor"], () => (__webpack_exec__("./resources/js/app.js"), __webpack_exec__("./resources/css/app.css")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);