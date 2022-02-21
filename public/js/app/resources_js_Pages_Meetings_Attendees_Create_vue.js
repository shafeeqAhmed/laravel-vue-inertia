"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Meetings_Attendees_Create_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Meetings/Attendees/Create.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Meetings/Attendees/Create.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-vue3 */ "./node_modules/@inertiajs/inertia-vue3/dist/index.js");
/* harmony import */ var _headlessui_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @headlessui/vue */ "./node_modules/@headlessui/vue/dist/headlessui.esm.js");
/* harmony import */ var _heroicons_vue_solid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @heroicons/vue/solid */ "./node_modules/@heroicons/vue/solid/esm/index.js");
/* harmony import */ var _mixins_SweetAlert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../mixins/SweetAlert */ "./resources/js/mixins/SweetAlert.vue");







/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    RadioGroup: _headlessui_vue__WEBPACK_IMPORTED_MODULE_4__.RadioGroup,
    RadioGroupDescription: _headlessui_vue__WEBPACK_IMPORTED_MODULE_4__.RadioGroupDescription,
    RadioGroupLabel: _headlessui_vue__WEBPACK_IMPORTED_MODULE_4__.RadioGroupLabel,
    RadioGroupOption: _headlessui_vue__WEBPACK_IMPORTED_MODULE_4__.RadioGroupOption,
    Listbox: _headlessui_vue__WEBPACK_IMPORTED_MODULE_4__.Listbox,
    ListboxButton: _headlessui_vue__WEBPACK_IMPORTED_MODULE_4__.ListboxButton,
    ListboxLabel: _headlessui_vue__WEBPACK_IMPORTED_MODULE_4__.ListboxLabel,
    ListboxOption: _headlessui_vue__WEBPACK_IMPORTED_MODULE_4__.ListboxOption,
    ListboxOptions: _headlessui_vue__WEBPACK_IMPORTED_MODULE_4__.ListboxOptions,
    CheckIcon: _heroicons_vue_solid__WEBPACK_IMPORTED_MODULE_2__.CheckIcon,
    SelectorIcon: _heroicons_vue_solid__WEBPACK_IMPORTED_MODULE_2__.SelectorIcon,
    Dialog: _headlessui_vue__WEBPACK_IMPORTED_MODULE_4__.Dialog,
    DialogOverlay: _headlessui_vue__WEBPACK_IMPORTED_MODULE_4__.DialogOverlay,
    DialogTitle: _headlessui_vue__WEBPACK_IMPORTED_MODULE_4__.DialogTitle,
    TransitionChild: _headlessui_vue__WEBPACK_IMPORTED_MODULE_4__.TransitionChild,
    TransitionRoot: _headlessui_vue__WEBPACK_IMPORTED_MODULE_4__.TransitionRoot,
    Switch: _headlessui_vue__WEBPACK_IMPORTED_MODULE_4__.Switch
  },
  mixins: [_mixins_SweetAlert__WEBPACK_IMPORTED_MODULE_3__["default"]],
  props: {
    errors: Object,
    workers: Array,
    meeting: Object,
    attendee_types: Array,
    isOpenAddAttendeesModal: {
      type: Boolean,
      required: true
    }
  },
  data: function data() {
    return {
      form: (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)({})
    };
  },
  methods: {
    closeAddAttendeeModal: function closeAddAttendeeModal() {
      this.$emit('closeAddAttendeeModal');
    },
    submit: function submit() {
      var _this = this;

      this.form.post('/meetings/meeting_workers/' + this.meeting.id, {
        onSuccess: function onSuccess() {
          _this.toast('success', 'Attendees has been updated Successfully!');

          _this.closeAddAttendeeModal();

          _this.form.reset();
        }
      });
    }
  },
  setup: function setup() {
    var form = (0,_inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_1__.useForm)({
      worker_id: null,
      attendee_type_id: null,
      notes: null
    });
    return {
      form: form
    };
  },
  mounted: function mounted() {},
  name: "Attendee Create",
  sidebar: "Meetings"
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/mixins/SweetAlert.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/mixins/SweetAlert.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    Toast: (sweetalert2__WEBPACK_IMPORTED_MODULE_0___default()),
    Swal: (sweetalert2__WEBPACK_IMPORTED_MODULE_0___default())
  },
  methods: {
    toast: function toast(type, message) {
      var Toast = sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: function didOpen(toast) {
          toast.addEventListener('mouseenter', (sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().stopTimer));
          toast.addEventListener('mouseleave', (sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().resumeTimer));
        }
      });
      Toast.fire({
        icon: type,
        title: message
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Meetings/Attendees/Create.vue?vue&type=template&id=34419ad0":
/*!******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Meetings/Attendees/Create.vue?vue&type=template&id=34419ad0 ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
};

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "hidden sm:inline-block sm:align-middle sm:h-screen",
  "aria-hidden": "true"
}, "​", -1
/* HOISTED */
);

var _hoisted_3 = {
  "class": "inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
};
var _hoisted_4 = {
  "class": "border-t border-gray-200 px-4 py-5 sm:px-6"
};
var _hoisted_5 = {
  "class": "space-y-8 divide-y divide-gray-200 sm:space-y-5"
};
var _hoisted_6 = {
  "class": "sm:flex sm:items-start"
};
var _hoisted_7 = {
  "class": "text-center sm:mt-0 sm:mb-3 sm:text-left"
};

var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Add Attendee ");

var _hoisted_9 = {
  "class": "space-y-6 sm:space-y-5"
};
var _hoisted_10 = {
  "class": "sm:grid sm:grid-cols-2 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-2"
};

var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "worker_id",
  "class": "block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
}, " Worker ", -1
/* HOISTED */
);

