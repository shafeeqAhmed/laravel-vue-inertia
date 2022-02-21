"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Meetings_Edit_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Meetings/Edit.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Meetings/Edit.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_MinuteNode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/MinuteNode */ "./resources/js/components/MinuteNode.vue");
/* harmony import */ var _components_AgendaNode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/AgendaNode */ "./resources/js/components/AgendaNode.vue");
/* harmony import */ var _components_AttendeeNode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/AttendeeNode */ "./resources/js/components/AttendeeNode.vue");
/* harmony import */ var lodash_orderBy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/orderBy */ "./node_modules/lodash/orderBy.js");
/* harmony import */ var lodash_orderBy__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_orderBy__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _heroicons_vue_solid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @heroicons/vue/solid */ "./node_modules/@heroicons/vue/solid/esm/index.js");
/* harmony import */ var _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @heroicons/vue/outline */ "./node_modules/@heroicons/vue/outline/esm/index.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }








/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    MinuteNode: _components_MinuteNode__WEBPACK_IMPORTED_MODULE_1__["default"],
    AgendaNode: _components_AgendaNode__WEBPACK_IMPORTED_MODULE_2__["default"],
    AttendeeNode: _components_AttendeeNode__WEBPACK_IMPORTED_MODULE_3__["default"],
    SaveIcon: _heroicons_vue_solid__WEBPACK_IMPORTED_MODULE_6__.SaveIcon,
    PlusCircleIcon: _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_7__.PlusCircleIcon
  },
  props: {
    title: String,
    meeting: Object,
    attendees: Array,
    apologies: Array,
    no_shows: Array,
    agendas: Array,
    minutes: Array,
    documents: Object,
    meeting_types: Array
  },
  setup: function setup() {},
  computed: {
    channel: function channel() {
      return window.Echo.join('meetings.' + this.meeting.id);
    }
  },
  created: function created() {
    var _this = this;

    this.channel.here(function (users) {
      _this.participants = users;
    }).joining(function (user) {
      _this.participants.push(user);
    }).leaving(function (user) {
      _this.participants.splice(_this.participants.indexOf(user), 1);
    }).listen('MeetingUpdated', function (event) {
      _this.updateMeeting(event);

      _this.$parent.notifications.push({
        'type': 'information',
        'title': 'Meeting updated',
        'content': 'The meeting has been updated'
      });
    }).listen('AgendaCreated', function (event) {
      _this.addAgenda(event);

      _this.$parent.notifications.push({
        'type': 'information',
        'title': 'Agenda added',
        'content': 'An agenda item has been added to the meeting'
      });
    }).listen('MinuteCreated', function (event) {
      _this.addMinute(event);

      _this.$parent.notifications.push({
        'type': 'information',
        'title': 'Minute added',
        'content': 'A minute line has been added to the meeting'
      });
    }).listen('MeetingWorkerUpdated', function (event) {
      _this.updateWorker(event);

      _this.$parent.notifications.push({
        'type': 'information',
        'title': 'Worker updated',
        'content': event.forenames + ' ' + event.surname + ' has been updated'
      });
    }).listen('MeetingWorkerDeleted', function (event) {
      _this.deleteWorker(event);

      _this.$parent.notifications.push({
        'type': 'information',
        'title': 'Worker removed',
        'content': event.forenames + ' ' + event.surname + ' has been removed'
      });
    }).listen('DocumentDetached', function (event) {
      _this.documents.splice(_this.documents.findIndex(function (document) {
        return document.id === event.id;
      }), 1);

      _this.$parent.notifications.push({
        'type': 'information',
        'title': 'Attachment removed',
        'content': event.name + ' has been removed'
      });
    }).listen('MeetingAgendasUpdated', function (event) {
      _this.agendas.splice(0, _this.agendas.length);

      _this.agendas.push.apply(_this.agendas, event.agendas);

      _this.$parent.notifications.push({
        'type': 'information',
        'title': 'Agenda updated',
        'content': 'The meeting agenda has been updated'
      });
    }).listen('MeetingMinutesUpdated', function (event) {
      var _this$minutes;

      _this.minutes.splice(0, _this.minutes.length);

      (_this$minutes = _this.minutes).push.apply(_this$minutes, _toConsumableArray(event.minutes));

      _this.$parent.notifications.push({
        'type': 'information',
        'title': 'Minutes updated',
        'content': 'The meeting minutes have been updated'
      });
    }).listenForWhisper('typing', this.flashActivePeer);
    this.agendas.sort(function (a, b) {
      return a.order - b.order;
    });
    this.minutes.sort(function (a, b) {
      return a.order - b.order;
    });
  },
  beforeMount: function beforeMount() {},
  unmounted: function unmounted() {
    window.Echo.leave('meetings.' + this.meeting.id);
  },
  data: function data() {
    return {
      newAgenda: '',
      newMinute: '',
      newAction: '',
      newIssue: '',
      activePeers: {},
      typingTimer: {},
      participants: [],
      error_string: ''
    };
  },
  methods: {
    saveMeeting: function saveMeeting() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                axios.patch('/meetings/' + _this2.$props.meeting.id, {
                  name: _this2.meeting.name,
                  meeting_type_id: _this2.meeting.meeting_type_id,
                  summary: _this2.meeting.summary,
                  start_time: _this2.meeting.start_time,
                  end_time: _this2.meeting.end_time,
                  venue: _this2.meeting.venue,
                  purpose: _this2.meeting.purpose,
                  meeting_notes: _this2.meeting.meeting_notes,
                  notes: _this2.meeting.notes
                }).then(function (response) {
                  return response.data;
                }).then(_this2.updateMeeting)["catch"](function (error) {
                  Object.values(error.response.data.errors).forEach(function (error) {
                    _this2.error_string = _this2.error_string + error + ' ';
                  });

                  _this2.$parent.notifications.push({
                    'type': 'error',
                    'title': 'Meeting update failed',
                    'content': _this2.error_string
                  });

                  _this2.error_string = '';
                });

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    saveAgenda: function saveAgenda() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                axios.post('/meetings/agendas', {
                  meeting_id: _this3.$props.meeting.id,
                  content: _this3.newAgenda
                }).then(function (response) {
                  return response.data;
                }).then(_this3.addAgenda).then(_this3.newAgenda = '')["catch"](function (error) {
                  Object.values(error.response.data.errors).forEach(function (error) {
                    _this3.error_string = _this3.error_string + error + ' ';
                  });

                  _this3.$parent.notifications.push({
                    'type': 'error',
                    'title': 'Agenda creation failed',
                    'content': _this3.error_string
                  });

                  _this3.error_string = '';
                });

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    saveMinute: function saveMinute() {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                axios.post('/meetings/minutes', {
                  meeting_id: _this4.$props.meeting.id,
                  content: _this4.newMinute
                }).then(function (response) {
                  return response.data;
                }).then(_this4.addMinute).then(_this4.newMinute = '')["catch"](function (error) {
                  Object.values(error.response.data.errors).forEach(function (error) {
                    _this4.error_string = _this4.error_string + error + ' ';
                  });

                  _this4.$parent.notifications.push({
                    'type': 'error',
                    'title': 'Minute creation failed',
                    'content': _this4.error_string
                  });

                  _this4.error_string = '';
                });

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    whisperPeers: function whisperPeers(area) {
      this.channel.whisper('typing', {
        username: this.$page.props.auth.user.username,
        name: this.$parent.full_name,
        model: area
      });
    },
    flashActivePeer: function flashActivePeer(event) {
      var _this5 = this;

      var peer = {};
      peer["model"] = event.model;
      peer["name"] = event.name;
      this.activePeers[event.username] = peer;
      if (this.typingTimer[event.username]) clearTimeout(this.typingTimer[event.username]);
      this.typingTimer[event.username] = setTimeout(function () {
        delete _this5.activePeers[event.username];
      }, 3000);
    },
    updateMeeting: function updateMeeting(updated_meeting) {
      this.meeting.name = updated_meeting.name;
      this.meeting.meeting_type_id = updated_meeting.meeting_type_id;
      this.meeting.meeting_type = updated_meeting.meeting_type;
      this.meeting.summary = updated_meeting.summary;
      this.meeting.start_time = updated_meeting.start_time;
      this.meeting.end_time = updated_meeting.end_time;
      this.meeting.venue = updated_meeting.venue;
      this.meeting.purpose = updated_meeting.purpose;
      this.meeting.meeting_notes = updated_meeting.meeting_notes;
      this.meeting.notes = updated_meeting.notes;
    },
    addAgenda: function addAgenda(agenda) {
      this.agendas.push(agenda);
    },
    addMinute: function addMinute(minute) {
      this.minutes.push(minute);
    },
    updateWorker: function updateWorker(meeting_worker) {
      this.deleteWorker(meeting_worker);

      if (meeting_worker.attended) {
        this.attendees.push({
          'id': meeting_worker.id,
          'forenames': meeting_worker.forenames,
          'surname': meeting_worker.surname
        });
      } else if (meeting_worker.apologies) {
        this.apologies.push({
          'id': meeting_worker.id,
          'forenames': meeting_worker.forenames,
          'surname': meeting_worker.surname
        });
      } else if (!meeting_worker.attended && !meeting_worker.apologies) {
        this.no_shows.push({
          'id': meeting_worker.id,
          'forenames': meeting_worker.forenames,
          'surname': meeting_worker.surname
        });
      }
    },
    deleteWorker: function deleteWorker(meeting_worker) {
      if (meeting_worker.old_attended) {
        this.attendees.splice(this.attendees.findIndex(function (worker) {
          return worker.id === meeting_worker.id;
        }), 1);
      } else if (meeting_worker.old_apologies) {
        this.apologies.splice(this.apologies.findIndex(function (worker) {
          return worker.id === meeting_worker.id;
        }), 1);
      } else if (!meeting_worker.old_attended && !meeting_worker.old_apologies) {
        this.no_shows.splice(this.no_shows.findIndex(function (worker) {
          return worker.id === meeting_worker.id;
        }), 1);
      }
    },
    deleteMinute: function deleteMinute(node) {
      axios["delete"]('/meetings/minutes/' + node.id);

      for (var i = 0; i < this.minutes.length; i++) {
        if (this.minutes[i].id === node.id) {
          this.minutes.splice(i, 1);
          return true;
        }

        if (Array.isArray(this.minutes[i].all_children)) {
          if (this.deleteFromAllChildren(this.minutes[i].all_children, node.id)) return true;
        }
      }
    },
    deleteAgenda: function deleteAgenda(node) {
      axios["delete"]('/meetings/agendas/' + node.id);

      for (var i = 0; i < this.agendas.length; i++) {
        if (this.agendas[i].id === node.id) {
          this.agendas.splice(i, 1);
          return true;
        }

        if (Array.isArray(this.agendas[i].all_children)) {
          if (this.deleteFromAllChildren(this.agendas[i].all_children, node.id)) return true;
        }
      }
    },
    deleteFromAllChildren: function deleteFromAllChildren(node, node_id) {
      for (var i = 0; i < node.length; i++) {
        if (node[i].id === node_id) {
          node.splice(i, 1);
          return true;
        }

        if (Array.isArray(node[i].all_children)) {
          if (this.deleteFromAllChildren(node[i].all_children, node_id)) return true;
        }
      }

      return false;
    },
    deleteDocument: function deleteDocument(document_id) {
      this.documents.splice(this.documents.findIndex(function (document) {
        return document.id === document_id;
      }), 1);
      axios["delete"]('/meetings/documents/' + this.$props.meeting.id + '/' + document_id);
    }
  },
  watch: {
    agendas: {
      immediate: true,
      deep: true,
      handler: function handler(newValue, oldValue) {
        if (this.agendas !== null) {
          this.agendas.sort(function (a, b) {
            return a.order - b.order;
          });
        }
      }
    },
    minutes: {
      immediate: true,
      deep: true,
      handler: function handler(newValue, oldValue) {
        if (this.minutes !== null) {
          this.minutes.sort(function (a, b) {
            return a.order - b.order;
          });
        }
      }
    }
  },
  name: "Meeting Edit",
  sidebar: "Meetings"
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/AgendaNode.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/AgendaNode.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    agenda: {
      type: Object,
      required: true
    }
  },
  computed: {
    hasChildren: function hasChildren() {
      var all_children = this.agenda.all_children;
      return all_children && all_children.length > 0;
    }
  },
  methods: {},
  name: "AgendaNode"
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/AttendeeNode.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/AttendeeNode.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    worker: {
      type: Object,
      required: true
    },
    model: {
      type: String,
      required: true
    }
  },
  methods: {
    deleteWorker: function deleteWorker(worker_id, model) {
      switch (model) {
        case "attendees":
          this.$parent.attendees.splice(this.$parent.attendees.findIndex(function (worker) {
            return worker.id === worker_id;
          }), 1);
          break;

        case "apologies":
          this.$parent.apologies.splice(this.$parent.apologies.findIndex(function (worker) {
            return worker.id === worker_id;
          }), 1);
          break;

        case "no_shows":
          this.$parent.no_shows.splice(this.$parent.no_shows.findIndex(function (worker) {
            return worker.id === worker_id;
          }), 1);
          break;
      }

      axios["delete"]('/meetings/meeting_workers/' + worker_id);
    },
    saveWorker: function saveWorker(worker_id, model) {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var apologies, attended;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.t0 = model;
                _context.next = _context.t0 === "attendees" ? 3 : _context.t0 === "apologies" ? 6 : _context.t0 === "no_shows" ? 9 : 12;
                break;

              case 3:
                apologies = 0;
                attended = 1;
                return _context.abrupt("break", 12);

              case 6:
                apologies = 1;
                attended = 0;
                return _context.abrupt("break", 12);

              case 9:
                apologies = 0;
                attended = 0;
                return _context.abrupt("break", 12);

              case 12:
                axios.patch('/meetings/meeting_workers/' + worker_id, {
                  worker_id: worker_id,
                  apologies: apologies,
                  attended: attended
                }).then(function (response) {
                  return response.data;
                }).then(_this.updateWorker);

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    updateWorker: function updateWorker(response) {
      if (response.old_attended) {
        this.$parent.attendees.splice(this.$parent.attendees.findIndex(function (worker) {
          return worker.id === response.id;
        }), 1);
      } else if (response.old_apologies) {
        this.$parent.apologies.splice(this.$parent.apologies.findIndex(function (worker) {
          return worker.id === response.id;
        }), 1);
      } else if (!response.old_attended && !response.old_apologies) {
        this.$parent.no_shows.splice(this.$parent.no_shows.findIndex(function (worker) {
          return worker.id === response.id;
        }), 1);
      }

      if (response.attended) {
        this.$parent.attendees.push({
          'id': response.id,
          'forenames': response.forenames,
          'surname': response.surname
        });
      } else if (response.apologies) {
        this.$parent.apologies.push({
          'id': response.id,
          'forenames': response.forenames,
          'surname': response.surname
        });
      } else if (!response.attended && !response.apologies) {
        this.$parent.no_shows.push({
          'id': response.id,
          'forenames': response.forenames,
          'surname': response.surname
        });
      }
    }
  },
  name: "AttendeeNode"
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/MinuteNode.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/MinuteNode.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    minute: {
      type: Object,
      required: true
    }
  },
  computed: {
    hasChildren: function hasChildren() {
      var all_children = this.minute.all_children;
      return all_children && all_children.length > 0;
    }
  },
  methods: {},
  name: "MinuteNode"
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Meetings/Edit.vue?vue&type=template&id=f8fd2630":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Meetings/Edit.vue?vue&type=template&id=f8fd2630 ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "bg-white shadow overflow-hidden sm:rounded-lg"
};
var _hoisted_2 = {
  "class": "px-4 py-5 sm:px-6"
};
var _hoisted_3 = ["textContent"];
var _hoisted_4 = ["textContent"];
var _hoisted_5 = {
  "class": "border-t border-gray-200"
};
var _hoisted_6 = {
  "class": "sm:divide-y sm:divide-gray-200"
};
var _hoisted_7 = {
  "class": "px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
};

