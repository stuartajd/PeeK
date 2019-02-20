webpackJsonp([11],{

/***/ 111:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(112);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(82)("6e2fc77d", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-56729cc1\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./tasks.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-56729cc1\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./tasks.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 112:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(71)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__parts_card__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__parts_card___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__parts_card__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__parts_priority__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__parts_priority___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__parts_priority__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__parts_status__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__parts_status___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__parts_status__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__parts_loading__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__parts_loading___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__parts_loading__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__parts_button_popup__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__parts_button_popup___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__parts_button_popup__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__icons_arrow_down__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__icons_arrow_down___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__icons_arrow_down__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__icons_arrow_up__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__icons_arrow_up___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__icons_arrow_up__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__icons_arrow_sort__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__icons_arrow_sort___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__icons_arrow_sort__);
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








/* harmony default export */ __webpack_exports__["default"] = ({
  name: "tasks",
  components: {
    card: __WEBPACK_IMPORTED_MODULE_0__parts_card___default.a,
    loading: __WEBPACK_IMPORTED_MODULE_3__parts_loading___default.a,
    priority: __WEBPACK_IMPORTED_MODULE_1__parts_priority___default.a,
    status: __WEBPACK_IMPORTED_MODULE_2__parts_status___default.a,
    buttonPopup: __WEBPACK_IMPORTED_MODULE_4__parts_button_popup___default.a
  },
  data: function data() {
    return {
      tasks: {
        data: [],
        loaded: false
      },
      filterTerm: "",
      sort: {
        type: 'id',
        mode: 'asc'
      }
    };
  },
  computed: {
    filteredTasks: function filteredTasks() {
      /** Can filter by the following:
                * #id
                * status:**
                * priority:**
                * **/
      var filters = [{
        selector: "status:",
        element: "status"
      }, {
        selector: "priority:",
        element: "priority"
      }];
      var self = this;
      var filtered = this.tasks.data.filter(function (el) {
        for (var _i = 0; _i < filters.length; _i++) {
          var filter = filters[_i];

          if (this.filterTerm.toLowerCase().indexOf(filter.selector) !== -1) {
            // They are filtering on a specific thing
            if (el[filter.element].toLowerCase().indexOf(this.filterTerm.split(filter.selector)[1].toLowerCase()) !== -1) return true;
          }
        }

        if (el.id == this.filterTerm) return true;
        if (el.title.toLowerCase().indexOf(this.filterTerm.toLowerCase()) !== -1) return true;
      }, this).sort(function (fir, sec) {
        if (fir[self.sort.type] > sec[self.sort.type]) {
          return 1;
        }

        if (fir[self.sort.type] < sec[self.sort.type]) {
          return -1;
        }

        if (fir[self.sort.type] == sec[self.sort.type]) {
          return 0;
        }
      });

      if (self.sort.mode == 'asc') {
        return filtered;
      } else {
        return filtered.reverse();
      }
    }
  },
  methods: {
    sortFiltered: function sortFiltered(type, mode) {
      this.sort = {
        type: type,
        mode: mode
      };
    }
  },
  mounted: function mounted() {
    var _this = this;

    axios.get('api/tasks').then(function (response) {
      _this.tasks.loaded = true;
      _this.tasks.data = response.data.tasks;
    });
  }
});

/***/ }),

/***/ 114:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(3)
/* script */
var __vue_script__ = __webpack_require__(115)
/* template */
var __vue_template__ = __webpack_require__(117)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/parts/button-popup.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6940b6d2", Component.options)
  } else {
    hotAPI.reload("data-v-6940b6d2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__parts_card__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__parts_card___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__parts_card__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_clickaway__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_clickaway___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue_clickaway__);
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "button-popup",
  components: {
    card: __WEBPACK_IMPORTED_MODULE_0__parts_card___default.a
  },
  props: ['buttonText', 'buttonClass'],
  mixins: [__WEBPACK_IMPORTED_MODULE_1_vue_clickaway__["mixin"]],
  data: function data() {
    return {
      shown: false
    };
  },
  methods: {
    setShown: function setShown(status) {
      this.shown = status;
    },
    hide: function hide() {
      this.shown = false;
    }
  }
});

/***/ }),

/***/ 116:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Vue = __webpack_require__(6);
Vue = 'default' in Vue ? Vue['default'] : Vue;

var version = '2.2.2';