var _hoisted_12 = {
  "class": "mt-1 sm:mt-0 sm:col-span-2"
};
var _hoisted_13 = {
  "class": "mt-1 relative"
};
var _hoisted_14 = {
  "class": "flex items-center"
};
var _hoisted_15 = ["src"];
var _hoisted_16 = {
  key: 1,
  "class": "ml-3 block truncate"
};
var _hoisted_17 = {
  key: 2,
  "class": "ml-3 block truncate"
};
var _hoisted_18 = {
  "class": "ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none"
};
var _hoisted_19 = {
  "class": "flex items-center"
};
var _hoisted_20 = ["src"];
var _hoisted_21 = ["textContent"];
var _hoisted_22 = {
  "class": "sm:grid sm:grid-cols-2 sm:gap-4 sm:items-start sm:border-gray-200"
};

var _hoisted_23 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "attendee_type_id",
  "class": "block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
}, " Attendee Type ", -1
/* HOISTED */
);

var _hoisted_24 = {
  "class": "mt-1 sm:mt-0 sm:col-span-2"
};

var _hoisted_25 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Attendee Type");

var _hoisted_26 = {
  "class": "space-y-4"
};
var _hoisted_27 = {
  "class": "flex items-center"
};
var _hoisted_28 = {
  "class": "text-sm"
};
var _hoisted_29 = {
  "class": "sm:inline"
};
var _hoisted_30 = {
  "class": "sm:grid sm:grid-cols-2 sm:gap-4 sm:items-start sm:border-gray-200"
};

var _hoisted_31 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "notes",
  "class": "block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
}, " Notes ", -1
/* HOISTED */
);

var _hoisted_32 = {
  "class": "mt-1 sm:mt-0 sm:col-span-2"
};

var _hoisted_33 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "mt-2 text-sm text-gray-500"
}, "Notes about the attendee, not included in published output", -1
/* HOISTED */
);