var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("dt", {
  "class": "text-sm font-medium text-gray-500"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "name",
  "class": ""
}, " Meeting Name ")], -1
/* HOISTED */
);

var _hoisted_9 = {
  "class": "mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"
};
var _hoisted_10 = {
  "class": "flex justify-between"
};
var _hoisted_11 = {
  "class": "px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
};

var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("dt", {
  "class": "text-sm font-medium text-gray-500"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "meeting_type_id",
  "class": ""
}, " Meeting Type ")], -1
/* HOISTED */
);

var _hoisted_13 = {
  "class": "mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"
};
var _hoisted_14 = {
  "class": "flex justify-between"
};
var _hoisted_15 = ["value"];
var _hoisted_16 = {
  "class": "px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
};

var _hoisted_17 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("dt", {
  "class": "text-sm font-medium text-gray-500"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "summary",
  "class": ""
}, " Summary ")], -1
/* HOISTED */
);

var _hoisted_18 = {
  "class": "mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"
};
var _hoisted_19 = {
  "class": "flex justify-between"
};
var _hoisted_20 = {
  "class": "bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
};

var _hoisted_21 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("dt", {
  "class": "text-sm font-medium text-gray-500"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "start_time",
  "class": ""
}, " Start Date ")], -1
/* HOISTED */
);