var compatible = (/^2\./).test(Vue.version);
if (!compatible) {
  Vue.util.warn('VueClickaway ' + version + ' only supports Vue 2.x, and does not support Vue ' + Vue.version);
}



// @SECTION: implementation

var HANDLER = '_vue_clickaway_handler';

function bind(el, binding, vnode) {
  unbind(el);

  var vm = vnode.context;

  var callback = binding.value;
  if (typeof callback !== 'function') {
    if (true) {
      Vue.util.warn(
        'v-' + binding.name + '="' +
        binding.expression + '" expects a function value, ' +
        'got ' + callback
      );
    }
    return;
  }

  // @NOTE: Vue binds directives in microtasks, while UI events are dispatched
  //        in macrotasks. This causes the listener to be set up before
  //        the "origin" click event (the event that lead to the binding of
  //        the directive) arrives at the document root. To work around that,
  //        we ignore events until the end of the "initial" macrotask.
  // @REFERENCE: https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/
  // @REFERENCE: https://github.com/simplesmiler/vue-clickaway/issues/8
  var initialMacrotaskEnded = false;
  setTimeout(function() {
    initialMacrotaskEnded = true;
  }, 0);

  el[HANDLER] = function(ev) {
    // @NOTE: this test used to be just `el.containts`, but working with path is better,
    //        because it tests whether the element was there at the time of
    //        the click, not whether it is there now, that the event has arrived
    //        to the top.
    // @NOTE: `.path` is non-standard, the standard way is `.composedPath()`
    var path = ev.path || (ev.composedPath ? ev.composedPath() : undefined);
    if (initialMacrotaskEnded && (path ? path.indexOf(el) < 0 : !el.contains(ev.target))) {
      return callback.call(vm, ev);
    }
  };

  document.documentElement.addEventListener('click', el[HANDLER], false);
}

function unbind(el) {
  document.documentElement.removeEventListener('click', el[HANDLER], false);
  delete el[HANDLER];
}

var directive = {
  bind: bind,
  update: function(el, binding) {
    if (binding.value === binding.oldValue) return;
    bind(el, binding);
  },
  unbind: unbind,
};

var mixin = {
  directives: { onClickaway: directive },
};

exports.version = version;
exports.directive = directive;
exports.mixin = mixin;

/***/ }),

/***/ 117:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "button",
      {
        directives: [
          {
            name: "on-clickaway",
            rawName: "v-on-clickaway",
            value: _vm.hide,
            expression: "hide"
          }
        ],
        class: _vm.buttonClass,
        attrs: { type: "button" },
        on: {
          click: function($event) {
            $event.preventDefault()
            _vm.setShown(!_vm.shown)
          }
        }
      },
      [_vm._v(_vm._s(_vm.buttonText))]
    ),
    _vm._v(" "),
    _vm.shown
      ? _c(
          "div",
          {
            staticClass: "position-absolute text-left",
            staticStyle: { "z-index": "999", right: "0", width: "300px" }
          },
          [
            _c(
              "card",
              { attrs: { title: "Advanced Searching" } },
              [_vm._t("default")],
              2
            )
          ],
          1
        )
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-6940b6d2", module.exports)
  }
}

/***/ }),

/***/ 118:
/***/ (function(module, exports, __webpack_require__) {

var icon = __webpack_require__(2);

icon.register({
  'arrow_down': {
    width: 24,
    height: 24,
    viewBox: '0 0 24 24',
    data: '<path fill="none" d="M0 0h24v24H0V0z"/><path d="M8.71 11.71l2.59 2.59c.39.39 1.02.39 1.41 0l2.59-2.59c.63-.63.18-1.71-.71-1.71H9.41c-.89 0-1.33 1.08-.7 1.71z"/>'
  }
});

/***/ }),

/***/ 119:
/***/ (function(module, exports, __webpack_require__) {

var icon = __webpack_require__(2);

icon.register({
  'arrow_up': {
    width: 24,
    height: 24,
    viewBox: '0 0 24 24',
    data: '<path fill="none" d="M0 0h24v24H0V0z"/><path d="M8.71 12.29L11.3 9.7c.39-.39 1.02-.39 1.41 0l2.59 2.59c.63.63.18 1.71-.71 1.71H9.41c-.89 0-1.33-1.08-.7-1.71z"/>'
  }
});

/***/ }),

