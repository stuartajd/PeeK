webpackJsonp([2],{

/***/ 132:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(133);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(76)("3e0c8f8e", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-44bc18a2\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./task.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-44bc18a2\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./task.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 133:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(66)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__parts_card__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__parts_card___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__parts_card__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__parts_loading__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__parts_loading___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__parts_loading__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__parts_priority__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__parts_priority___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__parts_priority__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__parts_status__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__parts_status___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__parts_status__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__parts_scroll_group__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__parts_scroll_group___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__parts_scroll_group__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__variables__ = __webpack_require__(84);
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
  name: "task",
  components: {
    card: __WEBPACK_IMPORTED_MODULE_0__parts_card___default.a,
    loading: __WEBPACK_IMPORTED_MODULE_1__parts_loading___default.a,
    priority: __WEBPACK_IMPORTED_MODULE_2__parts_priority___default.a,
    status: __WEBPACK_IMPORTED_MODULE_3__parts_status___default.a,
    scrollGroup: __WEBPACK_IMPORTED_MODULE_4__parts_scroll_group___default.a
  },
  data: function data() {
    return {
      task: {
        data: {},
        loaded: false
      }
    };
  },
  computed: {
    status: function status() {
      return __WEBPACK_IMPORTED_MODULE_5__variables__["b" /* varStatus */];
    }
  },
  methods: {
    setStatus: function setStatus(task, state) {
      var _this = this;

      if (!task || !state) return false;
      axios.put('api/tasks/' + this.$route.params.tid, {
        status: state
      }).then(function (response) {
        _this.task.data = response.data.tasks[0];

        _this.$notify({
          title: 'Update complete',
          text: 'Task status has been updated',
          type: 'success'
        });
      }).catch(function (error) {
        _this.$notify({
          title: 'Failed update',
          text: 'Could not update the task status, please try again.',
          type: 'error'
        });
      });
    }
  },
  mounted: function mounted() {
    var _this2 = this;

    axios.get('api/tasks/' + this.$route.params.tid).then(function (response) {
      _this2.task.loaded = true;
      _this2.task.data = response.data.tasks[0];

      if (!_this2.task.data) {
        _this2.$router.push({
          name: '404'
        });
      }
    });
  }
});

/***/ }),

/***/ 135:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(136)
}
var normalizeComponent = __webpack_require__(5)
/* script */
var __vue_script__ = __webpack_require__(138)
/* template */
var __vue_template__ = __webpack_require__(139)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-31af5500"
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
Component.options.__file = "resources/assets/js/parts/scroll-group.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-31af5500", Component.options)
  } else {
    hotAPI.reload("data-v-31af5500", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 136:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(137);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(76)("1979d8af", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-31af5500\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./scroll-group.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-31af5500\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./scroll-group.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 137:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(66)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "scroll-group",
  methods: {}
});

/***/ }),

/***/ 139:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "list-group list-group-flush scroll-group scroll" },
    [_vm._t("default")],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-31af5500", module.exports)
  }
}

/***/ }),