var _hoisted_22 = {
  "class": "mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"
};
var _hoisted_23 = {
  "class": "max-w-lg flex rounded-md shadow-sm"
};
var _hoisted_24 = {
  "class": "flex justify-between"
};
var _hoisted_25 = {
  "class": "bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
};

var _hoisted_26 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("dt", {
  "class": "text-sm font-medium text-gray-500"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "end_time",
  "class": ""
}, " End Date ")], -1
/* HOISTED */
);

var _hoisted_27 = {
  "class": "mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"
};
var _hoisted_28 = {
  "class": "max-w-lg flex rounded-md shadow-sm"
};
var _hoisted_29 = {
  "class": "flex justify-between"
};
var _hoisted_30 = {
  "class": "px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
};

var _hoisted_31 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("dt", {
  "class": "text-sm font-medium text-gray-500"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "venue",
  "class": ""
}, " Venue ")], -1
/* HOISTED */
);

var _hoisted_32 = {
  "class": "mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"
};
var _hoisted_33 = {
  "class": "flex justify-between"
};
var _hoisted_34 = {
  "class": "bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
};

var _hoisted_35 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("dt", {
  "class": "text-sm font-medium text-gray-500"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "purpose",
  "class": ""
}, " Purpose ")], -1
/* HOISTED */
);