var _hoisted_34 = ["textContent"];
var _hoisted_35 = {
  "class": "pt-5"
};
var _hoisted_36 = {
  "class": "flex justify-end"
};
var _hoisted_37 = ["disabled"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_DialogOverlay = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("DialogOverlay");

  var _component_TransitionChild = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("TransitionChild");

  var _component_DialogTitle = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("DialogTitle");

  var _component_SelectorIcon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("SelectorIcon");

  var _component_ListboxButton = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ListboxButton");

  var _component_CheckIcon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("CheckIcon");

  var _component_ListboxOption = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ListboxOption");

  var _component_ListboxOptions = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ListboxOptions");

  var _component_Listbox = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Listbox");

  var _component_RadioGroupLabel = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("RadioGroupLabel");

  var _component_RadioGroupDescription = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("RadioGroupDescription");

  var _component_RadioGroupOption = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("RadioGroupOption");

  var _component_RadioGroup = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("RadioGroup");

  var _component_Dialog = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Dialog");

  var _component_TransitionRoot = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("TransitionRoot");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_TransitionRoot, {
    as: "template",
    show: $props.isOpenAddAttendeesModal
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Dialog, {
        as: "div",
        "class": "fixed z-10 inset-0 overflow-y-auto",
        onClose: _cache[5] || (_cache[5] = function ($event) {
          return _ctx.open = false;
        })
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_TransitionChild, {
            as: "template",
            enter: "ease-out duration-300",
            "enter-from": "opacity-0",
            "enter-to": "opacity-100",
            leave: "ease-in duration-200",
            "leave-from": "opacity-100",
            "leave-to": "opacity-0"
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_DialogOverlay, {
                "class": "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
              })];
            }),
            _: 1
            /* STABLE */

          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" This element is to trick the browser into centering the modal contents. "), _hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_TransitionChild, {
            as: "template",
            enter: "ease-out duration-300",
            "enter-from": "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
            "enter-to": "opacity-100 translate-y-0 sm:scale-100",
            leave: "ease-in duration-200",
            "leave-from": "opacity-100 translate-y-0 sm:scale-100",
            "leave-to": "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
                onSubmit: _cache[4] || (_cache[4] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
                  return $options.submit && $options.submit.apply($options, arguments);
                }, ["prevent"])),
                "class": "space-y-8 divide-y divide-gray-200"
              }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_DialogTitle, {
                as: "h3",
                "class": "text-lg leading-6 font-medium text-gray-900"
              }, {
                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                  return [_hoisted_8];
                }),
                _: 1
                /* STABLE */

              })])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [_hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Listbox, {
                as: "div",
                modelValue: $setup.form.worker_id,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
                  return $setup.form.worker_id = $event;
                })
              }, {
                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ListboxButton, {
                    "class": "relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  }, {
                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_14, [$setup.form.worker_id != null ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("img", {
                        key: 0,
                        src: $props.workers[$props.workers.findIndex(function (worker) {
                          return worker.id === $setup.form.worker_id;
                        })].avatar,
                        alt: "",
                        "class": "flex-shrink-0 h-6 w-6 rounded-full"
                      }, null, 8
                      /* PROPS */
                      , _hoisted_15)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $setup.form.worker_id != null ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_16, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.workers[$props.workers.findIndex(function (worker) {
                        return worker.id === $setup.form.worker_id;
                      })].forenames) + " " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.workers[$props.workers.findIndex(function (worker) {
                        return worker.id === $setup.form.worker_id;
                      })].surname), 1
                      /* TEXT */
                      )) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_17, "Please select a worker..."))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_18, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_SelectorIcon, {
                        "class": "h-5 w-5 text-gray-400",
                        "aria-hidden": "true"
                      })])];
                    }),
                    _: 1
                    /* STABLE */

                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(vue__WEBPACK_IMPORTED_MODULE_0__.Transition, {
                    "leave-active-class": "transition ease-in duration-100",
                    "leave-from-class": "opacity-100",
                    "leave-to-class": "opacity-0"
                  }, {
                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ListboxOptions, {
                        "class": "absolute z-10 mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
                      }, {
                        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                          return [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.workers, function (worker) {
                            return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_ListboxOption, {
                              as: "template",
                              key: worker.id,
                              value: worker.id
                            }, {
                              "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (_ref) {
                                var active = _ref.active,
                                    selected = _ref.selected;
                                return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
                                  "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([active ? 'text-white bg-indigo-600' : 'text-gray-900', 'cursor-default select-none relative py-2 pl-3 pr-9'])
                                }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_19, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
                                  src: worker.avatar,
                                  alt: "",
                                  "class": "flex-shrink-0 h-6 w-6 rounded-full"
                                }, null, 8
                                /* PROPS */
                                , _hoisted_20), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
                                  "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate'])
                                }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(worker.forenames) + " " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(worker.surname), 3
                                /* TEXT, CLASS */
                                )]), selected ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", {
                                  key: 0,
                                  "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([active ? 'text-white' : 'text-indigo-600', 'absolute inset-y-0 right-0 flex items-center pr-4'])
                                }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_CheckIcon, {
                                  "class": "h-5 w-5",
                                  "aria-hidden": "true"
                                })], 2
                                /* CLASS */
                                )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2
                                /* CLASS */
                                )];
                              }),
                              _: 2
                              /* DYNAMIC */

                            }, 1032
                            /* PROPS, DYNAMIC_SLOTS */
                            , ["value"]);
                          }), 128
                          /* KEYED_FRAGMENT */
                          ))];
                        }),
                        _: 1
                        /* STABLE */

                      })];
                    }),
                    _: 1
                    /* STABLE */

                  })])];
                }),
                _: 1
                /* STABLE */

              }, 8
              /* PROPS */
              , ["modelValue"]), $setup.form.errors.worker_id ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
                key: 0,
                textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.form.errors.worker_id),
                "class": "text-red-500 text-xs mt-1"
              }, null, 8
              /* PROPS */
              , _hoisted_21)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_22, [_hoisted_23, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_24, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_RadioGroup, {
                modelValue: $setup.form.attendee_type_id,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
                  return $setup.form.attendee_type_id = $event;
                })
              }, {
                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_RadioGroupLabel, {
                    "class": "sr-only"
                  }, {
                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                      return [_hoisted_25];
                    }),
                    _: 1
                    /* STABLE */

                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_26, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.attendee_types, function (attendee_type) {
                    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_RadioGroupOption, {
                      as: "template",
                      key: attendee_type.id,
                      value: attendee_type
                    }, {
                      "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (_ref2) {
                        var checked = _ref2.checked,
                            active = _ref2.active;
                        return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
                          "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([checked ? 'border-transparent' : 'border-gray-300', active ? 'ring-2 ring-indigo-500' : '', 'relative block bg-white border rounded-lg shadow-sm px-6 py-4 cursor-pointer sm:flex sm:justify-between focus:outline-none'])
                        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_27, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_28, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_RadioGroupLabel, {
                          as: "p",
                          "class": "font-medium text-gray-900"
                        }, {
                          "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                            return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(attendee_type.name), 1
                            /* TEXT */
                            )];
                          }),
                          _: 2
                          /* DYNAMIC */

                        }, 1024
                        /* DYNAMIC_SLOTS */
                        ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_RadioGroupDescription, {
                          as: "div",
                          "class": "text-gray-500"
                        }, {
                          "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                            return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_29, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(attendee_type.description), 1
                            /* TEXT */
                            )];
                          }),
                          _: 2
                          /* DYNAMIC */

                        }, 1024
                        /* DYNAMIC_SLOTS */
                        )])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
                          "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([active ? 'border' : 'border-2', checked ? 'border-indigo-500' : 'border-transparent', 'absolute -inset-px rounded-lg pointer-events-none']),
                          "aria-hidden": "true"
                        }, null, 2
                        /* CLASS */
                        )], 2
                        /* CLASS */
                        )];
                      }),
                      _: 2
                      /* DYNAMIC */

                    }, 1032
                    /* PROPS, DYNAMIC_SLOTS */
                    , ["value"]);
                  }), 128
                  /* KEYED_FRAGMENT */
                  ))])];
                }),
                _: 1
                /* STABLE */

              }, 8
              /* PROPS */
              , ["modelValue"])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_30, [_hoisted_31, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_32, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
                "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
                  return $setup.form.notes = $event;
                }),
                id: "notes",
                name: "notes",
                rows: "3",
                "class": "max-w-lg shadow-sm block w-full focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border border-gray-300 rounded-md"
              }, null, 512
              /* NEED_PATCH */
              ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form.notes]]), _hoisted_33, $setup.form.errors.notes ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
                key: 0,
                textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.form.errors.notes),
                "class": "text-red-500 text-xs mt-1"
              }, null, 8
              /* PROPS */
              , _hoisted_34)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_35, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_36, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
                type: "button",
                onClick: _cache[3] || (_cache[3] = function () {
                  return $options.closeAddAttendeeModal && $options.closeAddAttendeeModal.apply($options, arguments);
                }),
                "class": "inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              }, " Cancel "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
                type: "submit",
                "class": "ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
                disabled: $setup.form.processing
              }, " Add worker ", 8
              /* PROPS */
              , _hoisted_37)])])], 32
              /* HYDRATE_EVENTS */
              )])])];
            }),
            _: 1
            /* STABLE */

          })])];
        }),
        _: 1
        /* STABLE */

      })];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["show"]);
}