/***/ 140:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "container-fluid" },
    [
      _c("loading", {
        attrs: { loading: _vm.task.loaded, message: "Loading Task Details.." }
      }),
      _vm._v(" "),
      _vm.task.loaded && _vm.task.data
        ? _c("div", [
            _c("div", { staticClass: "row" }, [
              _c(
                "div",
                { staticClass: "col-md-9" },
                [
                  _c(
                    "card",
                    {
                      staticClass: "mb-3",
                      attrs: { title: _vm.task.data.title }
                    },
                    [
                      _c("div", { staticClass: "inset-text" }, [
                        _vm._v(_vm._s(_vm.task.data.description))
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c(
                      "div",
                      { staticClass: "col-md-6" },
                      [
                        _c(
                          "card",
                          {
                            staticClass: "mb-3",
                            attrs: { title: "Attachments" }
                          },
                          [_c("div", [_vm._v("Attachments")])]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-md-6" },
                      [
                        _c(
                          "card",
                          {
                            staticClass: "mb-3",
                            attrs: { title: "Audit Logs" }
                          },
                          [
                            _c(
                              "scroll-group",
                              _vm._l(_vm.task.data.audit, function(action) {
                                return _c(
                                  "div",
                                  {
                                    staticClass:
                                      "list-group-item list-group-item-action not-selectable cursor-pointer"
                                  },
                                  [_vm._v(_vm._s(action.audit))]
                                )
                              })
                            )
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "col-md-3" },
                [
                  _c("h6", { staticClass: "page-title text-right" }, [
                    _vm._v("Project Actions")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "mb-3" }, [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-brand btn-sm btn-block mb-3",
                        attrs: { type: "button" }
                      },
                      [_vm._v("Open Actions")]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "btn-group d-block",
                        attrs: { role: "group" }
                      },
                      [
                        _c(
                          "button",
                          {
                            staticClass:
                              "btn btn-secondary btn-sm btn-block dropdown-toggle",
                            attrs: {
                              id: "btnGroupDrop1",
                              type: "button",
                              "data-toggle": "dropdown",
                              "aria-haspopup": "true",
                              "aria-expanded": "false"
                            }
                          },
                          [
                            _vm._v(
                              "\n                            Set Status\n                        "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "dropdown-menu w-100",
                            attrs: { "aria-labelledby": "btnGroupDrop1" }
                          },
                          _vm._l(_vm.status, function(state) {
                            return _c("div", [
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "dropdown-item not-selectable cursor-pointer",
                                  on: {
                                    click: function($event) {
                                      $event.preventDefault()
                                      _vm.setStatus(_vm.task, state.name)
                                    }
                                  }
                                },
                                [_vm._v(_vm._s(state.title))]
                              )
                            ])
                          })
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("h6", { staticClass: "page-title text-right" }, [
                    _vm._v("Project Details")
                  ]),
                  _vm._v(" "),
                  _c("card", { staticClass: "mb-3" }, [
                    _c("div", { staticClass: "mb-3" }, [
                      _c("h6", { staticClass: "page-title" }, [
                        _vm._v("Due Date")
                      ]),
                      _vm._v(" "),
                      _c("div", [_vm._v(_vm._s(_vm.task.data.due_date))])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "mb-3" }, [
                      _c("h6", { staticClass: "page-title" }, [
                        _vm._v("Priority")
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        [
                          _c("priority", {
                            attrs: { priority: _vm.task.data.priority }
                          })
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "mb-3" }, [
                      _c("h6", { staticClass: "page-title" }, [
                        _vm._v("Status")
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        [
                          _c("status", {
                            attrs: { status: _vm.task.data.status }
                          })
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", [
                      _c("h6", { staticClass: "page-title" }, [
                        _vm._v("Account")
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        [
                          _c(
                            "router-link",
                            {
                              attrs: {
                                to: "/accounts/" + _vm.task.data.account.id
                              }
                            },
                            [_vm._v(_vm._s(_vm.task.data.account.name))]
                          )
                        ],
                        1
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "card",
                    { staticClass: "mb-3" },
                    [
                      _c("h6", { staticClass: "page-title" }, [
                        _vm._v("Assigned Users")
                      ]),
                      _vm._v(" "),
                      _vm._l(_vm.task.data.users, function(assigned) {
                        return _c(
                          "div",
                          [
                            _c(
                              "router-link",
                              { attrs: { to: "/users/" + assigned.user.id } },
                              [_vm._v(_vm._s(assigned.user.name))]
                            )
                          ],
                          1
                        )
                      })
                    ],
                    2
                  )
                ],
                1
              )
            ])
          ])
        : _vm._e()
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
    require("vue-hot-reload-api")      .rerender("data-v-44bc18a2", module.exports)
  }
}

/***/ }),

/***/ 71:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(132)
}
var normalizeComponent = __webpack_require__(5)
/* script */
var __vue_script__ = __webpack_require__(134)
/* template */
var __vue_template__ = __webpack_require__(140)
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
Component.options.__file = "resources/assets/js/pages/task.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-44bc18a2", Component.options)
  } else {
    hotAPI.reload("data-v-44bc18a2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 76:
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

var listToStyles = __webpack_require__(78)

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

/***/ 77:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(5)
/* script */
var __vue_script__ = __webpack_require__(81)
/* template */
var __vue_template__ = __webpack_require__(82)
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
Component.options.__file = "resources/assets/js/parts/loading.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-68d5e1cb", Component.options)
  } else {
    hotAPI.reload("data-v-68d5e1cb", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 78:
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

/***/ 79:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(5)
/* script */
var __vue_script__ = __webpack_require__(80)
/* template */
var __vue_template__ = __webpack_require__(83)
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
Component.options.__file = "resources/assets/js/parts/card.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6ab93511", Component.options)
  } else {
    hotAPI.reload("data-v-6ab93511", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__parts_loading__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__parts_loading___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__parts_loading__);
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
  name: "card",
  components: {
    loading: __WEBPACK_IMPORTED_MODULE_0__parts_loading___default.a
  },
  props: ['title', 'subtitle', 'loading', 'loadingText']
});

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__icons_cog__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__icons_cog___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__icons_cog__);
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "loading",
  props: ['loading', 'classes', 'message']
});

/***/ }),

/***/ 82:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return !_vm.loading
    ? _c(
        "span",
        { staticClass: "text-muted", class: _vm.classes },
        [
          _c("icon", { staticClass: "spin", attrs: { name: "cog" } }),
          _vm._v(" " + _vm._s(_vm.message || "Loading..") + "\n")
        ],
        1
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-68d5e1cb", module.exports)
  }
}

/***/ }),

/***/ 83:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "card" }, [
    _c("div", { staticClass: "card-body" }, [
      _vm.loading
        ? _c("div", [_c("loading", [_vm._v(_vm._s(_vm.loadingText))])], 1)
        : _c("div", [
            _vm.title
              ? _c("h5", { staticClass: "card-title" }, [
                  _vm._v(_vm._s(_vm.title))
                ])
              : _vm._e(),
            _vm._v(" "),
            _vm.subtitle
              ? _c("h6", { staticClass: "card-subtitle mb-2 text-muted" }, [
                  _vm._v(_vm._s(_vm.subtitle))
                ])
              : _vm._e(),
            _vm._v(" "),
            _c("div", [_vm._t("default")], 2)
          ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-6ab93511", module.exports)
  }
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
var normalizeComponent = __webpack_require__(5)
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
var update = __webpack_require__(76)("14797cf1", content, false, {});
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

exports = module.exports = __webpack_require__(66)(false);
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
var normalizeComponent = __webpack_require__(5)
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
var update = __webpack_require__(76)("4729d466", content, false, {});
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

exports = module.exports = __webpack_require__(66)(false);
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