var _hoisted_36 = {
  "class": "mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"
};
var _hoisted_37 = {
  "class": "flex justify-between"
};
var _hoisted_38 = {
  "class": "px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
};

var _hoisted_39 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("dt", {
  "class": "text-sm font-medium text-gray-500"
}, " Attendees ", -1
/* HOISTED */
);

var _hoisted_40 = {
  "class": "mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"
};
var _hoisted_41 = {
  "class": "list-disc ml-4"
};
var _hoisted_42 = {
  "class": "bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
};

var _hoisted_43 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("dt", {
  "class": "text-sm font-medium text-gray-500"
}, " Apologies ", -1
/* HOISTED */
);

var _hoisted_44 = {
  "class": "mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"
};
var _hoisted_45 = {
  "class": "list-disc ml-4"
};
var _hoisted_46 = {
  "class": "px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
};

var _hoisted_47 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("dt", {
  "class": "text-sm font-medium text-gray-500"
}, " Other invitees ", -1
/* HOISTED */
);

var _hoisted_48 = {
  "class": "mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"
};
var _hoisted_49 = {
  "class": "list-disc ml-4"
};
var _hoisted_50 = {
  "class": "bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
};

var _hoisted_51 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("dt", {
  "class": "text-sm font-medium text-gray-500"
}, " Agenda ", -1
/* HOISTED */
);

var _hoisted_52 = {
  "class": "mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"
};
var _hoisted_53 = {
  "class": "list-disc ml-4"
};
var _hoisted_54 = {
  "class": "flex items-end"
};
var _hoisted_55 = {
  "class": "grow mt-4 relative border bg-gray-50 border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600"
};

var _hoisted_56 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "newAgenda",
  "class": "absolute -top-2 left-2 -mt-px inline-block px-1 bg-white text-xs font-medium text-gray-900"
}, "Enter additional agenda items", -1
/* HOISTED */
);

var _hoisted_57 = {
  "class": "ml-4 flex-none"
};
var _hoisted_58 = {
  "class": "bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
};

var _hoisted_59 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("dt", {
  "class": "text-sm font-medium text-gray-500"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "meeting_notes",
  "class": ""
}, " Meeting notes ")], -1
/* HOISTED */
);

var _hoisted_60 = {
  "class": "mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"
};
var _hoisted_61 = {
  "class": "flex justify-between"
};
var _hoisted_62 = {
  "class": "px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
};

var _hoisted_63 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("dt", {
  "class": "text-sm font-medium text-gray-500"
}, " Minutes ", -1
/* HOISTED */
);

var _hoisted_64 = {
  "class": "mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"
};
var _hoisted_65 = {
  "class": "list-disc ml-4"
};
var _hoisted_66 = {
  "class": "flex items-end"
};
var _hoisted_67 = {
  "class": "grow mt-4 relative border bg-gray-50 border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600"
};

var _hoisted_68 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "newMinute",
  "class": "absolute -top-2 left-2 -mt-px inline-block px-1 bg-white text-xs font-medium text-gray-900"
}, "Enter additional minute", -1
/* HOISTED */
);

var _hoisted_69 = {
  "class": "ml-4 flex-none"
};
var _hoisted_70 = {
  key: 0,
  "class": "bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
};

var _hoisted_71 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("dt", {
  "class": "text-sm font-medium text-gray-500"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "notes",
  "class": ""
}, " Notes ")], -1
/* HOISTED */
);

var _hoisted_72 = {
  "class": "mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"
};
var _hoisted_73 = {
  "class": "flex justify-between"
};
var _hoisted_74 = {
  "class": "px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
};

var _hoisted_75 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("dt", {
  "class": "text-sm font-medium text-gray-500"
}, " Attachments ", -1
/* HOISTED */
);

var _hoisted_76 = {
  "class": "mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"
};
var _hoisted_77 = {
  "class": "list-disc ml-4"
};
var _hoisted_78 = {
  "class": "flex justify-between"
};
var _hoisted_79 = ["href"];
var _hoisted_80 = {
  "class": "italic"
};
var _hoisted_81 = {
  "class": "flex"
};
var _hoisted_82 = ["onClick"];

var _hoisted_83 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("title", null, "Remove document from meeting", -1
/* HOISTED */
);

var _hoisted_84 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
}, null, -1
/* HOISTED */
);

var _hoisted_85 = [_hoisted_83, _hoisted_84];
var _hoisted_86 = {
  "class": "px-4 py-5 flex justify-end"
};

var _hoisted_87 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  type: "button",
  "class": "inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
}, " Add document » ", -1
/* HOISTED */
);

var _hoisted_88 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  type: "button",
  "class": "inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
}, " Add attendee » ", -1
/* HOISTED */
);

var _hoisted_89 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  type: "button",
  "class": "inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
}, " Return to meetings » ", -1
/* HOISTED */
);

var _hoisted_90 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  type: "button",
  "class": "inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
}, " View meeting » ", -1
/* HOISTED */
);

var _hoisted_91 = {
  "class": "rounded-md bg-blue-50 p-4 fixed bottom-0 left-0"
};
var _hoisted_92 = {
  "class": "flex"
};

var _hoisted_93 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "flex-shrink-0"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  "class": "h-5 w-5 text-blue-400",
  fill: "currentColor",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "aria-hidden": "true"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
})])], -1
/* HOISTED */
);

var _hoisted_94 = {
  "class": "ml-3"
};

var _hoisted_95 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", {
  "class": "text-sm font-medium text-blue-800"
}, " Currently viewing ", -1
/* HOISTED */
);