/***/ }),

/***/ "./resources/js/Pages/Meetings/Attendees/Create.vue":
/*!**********************************************************!*\
  !*** ./resources/js/Pages/Meetings/Attendees/Create.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Create_vue_vue_type_template_id_34419ad0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Create.vue?vue&type=template&id=34419ad0 */ "./resources/js/Pages/Meetings/Attendees/Create.vue?vue&type=template&id=34419ad0");
/* harmony import */ var _Create_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Create.vue?vue&type=script&lang=js */ "./resources/js/Pages/Meetings/Attendees/Create.vue?vue&type=script&lang=js");
/* harmony import */ var E_xampp_htdocs_raplica_laravel_vue_inertia_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,E_xampp_htdocs_raplica_laravel_vue_inertia_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Create_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Create_vue_vue_type_template_id_34419ad0__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/Meetings/Attendees/Create.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/mixins/SweetAlert.vue":
/*!********************************************!*\
  !*** ./resources/js/mixins/SweetAlert.vue ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SweetAlert_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SweetAlert.vue?vue&type=script&lang=js */ "./resources/js/mixins/SweetAlert.vue?vue&type=script&lang=js");
/* harmony import */ var E_xampp_htdocs_raplica_laravel_vue_inertia_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");



;
const __exports__ = /*#__PURE__*/(0,E_xampp_htdocs_raplica_laravel_vue_inertia_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_SweetAlert_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"], [['__file',"resources/js/mixins/SweetAlert.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/Meetings/Attendees/Create.vue?vue&type=script&lang=js":
/*!**********************************************************************************!*\
  !*** ./resources/js/Pages/Meetings/Attendees/Create.vue?vue&type=script&lang=js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Create_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Create_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Create.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Meetings/Attendees/Create.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/mixins/SweetAlert.vue?vue&type=script&lang=js":
/*!********************************************************************!*\
  !*** ./resources/js/mixins/SweetAlert.vue?vue&type=script&lang=js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SweetAlert_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SweetAlert_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./SweetAlert.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/mixins/SweetAlert.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Meetings/Attendees/Create.vue?vue&type=template&id=34419ad0":
/*!****************************************************************************************!*\
  !*** ./resources/js/Pages/Meetings/Attendees/Create.vue?vue&type=template&id=34419ad0 ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Create_vue_vue_type_template_id_34419ad0__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Create_vue_vue_type_template_id_34419ad0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Create.vue?vue&type=template&id=34419ad0 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Meetings/Attendees/Create.vue?vue&type=template&id=34419ad0");


/***/ })

}]);