/***/ 120:
/***/ (function(module, exports, __webpack_require__) {

var icon = __webpack_require__(2);

icon.register({
  'arrow_sort': {
    width: 24,
    height: 24,
    viewBox: '0 0 24 24',
    data: '<path d="M-78.37-65.37h740.74v740.74H-78.37V-65.37z" fill="none"/>\n' + '    <path d="M-80.37-260.37h740.74v740.74H-80.37v-740.74z" fill="none"/>\n' + '    <path d="M188.34 279.05l79.939 79.938c12.037 12.037 31.481 12.037 43.518 0l79.939-79.939c19.444-19.444 5.555-52.777-21.914-52.777H209.945c-27.469 0-41.049 33.333-21.604 52.777zM189.34 118.95l79.939-79.938c12.037-12.037 31.481-12.037 43.518 0l79.939 79.939c19.444 19.444 5.555 52.777-21.914 52.777H210.945c-27.469 0-41.049-33.333-21.604-52.777z"/>'
  }
});

/***/ }),

/***/ 121:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "container-fluid" },
    [
      _c("h5", { staticClass: "page-title" }, [_vm._v("Your Tasks")]),
      _vm._v(" "),
      _c("loading", {
        attrs: { loading: _vm.tasks.loaded, message: "Loading Tasks.." }
      }),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        !_vm.tasks.data.length
          ? _c(
              "div",
              { staticClass: "col-md-12" },
              [_c("card", [_vm._v("There are no tasks to display.")])],
              1
            )
          : _vm._e(),
        _vm._v(" "),
        _vm.tasks.data.length
          ? _c("div", { staticClass: "col-md-12 mb-3" }, [
              _c("div", { staticClass: "row align-items-center" }, [
                _c("div", { staticClass: "col-md-8" }, [
                  _c("div", { staticClass: "input-group" }, [
                    _vm._m(0),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.filterTerm,
                          expression: "filterTerm"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { type: "text" },
                      domProps: { value: _vm.filterTerm },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.filterTerm = $event.target.value
                        }
                      }
                    })
                  ])
                ]),
                _vm._v(" "),
                _vm._m(1),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "col-md-2 text-right" },
                  [
                    _c(
                      "button-popup",
                      {
                        attrs: {
                          buttonText: "Advanced Searching",
                          buttonClass: "btn btn-secondary btn-block d-block"
                        }
                      },
                      [
                        _c("div", [
                          _c("div", [
                            _vm._v(
                              "You are able to use specific advanced commands to search for your required task."
                            )
                          ]),
                          _vm._v(" "),
                          _c("div", [
                            _c("code", [_vm._v("status:[status]")]),
                            _vm._v(" - Search by status")
                          ]),
                          _vm._v(" "),
                          _c("div", [
                            _c("code", [_vm._v("priority:[priority]")]),
                            _vm._v(" - Search by priority")
                          ])
                        ])
                      ]
                    )
                  ],
                  1
                )
              ])
            ])
          : _vm._e(),
        _vm._v(" "),
        _vm.tasks.data.length
          ? _c("div", { staticClass: "col-md-12" }, [
              _c(
                "div",
                { staticClass: "list-group" },
                [
                  _c(
                    "div",
                    { staticClass: "list-group-item text-white bg-brand" },
                    [
                      _c("div", { staticClass: "row align-items-center" }, [
                        _c("div", { staticClass: "col-md-6" }, [
                          _c("ul", { staticClass: "list-inline mb-0" }, [
                            _c("li", { staticClass: "list-inline-item" }, [
                              _vm._v(
                                _vm._s(_vm.tasks.data.length) +
                                  " Incomplete Tasks"
                              )
                            ])
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-6 text-right" }, [
                          _c("ul", { staticClass: "list-inline mb-0" }, [
                            _c("li", { staticClass: "list-inline-item" }, [
                              _c("div", { staticClass: "cursor-pointer" }, [
                                _vm.sort.type != "id"
                                  ? _c(
                                      "span",
                                      {
                                        on: {
                                          click: function($event) {
                                            $event.preventDefault()
                                            _vm.sortFiltered("id", "asc")
                                          }
                                        }
                                      },
                                      [_vm._v("Clear")]
                                    )
                                  : _vm._e()
                              ])
                            ]),
                            _vm._v(" "),
                            _c("li", { staticClass: "list-inline-item" }, [
                              _c("div", { staticClass: "cursor-pointer" }, [
                                _vm.sort.type != "due_date"
                                  ? _c(
                                      "span",
                                      {
                                        on: {
                                          click: function($event) {
                                            $event.preventDefault()
                                            _vm.sortFiltered("due_date", "asc")
                                          }
                                        }
                                      },
                                      [
                                        _vm._v(
                                          "\n                                            Due Date "
                                        ),
                                        _c("icon", {
                                          attrs: { name: "arrow_sort" }
                                        })
                                      ],
                                      1
                                    )
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.sort.type == "due_date" &&
                                _vm.sort.mode == "asc"
                                  ? _c(
                                      "span",
                                      {
                                        on: {
                                          click: function($event) {
                                            $event.preventDefault()
                                            _vm.sortFiltered("due_date", "desc")
                                          }
                                        }
                                      },
                                      [
                                        _vm._v(
                                          "\n                                            Due Date "
                                        ),
                                        _c("icon", {
                                          attrs: { name: "arrow_down" }
                                        })
                                      ],
                                      1
                                    )
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.sort.type == "due_date" &&
                                _vm.sort.mode == "desc"
                                  ? _c(
                                      "span",
                                      {
                                        on: {
                                          click: function($event) {
                                            $event.preventDefault()
                                            _vm.sortFiltered("due_date", "asc")
                                          }
                                        }
                                      },
                                      [
                                        _vm._v(
                                          "\n                                            Due Date "
                                        ),
                                        _c("icon", {
                                          attrs: { name: "arrow_up" }
                                        })
                                      ],
                                      1
                                    )
                                  : _vm._e()
                              ])
                            ]),
                            _vm._v(" "),
                            _c("li", { staticClass: "list-inline-item" }, [
                              _c("div", { staticClass: "cursor-pointer" }, [
                                _vm.sort.type != "status"
                                  ? _c(
                                      "span",
                                      {
                                        on: {
                                          click: function($event) {
                                            $event.preventDefault()
                                            _vm.sortFiltered("status", "asc")
                                          }
                                        }
                                      },
                                      [
                                        _vm._v(
                                          "\n                                            Status "
                                        ),
                                        _c("icon", {
                                          attrs: { name: "arrow_sort" }
                                        })
                                      ],
                                      1
                                    )
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.sort.type == "status" &&
                                _vm.sort.mode == "asc"
                                  ? _c(
                                      "span",
                                      {
                                        on: {
                                          click: function($event) {
                                            $event.preventDefault()
                                            _vm.sortFiltered("status", "desc")
                                          }
                                        }
                                      },
                                      [
                                        _vm._v(
                                          "\n                                            Status "
                                        ),
                                        _c("icon", {
                                          attrs: { name: "arrow_down" }
                                        })
                                      ],
                                      1
                                    )
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.sort.type == "status" &&
                                _vm.sort.mode == "desc"
                                  ? _c(
                                      "span",
                                      {
                                        on: {
                                          click: function($event) {
                                            $event.preventDefault()
                                            _vm.sortFiltered("status", "asc")
                                          }
                                        }
                                      },
                                      [
                                        _vm._v(
                                          "\n                                            Status "
                                        ),
                                        _c("icon", {
                                          attrs: { name: "arrow_up" }
                                        })
                                      ],
                                      1
                                    )
                                  : _vm._e()
                              ])
                            ]),
                            _vm._v(" "),
                            _c("li", { staticClass: "list-inline-item" }, [
                              _c("div", { staticClass: "cursor-pointer" }, [
                                _vm.sort.type != "priority"
                                  ? _c(
                                      "span",
                                      {
                                        on: {
                                          click: function($event) {
                                            $event.preventDefault()
                                            _vm.sortFiltered("priority", "asc")
                                          }
                                        }
                                      },
                                      [
                                        _vm._v(
                                          "\n                                            Priority "
                                        ),
                                        _c("icon", {
                                          attrs: { name: "arrow_sort" }
                                        })
                                      ],
                                      1
                                    )
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.sort.type == "priority" &&
                                _vm.sort.mode == "asc"
                                  ? _c(
                                      "span",
                                      {
                                        on: {
                                          click: function($event) {
                                            $event.preventDefault()
                                            _vm.sortFiltered("priority", "desc")
                                          }
                                        }
                                      },
                                      [
                                        _vm._v(
                                          "\n                                            Priority "
                                        ),
                                        _c("icon", {
                                          attrs: { name: "arrow_down" }
                                        })
                                      ],
                                      1
                                    )
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.sort.type == "priority" &&
                                _vm.sort.mode == "desc"
                                  ? _c(
                                      "span",
                                      {
                                        on: {
                                          click: function($event) {
                                            $event.preventDefault()
                                            _vm.sortFiltered("priority", "asc")
                                          }
                                        }
                                      },
                                      [
                                        _vm._v(
                                          "\n                                            Priority "
                                        ),
                                        _c("icon", {
                                          attrs: { name: "arrow_up" }
                                        })
                                      ],
                                      1
                                    )
                                  : _vm._e()
                              ])
                            ])
                          ])
                        ])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  !_vm.filteredTasks.length && _vm.filterTerm.length
                    ? _c(
                        "div",
                        { staticClass: "list-group-item text-center" },
                        [
                          _vm._v(
                            'No tasks match the search term "' +
                              _vm._s(_vm.filterTerm) +
                              '"'
                          )
                        ]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm._l(_vm.filteredTasks, function(task) {
                    return _c(
                      "div",
                      {
                        key: task.id,
                        staticClass:
                          "list-group-item list-group-item-action cursor-pointer",
                        on: {
                          click: function($event) {
                            $event.preventDefault()
                            _vm.$router.push("/tasks/view/" + task.id)
                          }
                        }
                      },
                      [
                        _c("div", { staticClass: "row align-items-center" }, [
                          _c("div", { staticClass: "col-md-8" }, [
                            _c("h5", { staticClass: "d-inline" }, [
                              _c("strong", [_vm._v(_vm._s(task.title))])
                            ]),
                            _vm._v(" "),
                            _c(
                              "span",
                              { staticClass: "badge" },
                              [
                                _c("priority", {
                                  attrs: { priority: task.priority }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c("div", [
                              _vm._v(
                                "#" +
                                  _vm._s(task.id) +
                                  " opened on " +
                                  _vm._s(task.created_at) +
                                  " for " +
                                  _vm._s(task.account.name)
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-md-2 text-right" }, [
                            _c("strong", [_vm._v(_vm._s(task.due_date))]),
                            _c("br"),
                            _vm._v(" "),
                            _c("small", { staticClass: "text-muted" }, [
                              _vm._v("Due Date")
                            ])
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-md-2 text-right" }, [
                            _c(
                              "strong",
                              [
                                _c("status", { attrs: { status: task.status } })
                              ],
                              1
                            ),
                            _c("br"),
                            _vm._v(" "),
                            _c("small", { staticClass: "text-muted" }, [
                              _vm._v("Status")
                            ])
                          ])
                        ])
                      ]
                    )
                  })
                ],
                2
              )
            ])
          : _vm._e()
      ])
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-prepend" }, [
      _c("span", { staticClass: "input-group-text" }, [_vm._v("Search")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-2 text-right" }, [
      _c(
        "button",
        {
          staticClass: "btn btn-secondary btn-block d-block",
          attrs: { type: "button" }
        },
        [_vm._v("Tasks History")]
      )
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-56729cc1", module.exports)
  }
}

/***/ }),

/***/ 71:
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ 74:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(111)
}
var normalizeComponent = __webpack_require__(3)
/* script */
var __vue_script__ = __webpack_require__(113)
/* template */
var __vue_template__ = __webpack_require__(121)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/pages/tasks.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-56729cc1", Component.options)
  } else {
    hotAPI.reload("data-v-56729cc1", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 82:
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(83)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ 83:
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return varPriority; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return varStatus; });
var varPriority = {
  "urgent": {
    title: 'Urgent',
    icon: 'priority_high',
    colour: 'red',
    css: 'text-danger'
  },
  "normal": {
    title: 'Normal',
    icon: 'priority_normal',
    colour: 'green',
    css: 'text-info'
  },
  "low": {
    title: 'Low',
    icon: 'priority_low',
    colour: 'grey',
    css: 'text-success'
  }
};
var varStatus = {
  "awaiting": {
    title: 'Awaiting Assignment',
    name: 'awaiting'
  },
  "assigned": {
    title: 'Assigned',
    name: 'assigned'
  },
  "progress": {
    title: 'In Progress',
    name: 'progress'
  },
  "quality": {
    title: 'Quality Assurance',
    name: 'quality'
  },
  "complete": {
    title: 'Complete',
    name: 'complete'
  }
};


/***/ }),

/***/ 85:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(86)
}
var normalizeComponent = __webpack_require__(3)
/* script */
var __vue_script__ = __webpack_require__(88)
/* template */
var __vue_template__ = __webpack_require__(92)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-4931ed25"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/parts/priority.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4931ed25", Component.options)
  } else {
    hotAPI.reload("data-v-4931ed25", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 86:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(87);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(82)("14797cf1", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4931ed25\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./priority.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4931ed25\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./priority.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 87:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(71)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__icons_priority_low__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__icons_priority_low___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__icons_priority_low__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__icons_priority_normal__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__icons_priority_normal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__icons_priority_normal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__icons_priority_high__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__icons_priority_high___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__icons_priority_high__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__variables__ = __webpack_require__(84);
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  name: "priority",
  props: ['priority'],
  methods: {
    getPriority: function getPriority(type) {
      return __WEBPACK_IMPORTED_MODULE_3__variables__["a" /* varPriority */][this.priority][type];
    }
  }
});

/***/ }),

/***/ 89:
/***/ (function(module, exports, __webpack_require__) {

var icon = __webpack_require__(2);

icon.register({
  'priority_low': {
    width: 24,
    height: 24,
    viewBox: '0 0 24 24',
    data: '<path d="M8.12 9.29L12 13.17l3.88-3.88c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0L6.7 10.7c-.39-.39-.39-1.02 0-1.41.39-.38 1.03-.39 1.42 0z"/>'
  }
});

/***/ }),

/***/ 90:
/***/ (function(module, exports, __webpack_require__) {

var icon = __webpack_require__(2);

icon.register({
  'priority_normal': {
    width: 24,
    height: 24,
    viewBox: '0 0 24 24',
    data: '<path fill="none" d="M0 0h24v24H0z"/><path d="M19.5 9.5c-1.03 0-1.9.62-2.29 1.5h-2.92c-.39-.88-1.26-1.5-2.29-1.5s-1.9.62-2.29 1.5H6.79c-.39-.88-1.26-1.5-2.29-1.5C3.12 9.5 2 10.62 2 12s1.12 2.5 2.5 2.5c1.03 0 1.9-.62 2.29-1.5h2.92c.39.88 1.26 1.5 2.29 1.5s1.9-.62 2.29-1.5h2.92c.39.88 1.26 1.5 2.29 1.5 1.38 0 2.5-1.12 2.5-2.5s-1.12-2.5-2.5-2.5z"/>'
  }
});

/***/ }),

/***/ 91:
/***/ (function(module, exports, __webpack_require__) {

var icon = __webpack_require__(2);

icon.register({
  'priority_high': {
    width: 24,
    height: 24,
    viewBox: '0 0 24 24',
    data: '<path d="M8.12 14.71L12 10.83l3.88 3.88c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L12.7 8.71c-.39-.39-1.02-.39-1.41 0L6.7 13.3c-.39.39-.39 1.02 0 1.41.39.38 1.03.39 1.42 0z"/>'
  }
});

/***/ }),

/***/ 92:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "span",
    { class: _vm.getPriority("css") },
    [
      _c("icon", { attrs: { name: _vm.getPriority("icon") } }),
      _vm._v(" " + _vm._s(_vm.getPriority("title")) + "\n")
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-4931ed25", module.exports)
  }
}

/***/ }),

/***/ 93:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(94)
}
var normalizeComponent = __webpack_require__(3)
/* script */
var __vue_script__ = __webpack_require__(96)
/* template */
var __vue_template__ = __webpack_require__(97)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-6f8dda9a"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/parts/status.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6f8dda9a", Component.options)
  } else {
    hotAPI.reload("data-v-6f8dda9a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 94:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(95);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(82)("4729d466", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6f8dda9a\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./status.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6f8dda9a\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./status.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 95:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(71)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__variables__ = __webpack_require__(84);
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "status",
  props: ['status'],
  methods: {
    getStatus: function getStatus(type) {
      return __WEBPACK_IMPORTED_MODULE_0__variables__["b" /* varStatus */][this.status][type];
    }
  }
});

/***/ }),

/***/ 97:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("span", [_vm._v("\n    " + _vm._s(_vm.getStatus("title")) + "\n")])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-6f8dda9a", module.exports)
  }
}

/***/ })

});