var _hoisted_96 = {
  "class": "mt-2 text-sm text-blue-700"
};
var _hoisted_97 = ["textContent"];
var _hoisted_98 = ["textContent"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Head = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Head");

  var _component_AttendeeNode = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("AttendeeNode");

  var _component_AgendaNode = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("AgendaNode");

  var _component_PlusCircleIcon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("PlusCircleIcon");

  var _component_MinuteNode = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("MinuteNode");

  var _component_SaveIcon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("SaveIcon");

  var _component_Link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Link");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Head, null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("title", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.meeting.name), 1
      /* TEXT */
      )];
    }),
    _: 1
    /* STABLE */

  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", {
    "class": "text-lg leading-6 font-medium text-gray-900",
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.meeting.name)
  }, null, 8
  /* PROPS */
  , _hoisted_3), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
    "class": "mt-1 max-w-2xl text-sm text-gray-500",
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.meeting.meeting_type)
  }, null, 8
  /* PROPS */
  , _hoisted_4)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("dl", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [_hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("dd", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $props.meeting.name = $event;
    }),
    onKeyup: _cache[1] || (_cache[1] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withKeys)(function () {
      return $options.saveMeeting && $options.saveMeeting.apply($options, arguments);
    }, ["enter"])),
    onKeydown: _cache[2] || (_cache[2] = function ($event) {
      return $options.whisperPeers('name');
    }),
    type: "text",
    name: "name",
    id: "name",
    autocomplete: "off",
    "class": "block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
  }, null, 544
  /* HYDRATE_EVENTS, NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $props.meeting.name]])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [_hoisted_12, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("dd", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
      return $props.meeting.meeting_type_id = $event;
    }),
    id: "meeting_type_id",
    name: "meeting_type_id",
    "class": "block focus:ring-indigo-500 focus:border-indigo-500 w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
  }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.meeting_types, function (meeting_type) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
      key: meeting_type.id,
      value: meeting_type.id
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(meeting_type.name), 9
    /* TEXT, PROPS */
    , _hoisted_15);
  }), 128
  /* KEYED_FRAGMENT */
  ))], 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $props.meeting.meeting_type_id]])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_16, [_hoisted_17, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("dd", _hoisted_18, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_19, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
    "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
      return $props.meeting.summary = $event;
    }),
    onKeydown: _cache[5] || (_cache[5] = function ($event) {
      return $options.whisperPeers('summary');
    }),
    rows: "4",
    name: "summary",
    id: "summary",
    "class": "shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
  }, null, 544
  /* HYDRATE_EVENTS, NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $props.meeting.summary]])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_20, [_hoisted_21, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("dd", _hoisted_22, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_23, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_24, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "onUpdate:modelValue": _cache[6] || (_cache[6] = function ($event) {
      return $props.meeting.start_time = $event;
    }),
    onKeyup: _cache[7] || (_cache[7] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withKeys)(function () {
      return $options.saveMeeting && $options.saveMeeting.apply($options, arguments);
    }, ["enter"])),
    onKeydown: _cache[8] || (_cache[8] = function ($event) {
      return $options.whisperPeers('start time');
    }),
    type: "datetime-local",
    name: "start_time",
    id: "start_time",
    autocomplete: "off",
    "class": "max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
  }, null, 544
  /* HYDRATE_EVENTS, NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $props.meeting.start_time]])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_25, [_hoisted_26, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("dd", _hoisted_27, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_28, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_29, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "onUpdate:modelValue": _cache[9] || (_cache[9] = function ($event) {
      return $props.meeting.end_time = $event;
    }),
    onKeyup: _cache[10] || (_cache[10] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withKeys)(function () {
      return $options.saveMeeting && $options.saveMeeting.apply($options, arguments);
    }, ["enter"])),
    onKeydown: _cache[11] || (_cache[11] = function ($event) {
      return $options.whisperPeers('end time');
    }),
    type: "datetime-local",
    name: "end_time",
    id: "end_time",
    autocomplete: "off",
    "class": "max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
  }, null, 544
  /* HYDRATE_EVENTS, NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $props.meeting.end_time]])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_30, [_hoisted_31, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("dd", _hoisted_32, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_33, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "onUpdate:modelValue": _cache[12] || (_cache[12] = function ($event) {
      return $props.meeting.venue = $event;
    }),
    onKeyup: _cache[13] || (_cache[13] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withKeys)(function () {
      return $options.saveMeeting && $options.saveMeeting.apply($options, arguments);
    }, ["enter"])),
    onKeydown: _cache[14] || (_cache[14] = function ($event) {
      return $options.whisperPeers('venue');
    }),
    type: "text",
    name: "venue",
    id: "venue",
    autocomplete: "off",
    "class": "block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
  }, null, 544
  /* HYDRATE_EVENTS, NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $props.meeting.venue]])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_34, [_hoisted_35, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("dd", _hoisted_36, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_37, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
    rows: "4",
    "onUpdate:modelValue": _cache[15] || (_cache[15] = function ($event) {
      return $props.meeting.purpose = $event;
    }),
    onKeydown: _cache[16] || (_cache[16] = function ($event) {
      return $options.whisperPeers('purpose');
    }),
    name: "purpose",
    id: "purpose",
    "class": "shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
  }, null, 544
  /* HYDRATE_EVENTS, NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $props.meeting.purpose]])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_38, [_hoisted_39, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("dd", _hoisted_40, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_41, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.attendees, function (worker) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_AttendeeNode, {
      key: worker.id,
      worker: worker,
      model: "attendees"
    }, null, 8
    /* PROPS */
    , ["worker"]);
  }), 128
  /* KEYED_FRAGMENT */
  ))])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_42, [_hoisted_43, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("dd", _hoisted_44, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_45, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.apologies, function (worker) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_AttendeeNode, {
      key: worker.id,
      worker: worker,
      model: "apologies"
    }, null, 8
    /* PROPS */
    , ["worker"]);
  }), 128
  /* KEYED_FRAGMENT */
  ))])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_46, [_hoisted_47, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("dd", _hoisted_48, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_49, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.no_shows, function (worker) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_AttendeeNode, {
      key: worker.id,
      worker: worker,
      model: "no_shows"
    }, null, 8
    /* PROPS */
    , ["worker"]);
  }), 128
  /* KEYED_FRAGMENT */
  ))])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_50, [_hoisted_51, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("dd", _hoisted_52, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_53, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.agendas, function (agenda) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_AgendaNode, {
      onDelete_agenda: _cache[17] || (_cache[17] = function ($event) {
        return $options.deleteAgenda($event);
      }),
      key: agenda.id,
      agenda: agenda
    }, null, 8
    /* PROPS */
    , ["agenda"]);
  }), 128
  /* KEYED_FRAGMENT */
  ))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_54, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_55, [_hoisted_56, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    id: "newAgenda",
    "onUpdate:modelValue": _cache[18] || (_cache[18] = function ($event) {
      return $data.newAgenda = $event;
    }),
    onKeyup: _cache[19] || (_cache[19] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withKeys)(function () {
      return $options.saveAgenda && $options.saveAgenda.apply($options, arguments);
    }, ["enter"])),
    onKeydown: _cache[20] || (_cache[20] = function ($event) {
      return $options.whisperPeers('agenda');
    }),
    "class": "block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm bg-gray-50"
  }, null, 544
  /* HYDRATE_EVENTS, NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.newAgenda]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_57, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    onClick: _cache[21] || (_cache[21] = function () {
      return $options.saveAgenda && $options.saveAgenda.apply($options, arguments);
    }),
    type: "button",
    "class": "items-center px-3 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_PlusCircleIcon, {
    "class": "h-5 w-5",
    "aria-hidden": "true"
  })])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_58, [_hoisted_59, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("dd", _hoisted_60, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_61, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
    "onUpdate:modelValue": _cache[22] || (_cache[22] = function ($event) {
      return $props.meeting.meeting_notes = $event;
    }),
    onKeydown: _cache[23] || (_cache[23] = function ($event) {
      return $options.whisperPeers('meeting notes');
    }),
    rows: "4",
    name: "meeting_notes",
    id: "meeting_notes",
    "class": "shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
  }, null, 544
  /* HYDRATE_EVENTS, NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $props.meeting.meeting_notes]])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_62, [_hoisted_63, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("dd", _hoisted_64, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_65, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.minutes, function (minute) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_MinuteNode, {
      onDelete_minute: _cache[24] || (_cache[24] = function ($event) {
        return $options.deleteMinute($event);
      }),
      key: minute.id,
      minute: minute
    }, null, 8
    /* PROPS */
    , ["minute"]);
  }), 128
  /* KEYED_FRAGMENT */
  ))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_66, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_67, [_hoisted_68, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    id: "newMinute",
    "onUpdate:modelValue": _cache[25] || (_cache[25] = function ($event) {
      return $data.newMinute = $event;
    }),
    onKeyup: _cache[26] || (_cache[26] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withKeys)(function () {
      return $options.saveMinute && $options.saveMinute.apply($options, arguments);
    }, ["enter"])),
    onKeydown: _cache[27] || (_cache[27] = function ($event) {
      return $options.whisperPeers('minute');
    }),
    "class": "block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm bg-gray-50"
  }, null, 544
  /* HYDRATE_EVENTS, NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.newMinute]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_69, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    onClick: _cache[28] || (_cache[28] = function () {
      return $options.saveMinute && $options.saveMinute.apply($options, arguments);
    }),
    type: "button",
    "class": "items-center px-3 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_PlusCircleIcon, {
    "class": "h-5 w-5",
    "aria-hidden": "true"
  })])])])])]), $props.meeting.notes ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_70, [_hoisted_71, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("dd", _hoisted_72, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_73, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
    "onUpdate:modelValue": _cache[29] || (_cache[29] = function ($event) {
      return $props.meeting.notes = $event;
    }),
    onKeydown: _cache[30] || (_cache[30] = function ($event) {
      return $options.whisperPeers('notes');
    }),
    rows: "4",
    name: "notes",
    id: "notes",
    "class": "shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
  }, null, 544
  /* HYDRATE_EVENTS, NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $props.meeting.notes]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    onClick: _cache[31] || (_cache[31] = function () {
      return $options.saveMeeting && $options.saveMeeting.apply($options, arguments);
    }),
    type: "button",
    "class": "ml-4 inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_SaveIcon, {
    "class": "h-4 w-4",
    "aria-hidden": "true"
  })])])])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_74, [_hoisted_75, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("dd", _hoisted_76, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_77, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.documents, function (document) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", _hoisted_78, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
      href: "/meetings/documents/".concat(document.id),
      "class": "ml-4 text-indigo-600 hover:text-indigo-900",
      target: "_blank"
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(document.document_type.name) + " - ", 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_80, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(document.name), 1
    /* TEXT */
    )], 8
    /* PROPS */
    , _hoisted_79), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_81, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", {
      onClick: function onClick($event) {
        return $options.deleteDocument(document.id);
      },
      xmlns: "http://www.w3.org/2000/svg",
      "class": "h-5 w-5 text-red-400",
      fill: "none",
      viewBox: "0 0 24 24",
      stroke: "currentColor",
      role: "img",
      "aria-label": "Remove document from meeting"
    }, _hoisted_85, 8
    /* PROPS */
    , _hoisted_82))])]);
  }), 256
  /* UNKEYED_FRAGMENT */
  ))])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_86, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    href: "/meetings/documents/".concat($props.meeting.id, "/create"),
    "class": "ml-4 text-indigo-600 hover:text-indigo-900"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_87];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["href"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    href: "/meetings/meeting_workers/".concat($props.meeting.id, "/create"),
    "class": "ml-4 text-indigo-600 hover:text-indigo-900"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_88];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["href"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    onClick: _cache[32] || (_cache[32] = function () {
      return $options.saveMeeting && $options.saveMeeting.apply($options, arguments);
    }),
    type: "button",
    "class": "ml-4 inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
  }, " Save Meeting "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    href: "/meetings",
    "class": "ml-4 text-indigo-600 hover:text-indigo-900"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_89];
    }),
    _: 1
    /* STABLE */

  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    href: "/meetings/".concat($props.meeting.id),
    "class": "ml-4 text-indigo-600 hover:text-indigo-900"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_90];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["href"])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_91, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_92, [_hoisted_93, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_94, [_hoisted_95, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_96, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.participants, function (participant) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", {
      textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(participant.forenames + ' ' + participant.surname)
    }, null, 8
    /* PROPS */
    , _hoisted_97);
  }), 256
  /* UNKEYED_FRAGMENT */
  ))])]), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.activePeers, function (activePeer) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      "class": "text-blue-600/75",
      textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(activePeer.name + ' is editing ' + activePeer.model + '...')
    }, null, 8
    /* PROPS */
    , _hoisted_98);
  }), 256
  /* UNKEYED_FRAGMENT */
  ))])])])], 64
  /* STABLE_FRAGMENT */
  );
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/AgendaNode.vue?vue&type=template&id=07b1844e":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/AgendaNode.vue?vue&type=template&id=07b1844e ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "flex justify-between"
};
var _hoisted_2 = {
  "class": "flex"
};

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("title", null, "Remove agenda item from meeting", -1
/* HOISTED */
);

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
}, null, -1
/* HOISTED */
);

var _hoisted_5 = [_hoisted_3, _hoisted_4];
var _hoisted_6 = {
  key: 0
};
var _hoisted_7 = {
  "class": "list-disc ml-4 pl-4"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_AgendaNode = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("AgendaNode", true);

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.agenda.content) + " ", 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_2, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", {
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return _ctx.$emit('delete_agenda', $props.agenda);
    }),
    xmlns: "http://www.w3.org/2000/svg",
    "class": "h-5 w-5 text-red-400",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    role: "img",
    "aria-label": "Delete agenda item"
  }, _hoisted_5))])]), $options.hasChildren ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_7, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.agenda.all_children, function (child) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_AgendaNode, {
      onDelete_agenda: _cache[1] || (_cache[1] = function ($event) {
        return _ctx.$emit('delete_agenda', $event);
      }),
      key: child.id,
      agenda: child
    }, null, 8
    /* PROPS */
    , ["agenda"]);
  }), 128
  /* KEYED_FRAGMENT */
  ))])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/AttendeeNode.vue?vue&type=template&id=a9c5b072":
/*!**********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/AttendeeNode.vue?vue&type=template&id=a9c5b072 ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "flex justify-between"
};
var _hoisted_2 = {
  "class": "flex"
};

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("title", null, "Mark person as attended", -1
/* HOISTED */
);

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
}, null, -1
/* HOISTED */
);

var _hoisted_5 = [_hoisted_3, _hoisted_4];

var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" | ");

var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("title", null, "Mark person as apology", -1
/* HOISTED */
);

var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
}, null, -1
/* HOISTED */
);

var _hoisted_9 = [_hoisted_7, _hoisted_8];

var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" | ");

var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("title", null, "Mark person as no show", -1
/* HOISTED */
);

var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
}, null, -1
/* HOISTED */
);

var _hoisted_13 = [_hoisted_11, _hoisted_12];

var _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" | ");

var _hoisted_15 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("title", null, "Remove person from meeting", -1
/* HOISTED */
);

var _hoisted_16 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
}, null, -1
/* HOISTED */
);

var _hoisted_17 = [_hoisted_15, _hoisted_16];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.worker.forenames) + " " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.worker.surname) + " ", 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_2, [$props.model !== 'attendees' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: 0
  }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", {
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return $options.saveWorker($props.worker.id, 'attendees');
    }),
    xmlns: "http://www.w3.org/2000/svg",
    "class": "h-5 w-5",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    role: "img",
    "aria-label": "Mark person as attended"
  }, _hoisted_5)), _hoisted_6], 64
  /* STABLE_FRAGMENT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $props.model !== 'apologies' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: 1
  }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", {
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return $options.saveWorker($props.worker.id, 'apologies');
    }),
    xmlns: "http://www.w3.org/2000/svg",
    "class": "h-5 w-5",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    role: "img",
    "aria-label": "Mark person as apology"
  }, _hoisted_9)), _hoisted_10], 64
  /* STABLE_FRAGMENT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $props.model !== 'no_shows' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: 2
  }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", {
    onClick: _cache[2] || (_cache[2] = function ($event) {
      return $options.saveWorker($props.worker.id, 'no_shows');
    }),
    xmlns: "http://www.w3.org/2000/svg",
    "class": "h-5 w-5",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    role: "img",
    "aria-label": "Mark person as no show"
  }, _hoisted_13)), _hoisted_14], 64
  /* STABLE_FRAGMENT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", {
    onClick: _cache[3] || (_cache[3] = function ($event) {
      return $options.deleteWorker($props.worker.id, $props.model);
    }),
    xmlns: "http://www.w3.org/2000/svg",
    "class": "h-5 w-5 text-red-400",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    role: "img",
    "aria-label": "Remove person from meeting"
  }, _hoisted_17))])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/MinuteNode.vue?vue&type=template&id=5cbb3fe1":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/MinuteNode.vue?vue&type=template&id=5cbb3fe1 ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "flex justify-between"
};
var _hoisted_2 = {
  "class": "flex"
};

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("title", null, "Delete minute from meeting", -1
/* HOISTED */
);

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
}, null, -1
/* HOISTED */
);

var _hoisted_5 = [_hoisted_3, _hoisted_4];
var _hoisted_6 = {
  key: 0
};
var _hoisted_7 = {
  "class": "list-disc ml-4 pl-4"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_MinuteNode = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("MinuteNode", true);

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.minute.content) + " ", 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_2, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", {
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return _ctx.$emit('delete_minute', $props.minute);
    }),
    xmlns: "http://www.w3.org/2000/svg",
    "class": "h-5 w-5 text-red-400",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    role: "img",
    "aria-label": "Delete minute"
  }, _hoisted_5))])]), $options.hasChildren ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_7, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.minute.all_children, function (child) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_MinuteNode, {
      onDelete_minute: _cache[1] || (_cache[1] = function ($event) {
        return _ctx.$emit('delete_minute', $event);
      }),
      key: child.id,
      minute: child
    }, null, 8
    /* PROPS */
    , ["minute"]);
  }), 128
  /* KEYED_FRAGMENT */
  ))])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]);
}

/***/ }),

/***/ "./resources/js/Pages/Meetings/Edit.vue":
/*!**********************************************!*\
  !*** ./resources/js/Pages/Meetings/Edit.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Edit_vue_vue_type_template_id_f8fd2630__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edit.vue?vue&type=template&id=f8fd2630 */ "./resources/js/Pages/Meetings/Edit.vue?vue&type=template&id=f8fd2630");
/* harmony import */ var _Edit_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Edit.vue?vue&type=script&lang=js */ "./resources/js/Pages/Meetings/Edit.vue?vue&type=script&lang=js");
/* harmony import */ var E_xampp_htdocs_raplica_laravel_vue_inertia_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,E_xampp_htdocs_raplica_laravel_vue_inertia_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Edit_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Edit_vue_vue_type_template_id_f8fd2630__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/Meetings/Edit.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/AgendaNode.vue":
/*!************************************************!*\
  !*** ./resources/js/components/AgendaNode.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AgendaNode_vue_vue_type_template_id_07b1844e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AgendaNode.vue?vue&type=template&id=07b1844e */ "./resources/js/components/AgendaNode.vue?vue&type=template&id=07b1844e");
/* harmony import */ var _AgendaNode_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AgendaNode.vue?vue&type=script&lang=js */ "./resources/js/components/AgendaNode.vue?vue&type=script&lang=js");
/* harmony import */ var E_xampp_htdocs_raplica_laravel_vue_inertia_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,E_xampp_htdocs_raplica_laravel_vue_inertia_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_AgendaNode_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_AgendaNode_vue_vue_type_template_id_07b1844e__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/AgendaNode.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/AttendeeNode.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/AttendeeNode.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AttendeeNode_vue_vue_type_template_id_a9c5b072__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AttendeeNode.vue?vue&type=template&id=a9c5b072 */ "./resources/js/components/AttendeeNode.vue?vue&type=template&id=a9c5b072");
/* harmony import */ var _AttendeeNode_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AttendeeNode.vue?vue&type=script&lang=js */ "./resources/js/components/AttendeeNode.vue?vue&type=script&lang=js");
/* harmony import */ var E_xampp_htdocs_raplica_laravel_vue_inertia_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,E_xampp_htdocs_raplica_laravel_vue_inertia_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_AttendeeNode_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_AttendeeNode_vue_vue_type_template_id_a9c5b072__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/AttendeeNode.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/MinuteNode.vue":
/*!************************************************!*\
  !*** ./resources/js/components/MinuteNode.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MinuteNode_vue_vue_type_template_id_5cbb3fe1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MinuteNode.vue?vue&type=template&id=5cbb3fe1 */ "./resources/js/components/MinuteNode.vue?vue&type=template&id=5cbb3fe1");
/* harmony import */ var _MinuteNode_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MinuteNode.vue?vue&type=script&lang=js */ "./resources/js/components/MinuteNode.vue?vue&type=script&lang=js");
/* harmony import */ var E_xampp_htdocs_raplica_laravel_vue_inertia_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,E_xampp_htdocs_raplica_laravel_vue_inertia_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_MinuteNode_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_MinuteNode_vue_vue_type_template_id_5cbb3fe1__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/MinuteNode.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/Meetings/Edit.vue?vue&type=script&lang=js":
/*!**********************************************************************!*\
  !*** ./resources/js/Pages/Meetings/Edit.vue?vue&type=script&lang=js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Edit_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Edit_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Edit.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Meetings/Edit.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/AgendaNode.vue?vue&type=script&lang=js":
/*!************************************************************************!*\
  !*** ./resources/js/components/AgendaNode.vue?vue&type=script&lang=js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AgendaNode_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AgendaNode_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AgendaNode.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/AgendaNode.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/AttendeeNode.vue?vue&type=script&lang=js":
/*!**************************************************************************!*\
  !*** ./resources/js/components/AttendeeNode.vue?vue&type=script&lang=js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AttendeeNode_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AttendeeNode_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AttendeeNode.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/AttendeeNode.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/MinuteNode.vue?vue&type=script&lang=js":
/*!************************************************************************!*\
  !*** ./resources/js/components/MinuteNode.vue?vue&type=script&lang=js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MinuteNode_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MinuteNode_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./MinuteNode.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/MinuteNode.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Meetings/Edit.vue?vue&type=template&id=f8fd2630":
/*!****************************************************************************!*\
  !*** ./resources/js/Pages/Meetings/Edit.vue?vue&type=template&id=f8fd2630 ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Edit_vue_vue_type_template_id_f8fd2630__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Edit_vue_vue_type_template_id_f8fd2630__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Edit.vue?vue&type=template&id=f8fd2630 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Meetings/Edit.vue?vue&type=template&id=f8fd2630");


/***/ }),

/***/ "./resources/js/components/AgendaNode.vue?vue&type=template&id=07b1844e":
/*!******************************************************************************!*\
  !*** ./resources/js/components/AgendaNode.vue?vue&type=template&id=07b1844e ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AgendaNode_vue_vue_type_template_id_07b1844e__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AgendaNode_vue_vue_type_template_id_07b1844e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AgendaNode.vue?vue&type=template&id=07b1844e */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/AgendaNode.vue?vue&type=template&id=07b1844e");


/***/ }),

/***/ "./resources/js/components/AttendeeNode.vue?vue&type=template&id=a9c5b072":
/*!********************************************************************************!*\
  !*** ./resources/js/components/AttendeeNode.vue?vue&type=template&id=a9c5b072 ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AttendeeNode_vue_vue_type_template_id_a9c5b072__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AttendeeNode_vue_vue_type_template_id_a9c5b072__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AttendeeNode.vue?vue&type=template&id=a9c5b072 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/AttendeeNode.vue?vue&type=template&id=a9c5b072");


/***/ }),

/***/ "./resources/js/components/MinuteNode.vue?vue&type=template&id=5cbb3fe1":
/*!******************************************************************************!*\
  !*** ./resources/js/components/MinuteNode.vue?vue&type=template&id=5cbb3fe1 ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MinuteNode_vue_vue_type_template_id_5cbb3fe1__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MinuteNode_vue_vue_type_template_id_5cbb3fe1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./MinuteNode.vue?vue&type=template&id=5cbb3fe1 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/MinuteNode.vue?vue&type=template&id=5cbb3fe1");


/***/ })

}]);