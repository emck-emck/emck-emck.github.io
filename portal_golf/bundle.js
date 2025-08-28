/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/handlers/Listener.js":
/*!**********************************!*\
  !*** ./src/handlers/Listener.js ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Listener)\n/* harmony export */ });\n/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/constants.js */ \"./src/utils/constants.js\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\"); }\nfunction _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }\nfunction _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", { writable: !1 }), e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\n\nvar Listener = /*#__PURE__*/function () {\n  function Listener(scene) {\n    _classCallCheck(this, Listener);\n    //Mobile mode selector\n    //0 is shoot, 1 is orange, 2 is blue\n    this.mode = 0;\n\n    //Class variables\n    this.scene = scene;\n    this.ball = scene.ball;\n\n    //Key locks\n    this.isQDown = false;\n    this.isWDown = false;\n    this.isEDown = false;\n    this.isFDown = false;\n\n    //Listener setup\n\n    //Mouse\n    this.scene.input.on('pointerdown', this.onPointerDown, this);\n    this.scene.input.on('pointerup', this.onPointerUp, this);\n    this.scene.canvas.addEventListener('mouseleave', this.onPointerOut.bind(this));\n\n    //Keys\n    //Keydown\n    this.scene.input.keyboard.on('keydown-Q', this.onPortalShoot, this);\n    this.scene.input.keyboard.on('keydown-E', this.onPortalShoot, this);\n    this.scene.input.keyboard.on('keydown-W', this.onShotCancel, this);\n    this.scene.input.keyboard.on('keydown-F', this.fullscreen, this);\n    this.scene.input.keyboard.on('keydown-P', this.pauseGame, this);\n    //Keyup\n    this.scene.input.keyboard.on('keyup-Q', this.releaseQ, this);\n    this.scene.input.keyboard.on('keyup-E', this.releaseE, this);\n    this.scene.input.keyboard.on('keyup-W', this.releaseW, this);\n    this.scene.input.keyboard.on('keyup-F', this.releaseF, this);\n  }\n  return _createClass(Listener, [{\n    key: \"shutdown\",\n    value: function shutdown() {\n      //Mouse\n      this.scene.input.off('pointerdown', this.onPointerDown, this);\n      this.scene.input.off('pointerup', this.onPointerUp, this);\n      this.scene.canvas.removeEventListener('mouseleave', this.onPointerOut.bind(this));\n\n      //Keys\n      //Keydown\n      this.scene.input.keyboard.off('keydown-Q', this.onPortalShoot, this);\n      this.scene.input.keyboard.off('keydown-E', this.onPortalShoot, this);\n      this.scene.input.keyboard.off('keydown-W', this.onShotCancel, this);\n      this.scene.input.keyboard.off('keydown-F', this.fullscreen, this);\n      this.scene.input.keyboard.off('keydown-P', this.pauseGame, this);\n      //Keyup\n      this.scene.input.keyboard.off('keyup-Q', this.releaseQ, this);\n      this.scene.input.keyboard.off('keyup-E', this.releaseE, this);\n      this.scene.input.keyboard.off('keyup-W', this.releaseW, this);\n      this.scene.input.keyboard.off('keyup-F', this.releaseF, this);\n    }\n\n    //When the mouse is clicked down\n  }, {\n    key: \"onPointerDown\",\n    value: function onPointerDown(pointer) {\n      var clicked = this.scene.input.hitTestPointer(pointer);\n      if (clicked.length > 0) {\n        //Handles sprite clicks\n        var target = clicked[0];\n        if (target.data.list.name) {\n          if (target.data.list.name == 'o') {\n            //Orange portal\n            if (this.mode == 1) {\n              this.mode = 0;\n            } else {\n              this.mode = 1;\n            }\n          } else if (target.data.list.name == 'b') {\n            //Blue portal\n            if (this.mode == 2) {\n              this.mode = 0;\n            } else {\n              this.mode = 2;\n            }\n          } else if (target.data.list.name == 'p') {\n            //Pause button\n            this.mode = 0;\n            this.pauseGame();\n          }\n        }\n      } else {\n        //All other clicks (should be all desktop gameplay)\n        if (this.mode == 0) {\n          if (!this.ball.isBallMoving()) {\n            this.ball.mouseDownCoords = {\n              x: Math.floor(pointer.x),\n              y: Math.floor(pointer.y)\n            };\n            this.scene.powerBarActive = true;\n          }\n        } else if (this.mode == 1) {\n          this.onPortalShoot({\n            code: 'KeyQ'\n          });\n          this.isQDown = false;\n          this.mode = 0;\n        } else if (this.mode == 2) {\n          this.onPortalShoot({\n            code: 'KeyE'\n          });\n          this.isEDown = false;\n          this.mode = 0;\n        }\n      }\n    }\n\n    //When the mouse is unclicked\n  }, {\n    key: \"onPointerUp\",\n    value: function onPointerUp(pointer) {\n      if (!this.ball.isBallMoving() && this.ball.mouseDownCoords != null) {\n        this.ball.doBallShoot(pointer);\n        this.scene.powerBarActive = false;\n      }\n    }\n  }, {\n    key: \"onPointerOut\",\n    value: function onPointerOut(pointer) {\n      this.ball.mouseDownCoords = {};\n      this.scene.powerBarActive = false;\n    }\n\n    //When Q or E are pressed\n  }, {\n    key: \"onPortalShoot\",\n    value: function onPortalShoot(key) {\n      if (key.code == 'KeyQ' && !this.isQDown) {\n        this.isQDown = true;\n        this.ball.doPortalShoot(_utils_constants_js__WEBPACK_IMPORTED_MODULE_0__.PORTAL_ORANGE);\n      } else if (key.code == 'KeyE' && !this.isEDown) {\n        this.isEDown = true;\n        this.ball.doPortalShoot(_utils_constants_js__WEBPACK_IMPORTED_MODULE_0__.PORTAL_BLUE);\n      }\n    }\n  }, {\n    key: \"releaseQ\",\n    value: function releaseQ(key) {\n      this.isQDown = false;\n    }\n  }, {\n    key: \"releaseE\",\n    value: function releaseE(key) {\n      this.isEDown = false;\n    }\n  }, {\n    key: \"onShotCancel\",\n    value: function onShotCancel(key) {\n      if (!this.isWDown) {\n        this.isWDown = true;\n        this.ball.mouseDownCoords = {};\n        this.scene.powerBarActive = false;\n      }\n    }\n  }, {\n    key: \"releaseW\",\n    value: function releaseW(key) {\n      this.isWDown = false;\n    }\n  }, {\n    key: \"fullscreen\",\n    value: function fullscreen(key) {\n      this.scene.scale.fullscreenTarget = document.body;\n      if (!this.isFDown) {\n        this.isFDown = true;\n        if (!this.scene.scale.isFullscreen) {\n          this.scene.scale.startFullscreen();\n        } else {\n          this.scene.scale.stopFullscreen();\n        }\n      }\n    }\n  }, {\n    key: \"releaseF\",\n    value: function releaseF(key) {\n      this.isFDown = false;\n    }\n  }, {\n    key: \"pauseGame\",\n    value: function pauseGame(key) {\n      this.scene.scene.launch('PauseMenu');\n      this.scene.scene.pause('GameScene');\n    }\n  }]);\n}();\n\n\n//# sourceURL=webpack://phaser_portal_golf/./src/handlers/Listener.js?\n}");

/***/ }),

/***/ "./src/handlers/MenuListener.js":
/*!**************************************!*\
  !*** ./src/handlers/MenuListener.js ***!
  \**************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MenuListener)\n/* harmony export */ });\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\"); }\nfunction _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }\nfunction _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", { writable: !1 }), e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nvar MenuListener = /*#__PURE__*/function () {\n  function MenuListener(scene) {\n    _classCallCheck(this, MenuListener);\n    //Class variables\n    this.scene = scene;\n    this.ball = scene.ball;\n\n    //Key locks\n    this.isFDown = false;\n\n    //Listener setup\n    this.scene.input.keyboard.on('keydown-F', this.fullscreen, this);\n    this.scene.input.keyboard.on('keyup-F', this.releaseF, this);\n  }\n  return _createClass(MenuListener, [{\n    key: \"fullscreen\",\n    value: function fullscreen(key) {\n      this.scene.scale.fullscreenTarget = document.body;\n      if (!this.isFDown) {\n        this.isFDown = true;\n        if (!this.scene.scale.isFullscreen) {\n          this.scene.scale.startFullscreen();\n        } else {\n          this.scene.scale.stopFullscreen();\n        }\n      }\n    }\n  }, {\n    key: \"releaseF\",\n    value: function releaseF(key) {\n      this.isFDown = false;\n    }\n  }]);\n}();\n\n\n//# sourceURL=webpack://phaser_portal_golf/./src/handlers/MenuListener.js?\n}");

/***/ }),

/***/ "./src/handlers/PauseMenuListener.js":
/*!*******************************************!*\
  !*** ./src/handlers/PauseMenuListener.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ PauseMenuListener)\n/* harmony export */ });\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\"); }\nfunction _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }\nfunction _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", { writable: !1 }), e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nvar PauseMenuListener = /*#__PURE__*/function () {\n  function PauseMenuListener(scene) {\n    _classCallCheck(this, PauseMenuListener);\n    //Class variables\n    this.scene = scene;\n    this.ball = scene.ball;\n\n    //Key locks\n    this.isFDown = false;\n\n    //Listener setup\n    this.scene.input.keyboard.on('keydown-P', this.resumeGame, this);\n    this.scene.input.keyboard.on('keydown-F', this.fullscreen, this);\n    this.scene.input.keyboard.on('keyup-F', this.releaseF, this);\n  }\n  return _createClass(PauseMenuListener, [{\n    key: \"resumeGame\",\n    value: function resumeGame() {\n      this.scene.resumeGame();\n    }\n  }, {\n    key: \"fullscreen\",\n    value: function fullscreen(key) {\n      this.scene.scale.fullscreenTarget = document.body;\n      if (!this.isFDown) {\n        this.isFDown = true;\n        if (!this.scene.scale.isFullscreen) {\n          this.scene.scale.startFullscreen();\n        } else {\n          this.scene.scale.stopFullscreen();\n        }\n      }\n    }\n  }, {\n    key: \"releaseF\",\n    value: function releaseF(key) {\n      this.isFDown = false;\n    }\n  }]);\n}();\n\n\n//# sourceURL=webpack://phaser_portal_golf/./src/handlers/PauseMenuListener.js?\n}");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/constants.js */ \"./src/utils/constants.js\");\n/* harmony import */ var _scenes_MenuScene_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scenes/MenuScene.js */ \"./src/scenes/MenuScene.js\");\n/* harmony import */ var _scenes_GameScene_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scenes/GameScene.js */ \"./src/scenes/GameScene.js\");\n/* harmony import */ var _scenes_WinScene_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scenes/WinScene.js */ \"./src/scenes/WinScene.js\");\n/* harmony import */ var _scenes_InstructionsMenuScene_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scenes/InstructionsMenuScene.js */ \"./src/scenes/InstructionsMenuScene.js\");\n/* harmony import */ var _scenes_LevelSelectScene_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scenes/LevelSelectScene.js */ \"./src/scenes/LevelSelectScene.js\");\n/* harmony import */ var _scenes_LeaderboardScene_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./scenes/LeaderboardScene.js */ \"./src/scenes/LeaderboardScene.js\");\n/* harmony import */ var _scenes_PauseMenuScene_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./scenes/PauseMenuScene.js */ \"./src/scenes/PauseMenuScene.js\");\n//Imports\n\n\n\n\n\n\n\n\n\n//Magic Phaser3 Configuration Stuff\nvar config = {\n  parent: 'game-container',\n  type: Phaser.AUTO,\n  scale: {\n    mode: Phaser.Scale.FIT,\n    // Ensures the game scales to fit the screen\n    autoCenter: Phaser.Scale.CENTER_BOTH,\n    // Centers the game\n    width: _utils_constants_js__WEBPACK_IMPORTED_MODULE_0__.SCREEN_WIDTH,\n    height: _utils_constants_js__WEBPACK_IMPORTED_MODULE_0__.SCREEN_HEIGHT\n  },\n  physics: {\n    \"default\": 'arcade',\n    arcade: {\n      gravity: {\n        y: 0\n      },\n      debug: false,\n      fps: 120,\n      // Target FPS\n      timeScale: 1,\n      // Scale of the physics time, 1 is normal speed\n      maxPhysicsSteps: 1 // Max number of physics steps per frame\n    }\n  },\n  scene: [_scenes_MenuScene_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _scenes_GameScene_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"], _scenes_WinScene_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"], _scenes_InstructionsMenuScene_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"], _scenes_LeaderboardScene_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"], _scenes_LevelSelectScene_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"], _scenes_PauseMenuScene_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"]]\n};\n\n//RUNS THE GAME\nvar game = new Phaser.Game(config);\n\n//Injects the canvas element into a div for styling purposes\ndocument.getElementById(\"gameWrapper\").appendChild(game.canvas);\n\n//# sourceURL=webpack://phaser_portal_golf/./src/index.js?\n}");

/***/ }),

/***/ "./src/scenes/GameScene.js":
/*!*********************************!*\
  !*** ./src/scenes/GameScene.js ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _handlers_Listener_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../handlers/Listener.js */ \"./src/handlers/Listener.js\");\n/* harmony import */ var _sprites_Ball_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sprites/Ball.js */ \"./src/sprites/Ball.js\");\n/* harmony import */ var _sprites_Bridge_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sprites/Bridge.js */ \"./src/sprites/Bridge.js\");\n/* harmony import */ var _sprites_Cube_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sprites/Cube.js */ \"./src/sprites/Cube.js\");\n/* harmony import */ var _sprites_DisappearingWall_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sprites/DisappearingWall.js */ \"./src/sprites/DisappearingWall.js\");\n/* harmony import */ var _sprites_Goal_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sprites/Goal.js */ \"./src/sprites/Goal.js\");\n/* harmony import */ var _sprites_MovingWall_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../sprites/MovingWall.js */ \"./src/sprites/MovingWall.js\");\n/* harmony import */ var _sprites_Portal_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../sprites/Portal.js */ \"./src/sprites/Portal.js\");\n/* harmony import */ var _sprites_PortalP_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../sprites/PortalP.js */ \"./src/sprites/PortalP.js\");\n/* harmony import */ var _sprites_PressurePlate_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../sprites/PressurePlate.js */ \"./src/sprites/PressurePlate.js\");\n/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/constants.js */ \"./src/utils/constants.js\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\"); }\nfunction _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }\nfunction _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", { writable: !1 }), e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nfunction _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }\nfunction _possibleConstructorReturn(t, e) { if (e && (\"object\" == _typeof(e) || \"function\" == typeof e)) return e; if (void 0 !== e) throw new TypeError(\"Derived constructors may only return object or undefined\"); return _assertThisInitialized(t); }\nfunction _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); return e; }\nfunction _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }\nfunction _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }\nfunction _inherits(t, e) { if (\"function\" != typeof e && null !== e) throw new TypeError(\"Super expression must either be null or a function\"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, \"prototype\", { writable: !1 }), e && _setPrototypeOf(t, e); }\nfunction _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }\n\n\n//Sprite class import\n\n\n\n\n\n\n\n\n\n\n//Util import\n\n\nvar GameScene = /*#__PURE__*/function (_Phaser$Scene) {\n  function GameScene() {\n    _classCallCheck(this, GameScene);\n    return _callSuper(this, GameScene, [{\n      key: 'GameScene'\n    }]);\n  }\n  _inherits(GameScene, _Phaser$Scene);\n  return _createClass(GameScene, [{\n    key: \"init\",\n    value: function init(data) {\n      //Level-to-Level data\n      this.holeId = data.holeId;\n      this.totalStrokes = data.totalStrokes;\n      this.totalTime = data.totalTime;\n      this.isFullGame = data.isFullGame;\n      this.holeName = _utils_constants_js__WEBPACK_IMPORTED_MODULE_10__.MAP_INFO[data.holeId].name;\n      this.par = _utils_constants_js__WEBPACK_IMPORTED_MODULE_10__.MAP_INFO[data.holeId].par;\n      this.holeDisplayName = _utils_constants_js__WEBPACK_IMPORTED_MODULE_10__.MAP_INFO[data.holeId].display_name;\n\n      //Objects\n      this.ball = null;\n      this.walls = null;\n      this.iWalls = null;\n      this.portalGroup = null;\n      this.ppGroup = null;\n\n      //Menu bar items\n      this.isMobile = this.sys.game.device.os.android || this.sys.game.device.os.iOS; // For Phone UI\n      this.powerBar = null;\n      this.indicator = null;\n      this.bPortalIcon = null;\n      this.oPortalIcon = null;\n      this.pauseIcon = null;\n      this.parText = null;\n      this.strokesText = null;\n      this.holeNameText = null;\n      this.timeText = null;\n      this.strokes = 0;\n      this.initTime = null;\n      this.holeTime = 0;\n\n      //Helper\n      this.win = false;\n      this.powerBarActive = false;\n    }\n  }, {\n    key: \"preload\",\n    value: function preload() {\n      //Maps\n      this.load.tilemapTiledJSON(this.holeName, _utils_constants_js__WEBPACK_IMPORTED_MODULE_10__.ASSET_FILEPATH_GAME_MAP + this.holeName + '.json');\n\n      //Tiles\n      this.load.image('ground', _utils_constants_js__WEBPACK_IMPORTED_MODULE_10__.ASSET_FILEPATH_GAME + 'bg_tile.png');\n      this.load.image('groundlh', _utils_constants_js__WEBPACK_IMPORTED_MODULE_10__.ASSET_FILEPATH_GAME + 'bg_line_h.png');\n      this.load.image('groundlv', _utils_constants_js__WEBPACK_IMPORTED_MODULE_10__.ASSET_FILEPATH_GAME + 'bg_line_v.png');\n      this.load.image('groundle', _utils_constants_js__WEBPACK_IMPORTED_MODULE_10__.ASSET_FILEPATH_GAME + 'bg_line_e.png');\n      this.load.image('groundlt', _utils_constants_js__WEBPACK_IMPORTED_MODULE_10__.ASSET_FILEPATH_GAME + 'bg_line_t.png');\n      this.load.image('groundlc', _utils_constants_js__WEBPACK_IMPORTED_MODULE_10__.ASSET_FILEPATH_GAME + 'bg_line_c.png');\n      this.load.image('water', _utils_constants_js__WEBPACK_IMPORTED_MODULE_10__.ASSET_FILEPATH_GAME + 'water.png');\n      this.load.image('sand', _utils_constants_js__WEBPACK_IMPORTED_MODULE_10__.ASSET_FILEPATH_GAME + 'sand.png');\n      this.load.image('sandl', _utils_constants_js__WEBPACK_IMPORTED_MODULE_10__.ASSET_FILEPATH_GAME + 'sand_line.png');\n      this.load.image('wall', _utils_constants_js__WEBPACK_IMPORTED_MODULE_10__.ASSET_FILEPATH_GAME + 'wall.png');\n      this.load.image('inactivewall', _utils_constants_js__WEBPACK_IMPORTED_MODULE_10__.ASSET_FILEPATH_GAME + 'inactivewall.png');\n\n      //Sprites\n      //Game bar objects\n      this.load.image('powerbar', _utils_constants_js__WEBPACK_IMPORTED_MODULE_10__.ASSET_FILEPATH_GAME + 'powerbar.png');\n      this.load.image('indicator', _utils_constants_js__WEBPACK_IMPORTED_MODULE_10__.ASSET_FILEPATH_GAME + 'indicator.png');\n      this.load.image('bportalicon', _utils_constants_js__WEBPACK_IMPORTED_MODULE_10__.ASSET_FILEPATH_GAME + 'blueportalicon.png');\n      this.load.image('oportalicon', _utils_constants_js__WEBPACK_IMPORTED_MODULE_10__.ASSET_FILEPATH_GAME + 'orangeportalicon.png');\n      this.load.image('pauseicon', _utils_constants_js__WEBPACK_IMPORTED_MODULE_10__.ASSET_FILEPATH_GAME + 'pauseicon.png');\n      //Game objects\n      this.load.image('ball', _utils_constants_js__WEBPACK_IMPORTED_MODULE_10__.ASSET_FILEPATH_GAME + 'ball.png');\n      this.load.image('cube', _utils_constants_js__WEBPACK_IMPORTED_MODULE_10__.ASSET_FILEPATH_GAME + 'cube.png');\n      this.load.image('disappearingwall', _utils_constants_js__WEBPACK_IMPORTED_MODULE_10__.ASSET_FILEPATH_GAME + 'disappearingwall.png');\n      this.load.image('goal', _utils_constants_js__WEBPACK_IMPORTED_MODULE_10__.ASSET_FILEPATH_GAME + 'goal.png');\n      this.load.image('pressureplate', _utils_constants_js__WEBPACK_IMPORTED_MODULE_10__.ASSET_FILEPATH_GAME + 'pressureplate.png');\n      this.load.image('bridge', _utils_constants_js__WEBPACK_IMPORTED_MODULE_10__.ASSET_FILEPATH_GAME + 'bridge.png');\n      //Portal objects\n      this.load.image('bportalp', _utils_constants_js__WEBPACK_IMPORTED_MODULE_10__.ASSET_FILEPATH_GAME + 'blueportalprojectile.png');\n      this.load.image('oportalp', _utils_constants_js__WEBPACK_IMPORTED_MODULE_10__.ASSET_FILEPATH_GAME + 'orangeportalprojectile.png');\n      this.load.image('bportalh', _utils_constants_js__WEBPACK_IMPORTED_MODULE_10__.ASSET_FILEPATH_GAME + 'blueportalwallh.png');\n      this.load.image('oportalh', _utils_constants_js__WEBPACK_IMPORTED_MODULE_10__.ASSET_FILEPATH_GAME + 'orangeportalwallh.png');\n      this.load.image('bportalv', _utils_constants_js__WEBPACK_IMPORTED_MODULE_10__.ASSET_FILEPATH_GAME + 'blueportalwallv.png');\n      this.load.image('oportalv', _utils_constants_js__WEBPACK_IMPORTED_MODULE_10__.ASSET_FILEPATH_GAME + 'orangeportalwallv.png');\n\n      //Sounds\n      this.load.audio('putt', _utils_constants_js__WEBPACK_IMPORTED_MODULE_10__.ASSET_FILEPATH_GAME_SOUND + 'putt.mp3');\n      this.load.audio('hole', _utils_constants_js__WEBPACK_IMPORTED_MODULE_10__.ASSET_FILEPATH_GAME_SOUND + 'hole.mp3');\n      this.load.audio('splash', _utils_constants_js__WEBPACK_IMPORTED_MODULE_10__.ASSET_FILEPATH_GAME_SOUND + 'splash.mp3');\n      this.load.audio('squish', _utils_constants_js__WEBPACK_IMPORTED_MODULE_10__.ASSET_FILEPATH_GAME_SOUND + 'squish.mp3');\n      this.load.audio('pspawn', _utils_constants_js__WEBPACK_IMPORTED_MODULE_10__.ASSET_FILEPATH_GAME_SOUND + 'portal_spawn.mp3');\n      this.load.audio('penter', _utils_constants_js__WEBPACK_IMPORTED_MODULE_10__.ASSET_FILEPATH_GAME_SOUND + 'portal_enter.mp3');\n    }\n  }, {\n    key: \"create\",\n    value: function create() {\n      var _this = this;\n      // Canvas listener init\n      this.canvas = this.game.canvas;\n\n      //Tiled Init\n      //Make map\n      this.map = this.make.tilemap({\n        key: this.holeName\n      });\n      //Tile layers\n      this.wallLayer = null;\n      this.groundLayer = null;\n      //Tilesets\n      this.groundTile = -1;\n      this.groundLineHTile = -1;\n      this.groundLineVTile = -1;\n      this.groundLineETile = -1;\n      this.groundLineTTile = -1;\n      this.groundLineCTile = -1;\n      this.waterTile = -1;\n      this.sandTile = -1;\n      this.sandLineTile = -1;\n      this.wallTile = -1;\n      this.iWallTile = -1;\n      this.fakeWall = -1;\n\n      //Check tile layers, load if we have them\n      //ground\n      var groundLayer = this.map.getLayer('Ground_Layer');\n      if (groundLayer) {\n        // Filter tiles used in map and connect images to used tiles\n        var availableTilesets = [];\n        if (this.map.tilesets.some(function (tileset) {\n          return tileset.name === 'Ground';\n        })) {\n          this.groundTile = this.map.addTilesetImage('Ground', 'ground');\n          availableTilesets.push(this.groundTile);\n        }\n        if (this.map.tilesets.some(function (tileset) {\n          return tileset.name === 'Ground_Line_H';\n        })) {\n          this.groundLineHTile = this.map.addTilesetImage('Ground_Line_H', 'groundlh');\n          availableTilesets.push(this.groundLineHTile);\n        }\n        if (this.map.tilesets.some(function (tileset) {\n          return tileset.name === 'Ground_Line_V';\n        })) {\n          this.groundLineVTile = this.map.addTilesetImage('Ground_Line_V', 'groundlv');\n          availableTilesets.push(this.groundLineVTile);\n        }\n        if (this.map.tilesets.some(function (tileset) {\n          return tileset.name === 'Ground_Line_Elbow';\n        })) {\n          this.groundLineETile = this.map.addTilesetImage('Ground_Line_Elbow', 'groundle');\n          availableTilesets.push(this.groundLineETile);\n        }\n        if (this.map.tilesets.some(function (tileset) {\n          return tileset.name === 'Ground_Line_T';\n        })) {\n          this.groundLineTTile = this.map.addTilesetImage('Ground_Line_T', 'groundlt');\n          availableTilesets.push(this.groundLineTTile);\n        }\n        if (this.map.tilesets.some(function (tileset) {\n          return tileset.name === 'Ground_Line_Cross';\n        })) {\n          this.groundLineCTile = this.map.addTilesetImage('Ground_Line_Cross', 'groundlc');\n          availableTilesets.push(this.groundLineCTile);\n        }\n        if (this.map.tilesets.some(function (tileset) {\n          return tileset.name === 'Water';\n        })) {\n          this.waterTile = this.map.addTilesetImage('Water', 'water');\n          availableTilesets.push(this.waterTile);\n        }\n        if (this.map.tilesets.some(function (tileset) {\n          return tileset.name === 'Sand';\n        })) {\n          this.sandTile = this.map.addTilesetImage('Sand', 'sand');\n          availableTilesets.push(this.sandTile);\n        }\n        if (this.map.tilesets.some(function (tileset) {\n          return tileset.name === 'Sand_Line';\n        })) {\n          this.sandLineTile = this.map.addTilesetImage('Sand_Line', 'sandl');\n          availableTilesets.push(this.sandLineTile);\n        }\n        if (this.map.tilesets.some(function (tileset) {\n          return tileset.name === 'Wall';\n        })) {\n          this.fakeWall = this.map.addTilesetImage('Wall', 'wall');\n          availableTilesets.push(this.fakeWall);\n        }\n\n        //Create layer\n        this.groundLayer = this.map.createLayer('Ground_Layer', availableTilesets, 0, 0);\n        this.groundLayer.setCollisionByExclusion([-1]);\n        //Tile object init\n        this.groundLayer.forEachTile(function (tile) {\n          if (tile.tileset === _this.waterTile) {} else if (tile.tileset === _this.sandTile) {}\n        });\n      }\n      //walls\n      var wallLayer = this.map.getLayer('Wall_Layer');\n      if (wallLayer) {\n        //Connect images to tiles\n        var _availableTilesets = [];\n        if (this.map.tilesets.some(function (tileset) {\n          return tileset.name === 'Wall';\n        })) {\n          this.wallTile = this.map.addTilesetImage('Wall', 'wall');\n          _availableTilesets.push(this.wallTile);\n        }\n        if (this.map.tilesets.some(function (tileset) {\n          return tileset.name === 'Inactive_Wall';\n        })) {\n          this.iWallTile = this.map.addTilesetImage('Inactive_Wall', 'inactivewall');\n          _availableTilesets.push(this.iWallTile);\n        }\n        //Create layer\n        this.wallLayer = this.map.createLayer('Wall_Layer', _availableTilesets, 0, 0);\n        this.wallLayer.setCollisionByProperty({\n          collides: true\n        });\n        //Tile object init\n        this.wallLayer.forEachTile(function (tile) {\n          if (tile.tileset === _this.wallTile) {} else if (tile.tileset === _this.iWallTile) {}\n        });\n      }\n\n      //Find Object Positions\n      var ballObject = this.map.findObject('Ball_Layer', function (obj) {\n        return obj.name === 'Ball_Object';\n      });\n      var goalObject = this.map.findObject('Goal_Layer', function (obj) {\n        return obj.name === 'Goal_Object';\n      });\n      var objectLayer = this.map.getObjectLayer('Object_Layer');\n\n      //Menu bar\n      this.strokes = 0;\n      this.initTime = Date.now();\n      this.createMenuBar();\n\n      //Collider group init\n      this.ppGroup = this.physics.add.group();\n      this.portalGroup = this.physics.add.group();\n      this.cubeGroup = this.physics.add.group();\n      this.movingWallGroup = this.physics.add.group();\n      this.pressurePlateGroup = this.physics.add.group();\n      this.disappearingWallGroup = this.physics.add.group();\n      this.bridgeGroup = this.physics.add.group();\n\n      //Object Init\n      //Goal\n      if (goalObject) {\n        this.goal = new _sprites_Goal_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"](this, goalObject.x, goalObject.y);\n        this.goal.setDepth(0);\n      } else {\n        throw new error('Goal not initialized');\n      }\n\n      //Ball\n      if (ballObject) {\n        //Create Ball object\n        this.ball = new _sprites_Ball_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this, ballObject.x, ballObject.y);\n        this.ball.setDepth(1);\n      } else {\n        throw new error('Ball not initialized');\n      }\n\n      //Every other static object\n      if (objectLayer) {\n        var i = 1;\n        objectLayer.objects.forEach(function (object) {\n          var type = object.properties.find(function (prop) {\n            return prop.name === 'type';\n          }).value;\n          var code;\n          switch (type) {\n            case 'cube':\n              // Cube init\n              var cube = new _sprites_Cube_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"](_this, object.x, object.y);\n              _this.cubeGroup.add(cube);\n              cube.setImmovable(false);\n              cube.pushable = false;\n              cube.setMass(0.5);\n              cube.setDepth(1);\n              break;\n            case 'mwall':\n              // mWall init\n              var isHorizontal = true;\n              if (object.properties.find(function (prop) {\n                return prop.name === 'horizontal';\n              })) {\n                isHorizontal = object.properties.find(function (prop) {\n                  return prop.name === 'horizontal';\n                }).value;\n              }\n              var mWall = new _sprites_MovingWall_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"](_this, object.x, object.y, _utils_constants_js__WEBPACK_IMPORTED_MODULE_10__.MWALL_SPEED, isHorizontal);\n              _this.movingWallGroup.add(mWall);\n              mWall.setVel();\n              mWall.setImmovable(true);\n              mWall.body.pushable = false;\n              mWall.body.setDamping(false);\n              mWall.setDepth(1);\n              break;\n            case 'dwall':\n              // dWall init\n              code = object.properties.find(function (prop) {\n                return prop.name === 'code';\n              }).value;\n              var dw = new _sprites_DisappearingWall_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"](_this, object.x, object.y, code);\n              _this.disappearingWallGroup.add(dw);\n              dw.setImmovable(true);\n              dw.body.pushable = false;\n              break;\n            case 'bridge':\n              code = object.properties.find(function (prop) {\n                return prop.name === 'code';\n              }).value;\n              var b = new _sprites_Bridge_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](_this, object.x, object.y, code);\n              _this.bridgeGroup.add(b);\n              b.setImmovable(true);\n              b.body.pushable = false;\n              b.disableBody(true, true);\n              break;\n            case 'press':\n              // Pressure pate init\t\n              code = object.properties.find(function (prop) {\n                return prop.name === 'code';\n              }).value;\n              var press = new _sprites_PressurePlate_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"](_this, object.x, object.y, code);\n              _this.pressurePlateGroup.add(press);\n              press.setImmovable(true);\n              press.setDepth(0);\n              break;\n            default:\n              console.warn('Unknown object type: ${object.properties.type}');\n          }\n        });\n      }\n\n      //Link pressure plates to objects\n      this.pressurePlateGroup.children.iterate(function (press) {\n        if (press) {\n          var objs = [];\n          var code = press.code;\n          //Finds the objects corresponding with this plate\n          _this.disappearingWallGroup.children.iterate(function (dw) {\n            if (dw) {\n              if (dw.code == code) {\n                objs.push(dw);\n              }\n            }\n          });\n          _this.bridgeGroup.children.iterate(function (b) {\n            if (b) {\n              if (b.code == code) {\n                objs.push(b);\n              }\n            }\n          });\n          press.ctrl = objs;\n        }\n      });\n\n      //Collider init\n      //Hazard collision handled in friction function\n\n      //Ball colliders\n      this.physics.add.collider(this.ball, this.wallLayer, this.ball.wallCollision);\n      this.physics.add.collider(this.ball, this.goal, null, this.goal.handleBallAtGoal.bind(this));\n      this.physics.add.collider(this.ball, this.portalGroup, null, this.ball.portalCollision);\n\n      //Portal colliders\n      this.physics.add.collider(this.ppGroup, this.portalGroup, null, this.ppPortalCollision);\n      this.physics.add.collider(this.portalGroup, this.portalGroup, this.portalPortalCollision.bind(this));\n\n      //Cube colliders\n      this.cubeGroup.children.iterate(function (c) {\n        if (c) {\n          _this.physics.add.collider(c, _this.wallLayer, c.wallCollision);\n          _this.physics.add.collider(c, _this.ball, c.ballCollision, c.preBallCollision, _this);\n          _this.physics.add.collider(c, _this.ppGroup, null, c.PPCollision);\n          _this.physics.add.collider(c, _this.portalGroup, null, c.portalCollision);\n          _this.physics.add.collider(c, _this.movingWallGroup, null, c.movingWallCollision);\n          _this.physics.add.collider(c, _this.disappearingWallGroup, c.wallCollision);\n          _this.physics.add.overlap(c, _this.disappearingWallGroup, c.dWallOverlap);\n          _this.physics.add.collider(c, _this.cubeGroup);\n        }\n      });\n\n      //Moving Wall Colliders\n      this.movingWallGroup.children.iterate(function (m) {\n        if (m) {\n          _this.physics.add.collider(m, _this.wallLayer, null, m.wallCollision);\n          _this.physics.add.collider(m, _this.ball, m.ballCollision);\n          _this.physics.add.collider(m, _this.ppGroup, null, m.PPCollision);\n          _this.physics.add.collider(m, _this.portalGroup, null, m.portalCollision);\n          _this.physics.add.collider(m, _this.cubeGroup, null, m.wallCollision);\n          _this.physics.add.collider(m, _this.movingWallGroup, m.wallCollision);\n          _this.physics.add.collider(m, _this.disappearingWallGroup, null, m.dWallCollision);\n        }\n      });\n\n      //Pressure Plate Colliders\n      this.pressurePlateGroup.children.iterate(function (press) {\n        if (press) {\n          _this.physics.add.collider(press, _this.ball, null, press.objectOnPlate);\n          _this.physics.add.collider(press, _this.cubeGroup, null, press.objectOnPlate);\n          _this.physics.add.collider(press, _this.movingWallGroup, null, press.objectOnPlate);\n        }\n      });\n\n      //Disappearing Wall Colliders\n      this.disappearingWallGroup.children.iterate(function (dw) {\n        if (dw) {\n          _this.physics.add.collider(dw, _this.ball);\n          _this.physics.add.overlap(dw, _this.ball, _this.ball.dWallOverlap);\n          _this.physics.add.collider(dw, _this.ppGroup, null, dw.ppCollision);\n        }\n      });\n\n      //Player input init\n      this.listener = new _handlers_Listener_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this);\n\n      // Post update listener\n      this.events.on('postupdate', this.postUpdate, this);\n      // Shutdown listener\n      this.events.on('shutdown', this.shutdown, this);\n    }\n  }, {\n    key: \"update\",\n    value: function update() {\n      // Win check\n      if (this.win) {\n        this.winGame();\n      }\n\n      //Ball motion\n      this.ball.update();\n      //Cube motion\n      this.cubeGroup.children.iterate(function (c) {\n        if (c) {\n          c.update();\n        }\n      });\n      //Pressure plate detect\n      this.pressurePlateGroup.children.iterate(function (press) {\n        if (press) {\n          press.update();\n        }\n      });\n      //Moving wall update\n      this.movingWallGroup.children.iterate(function (m) {\n        if (m) {\n          m.update();\n        }\n      });\n\n      //Menu bar update\n      this.strokesText.setText('Strokes: ' + this.strokes);\n      this.parText.setText('Par: ' + this.par);\n      // Timer update\n      this.holeTime = Date.now() - this.initTime;\n      this.timeText.setText('Time: ' + this.formatTime(this.holeTime));\n      //Power bar update\n      if (this.powerBarActive) {\n        this.handlePowerBar(this.ball.mouseDownCoords.x, this.ball.mouseDownCoords.y, this.input.activePointer.worldX, this.input.activePointer.worldY);\n      } else {\n        this.powerBar.setVisible(false);\n      }\n      //Indicator update\n      if (this.ball.isBallMoving()) {\n        this.indicator.setVisible(false);\n      } else {\n        this.indicator.setVisible(true);\n      }\n    }\n  }, {\n    key: \"postUpdate\",\n    value: function postUpdate(time, delta) {\n      if (this.ball) {\n        this.ball.postUpdate();\n      }\n    }\n  }, {\n    key: \"shutdown\",\n    value: function shutdown() {\n      // Shut down all listeners\n      this.listener.shutdown();\n      this.events.off('postupdate', this.postUpdate, this);\n      this.events.off('shutdown', this.shutdown, this);\n\n      // Destroy all objects\n      // More code needed\n      this.resetPortals();\n    }\n  }, {\n    key: \"ppPortalCollision\",\n    value: function ppPortalCollision(pp, portal) {\n      pp.destroy();\n      return false;\n    }\n  }, {\n    key: \"portalPortalCollision\",\n    value: function portalPortalCollision(p1, p2) {\n      _sprites_Portal_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"].destroyByProperty(this, p2.key);\n    }\n  }, {\n    key: \"resetPortals\",\n    value: function resetPortals() {\n      _sprites_Portal_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"].destroyByProperty(this, _utils_constants_js__WEBPACK_IMPORTED_MODULE_10__.PORTAL_ORANGE);\n      _sprites_Portal_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"].destroyByProperty(this, _utils_constants_js__WEBPACK_IMPORTED_MODULE_10__.PORTAL_BLUE);\n    }\n  }, {\n    key: \"winGame\",\n    value: function winGame() {\n      this.scene.pause();\n      this.scene.launch('WinScene', {\n        holeId: this.holeId,\n        totalStrokes: this.strokes + this.totalStrokes,\n        strokes: this.strokes,\n        par: this.par,\n        totalTime: this.totalTime + this.holeTime,\n        time: this.holeTime,\n        isFullGame: this.isFullGame\n      });\n    }\n  }, {\n    key: \"createMenuBar\",\n    value: function createMenuBar() {\n      var barXCenter = this.cameras.main.width / 2;\n      var barYCenter = _utils_constants_js__WEBPACK_IMPORTED_MODULE_10__.MENU_BAR_HEIGHT / 2;\n\n      //Create a rectangle to serve as the background of the menu bar\n      this.add.rectangle(0, 0, this.cameras.main.width, _utils_constants_js__WEBPACK_IMPORTED_MODULE_10__.MENU_BAR_HEIGHT, 0x000000).setOrigin(0, 0);\n\n      //Power bar\n      this.powerBar = this.add.sprite(300, 300, 'powerbar');\n      this.powerBar.setOrigin(0, 0.5);\n      this.powerBar.setDepth(3);\n      this.powerBar.setVisible(false);\n\n      //Shooting Indicator\n      this.indicator = this.add.sprite(850, 32, 'indicator');\n\n      //Hole Information\n      this.strokesText = this.add.text(10, 10, 'Strokes: 0', {\n        fontSize: _utils_constants_js__WEBPACK_IMPORTED_MODULE_10__.MENU_FONT_SIZE,\n        fill: '#fff'\n      });\n      this.timeText = this.add.text(10, 34, 'Time: ' + this.holeTime, {\n        fontSize: _utils_constants_js__WEBPACK_IMPORTED_MODULE_10__.MENU_FONT_SIZE,\n        fill: '#fff'\n      });\n      this.holeNameText = this.add.text(870, 10, this.holeDisplayName, {\n        fontSize: _utils_constants_js__WEBPACK_IMPORTED_MODULE_10__.MENU_FONT_SIZE,\n        fill: '#fff'\n      });\n      this.parText = this.add.text(870, 34, 'Par: ' + this.par, {\n        fontSize: _utils_constants_js__WEBPACK_IMPORTED_MODULE_10__.MENU_FONT_SIZE,\n        fill: '#fff'\n      });\n\n      //Phone controls\n      if (this.isMobile) {\n        this.bPortalIcon = this.add.sprite(barXCenter, barYCenter, 'bportalicon').setInteractive({\n          useHandCursor: true\n        });\n        this.bPortalIcon.setData({\n          name: 'b'\n        });\n        this.oPortalIcon = this.add.sprite(barXCenter + 32, barYCenter, 'oportalicon').setInteractive({\n          useHandCursor: true\n        });\n        this.oPortalIcon.setData({\n          name: 'o'\n        });\n        this.pauseIcon = this.add.sprite(barXCenter + 64, barYCenter, 'pauseicon').setInteractive({\n          useHandCursor: true\n        });\n        this.pauseIcon.setData({\n          name: 'p'\n        });\n      }\n\n      // Ensure the menu bar is always on top\n      this.children.bringToTop(this.scoreText);\n      this.children.bringToTop(this.livesText);\n    }\n  }, {\n    key: \"handlePowerBar\",\n    value: function handlePowerBar(x1, y1, x2, y2) {\n      var forcex = x2 - x1;\n      var forcey = y2 - y1;\n\n      //Get potential shot force\n      var force = Math.sqrt(Math.pow(forcex, 2) + Math.pow(forcey, 2)) * _utils_constants_js__WEBPACK_IMPORTED_MODULE_10__.BALL_FORCE_MULTIPLIER;\n      if (force > _utils_constants_js__WEBPACK_IMPORTED_MODULE_10__.MAX_BALL_SPEED) {\n        force = _utils_constants_js__WEBPACK_IMPORTED_MODULE_10__.MAX_BALL_SPEED;\n      }\n\n      //Get angle of shot\n      var angle = Math.atan2(forcey, forcex);\n      this.powerBar.x = x1;\n      this.powerBar.y = y1 + this.powerBar.height / 2;\n      this.powerBar.angle = angle * (180 / Math.PI);\n      this.updateCrop(force / _utils_constants_js__WEBPACK_IMPORTED_MODULE_10__.MAX_BALL_SPEED);\n    }\n  }, {\n    key: \"formatTime\",\n    value: function formatTime(time) {\n      var totalSeconds = Math.floor(time / 1000);\n      var minutes = Math.floor(totalSeconds % 3600 / 60);\n      var seconds = totalSeconds % 60;\n      return \"\".concat(String(minutes).padStart(2, '0'), \":\").concat(String(seconds).padStart(2, '0'));\n    }\n  }, {\n    key: \"updateCrop\",\n    value: function updateCrop(powerPercentage) {\n      this.powerBar.setVisible(true);\n      this.powerBar.setCrop(0, 0, this.powerBar.width * powerPercentage, this.powerBar.height);\n    }\n  }]);\n}(Phaser.Scene);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameScene);\n\n//# sourceURL=webpack://phaser_portal_golf/./src/scenes/GameScene.js?\n}");

/***/ }),

/***/ "./src/scenes/InstructionsMenuScene.js":
/*!*********************************************!*\
  !*** ./src/scenes/InstructionsMenuScene.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/constants.js */ \"./src/utils/constants.js\");\n/* harmony import */ var _handlers_MenuListener_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../handlers/MenuListener.js */ \"./src/handlers/MenuListener.js\");\n/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/utils.js */ \"./src/utils/utils.js\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\"); }\nfunction _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }\nfunction _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", { writable: !1 }), e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nfunction _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }\nfunction _possibleConstructorReturn(t, e) { if (e && (\"object\" == _typeof(e) || \"function\" == typeof e)) return e; if (void 0 !== e) throw new TypeError(\"Derived constructors may only return object or undefined\"); return _assertThisInitialized(t); }\nfunction _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); return e; }\nfunction _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }\nfunction _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }\nfunction _inherits(t, e) { if (\"function\" != typeof e && null !== e) throw new TypeError(\"Super expression must either be null or a function\"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, \"prototype\", { writable: !1 }), e && _setPrototypeOf(t, e); }\nfunction _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }\n\n\n\nvar InstructionsMenuScene = /*#__PURE__*/function (_Phaser$Scene) {\n  function InstructionsMenuScene() {\n    _classCallCheck(this, InstructionsMenuScene);\n    return _callSuper(this, InstructionsMenuScene, [{\n      key: 'InstructionsMenu'\n    }]);\n  }\n  _inherits(InstructionsMenuScene, _Phaser$Scene);\n  return _createClass(InstructionsMenuScene, [{\n    key: \"preload\",\n    value: function preload() {}\n  }, {\n    key: \"create\",\n    value: function create() {\n      var _this = this;\n      this.page = 0;\n      this.pages = [];\n\n      //Load the leaderboard HTML\n      fetch('./html/instructions.html').then(function (response) {\n        return response.text();\n      }).then(function (html) {\n        var div = document.createElement('div');\n        div.innerHTML = html;\n        div.id = \"instructions\";\n        document.getElementById(\"gameWrapper\").appendChild(div);\n        _this.pages = document.querySelectorAll(\".page\");\n        (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_2__.fixAssetPaths)(document.getElementById('instructions'));\n        var backBtn = document.getElementById('back');\n        if (backBtn) {\n          backBtn.addEventListener('click', _this.back.bind(_this));\n        }\n        var nextBtn = document.getElementById('next');\n        if (nextBtn) {\n          nextBtn.addEventListener('click', function () {\n            _this.page = _this.page + 1;\n            _this.changePage();\n          });\n        }\n        var prevBtn = document.getElementById('prev');\n        if (prevBtn) {\n          prevBtn.addEventListener('click', function () {\n            _this.page = _this.page - 1;\n            _this.changePage();\n          });\n        }\n        _this.changePage();\n      })[\"catch\"](function (error) {\n        return console.error('Error loading overlay:', error);\n      });\n    }\n  }, {\n    key: \"back\",\n    value: function back() {\n      var overlay = document.getElementById('instructions');\n      if (overlay) {\n        overlay.remove();\n      }\n      this.scene.resume('MenuScene');\n      this.scene.stop('InstructionsMenu');\n    }\n  }, {\n    key: \"changePage\",\n    value: function changePage() {\n      var _this2 = this;\n      this.pages.forEach(function (p, i) {\n        return p.style.display = i === _this2.page ? \"block\" : \"none\";\n      });\n      var nextBtn = document.getElementById('next');\n      if (nextBtn) {\n        nextBtn.style.display = this.page < this.pages.length - 1 ? \"block\" : \"none\";\n      }\n      var prevBtn = document.getElementById('prev');\n      if (prevBtn) {\n        prevBtn.style.display = this.page > 0 ? \"block\" : \"none\";\n      }\n    }\n  }]);\n}(Phaser.Scene);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InstructionsMenuScene);\n\n//# sourceURL=webpack://phaser_portal_golf/./src/scenes/InstructionsMenuScene.js?\n}");

/***/ }),

/***/ "./src/scenes/LeaderboardScene.js":
/*!****************************************!*\
  !*** ./src/scenes/LeaderboardScene.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _handlers_MenuListener_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../handlers/MenuListener.js */ \"./src/handlers/MenuListener.js\");\n/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/constants.js */ \"./src/utils/constants.js\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\"); }\nfunction _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }\nfunction _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", { writable: !1 }), e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nfunction _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }\nfunction _possibleConstructorReturn(t, e) { if (e && (\"object\" == _typeof(e) || \"function\" == typeof e)) return e; if (void 0 !== e) throw new TypeError(\"Derived constructors may only return object or undefined\"); return _assertThisInitialized(t); }\nfunction _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); return e; }\nfunction _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }\nfunction _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }\nfunction _inherits(t, e) { if (\"function\" != typeof e && null !== e) throw new TypeError(\"Super expression must either be null or a function\"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, \"prototype\", { writable: !1 }), e && _setPrototypeOf(t, e); }\nfunction _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }\n\n\nvar LeaderboardScene = /*#__PURE__*/function (_Phaser$Scene) {\n  function LeaderboardScene() {\n    _classCallCheck(this, LeaderboardScene);\n    return _callSuper(this, LeaderboardScene, [{\n      key: 'Leaderboard'\n    }]);\n  }\n  _inherits(LeaderboardScene, _Phaser$Scene);\n  return _createClass(LeaderboardScene, [{\n    key: \"preload\",\n    value: function preload() {}\n  }, {\n    key: \"create\",\n    value: function create() {\n      var s = this;\n\n      //Load the leaderboard HTML\n      fetch('./html/leaderboard.html').then(function (response) {\n        return response.text();\n      }).then(function (html) {\n        var div = document.createElement('div');\n        div.innerHTML = html;\n        div.id = \"leaderboard\";\n        document.body.appendChild(div);\n        fetch('https://pg-leaderboard-worker.portal-golf.workers.dev/topten?page=0').then(function (r) {\n          return r.json();\n        }).then(function (data) {\n          var scores = data.scores;\n          var scoresObj = document.getElementById('scores');\n          var append = '';\n          for (var i = 0; i < scores.length; i++) {\n            append = append + \"<tr>\";\n            append = append + \"<td>\" + scores.rank + \"</td>\";\n            append = append + \"<td>\" + scores.name + \"</td>\";\n            append = append + \"<td>\" + scores.putt + \"</td>\";\n            append = append + \"<td>\" + scores.time + \"</td>\";\n            append = append + \"<td>\" + scores.date + \"</td>\";\n            append = append + \"</tr>\";\n          }\n          scoresObj.innerHTML = append;\n        })[\"catch\"](function (error) {\n          return console.error('Error fetching leaderboard:', error);\n        });\n        var button = document.getElementById('back');\n        if (button) {\n          button.addEventListener('click', function () {\n            back(s);\n          });\n        }\n      })[\"catch\"](function (error) {\n        return console.error('Error loading overlay:', error);\n      });\n      var listener = new _handlers_MenuListener_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this);\n    }\n  }]);\n}(Phaser.Scene);\nfunction back(scene) {\n  var overlay = document.getElementById('leaderboard');\n  if (overlay) {\n    overlay.remove();\n  }\n  scene.scene.resume('MenuScene');\n  scene.scene.stop('Leaderboard');\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LeaderboardScene);\n\n//# sourceURL=webpack://phaser_portal_golf/./src/scenes/LeaderboardScene.js?\n}");

/***/ }),

/***/ "./src/scenes/LevelSelectScene.js":
/*!****************************************!*\
  !*** ./src/scenes/LevelSelectScene.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/constants.js */ \"./src/utils/constants.js\");\n/* harmony import */ var _handlers_MenuListener_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../handlers/MenuListener.js */ \"./src/handlers/MenuListener.js\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\"); }\nfunction _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }\nfunction _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", { writable: !1 }), e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nfunction _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }\nfunction _possibleConstructorReturn(t, e) { if (e && (\"object\" == _typeof(e) || \"function\" == typeof e)) return e; if (void 0 !== e) throw new TypeError(\"Derived constructors may only return object or undefined\"); return _assertThisInitialized(t); }\nfunction _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); return e; }\nfunction _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }\nfunction _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }\nfunction _inherits(t, e) { if (\"function\" != typeof e && null !== e) throw new TypeError(\"Super expression must either be null or a function\"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, \"prototype\", { writable: !1 }), e && _setPrototypeOf(t, e); }\nfunction _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }\n\n\nvar LevelSelectScene = /*#__PURE__*/function (_Phaser$Scene) {\n  function LevelSelectScene() {\n    _classCallCheck(this, LevelSelectScene);\n    return _callSuper(this, LevelSelectScene, [{\n      key: 'LevelSelect'\n    }]);\n  }\n  _inherits(LevelSelectScene, _Phaser$Scene);\n  return _createClass(LevelSelectScene, [{\n    key: \"preload\",\n    value: function preload() {}\n  }, {\n    key: \"create\",\n    value: function create() {\n      var _this = this;\n      this.page = 0;\n      this.perPage = 6;\n      fetch('./html/levelselect.html').then(function (response) {\n        return response.text();\n      }).then(function (html) {\n        var div = document.createElement('div');\n        div.innerHTML = html;\n        div.id = \"levelselect\";\n        document.getElementById(\"gameWrapper\").appendChild(div);\n        var backBtn = document.getElementById('back');\n        if (backBtn) {\n          backBtn.addEventListener('click', _this.back.bind(_this));\n        }\n        var nextBtn = document.getElementById('next');\n        if (nextBtn) {\n          nextBtn.addEventListener('click', function () {\n            _this.page = _this.page + 1;\n            _this.changePage();\n          });\n        }\n        var prevBtn = document.getElementById('prev');\n        if (prevBtn) {\n          prevBtn.addEventListener('click', function () {\n            _this.page = _this.page - 1;\n            _this.changePage();\n          });\n        }\n        document.getElementById(\"levelselect\").addEventListener(\"click\", function (e) {\n          if (e.target.tagName === \"IMG\") {\n            var levelID = e.target.id;\n            _this.playHole(levelID);\n          }\n        });\n        _this.changePage();\n      })[\"catch\"](function (error) {\n        return console.error('Error loading overlay:', error);\n      });\n    }\n  }, {\n    key: \"back\",\n    value: function back() {\n      var overlay = document.getElementById('levelselect');\n      if (overlay) {\n        overlay.remove();\n      }\n      this.scene.resume('MenuScene');\n      this.scene.stop('LevelSelect');\n    }\n  }, {\n    key: \"changePage\",\n    value: function changePage() {\n      var contentDiv = document.getElementById('overlay-content');\n      var start = this.page * this.perPage;\n      var end = start + this.perPage;\n      var levels = _utils_constants_js__WEBPACK_IMPORTED_MODULE_0__.MAP_INFO.slice(start, end);\n      contentDiv.innerHTML = \"\";\n      for (var i = 0; i < levels.length; i++) {\n        var d = document.createElement('div');\n        var imgName = _utils_constants_js__WEBPACK_IMPORTED_MODULE_0__.ASSET_FILEPATH_LEVEL_SELECT + levels[i].name + '.png';\n        var holeIdx = i + start;\n        d.innerHTML = \"<img id=\\\"\".concat(holeIdx, \"\\\" src=\\\"\").concat(imgName, \"\\\"/>\");\n        contentDiv.appendChild(d);\n      }\n      var nextBtn = document.getElementById('next');\n      if (nextBtn) {\n        nextBtn.style.display = (this.page + 1) * this.perPage < _utils_constants_js__WEBPACK_IMPORTED_MODULE_0__.MAP_INFO.length ? \"block\" : \"none\";\n      }\n      var prevBtn = document.getElementById('prev');\n      if (prevBtn) {\n        prevBtn.style.display = this.page > 0 ? \"block\" : \"none\";\n      }\n    }\n  }, {\n    key: \"playHole\",\n    value: function playHole(id) {\n      var overlay = document.getElementById('levelselect');\n      if (overlay) {\n        overlay.remove();\n      }\n      this.scene.start('GameScene', {\n        holeId: id,\n        totalStrokes: 0,\n        totalTime: 0,\n        isFullGame: false\n      });\n      this.scene.stop('MenuScene');\n      this.scene.stop('LevelSelect');\n    }\n  }]);\n}(Phaser.Scene);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LevelSelectScene);\n\n//# sourceURL=webpack://phaser_portal_golf/./src/scenes/LevelSelectScene.js?\n}");

/***/ }),

/***/ "./src/scenes/MenuScene.js":
/*!*********************************!*\
  !*** ./src/scenes/MenuScene.js ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/constants.js */ \"./src/utils/constants.js\");\n/* harmony import */ var _handlers_MenuListener_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../handlers/MenuListener.js */ \"./src/handlers/MenuListener.js\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\"); }\nfunction _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }\nfunction _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", { writable: !1 }), e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nfunction _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }\nfunction _possibleConstructorReturn(t, e) { if (e && (\"object\" == _typeof(e) || \"function\" == typeof e)) return e; if (void 0 !== e) throw new TypeError(\"Derived constructors may only return object or undefined\"); return _assertThisInitialized(t); }\nfunction _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); return e; }\nfunction _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }\nfunction _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }\nfunction _inherits(t, e) { if (\"function\" != typeof e && null !== e) throw new TypeError(\"Super expression must either be null or a function\"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, \"prototype\", { writable: !1 }), e && _setPrototypeOf(t, e); }\nfunction _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }\n\n\nvar MenuScene = /*#__PURE__*/function (_Phaser$Scene) {\n  function MenuScene() {\n    _classCallCheck(this, MenuScene);\n    return _callSuper(this, MenuScene, [{\n      key: 'MenuScene'\n    }]);\n  }\n  _inherits(MenuScene, _Phaser$Scene);\n  return _createClass(MenuScene, [{\n    key: \"preload\",\n    value: function preload() {\n      this.load.image('menuScreen', _utils_constants_js__WEBPACK_IMPORTED_MODULE_0__.ASSET_FILEPATH_MENU + 'menu_start_bg.png');\n      this.load.image('startButton', _utils_constants_js__WEBPACK_IMPORTED_MODULE_0__.ASSET_FILEPATH_MENU + 'menu_button_start.png');\n      this.load.image('instructionsButton', _utils_constants_js__WEBPACK_IMPORTED_MODULE_0__.ASSET_FILEPATH_MENU + 'menu_button_instructions.png');\n      this.load.image('levelSelectButton', _utils_constants_js__WEBPACK_IMPORTED_MODULE_0__.ASSET_FILEPATH_MENU + 'menu_button_level_select.png');\n      this.load.image('leaderboardButton', _utils_constants_js__WEBPACK_IMPORTED_MODULE_0__.ASSET_FILEPATH_MENU + 'menu_button_leaderboard.png');\n    }\n  }, {\n    key: \"create\",\n    value: function create() {\n      this.add.image(this.scale.width / 2, this.scale.height / 2, 'menuScreen');\n      var startButton = this.add.image(this.scale.width / 2 - 150, 437, 'startButton').setInteractive();\n      var levelSelectButton = this.add.image(this.scale.width / 2 + 150, 437, 'levelSelectButton').setInteractive();\n      var instructionsButton = this.add.image(this.scale.width / 2 - 150, 537, 'instructionsButton').setInteractive();\n      var leaderboardButton = this.add.image(this.scale.width / 2 + 150, 537, 'leaderboardButton').setInteractive();\n      startButton.on('pointerdown', this.startGame, this);\n      levelSelectButton.on('pointerdown', this.levelSelect, this);\n      instructionsButton.on('pointerdown', this.instructions, this);\n      leaderboardButton.on('pointerdown', this.leaderBoard, this);\n      var listener = new _handlers_MenuListener_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this);\n    }\n  }, {\n    key: \"startGame\",\n    value: function startGame() {\n      this.scene.start('GameScene', {\n        holeId: 0,\n        totalStrokes: 0,\n        totalTime: 0,\n        isFullGame: true\n      });\n      this.scene.stop('MenuScene');\n    }\n  }, {\n    key: \"levelSelect\",\n    value: function levelSelect() {\n      this.scene.launch('LevelSelect');\n      this.scene.pause('MenuScene');\n    }\n  }, {\n    key: \"instructions\",\n    value: function instructions() {\n      this.scene.launch('InstructionsMenu');\n      this.scene.pause('MenuScene');\n    }\n  }, {\n    key: \"leaderBoard\",\n    value: function leaderBoard() {\n      this.scene.launch('Leaderboard');\n      this.scene.pause('MenuScene');\n    }\n  }]);\n}(Phaser.Scene);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MenuScene);\n\n//# sourceURL=webpack://phaser_portal_golf/./src/scenes/MenuScene.js?\n}");

/***/ }),

/***/ "./src/scenes/PauseMenuScene.js":
/*!**************************************!*\
  !*** ./src/scenes/PauseMenuScene.js ***!
  \**************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/constants.js */ \"./src/utils/constants.js\");\n/* harmony import */ var _handlers_PauseMenuListener_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../handlers/PauseMenuListener.js */ \"./src/handlers/PauseMenuListener.js\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\"); }\nfunction _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }\nfunction _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", { writable: !1 }), e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nfunction _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }\nfunction _possibleConstructorReturn(t, e) { if (e && (\"object\" == _typeof(e) || \"function\" == typeof e)) return e; if (void 0 !== e) throw new TypeError(\"Derived constructors may only return object or undefined\"); return _assertThisInitialized(t); }\nfunction _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); return e; }\nfunction _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }\nfunction _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }\nfunction _inherits(t, e) { if (\"function\" != typeof e && null !== e) throw new TypeError(\"Super expression must either be null or a function\"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, \"prototype\", { writable: !1 }), e && _setPrototypeOf(t, e); }\nfunction _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }\n\n\nvar PauseMenuScene = /*#__PURE__*/function (_Phaser$Scene) {\n  function PauseMenuScene() {\n    _classCallCheck(this, PauseMenuScene);\n    return _callSuper(this, PauseMenuScene, [{\n      key: 'PauseMenu'\n    }]);\n  }\n  _inherits(PauseMenuScene, _Phaser$Scene);\n  return _createClass(PauseMenuScene, [{\n    key: \"preload\",\n    value: function preload() {\n      this.load.image('pausebg', _utils_constants_js__WEBPACK_IMPORTED_MODULE_0__.ASSET_FILEPATH_PAUSE + 'pause_bg.png');\n      this.load.image('resumeButton', _utils_constants_js__WEBPACK_IMPORTED_MODULE_0__.ASSET_FILEPATH_PAUSE + 'pause_resume.png');\n      this.load.image('pauseQuitButton', _utils_constants_js__WEBPACK_IMPORTED_MODULE_0__.ASSET_FILEPATH_PAUSE + 'pause_quit.png');\n    }\n  }, {\n    key: \"create\",\n    value: function create() {\n      var _this = this;\n      //Load the background image so we can get image dimensions\n      var background = new Image();\n      background.src = _utils_constants_js__WEBPACK_IMPORTED_MODULE_0__.ASSET_FILEPATH_PAUSE + 'pause_bg.png';\n      background.onload = function () {\n        //Set variables for item placement in scene\n        var swidth = _this.scale.width;\n        var sheight = _this.scale.height;\n        var bwidth = background.width;\n        var bheight = background.height;\n        var bgx = (swidth - bwidth) / 2;\n        var bgy = (sheight - bheight) / 2;\n\n        //Add background image\n        _this.add.image(swidth / 2, sheight / 2, 'pausebg');\n\n        //Menu title\n        var textx = swidth / 2;\n        var texty = bgy + bheight * 0.25;\n        var textStyle = {\n          fontSize: '48px',\n          fill: '#ffffff'\n        };\n        _this.add.text(textx, texty, 'Paused', textStyle).setOrigin(0.5);\n\n        //Resume button\n        var resumex = bgx + bwidth * 0.25;\n        var resumey = bgy + bheight * 0.8;\n        var resumeButton = _this.add.image(resumex, resumey, 'resumeButton').setInteractive();\n        resumeButton.on('pointerdown', _this.resumeGame, _this);\n\n        //Quit button\n        var quitx = bgx + bwidth * 0.75;\n        var quity = bgy + bheight * 0.8;\n        var pQuitButton = _this.add.image(quitx, quity, 'pauseQuitButton').setInteractive();\n        pQuitButton.on('pointerdown', _this.quitGame, _this);\n        var listener = new _handlers_PauseMenuListener_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](_this);\n      };\n    }\n  }, {\n    key: \"resumeGame\",\n    value: function resumeGame() {\n      this.scene.stop('PauseMenu');\n      this.scene.resume('GameScene');\n    }\n  }, {\n    key: \"quitGame\",\n    value: function quitGame() {\n      this.scene.stop('PauseMenu');\n      this.scene.stop('GameScene');\n      this.scene.start('MenuScene');\n    }\n  }]);\n}(Phaser.Scene);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PauseMenuScene);\n\n//# sourceURL=webpack://phaser_portal_golf/./src/scenes/PauseMenuScene.js?\n}");

/***/ }),

/***/ "./src/scenes/WinScene.js":
/*!********************************!*\
  !*** ./src/scenes/WinScene.js ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/constants.js */ \"./src/utils/constants.js\");\n/* harmony import */ var _handlers_MenuListener_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../handlers/MenuListener.js */ \"./src/handlers/MenuListener.js\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\"); }\nfunction _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }\nfunction _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", { writable: !1 }), e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nfunction _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }\nfunction _possibleConstructorReturn(t, e) { if (e && (\"object\" == _typeof(e) || \"function\" == typeof e)) return e; if (void 0 !== e) throw new TypeError(\"Derived constructors may only return object or undefined\"); return _assertThisInitialized(t); }\nfunction _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); return e; }\nfunction _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }\nfunction _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }\nfunction _inherits(t, e) { if (\"function\" != typeof e && null !== e) throw new TypeError(\"Super expression must either be null or a function\"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, \"prototype\", { writable: !1 }), e && _setPrototypeOf(t, e); }\nfunction _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }\n\n\n\nvar WinScene = /*#__PURE__*/function (_Phaser$Scene) {\n  function WinScene() {\n    _classCallCheck(this, WinScene);\n    return _callSuper(this, WinScene, [{\n      key: 'WinScene'\n    }]);\n  }\n  _inherits(WinScene, _Phaser$Scene);\n  return _createClass(WinScene, [{\n    key: \"init\",\n    value: function init(data) {\n      this.holeId = data.holeId;\n      this.totalStrokes = data.totalStrokes;\n      this.strokes = data.strokes;\n      this.totalTime = data.totalTime;\n      this.time = data.time;\n      this.par = data.par;\n      this.isFullGame = data.isFullGame;\n    }\n  }, {\n    key: \"preload\",\n    value: function preload() {\n      // Load any assets needed for the win menu\n      this.load.image('winbg', _utils_constants_js__WEBPACK_IMPORTED_MODULE_0__.ASSET_FILEPATH_WIN + 'win_bg.png');\n      this.load.image('wNextButton', _utils_constants_js__WEBPACK_IMPORTED_MODULE_0__.ASSET_FILEPATH_WIN + 'win_next.png');\n      this.load.image('quitButton', _utils_constants_js__WEBPACK_IMPORTED_MODULE_0__.ASSET_FILEPATH_WIN + 'win_quit.png');\n    }\n  }, {\n    key: \"create\",\n    value: function create() {\n      var _this = this;\n      //Load the background image so we can get image dimensions\n      var background = new Image();\n      background.src = _utils_constants_js__WEBPACK_IMPORTED_MODULE_0__.ASSET_FILEPATH_WIN + 'win_bg.png';\n      background.onload = function () {\n        var s = _this;\n        //Set variables for item placement in scene\n        var swidth = _this.scale.width;\n        var sheight = _this.scale.height;\n        var bwidth = background.width;\n        var bheight = background.height;\n        var bgx = (swidth - bwidth) / 2;\n        var bgy = (sheight - bheight) / 2;\n\n        //Background image\n        _this.add.image(swidth / 2, sheight / 2, 'winbg');\n\n        //Text styling\n        var fontSize = 32;\n        var textStyle = {\n          fontSize: fontSize + 'px',\n          fill: '#ffffff'\n        };\n        if (_this.isFullGame) {\n          if (_this.holeId < _utils_constants_js__WEBPACK_IMPORTED_MODULE_0__.MAP_INFO.length - 1) {\n            //Print game statistics\n            var timex = swidth / 2;\n            var timey = bgy + bheight * 0.2;\n            var strokesx = swidth / 2;\n            var strokesy = bgy + bheight * 0.2 + fontSize + 5;\n            var parx = swidth / 2;\n            var pary = bgy + bheight * 0.2 + fontSize * 2 + 5;\n            _this.add.text(timex, timey, 'Time: ' + formatTime(_this.time), textStyle).setOrigin(0.5);\n            _this.add.text(strokesx, strokesy, 'Sunk in ' + _this.strokes, textStyle).setOrigin(0.5);\n            _this.add.text(parx, pary, 'Par: ' + _this.par, textStyle).setOrigin(0.5);\n\n            //Next level Button\n            var restartx = bgx + bwidth * 0.25;\n            var restarty = bgy + bheight * 0.8;\n            var nextButton = _this.add.image(restartx, restarty, 'wNextButton').setInteractive();\n            nextButton.on('pointerdown', _this.nextLevel, _this);\n\n            //Quit button\n            var quitx = bgx + bwidth * 0.75;\n            var quity = bgy + bheight * 0.8;\n            var quitButton = _this.add.image(quitx, quity, 'quitButton').setInteractive();\n            quitButton.on('pointerdown', _this.quit, _this);\n          } else {\n            fetch('./html/scoresubmit.html').then(function (response) {\n              return response.text();\n            }).then(function (html) {\n              // Insert score submit HTML\n              var div = document.createElement('div');\n              div.innerHTML = html;\n              div.id = \"submit\";\n              document.body.appendChild(div);\n\n              // Populate HTML with final statistics\n              var coursepar = _utils_constants_js__WEBPACK_IMPORTED_MODULE_0__.MAP_INFO.reduce(function (totalPar, hole) {\n                return totalPar + hole.par;\n              }, 0);\n              var totalStrokes = s.totalStrokes;\n              var time = formatTime(s.totalTime);\n              document.getElementById('coursepar').innerText = \"Course Par: \" + coursepar;\n              document.getElementById('putt').innerText = \"Completed in: \" + totalStrokes;\n              document.getElementById('time').innerText = \"Total Time: \" + time;\n\n              // Link actions to buttons\n              var quitButton = document.getElementById('btnquit');\n              if (quitButton) {\n                quitButton.addEventListener('click', function () {\n                  console.log(\"Quitting\");\n                  mainMenu(s);\n                });\n              }\n              var sendButton = document.getElementById('btnsubmit');\n              if (sendButton) {\n                sendButton.addEventListener('click', function () {\n                  console.log(\"Sending score then quitting\");\n                  sendScore(s, totalStrokes, time);\n                });\n              }\n            })[\"catch\"](function (error) {\n              return console.error('Error loading overlay:', error);\n            });\n          }\n        } else {\n          //Print game statistics\n          var _timex = swidth / 2;\n          var _timey = bgy + bheight * 0.2;\n          var _strokesx = swidth / 2;\n          var _strokesy = bgy + bheight * 0.2 + fontSize + 5;\n          var _parx = swidth / 2;\n          var _pary = bgy + bheight * 0.2 + fontSize * 2 + 5;\n          _this.add.text(_timex, _timey, 'Time: ' + formatTime(_this.time), textStyle).setOrigin(0.5);\n          _this.add.text(_strokesx, _strokesy, 'Sunk in ' + _this.strokes, textStyle).setOrigin(0.5);\n          _this.add.text(_parx, _pary, 'Par: ' + _this.par, textStyle).setOrigin(0.5);\n\n          //Quit button\n          var _quitx = bgx + bwidth * 0.5;\n          var _quity = bgy + bheight * 0.8;\n          var _quitButton = _this.add.image(_quitx, _quity, 'quitButton').setInteractive();\n          _quitButton.on('pointerdown', _this.quit, _this);\n        }\n        var listener = new _handlers_MenuListener_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](_this);\n      };\n    }\n  }, {\n    key: \"nextLevel\",\n    value: function nextLevel() {\n      this.scene.stop();\n      this.scene.start('GameScene', {\n        holeId: this.holeId + 1,\n        totalStrokes: this.totalStrokes,\n        totalTime: this.totalTime,\n        isFullGame: this.isFullGame\n      });\n    }\n  }, {\n    key: \"quit\",\n    value: function quit() {\n      this.scene.stop();\n      this.scene.stop('GameScene');\n      this.scene.start('MenuScene');\n    }\n  }]);\n}(Phaser.Scene);\nfunction formatTime(time) {\n  var totalSeconds = Math.floor(time / 1000);\n  var minutes = Math.floor(totalSeconds % 3600 / 60);\n  var seconds = totalSeconds % 60;\n  return \"\".concat(String(minutes).padStart(2, '0'), \":\").concat(String(seconds).padStart(2, '0'));\n}\nfunction mainMenu(scene) {\n  var sub = document.getElementById('submit');\n  if (sub) {\n    sub.remove();\n  }\n  scene.scene.stop();\n  scene.scene.stop('GameScene');\n  scene.scene.start('MenuScene');\n}\nfunction sendScore(scene, p, t) {\n  console.log(\"Sending score\");\n  var n = document.getElementById('nameinput').value;\n  console.log(n);\n  if (n.length == 0) return;\n  fetch('https://pg-leaderboard-worker.portal-golf.workers.dev/newscore', {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/json'\n    },\n    body: JSON.stringify({\n      name: n,\n      putt: p.toString(),\n      time: t,\n      date: new Date().toISOString().slice(0, 10)\n    })\n  }).then(function (response) {\n    return response.json();\n  }).then(function (data) {\n    return console.log('Success:', data);\n  })[\"catch\"](function (error) {\n    return console.error('Error:', error);\n  });\n  mainMenu(scene);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WinScene);\n\n//# sourceURL=webpack://phaser_portal_golf/./src/scenes/WinScene.js?\n}");

/***/ }),

/***/ "./src/sprites/Ball.js":
/*!*****************************!*\
  !*** ./src/sprites/Ball.js ***!
  \*****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Ball)\n/* harmony export */ });\n/* harmony import */ var _PortalP_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PortalP.js */ \"./src/sprites/PortalP.js\");\n/* harmony import */ var _utils_portalUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/portalUtils.js */ \"./src/utils/portalUtils.js\");\n/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/utils.js */ \"./src/utils/utils.js\");\n/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/constants.js */ \"./src/utils/constants.js\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\"); }\nfunction _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }\nfunction _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", { writable: !1 }), e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nfunction _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }\nfunction _possibleConstructorReturn(t, e) { if (e && (\"object\" == _typeof(e) || \"function\" == typeof e)) return e; if (void 0 !== e) throw new TypeError(\"Derived constructors may only return object or undefined\"); return _assertThisInitialized(t); }\nfunction _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); return e; }\nfunction _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }\nfunction _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }\nfunction _inherits(t, e) { if (\"function\" != typeof e && null !== e) throw new TypeError(\"Super expression must either be null or a function\"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, \"prototype\", { writable: !1 }), e && _setPrototypeOf(t, e); }\nfunction _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }\n\n\n\n\nvar Ball = /*#__PURE__*/function (_Phaser$Physics$Arcad) {\n  function Ball(scene, x, y) {\n    var _this;\n    _classCallCheck(this, Ball);\n    //Phaser setup\n    _this = _callSuper(this, Ball, [scene, x, y, 'ball']);\n    scene.add.existing(_this);\n    scene.physics.add.existing(_this);\n\n    //Mask setup\n    _this.maskShape = scene.make.graphics();\n    _this.maskShape.fillCircle(x, y, _this.width / 2);\n    _this.mask = _this.maskShape.createGeometryMask();\n    _this.setMask(_this.mask);\n\n    //Collision setup\n    _this.setBounce(1);\n    _this.body.setCircle(_this.width / 2);\n    _this.setOrigin(0.5, 0.5);\n\n    //Class variables\n    _this.scene = scene;\n    _this.lastSpot = _this.getCenter();\n    _this.mouseDownCoords = {};\n    _this.lastPortal = Date.now();\n    _this.lastVel = new Phaser.Math.Vector2();\n    _this.collision = false;\n\n    //Debug variable\n    _this.timer = Date.now();\n    return _this;\n  }\n  _inherits(Ball, _Phaser$Physics$Arcad);\n  return _createClass(Ball, [{\n    key: \"update\",\n    value: function update() {\n      //Mask stuff\n      this.maskShape.clear();\n      this.maskShape.fillCircle(this.x, this.y, this.width / 2);\n      this.mask = this.maskShape.createGeometryMask();\n      this.setMask(this.mask);\n\n      //Friction stuff\n      this.doBallFriction();\n\n      //Timer debug\n      if (Date.now() >= this.timer + 1000) {\n        this.timer = Date.now();\n        //Debug code goes here\n        // console.log(this.body.velocity);\n        // console.log(this.x);\n        // console.log(this.y);\n      }\n    }\n\n    // Phaser function for handling things after collisions\n  }, {\n    key: \"postUpdate\",\n    value: function postUpdate() {\n      if (this.collision) {\n        this.body.velocity.x = this.lastVel.x;\n        this.body.velocity.y = this.lastVel.y;\n        this.collision = false;\n        this.lastVel = new Phaser.Math.Vector2();\n      }\n    }\n\n    //Handles the ball velocity when a shot is made\n  }, {\n    key: \"doBallShoot\",\n    value: function doBallShoot(pointer) {\n      //Handle off-screen problems\n      if ((0,_utils_portalUtils_js__WEBPACK_IMPORTED_MODULE_1__.isEmpty)(this.mouseDownCoords)) {\n        return;\n      }\n      //Set last location ball was on the map (for water traps)\n      this.lastSpot = this.getCenter();\n      var forcex = pointer.x - this.mouseDownCoords.x;\n      var forcey = pointer.y - this.mouseDownCoords.y;\n      var force = Math.sqrt(Math.pow(forcex, 2) + Math.pow(forcey, 2)) * _utils_constants_js__WEBPACK_IMPORTED_MODULE_3__.BALL_FORCE_MULTIPLIER;\n      if (force > _utils_constants_js__WEBPACK_IMPORTED_MODULE_3__.MAX_BALL_SPEED) {\n        force = _utils_constants_js__WEBPACK_IMPORTED_MODULE_3__.MAX_BALL_SPEED;\n      }\n      var velocity = new Phaser.Math.Vector2(pointer.x - this.mouseDownCoords.x, pointer.y - this.mouseDownCoords.y).normalize().scale(force);\n      this.setVelocity(-velocity.x, -velocity.y);\n      this.scene.strokes++;\n      this.mouseDownCoords = {};\n\n      //Sound effect\n      this.scene.sound.play('putt');\n    }\n\n    //Handles when a portal is shot\n  }, {\n    key: \"doPortalShoot\",\n    value: function doPortalShoot(key) {\n      var pp = new _PortalP_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.scene, this.x, this.y, key);\n      var velocity = new Phaser.Math.Vector2(this.scene.input.activePointer.x - this.x, this.scene.input.activePointer.y - this.y).normalize().scale(_utils_constants_js__WEBPACK_IMPORTED_MODULE_3__.PP_SPEED);\n      pp.setVelocity(velocity.x, velocity.y);\n    }\n  }, {\n    key: \"portalCollision\",\n    value: function portalCollision(ball, portal) {\n      if (Date.now() >= ball.lastPortal + _utils_constants_js__WEBPACK_IMPORTED_MODULE_3__.TIMEOUT) {\n        ball.lastPortal = Date.now();\n        return portal.objectPortalCollision(ball, portal);\n      }\n      return true;\n    }\n  }, {\n    key: \"dWallOverlap\",\n    value: function dWallOverlap(dWall, ball) {\n      var dx = ball.x - dWall.x;\n      var dy = ball.y - dWall.y;\n      var distance = Math.sqrt(dx * dx + dy * dy);\n      if (distance < _utils_constants_js__WEBPACK_IMPORTED_MODULE_3__.DESTROY_THRESHOLD) {\n        // Disable and shortly after re-enable the ball's body\n        // Keeps body inert for position update\n        ball.body.enable = false;\n\n        //Do necessary updates to ball\n        ball.setVelocity(0, 0);\n        ball.setPosition(ball.lastSpot.x, ball.lastSpot.y);\n\n        //Sound effect\n        ball.scene.sound.play('squish');\n\n        //Re-enable ball body\n        setTimeout(function () {\n          ball.body.enable = true;\n        }, 10);\n      } else {\n        return true;\n      }\n    }\n  }, {\n    key: \"preCubeCollision\",\n    value: function preCubeCollision(ball, cube) {\n      ball.lastVel.x = ball.body.velocity.x;\n      ball.lastVel.y = ball.body.velocity.y;\n      ball.collision = true;\n      return true;\n    }\n\n    //Handles ball friction\n  }, {\n    key: \"doBallFriction\",\n    value: function doBallFriction() {\n      (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_2__.doFriction)(this);\n      if (!this.isBallMoving()) {\n        this.body.stop();\n      }\n    }\n\n    //Returns whether or not the ball is in motion\n  }, {\n    key: \"isBallMoving\",\n    value: function isBallMoving() {\n      if (Math.abs(this.body.velocity.x) > _utils_constants_js__WEBPACK_IMPORTED_MODULE_3__.BALL_STOP_SPEED || Math.abs(this.body.velocity.y) > _utils_constants_js__WEBPACK_IMPORTED_MODULE_3__.BALL_STOP_SPEED) {\n        return true;\n      }\n      return false;\n    }\n\n    //Used for ball-goal interaction to determine if the ball is moving fast\n  }, {\n    key: \"isBallSpeedy\",\n    value: function isBallSpeedy() {\n      if (Math.abs(this.body.velocity.x) > _utils_constants_js__WEBPACK_IMPORTED_MODULE_3__.BALL_LOW_SPEED || Math.abs(this.body.velocity.y) > _utils_constants_js__WEBPACK_IMPORTED_MODULE_3__.BALL_LOW_SPEED) {\n        return true;\n      }\n      return false;\n    }\n  }]);\n}(Phaser.Physics.Arcade.Sprite);\n\n\n//# sourceURL=webpack://phaser_portal_golf/./src/sprites/Ball.js?\n}");

/***/ }),

/***/ "./src/sprites/Bridge.js":
/*!*******************************!*\
  !*** ./src/sprites/Bridge.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Bridge)\n/* harmony export */ });\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\"); }\nfunction _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }\nfunction _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", { writable: !1 }), e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nfunction _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }\nfunction _possibleConstructorReturn(t, e) { if (e && (\"object\" == _typeof(e) || \"function\" == typeof e)) return e; if (void 0 !== e) throw new TypeError(\"Derived constructors may only return object or undefined\"); return _assertThisInitialized(t); }\nfunction _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); return e; }\nfunction _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }\nfunction _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }\nfunction _inherits(t, e) { if (\"function\" != typeof e && null !== e) throw new TypeError(\"Super expression must either be null or a function\"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, \"prototype\", { writable: !1 }), e && _setPrototypeOf(t, e); }\nfunction _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }\nvar Bridge = /*#__PURE__*/function (_Phaser$Physics$Arcad) {\n  function Bridge(scene, x, y, code) {\n    var _this;\n    _classCallCheck(this, Bridge);\n    //Phaser setup\n    _this = _callSuper(this, Bridge, [scene, x, y, 'bridge']);\n    scene.add.existing(_this);\n    scene.physics.add.existing(_this);\n\n    //Class variables\n    _this.scene = scene;\n    _this.code = code;\n    _this.tileBeneathIndex = -1;\n\n    //Helper variable for pressure plates\n    var tileX = _this.scene.map.worldToTileX(x);\n    var tileY = _this.scene.map.worldToTileY(y);\n    var t = _this.scene.groundLayer.getTileAt(tileX, tileY);\n    if (t) {\n      _this.tileBeneathIndex = t.index;\n    }\n    return _this;\n  }\n  _inherits(Bridge, _Phaser$Physics$Arcad);\n  return _createClass(Bridge, [{\n    key: \"update\",\n    value: function update() {}\n  }]);\n}(Phaser.Physics.Arcade.Sprite);\n\n\n//# sourceURL=webpack://phaser_portal_golf/./src/sprites/Bridge.js?\n}");

/***/ }),

/***/ "./src/sprites/Cube.js":
/*!*****************************!*\
  !*** ./src/sprites/Cube.js ***!
  \*****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Cube)\n/* harmony export */ });\n/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/utils.js */ \"./src/utils/utils.js\");\n/* harmony import */ var _utils_wallUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/wallUtils.js */ \"./src/utils/wallUtils.js\");\n/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/constants.js */ \"./src/utils/constants.js\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\"); }\nfunction _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }\nfunction _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", { writable: !1 }), e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nfunction _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }\nfunction _possibleConstructorReturn(t, e) { if (e && (\"object\" == _typeof(e) || \"function\" == typeof e)) return e; if (void 0 !== e) throw new TypeError(\"Derived constructors may only return object or undefined\"); return _assertThisInitialized(t); }\nfunction _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); return e; }\nfunction _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }\nfunction _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }\nfunction _inherits(t, e) { if (\"function\" != typeof e && null !== e) throw new TypeError(\"Super expression must either be null or a function\"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, \"prototype\", { writable: !1 }), e && _setPrototypeOf(t, e); }\nfunction _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }\n\n\n\nvar Cube = /*#__PURE__*/function (_Phaser$Physics$Arcad) {\n  function Cube(scene, x, y) {\n    var _this;\n    _classCallCheck(this, Cube);\n    //Phaser setup\n    _this = _callSuper(this, Cube, [scene, x, y, 'cube']);\n    scene.add.existing(_this);\n    scene.physics.add.existing(_this);\n    _this.scene = scene;\n    return _this;\n  }\n  _inherits(Cube, _Phaser$Physics$Arcad);\n  return _createClass(Cube, [{\n    key: \"update\",\n    value: function update() {\n      this.doCubeFriction();\n    }\n  }, {\n    key: \"doCubeFriction\",\n    value: function doCubeFriction() {\n      (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__.doFriction)(this);\n    }\n  }, {\n    key: \"wallCollision\",\n    value: function wallCollision(cube, wall) {\n      return true;\n    }\n  }, {\n    key: \"preBallCollision\",\n    value: function preBallCollision(cube, ball) {\n      return ball.preCubeCollision(ball, cube);\n    }\n  }, {\n    key: \"ballCollision\",\n    value: function ballCollision(cube, ball) {}\n  }, {\n    key: \"movingWallCollision\",\n    value: function movingWallCollision(cube, m) {\n      m.wallCollision(m, cube);\n      return false;\n    }\n  }, {\n    key: \"PPCollision\",\n    value: function PPCollision(cube, pp) {\n      pp.destroy();\n      return false;\n    }\n  }, {\n    key: \"portalCollision\",\n    value: function portalCollision(cube, portal) {\n      return portal.objectPortalCollision(cube, portal);\n    }\n  }, {\n    key: \"dWallOverlap\",\n    value: function dWallOverlap(cube, dWall) {\n      var dx = cube.x - dWall.x;\n      var dy = cube.y - dWall.y;\n      var distance = Math.sqrt(dx * dx + dy * dy);\n      if (distance < _utils_constants_js__WEBPACK_IMPORTED_MODULE_2__.DESTROY_THRESHOLD) {\n        //Sound effect\n        cube.scene.sound.play('squish');\n        cube.destroy();\n      } else {\n        return true;\n      }\n    }\n  }]);\n}(Phaser.Physics.Arcade.Sprite);\n\n\n//# sourceURL=webpack://phaser_portal_golf/./src/sprites/Cube.js?\n}");

/***/ }),

/***/ "./src/sprites/DisappearingWall.js":
/*!*****************************************!*\
  !*** ./src/sprites/DisappearingWall.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ DisappearingWall)\n/* harmony export */ });\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\"); }\nfunction _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }\nfunction _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", { writable: !1 }), e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nfunction _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }\nfunction _possibleConstructorReturn(t, e) { if (e && (\"object\" == _typeof(e) || \"function\" == typeof e)) return e; if (void 0 !== e) throw new TypeError(\"Derived constructors may only return object or undefined\"); return _assertThisInitialized(t); }\nfunction _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); return e; }\nfunction _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }\nfunction _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }\nfunction _inherits(t, e) { if (\"function\" != typeof e && null !== e) throw new TypeError(\"Super expression must either be null or a function\"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, \"prototype\", { writable: !1 }), e && _setPrototypeOf(t, e); }\nfunction _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }\nvar DisappearingWall = /*#__PURE__*/function (_Phaser$Physics$Arcad) {\n  function DisappearingWall(scene, x, y, code) {\n    var _this;\n    _classCallCheck(this, DisappearingWall);\n    //Phaser setup\n    _this = _callSuper(this, DisappearingWall, [scene, x, y, 'disappearingwall']);\n    scene.add.existing(_this);\n    scene.physics.add.existing(_this);\n    _this.scene = scene;\n    _this.code = code;\n    return _this;\n  }\n  _inherits(DisappearingWall, _Phaser$Physics$Arcad);\n  return _createClass(DisappearingWall, [{\n    key: \"update\",\n    value: function update() {}\n  }, {\n    key: \"ppCollision\",\n    value: function ppCollision(dw, pp) {\n      pp.destroy();\n      return false;\n    }\n  }]);\n}(Phaser.Physics.Arcade.Sprite);\n\n\n//# sourceURL=webpack://phaser_portal_golf/./src/sprites/DisappearingWall.js?\n}");

/***/ }),

/***/ "./src/sprites/Goal.js":
/*!*****************************!*\
  !*** ./src/sprites/Goal.js ***!
  \*****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Goal)\n/* harmony export */ });\n/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/constants.js */ \"./src/utils/constants.js\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\"); }\nfunction _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }\nfunction _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", { writable: !1 }), e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nfunction _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }\nfunction _possibleConstructorReturn(t, e) { if (e && (\"object\" == _typeof(e) || \"function\" == typeof e)) return e; if (void 0 !== e) throw new TypeError(\"Derived constructors may only return object or undefined\"); return _assertThisInitialized(t); }\nfunction _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); return e; }\nfunction _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }\nfunction _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }\nfunction _inherits(t, e) { if (\"function\" != typeof e && null !== e) throw new TypeError(\"Super expression must either be null or a function\"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, \"prototype\", { writable: !1 }), e && _setPrototypeOf(t, e); }\nfunction _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }\n\nvar Goal = /*#__PURE__*/function (_Phaser$Physics$Arcad) {\n  function Goal(scene, x, y) {\n    var _this;\n    _classCallCheck(this, Goal);\n    //Phaser setup\n    _this = _callSuper(this, Goal, [scene, x, y, 'goal']);\n    scene.add.existing(_this);\n    scene.physics.add.existing(_this);\n\n    //Class variables\n    _this.scene = scene;\n\n    //Collision setup\n    _this.body.setCircle(_this.width / 2);\n    //this.setOrigin(0.5, 0.5);\n    return _this;\n  }\n  _inherits(Goal, _Phaser$Physics$Arcad);\n  return _createClass(Goal, [{\n    key: \"update\",\n    value: function update() {}\n  }, {\n    key: \"handleBallAtGoal\",\n    value: function handleBallAtGoal(ball, goal) {\n      var ballCenterX = ball.x;\n      var ballCenterY = ball.y;\n      var goalX = goal.x;\n      var goalY = goal.y;\n      //Make \"magnetic pull\" for ball to reach goal\n      goal.applyMagneticPull(ball);\n      //If speed of ball is 0 set game to finished\n      if (!ball.isBallMoving() && ballCenterX >= goalX - goal.width / 2 && ballCenterX <= goalX + goal.width / 2 && ballCenterY >= goalY - goal.height / 2 && ballCenterY <= goalY + goal.height / 2) {\n        ball.setVisible(false);\n        this.sound.play('hole');\n        this.win = true;\n      }\n      return false;\n    }\n\n    //Method to apply magnetic pull\n  }, {\n    key: \"applyMagneticPull\",\n    value: function applyMagneticPull(ball) {\n      var gx = this.x;\n      var gy = this.y;\n      var bx = ball.x;\n      var by = ball.y;\n      var distance = Phaser.Math.Distance.Between(gx, gy, bx, by);\n      //Calculate the direction vector from the ball to the goal\n      var direction = new Phaser.Math.Vector2(gx - bx, gy - by).normalize();\n      if (distance < _utils_constants_js__WEBPACK_IMPORTED_MODULE_0__.GOAL_MAGNET_RANGE) {\n        //Apply a force towards the goal\n        ball.body.velocity.x += direction.x * _utils_constants_js__WEBPACK_IMPORTED_MODULE_0__.GOAL_MAGNETIC_PULL;\n        ball.body.velocity.y += direction.y * _utils_constants_js__WEBPACK_IMPORTED_MODULE_0__.GOAL_MAGNETIC_PULL;\n        if (distance < _utils_constants_js__WEBPACK_IMPORTED_MODULE_0__.GOAL_BALL_THRESHOLD && !ball.isBallSpeedy()) {\n          ball.body.velocity.x = 0;\n          ball.body.velocity.y = 0;\n        }\n      }\n    }\n  }]);\n}(Phaser.Physics.Arcade.Sprite);\n\n\n//# sourceURL=webpack://phaser_portal_golf/./src/sprites/Goal.js?\n}");

/***/ }),

/***/ "./src/sprites/MovingWall.js":
/*!***********************************!*\
  !*** ./src/sprites/MovingWall.js ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MovingWall)\n/* harmony export */ });\n/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/constants.js */ \"./src/utils/constants.js\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\"); }\nfunction _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }\nfunction _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", { writable: !1 }), e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nfunction _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }\nfunction _possibleConstructorReturn(t, e) { if (e && (\"object\" == _typeof(e) || \"function\" == typeof e)) return e; if (void 0 !== e) throw new TypeError(\"Derived constructors may only return object or undefined\"); return _assertThisInitialized(t); }\nfunction _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); return e; }\nfunction _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }\nfunction _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }\nfunction _inherits(t, e) { if (\"function\" != typeof e && null !== e) throw new TypeError(\"Super expression must either be null or a function\"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, \"prototype\", { writable: !1 }), e && _setPrototypeOf(t, e); }\nfunction _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }\n\nvar MovingWall = /*#__PURE__*/function (_Phaser$Physics$Arcad) {\n  function MovingWall(scene, x, y, speed, isHorizontal) {\n    var _this;\n    _classCallCheck(this, MovingWall);\n    //Phaser setup\n    _this = _callSuper(this, MovingWall, [scene, x, y, 'inactivewall']);\n    scene.add.existing(_this);\n    scene.physics.add.existing(_this);\n    _this.scene = scene;\n    _this.isHorizontal = isHorizontal;\n    _this.speed = speed;\n    _this.lastHit = Date.now();\n    _this.lastPortal = Date.now();\n    _this.timer = Date.now();\n    return _this;\n  }\n\n  //Prevents damping when the moving wall collides with the ball\n  _inherits(MovingWall, _Phaser$Physics$Arcad);\n  return _createClass(MovingWall, [{\n    key: \"update\",\n    value: function update() {\n      //If the ball has slowed down or sped up (either x or y)\n      if (Math.abs(this.body.velocity.x) != this.speed && Math.abs(this.body.velocity.y) != this.speed) {\n        //Reset velocity of required vector\n        if (this.body.velocity.x > 0) {\n          this.setVelocity(this.speed, 0);\n        }\n        if (this.body.velocity.x < 0) {\n          this.setVelocity(-this.speed, 0);\n        }\n        if (this.body.velocity.y > 0) {\n          this.setVelocity(0, this.speed);\n        }\n        if (this.body.velocity.y < 0) {\n          this.setVelocity(0, -this.speed);\n        }\n      }\n    }\n  }, {\n    key: \"setVel\",\n    value: function setVel() {\n      if (this.isHorizontal) {\n        this.setVelocity(this.speed, 0);\n      } else {\n        this.setVelocity(0, this.speed);\n      }\n    }\n  }, {\n    key: \"dWallCollision\",\n    value: function dWallCollision(mWall, dWall) {\n      var dx = mWall.x - dWall.x;\n      var dy = mWall.y - dWall.y;\n      var distance = Math.sqrt(dx * dx + dy * dy);\n      if (distance < _utils_constants_js__WEBPACK_IMPORTED_MODULE_0__.DESTROY_THRESHOLD) {\n        mWall.scene.sound.play('squish');\n        mWall.destroy();\n      } else {\n        mWall.wallCollision(mWall, dWall);\n      }\n    }\n  }, {\n    key: \"wallCollision\",\n    value: function wallCollision(movingWall, wall) {\n      if (Date.now() >= movingWall.lastHit + _utils_constants_js__WEBPACK_IMPORTED_MODULE_0__.TIMEOUT) {\n        movingWall.setVelocityX(-movingWall.body.velocity.x);\n        movingWall.setVelocityY(-movingWall.body.velocity.y);\n        movingWall.lastHit = Date.now();\n      }\n      return false;\n    }\n  }, {\n    key: \"PPCollision\",\n    value: function PPCollision(mWall, pp) {\n      pp.destroy();\n      return false;\n    }\n  }, {\n    key: \"portalCollision\",\n    value: function portalCollision(mWall, portal) {\n      if (Date.now() >= mWall.lastPortal + _utils_constants_js__WEBPACK_IMPORTED_MODULE_0__.TIMEOUT_LONG) {\n        mWall.lastPortal = Date.now();\n        return portal.mWallCollision(mWall, portal);\n      } else {\n        return false;\n      }\n    }\n  }, {\n    key: \"ballCollision\",\n    value: function ballCollision(mWall, ball) {}\n  }]);\n}(Phaser.Physics.Arcade.Sprite);\n\n\n//# sourceURL=webpack://phaser_portal_golf/./src/sprites/MovingWall.js?\n}");

/***/ }),

/***/ "./src/sprites/Portal.js":
/*!*******************************!*\
  !*** ./src/sprites/Portal.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Portal)\n/* harmony export */ });\n/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/constants.js */ \"./src/utils/constants.js\");\n/* harmony import */ var _utils_portalUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/portalUtils.js */ \"./src/utils/portalUtils.js\");\n/* harmony import */ var _utils_wallUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/wallUtils.js */ \"./src/utils/wallUtils.js\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }\nfunction _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }\nfunction _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\"); }\nfunction _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }\nfunction _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", { writable: !1 }), e; }\nfunction _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }\nfunction _possibleConstructorReturn(t, e) { if (e && (\"object\" == _typeof(e) || \"function\" == typeof e)) return e; if (void 0 !== e) throw new TypeError(\"Derived constructors may only return object or undefined\"); return _assertThisInitialized(t); }\nfunction _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); return e; }\nfunction _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }\nfunction _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }\nfunction _inherits(t, e) { if (\"function\" != typeof e && null !== e) throw new TypeError(\"Super expression must either be null or a function\"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, \"prototype\", { writable: !1 }), e && _setPrototypeOf(t, e); }\nfunction _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }\nfunction _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\n\n\n\nvar Portal = /*#__PURE__*/function (_Phaser$Physics$Arcad) {\n  function Portal(scene, coords, key) {\n    var _this;\n    _classCallCheck(this, Portal);\n    //Phaser setup (Object init)\n    _this = _callSuper(this, Portal, [scene, coords.x, coords.y, key + coords.orientation]);\n    scene.add.existing(_this);\n    scene.physics.add.existing(_this);\n    scene.portalGroup.add(_this);\n    _this.body.immovable = true;\n\n    //Mask setup\n    _this.maskShape = scene.make.graphics();\n    if (coords.orientation == _utils_constants_js__WEBPACK_IMPORTED_MODULE_0__.HORIZONTAL) {\n      _this.maskShape.fillCircle(coords.x, coords.y, _this.width / 2);\n      _this.maskShape.setScale(1, 1);\n    } else if (coords.orientation == _utils_constants_js__WEBPACK_IMPORTED_MODULE_0__.VERTICAL) {\n      _this.maskShape.fillCircle(coords.x, coords.y, _this.height / 2);\n      _this.maskShape.setScale(1, 1);\n    }\n    _this.mask = _this.maskShape.createGeometryMask();\n    _this.setMask(_this.mask);\n\n    //Class variables\n    _this.collisionSide = coords.collisionSide;\n    _this.scene = scene;\n    _this.key = key;\n    Portal.instances[key] = _this;\n\n    //Set Wall Colliders\n    (0,_utils_wallUtils_js__WEBPACK_IMPORTED_MODULE_2__.setPortalWallColliders)(_this.scene.wallLayer, Portal.instances);\n\n    //Sound effect\n    _this.scene.sound.play('pspawn');\n    return _this;\n  }\n  _inherits(Portal, _Phaser$Physics$Arcad);\n  return _createClass(Portal, [{\n    key: \"update\",\n    value: function update() {}\n\n    //Wizardry courtesy of StackOverflow\n  }, {\n    key: \"checkOtherPortal\",\n    value: function checkOtherPortal(p) {\n      return Object.keys(Portal.instances).filter(function (k) {\n        return k != p.key;\n      }).reduce(function (obj, k) {\n        return _objectSpread(_objectSpread({}, obj), {}, _defineProperty({}, k, Portal.instances[k]));\n      }, {});\n    }\n\n    //Similar to objectPortalCollision but has some custom logic\n  }, {\n    key: \"mWallCollision\",\n    value: function mWallCollision(m, portal) {\n      var otherPortal = this.checkOtherPortal(portal);\n      if (!(0,_utils_portalUtils_js__WEBPACK_IMPORTED_MODULE_1__.isEmpty)(otherPortal)) {\n        otherPortal = Object.values(otherPortal)[0]; //Unwrap the portal object from the Javascript object\n        var rotation = (0,_utils_portalUtils_js__WEBPACK_IMPORTED_MODULE_1__.getObjectRotation)(portal, otherPortal); //Calculate the orientation of the object\n        (0,_utils_portalUtils_js__WEBPACK_IMPORTED_MODULE_1__.teleportMWall)(m, otherPortal); //Move object to the out portal\n        var vel = (0,_utils_portalUtils_js__WEBPACK_IMPORTED_MODULE_1__.setObjectVelocityAfterPortal)(m, rotation); //Set proper velocity for object \n        //Fix for sin/cos math that messes with wall behaviour\n        if (vel.x > -1 && vel.x < 1) {\n          vel.x = 0;\n        }\n        if (vel.y > -1 && vel.y < 1) {\n          vel.y = 0;\n        }\n        //Sound effect\n        m.scene.sound.play('penter');\n        return false;\n      } else {\n        return m.wallCollision(m, portal);\n      }\n    }\n  }, {\n    key: \"objectPortalCollision\",\n    value: function objectPortalCollision(object, portal) {\n      //Get other portal\n      var otherPortal = this.checkOtherPortal(portal);\n\n      //if other portal\n      if (!(0,_utils_portalUtils_js__WEBPACK_IMPORTED_MODULE_1__.isEmpty)(otherPortal)) {\n        otherPortal = Object.values(otherPortal)[0]; //Unwrap the portal object from the Javascript object\n        var rotation = (0,_utils_portalUtils_js__WEBPACK_IMPORTED_MODULE_1__.getObjectRotation)(portal, otherPortal); //Calculate the orientation of the object\n        (0,_utils_portalUtils_js__WEBPACK_IMPORTED_MODULE_1__.teleportObject)(object, otherPortal); //Move object to the out portal\n        (0,_utils_portalUtils_js__WEBPACK_IMPORTED_MODULE_1__.setObjectVelocityAfterPortal)(object, rotation); //Set proper velocity for object\n        object.scene.sound.play('penter'); //Sound effect\n        return false;\n      }\n      return true;\n    }\n  }], [{\n    key: \"destroyByProperty\",\n    value: function destroyByProperty(s, key) {\n      var instance = Portal.instances[key];\n      if (instance) {\n        instance.destroy();\n        delete Portal.instances[key];\n        if (s.wallLayer.tileset.length > 0) {\n          (0,_utils_wallUtils_js__WEBPACK_IMPORTED_MODULE_2__.setPortalWallColliders)(s.wallLayer, Portal.instances);\n        }\n      }\n    }\n  }]);\n}(Phaser.Physics.Arcade.Sprite);\n_defineProperty(Portal, \"instances\", {});\n\n\n//# sourceURL=webpack://phaser_portal_golf/./src/sprites/Portal.js?\n}");

/***/ }),

/***/ "./src/sprites/PortalP.js":
/*!********************************!*\
  !*** ./src/sprites/PortalP.js ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ PortalP)\n/* harmony export */ });\n/* harmony import */ var _utils_portalUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/portalUtils.js */ \"./src/utils/portalUtils.js\");\n/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/constants.js */ \"./src/utils/constants.js\");\n/* harmony import */ var _Portal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Portal.js */ \"./src/sprites/Portal.js\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\"); }\nfunction _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }\nfunction _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", { writable: !1 }), e; }\nfunction _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }\nfunction _possibleConstructorReturn(t, e) { if (e && (\"object\" == _typeof(e) || \"function\" == typeof e)) return e; if (void 0 !== e) throw new TypeError(\"Derived constructors may only return object or undefined\"); return _assertThisInitialized(t); }\nfunction _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); return e; }\nfunction _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }\nfunction _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }\nfunction _inherits(t, e) { if (\"function\" != typeof e && null !== e) throw new TypeError(\"Super expression must either be null or a function\"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, \"prototype\", { writable: !1 }), e && _setPrototypeOf(t, e); }\nfunction _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }\nfunction _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\n\n\n\nvar PortalP = /*#__PURE__*/function (_Phaser$Physics$Arcad) {\n  function PortalP(scene, x, y, key) {\n    var _this;\n    _classCallCheck(this, PortalP);\n    //Phaser setup\n    _this = _callSuper(this, PortalP, [scene, x, y, key + _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.PROJECTILE]);\n    scene.add.existing(_this);\n    scene.physics.add.existing(_this);\n\n    //Class variables\n    _this.scene = scene;\n    _this.key = key;\n\n    //Collision setup\n    _this.body.setCircle(_this.width / 2);\n    _this.scene.physics.add.collider(_this, _this.scene.wallLayer, _this.wallCollision);\n    _this.scene.ppGroup.add(_this);\n    return _this;\n  }\n  _inherits(PortalP, _Phaser$Physics$Arcad);\n  return _createClass(PortalP, [{\n    key: \"update\",\n    value: function update() {}\n  }, {\n    key: \"wallCollision\",\n    value: function wallCollision(pp, wall) {\n      if (pp.scene) {\n        if (wall.tileset === pp.scene.wallTile) {\n          var currentTime = Date.now();\n          if (currentTime - PortalP.lastCollisionTime >= _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.COLLISION_DEBOUNCE_TIME) {\n            //Get valid coords for portal\n            var coords = (0,_utils_portalUtils_js__WEBPACK_IMPORTED_MODULE_0__.portalPlacement)(pp.body.center.x, pp.body.center.y, wall, pp.scene.wallLayer);\n            //Destroy old portals\n            _Portal_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].destroyByProperty(pp.scene, pp.key);\n            //Create new portal\n\n            PortalP.lastCollisionTime = currentTime;\n            if (coords) {\n              new _Portal_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](pp.scene, coords, pp.key);\n            }\n          }\n          pp.destroy();\n        } else {\n          pp.destroy();\n        }\n      }\n    }\n  }]);\n}(Phaser.Physics.Arcade.Sprite);\n_defineProperty(PortalP, \"lastCollisionTime\", 0);\n\n\n//# sourceURL=webpack://phaser_portal_golf/./src/sprites/PortalP.js?\n}");

/***/ }),

/***/ "./src/sprites/PressurePlate.js":
/*!**************************************!*\
  !*** ./src/sprites/PressurePlate.js ***!
  \**************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ PressurePlate)\n/* harmony export */ });\n/* harmony import */ var _Bridge_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Bridge.js */ \"./src/sprites/Bridge.js\");\n/* harmony import */ var _DisappearingWall_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DisappearingWall.js */ \"./src/sprites/DisappearingWall.js\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\"); }\nfunction _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }\nfunction _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", { writable: !1 }), e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nfunction _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }\nfunction _possibleConstructorReturn(t, e) { if (e && (\"object\" == _typeof(e) || \"function\" == typeof e)) return e; if (void 0 !== e) throw new TypeError(\"Derived constructors may only return object or undefined\"); return _assertThisInitialized(t); }\nfunction _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); return e; }\nfunction _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }\nfunction _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }\nfunction _inherits(t, e) { if (\"function\" != typeof e && null !== e) throw new TypeError(\"Super expression must either be null or a function\"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, \"prototype\", { writable: !1 }), e && _setPrototypeOf(t, e); }\nfunction _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }\n\n\nvar PressurePlate = /*#__PURE__*/function (_Phaser$Physics$Arcad) {\n  function PressurePlate(scene, x, y, code) {\n    var _this;\n    _classCallCheck(this, PressurePlate);\n    //Phaser setup\n    _this = _callSuper(this, PressurePlate, [scene, x, y, 'pressureplate']);\n    scene.add.existing(_this);\n    scene.physics.add.existing(_this);\n    _this.scene = scene;\n    _this.code = code;\n    _this.ctrl = [];\n    _this.isOn = false;\n    _this.timeOn = 0;\n    return _this;\n  }\n  _inherits(PressurePlate, _Phaser$Physics$Arcad);\n  return _createClass(PressurePlate, [{\n    key: \"update\",\n    value: function update() {\n      if (this.isOn && Date.now() >= this.timeOn + 50) {\n        if (!this.scene.physics.overlap(this)) {\n          this.isOn = false;\n          if (this.ctrl && this.ctrl.length) {\n            //If ctrl is an array\n            for (var i = 0; i < this.ctrl.length; i++) {\n              if (this.ctrl[i] instanceof _Bridge_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]) {\n                this.ctrl[i].disableBody(true, true); //Hide the bridge\n\n                //Reactivate the water beneath the bridge\n                var tileX = this.ctrl[i].scene.map.worldToTileX(this.ctrl[i].x);\n                var tileY = this.ctrl[i].scene.map.worldToTileY(this.ctrl[i].y);\n                var tile = this.ctrl[i].scene.groundLayer.getTileAt(tileX, tileY);\n                if (!tile) {\n                  this.scene.groundLayer.putTileAt(this.ctrl[i].tileBeneathIndex, tileX, tileY);\n                }\n              }\n              if (this.ctrl[i] instanceof _DisappearingWall_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]) {\n                this.ctrl[i].enableBody(false, this.ctrl[i].x, this.ctrl[i].y, true, true);\n              }\n            }\n          }\n        }\n      }\n    }\n  }, {\n    key: \"objectOnPlate\",\n    value: function objectOnPlate(pp, obj) {\n      pp.isOn = true;\n      pp.timeOn = Date.now();\n      if (pp.ctrl && pp.ctrl.length) {\n        //If ctrl is an array\n        for (var i = 0; i < pp.ctrl.length; i++) {\n          if (pp.ctrl[i] instanceof _Bridge_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]) {\n            pp.ctrl[i].enableBody(false, pp.ctrl[i].x, pp.ctrl[i].y, true, true); //Display the bridge\n\n            //Deactivate the water beneath the bridge\n            var tileX = pp.ctrl[i].scene.map.worldToTileX(pp.ctrl[i].x);\n            var tileY = pp.ctrl[i].scene.map.worldToTileY(pp.ctrl[i].y);\n            var tile = pp.ctrl[i].scene.groundLayer.getTileAt(tileX, tileY);\n            if (tile) {\n              pp.scene.groundLayer.removeTileAt(tileX, tileY);\n            }\n          }\n          if (pp.ctrl[i] instanceof _DisappearingWall_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]) {\n            pp.ctrl[i].disableBody(true, true);\n          }\n        }\n      }\n      return false;\n    }\n  }]);\n}(Phaser.Physics.Arcade.Sprite);\n\n\n//# sourceURL=webpack://phaser_portal_golf/./src/sprites/PressurePlate.js?\n}");

/***/ }),

/***/ "./src/utils/constants.js":
/*!********************************!*\
  !*** ./src/utils/constants.js ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ASSET_FILEPATH_GAME: () => (/* binding */ ASSET_FILEPATH_GAME),\n/* harmony export */   ASSET_FILEPATH_GAME_MAP: () => (/* binding */ ASSET_FILEPATH_GAME_MAP),\n/* harmony export */   ASSET_FILEPATH_GAME_SOUND: () => (/* binding */ ASSET_FILEPATH_GAME_SOUND),\n/* harmony export */   ASSET_FILEPATH_INSTRUCTIONS: () => (/* binding */ ASSET_FILEPATH_INSTRUCTIONS),\n/* harmony export */   ASSET_FILEPATH_LEADERBOARD: () => (/* binding */ ASSET_FILEPATH_LEADERBOARD),\n/* harmony export */   ASSET_FILEPATH_LEVEL_SELECT: () => (/* binding */ ASSET_FILEPATH_LEVEL_SELECT),\n/* harmony export */   ASSET_FILEPATH_MENU: () => (/* binding */ ASSET_FILEPATH_MENU),\n/* harmony export */   ASSET_FILEPATH_PAUSE: () => (/* binding */ ASSET_FILEPATH_PAUSE),\n/* harmony export */   ASSET_FILEPATH_TXT: () => (/* binding */ ASSET_FILEPATH_TXT),\n/* harmony export */   ASSET_FILEPATH_WIN: () => (/* binding */ ASSET_FILEPATH_WIN),\n/* harmony export */   BALL_FORCE_MULTIPLIER: () => (/* binding */ BALL_FORCE_MULTIPLIER),\n/* harmony export */   BALL_LOW_SPEED: () => (/* binding */ BALL_LOW_SPEED),\n/* harmony export */   BALL_STOP_SPEED: () => (/* binding */ BALL_STOP_SPEED),\n/* harmony export */   COLLISION_DEBOUNCE_TIME: () => (/* binding */ COLLISION_DEBOUNCE_TIME),\n/* harmony export */   DESTROY_THRESHOLD: () => (/* binding */ DESTROY_THRESHOLD),\n/* harmony export */   FRICTION: () => (/* binding */ FRICTION),\n/* harmony export */   FRICTION_SAND: () => (/* binding */ FRICTION_SAND),\n/* harmony export */   GOAL_BALL_THRESHOLD: () => (/* binding */ GOAL_BALL_THRESHOLD),\n/* harmony export */   GOAL_MAGNETIC_PULL: () => (/* binding */ GOAL_MAGNETIC_PULL),\n/* harmony export */   GOAL_MAGNET_RANGE: () => (/* binding */ GOAL_MAGNET_RANGE),\n/* harmony export */   HORIZONTAL: () => (/* binding */ HORIZONTAL),\n/* harmony export */   MAP_INFO: () => (/* binding */ MAP_INFO),\n/* harmony export */   MAX_BALL_SPEED: () => (/* binding */ MAX_BALL_SPEED),\n/* harmony export */   MENU_BAR_HEIGHT: () => (/* binding */ MENU_BAR_HEIGHT),\n/* harmony export */   MENU_FONT_SIZE: () => (/* binding */ MENU_FONT_SIZE),\n/* harmony export */   MWALL_SPEED: () => (/* binding */ MWALL_SPEED),\n/* harmony export */   OFFSET_PORTAL_BALL: () => (/* binding */ OFFSET_PORTAL_BALL),\n/* harmony export */   OFFSET_PORTAL_PLACE: () => (/* binding */ OFFSET_PORTAL_PLACE),\n/* harmony export */   PORTAL_BLUE: () => (/* binding */ PORTAL_BLUE),\n/* harmony export */   PORTAL_ORANGE: () => (/* binding */ PORTAL_ORANGE),\n/* harmony export */   PP_SPEED: () => (/* binding */ PP_SPEED),\n/* harmony export */   PROJECTILE: () => (/* binding */ PROJECTILE),\n/* harmony export */   SCREEN_HEIGHT: () => (/* binding */ SCREEN_HEIGHT),\n/* harmony export */   SCREEN_WIDTH: () => (/* binding */ SCREEN_WIDTH),\n/* harmony export */   TIMEOUT: () => (/* binding */ TIMEOUT),\n/* harmony export */   TIMEOUT_LONG: () => (/* binding */ TIMEOUT_LONG),\n/* harmony export */   VERTICAL: () => (/* binding */ VERTICAL)\n/* harmony export */ });\n//Map info\nvar MAP_INFO = [\n// {name: 'sandbox', display_name: 'Hole 1', par: 3},\n{\n  name: 'hole_1',\n  display_name: 'Hole 1',\n  par: 3\n}, {\n  name: 'hole_2',\n  display_name: 'Hole 2',\n  par: 4\n}, {\n  name: 'hole_3',\n  display_name: 'Hole 3',\n  par: 5\n}, {\n  name: 'hole_4',\n  display_name: 'Hole 4',\n  par: 3\n}, {\n  name: 'hole_5',\n  display_name: 'Hole 5',\n  par: 3\n}, {\n  name: 'hole_6',\n  display_name: 'Hole 6',\n  par: 5\n}, {\n  name: 'hole_7',\n  display_name: 'Hole 7',\n  par: 5\n}, {\n  name: 'hole_8',\n  display_name: 'Hole 8',\n  par: 5\n}, {\n  name: 'hole_9',\n  display_name: 'Hole 9',\n  par: 5\n}];\n\n//Number constants\nvar BALL_FORCE_MULTIPLIER = 3;\nvar BALL_LOW_SPEED = 50;\nvar BALL_STOP_SPEED = 1;\nvar COLLISION_DEBOUNCE_TIME = 50;\nvar DESTROY_THRESHOLD = 30;\nvar FRICTION = 0.98;\nvar FRICTION_SAND = 0.93;\nvar GOAL_BALL_THRESHOLD = 12;\nvar GOAL_MAGNET_RANGE = 16;\nvar GOAL_MAGNETIC_PULL = 2;\nvar MAX_BALL_SPEED = 1000;\nvar MWALL_SPEED = 50;\nvar MENU_BAR_HEIGHT = 64;\nvar OFFSET_PORTAL_BALL = 3;\nvar OFFSET_PORTAL_PLACE = 5;\nvar PP_SPEED = 2000;\nvar SCREEN_HEIGHT = 640;\nvar SCREEN_WIDTH = 960;\nvar TIMEOUT = 50;\nvar TIMEOUT_LONG = 1000;\n\n//String constants\nvar ASSET_FILEPATH_GAME = '/assets/images/game/';\nvar ASSET_FILEPATH_GAME_MAP = '/assets/maps/';\nvar ASSET_FILEPATH_GAME_SOUND = '/assets/mp3/';\nvar ASSET_FILEPATH_INSTRUCTIONS = '/assets/images/instructions/';\nvar ASSET_FILEPATH_LEVEL_SELECT = '/assets/images/levelselect/';\nvar ASSET_FILEPATH_LEADERBOARD = '/assets/images/leaderboard/';\nvar ASSET_FILEPATH_MENU = '/assets/images/startmenu/';\nvar ASSET_FILEPATH_PAUSE = '/assets/images/pause/';\nvar ASSET_FILEPATH_TXT = '/assets/txt/';\nvar ASSET_FILEPATH_WIN = '/assets/images/win/';\nvar HORIZONTAL = 'h';\nvar MENU_FONT_SIZE = '20px';\nvar PORTAL_BLUE = 'bportal';\nvar PORTAL_ORANGE = 'oportal';\nvar PROJECTILE = 'p';\nvar VERTICAL = 'v';\n\n//# sourceURL=webpack://phaser_portal_golf/./src/utils/constants.js?\n}");

/***/ }),

/***/ "./src/utils/portalUtils.js":
/*!**********************************!*\
  !*** ./src/utils/portalUtils.js ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getObjectRotation: () => (/* binding */ getObjectRotation),\n/* harmony export */   isEmpty: () => (/* binding */ isEmpty),\n/* harmony export */   portalPlacement: () => (/* binding */ portalPlacement),\n/* harmony export */   setObjectVelocityAfterPortal: () => (/* binding */ setObjectVelocityAfterPortal),\n/* harmony export */   teleportMWall: () => (/* binding */ teleportMWall),\n/* harmony export */   teleportObject: () => (/* binding */ teleportObject)\n/* harmony export */ });\n/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants.js */ \"./src/utils/constants.js\");\n/* harmony import */ var _wallUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wallUtils.js */ \"./src/utils/wallUtils.js\");\n\n\n\n//Detects empty object (as in the {} object)\nfunction isEmpty(obj) {\n  for (var prop in obj) {\n    if (Object.hasOwn(obj, prop)) {\n      return false;\n    }\n  }\n  return true;\n}\n\n//Gets the angle the ball should be rotated by given the positions of the portals\nfunction getObjectRotation(inPortal, outPortal) {\n  var velRotation;\n  if (inPortal.collisionSide == 'left') {\n    if (outPortal.collisionSide == 'left') {\n      velRotation = 180;\n    } else if (outPortal.collisionSide == 'right') {\n      velRotation = 0;\n    } else if (outPortal.collisionSide == 'top') {\n      velRotation = 270;\n    } else if (outPortal.collisionSide == 'bottom') {\n      velRotation = 90;\n    }\n  } else if (inPortal.collisionSide == 'right') {\n    if (outPortal.collisionSide == 'left') {\n      velRotation = 0;\n    } else if (outPortal.collisionSide == 'right') {\n      velRotation = 180;\n    } else if (outPortal.collisionSide == 'top') {\n      velRotation = 90;\n    } else if (outPortal.collisionSide == 'bottom') {\n      velRotation = 270;\n    }\n  } else if (inPortal.collisionSide == 'top') {\n    if (outPortal.collisionSide == 'left') {\n      velRotation = 90;\n    } else if (outPortal.collisionSide == 'right') {\n      velRotation = 270;\n    } else if (outPortal.collisionSide == 'top') {\n      velRotation = 180;\n    } else if (outPortal.collisionSide == 'bottom') {\n      velRotation = 0;\n    }\n  } else if (inPortal.collisionSide == 'bottom') {\n    if (outPortal.collisionSide == 'left') {\n      velRotation = 270;\n    } else if (outPortal.collisionSide == 'right') {\n      velRotation = 90;\n    } else if (outPortal.collisionSide == 'top') {\n      velRotation = 0;\n    } else if (outPortal.collisionSide == 'bottom') {\n      velRotation = 180;\n    }\n  }\n  return velRotation;\n}\n\n//Moves the object to the exit portal, distanced so that it doesn't get stuck in it\nfunction teleportObject(object, exitPortal) {\n  if (exitPortal.collisionSide == 'left') {\n    object.x = exitPortal.x - (exitPortal.width / 2 + object.width / 2 + _constants_js__WEBPACK_IMPORTED_MODULE_0__.OFFSET_PORTAL_BALL);\n    object.y = exitPortal.y;\n  } else if (exitPortal.collisionSide == 'right') {\n    object.x = exitPortal.x + (exitPortal.width / 2 + object.width / 2 + _constants_js__WEBPACK_IMPORTED_MODULE_0__.OFFSET_PORTAL_BALL);\n    object.y = exitPortal.y;\n  } else if (exitPortal.collisionSide == 'top') {\n    object.x = exitPortal.x;\n    object.y = exitPortal.y - (exitPortal.height / 2 + object.height / 2 + _constants_js__WEBPACK_IMPORTED_MODULE_0__.OFFSET_PORTAL_BALL);\n  } else if (exitPortal.collisionSide == 'bottom') {\n    object.x = exitPortal.x;\n    object.y = exitPortal.y + (exitPortal.height / 2 + object.height / 2 + _constants_js__WEBPACK_IMPORTED_MODULE_0__.OFFSET_PORTAL_BALL);\n  }\n}\nfunction teleportMWall(m, exitPortal) {\n  var s = m.scene;\n  m.x = exitPortal.x;\n  m.y = exitPortal.y;\n\n  // Code to temporarily disable walls overlapping with new mWall position\n  var mw = m.width;\n  var mh = m.height;\n  var mx = m.x - mw / 2;\n  var my = m.y - mh / 2;\n  var tiles = s.wallLayer.getTilesWithinWorldXY(mx, my, mw, mh);\n  tiles.forEach(function (tile) {\n    if (tile && tile.index !== -1) {\n      var tileX = tile.x;\n      var tileY = tile.y;\n      var idx = tile.index;\n      s.wallLayer.removeTileAt(tileX, tileY);\n      s.time.delayedCall(_constants_js__WEBPACK_IMPORTED_MODULE_0__.TIMEOUT_LONG, function () {\n        var t = s.wallLayer.putTileAt(idx, tileX, tileY);\n        t.setCollision(true);\n      });\n    }\n  });\n\n  // tiles.forEach(tile => {\n\n  // if (tile && tile.index !== -1) {\n  // console.log(tile);\n  // tile.properties = {collides: false};\n  // tile.setVisible(false);\n\n  // }\n  // });\n  // m.scene.wallLayer.setCollisionByProperty({collides: true});\n  // m.scene.time.delayedCall(TIMEOUT_LONG, () => {\n  // tiles.forEach(tile => {\n  // if (tile && tile.index !== -1) {\n  // tile.properties = {collides: true};;\n  // tile.setVisible(true);\n  // }\n  // });\n  // m.scene.wallLayer.setCollisionByProperty({collides: true});\n  // });\n}\n\n//Change the object's velocity based on the angle calculated (thanks ChatGPT)\nfunction setObjectVelocityAfterPortal(object, velRotation) {\n  // console.log(\"===============================\");\n  // console.log(\"Current velocity:\");\n  // console.log(object.body.velocity);\n\n  //Convert angle to radians\n  var angleRad = velRotation * Math.PI / 180;\n\n  // console.log(\"Rotation: \" + velRotation);\n\n  // Get current velocity\n  var currentVelocity = object.body.velocity;\n\n  // Calculate new velocity using rotation matrix\n  var newVelocityX = currentVelocity.x * Math.cos(angleRad) - currentVelocity.y * Math.sin(angleRad);\n  var newVelocityY = currentVelocity.x * Math.sin(angleRad) + currentVelocity.y * Math.cos(angleRad);\n\n  // Set new velocity\n  object.setVelocity(newVelocityX, newVelocityY);\n\n  // console.log(\"New velocity:\");\n  // console.log(object.body.velocity);\n  // console.log(\"===============================\");\n\n  return object.body.velocity;\n}\n\n//Returns the x and y coordinates of where the portal should be placed or throws error if invalid\n//Also returns orientation of the portal (horizontal or vertical)\n//Return collision side as well; this is done here to indent the portal a bit out of the wall\nfunction portalPlacement(x, y, wall, wallLayer) {\n  var nearestWall = (0,_wallUtils_js__WEBPACK_IMPORTED_MODULE_1__.getNearestValidWall)(x, y, wall, wallLayer);\n  var collisionSide = (0,_wallUtils_js__WEBPACK_IMPORTED_MODULE_1__.getCollisionSide)(x, y, wall);\n  if (!nearestWall) {\n    throw new Error('Portal Cancel, no nearest wall');\n  }\n  if (!collisionSide) {\n    throw new error('Portal Cancel, no collision side detected');\n  }\n\n  //Determine if connection is horizontal or vertical\n  if (wall.x == nearestWall.x) {\n    // vertical\n    if (wall.y > nearestWall.y) {\n      if (collisionSide == 'left') {\n        return {\n          x: nearestWall.pixelX + nearestWall.width / 2 - _constants_js__WEBPACK_IMPORTED_MODULE_0__.OFFSET_PORTAL_PLACE,\n          y: nearestWall.pixelY + nearestWall.height,\n          orientation: _constants_js__WEBPACK_IMPORTED_MODULE_0__.VERTICAL,\n          collisionSide: collisionSide\n        };\n      } else if (collisionSide == 'right') {\n        return {\n          x: nearestWall.pixelX + nearestWall.width / 2 + _constants_js__WEBPACK_IMPORTED_MODULE_0__.OFFSET_PORTAL_PLACE,\n          y: nearestWall.pixelY + nearestWall.height,\n          orientation: _constants_js__WEBPACK_IMPORTED_MODULE_0__.VERTICAL,\n          collisionSide: collisionSide\n        };\n      }\n    } else {\n      if (collisionSide == 'left') {\n        return {\n          x: wall.pixelX + wall.width / 2 - _constants_js__WEBPACK_IMPORTED_MODULE_0__.OFFSET_PORTAL_PLACE,\n          y: wall.pixelY + wall.height,\n          orientation: _constants_js__WEBPACK_IMPORTED_MODULE_0__.VERTICAL,\n          collisionSide: collisionSide\n        };\n      } else if (collisionSide == 'right') {\n        return {\n          x: wall.pixelX + wall.width / 2 + _constants_js__WEBPACK_IMPORTED_MODULE_0__.OFFSET_PORTAL_PLACE,\n          y: wall.pixelY + wall.height,\n          orientation: _constants_js__WEBPACK_IMPORTED_MODULE_0__.VERTICAL,\n          collisionSide: collisionSide\n        };\n      }\n    }\n  } else if (wall.y == nearestWall.y) {\n    //horizontal\n    if (wall.x > nearestWall.x) {\n      if (collisionSide == 'top') {\n        return {\n          x: nearestWall.pixelX + nearestWall.width,\n          y: nearestWall.pixelY + nearestWall.height / 2 - _constants_js__WEBPACK_IMPORTED_MODULE_0__.OFFSET_PORTAL_PLACE,\n          orientation: _constants_js__WEBPACK_IMPORTED_MODULE_0__.HORIZONTAL,\n          collisionSide: collisionSide\n        };\n      } else if (collisionSide == 'bottom') {\n        return {\n          x: nearestWall.pixelX + nearestWall.width,\n          y: nearestWall.pixelY + nearestWall.height / 2 + _constants_js__WEBPACK_IMPORTED_MODULE_0__.OFFSET_PORTAL_PLACE,\n          orientation: _constants_js__WEBPACK_IMPORTED_MODULE_0__.HORIZONTAL,\n          collisionSide: collisionSide\n        };\n      }\n    } else {\n      if (collisionSide == 'top') {\n        return {\n          x: wall.pixelX + wall.width,\n          y: wall.pixelY + nearestWall.height / 2 - _constants_js__WEBPACK_IMPORTED_MODULE_0__.OFFSET_PORTAL_PLACE,\n          orientation: _constants_js__WEBPACK_IMPORTED_MODULE_0__.HORIZONTAL,\n          collisionSide: collisionSide\n        };\n      } else if (collisionSide == 'bottom') {\n        return {\n          x: wall.pixelX + wall.width,\n          y: wall.pixelY + nearestWall.height / 2 + _constants_js__WEBPACK_IMPORTED_MODULE_0__.OFFSET_PORTAL_PLACE,\n          orientation: _constants_js__WEBPACK_IMPORTED_MODULE_0__.HORIZONTAL,\n          collisionSide: collisionSide\n        };\n      }\n    }\n  } else {\n    throw new Error('Portal Cancel');\n  }\n}\n\n//# sourceURL=webpack://phaser_portal_golf/./src/utils/portalUtils.js?\n}");

/***/ }),

/***/ "./src/utils/utils.js":
/*!****************************!*\
  !*** ./src/utils/utils.js ***!
  \****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   doFriction: () => (/* binding */ doFriction),\n/* harmony export */   fixAssetPaths: () => (/* binding */ fixAssetPaths),\n/* harmony export */   getAssetPath: () => (/* binding */ getAssetPath)\n/* harmony export */ });\n/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants.js */ \"./src/utils/constants.js\");\n/* harmony import */ var _sprites_Ball_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sprites/Ball.js */ \"./src/sprites/Ball.js\");\n\n\n\n//Handles friction for objects\nfunction doFriction(obj) {\n  // Get the tile at the object's position\n  var tile;\n  var tileX = obj.scene.map.worldToTileX(obj.x);\n  var tileY = obj.scene.map.worldToTileY(obj.y);\n  if (obj.scene.groundLayer) {\n    tile = obj.scene.groundLayer.getTileAt(tileX, tileY); // Detect the tile\n  }\n\n  //If a tile is found\n  if (tile) {\n    if (tile.tileset === obj.scene.sandTile) {\n      //If sand tile\n      obj.setVelocity(obj.body.velocity.x * _constants_js__WEBPACK_IMPORTED_MODULE_0__.FRICTION_SAND, obj.body.velocity.y * _constants_js__WEBPACK_IMPORTED_MODULE_0__.FRICTION_SAND);\n    } else if (tile.tileset === obj.scene.waterTile) {\n      // If water tile\n      obj.scene.sound.play('splash'); //Sound effect\n      if (obj instanceof _sprites_Ball_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]) {\n        // Ball reset to last spot\n        // Disable and shortly after re-enable the ball's body\n        // Keeps body inert for position update\n        obj.body.enable = false;\n\n        //Do necessary updates to ball\n        obj.setVelocity(0, 0);\n        obj.setPosition(obj.lastSpot.x, obj.lastSpot.y);\n\n        //Re-enable ball body\n        setTimeout(function () {\n          obj.body.enable = true;\n        }, 10);\n      } else {\n        //Cubes\n        obj.destroy();\n      }\n    } else {\n      // Regular ground\n      obj.setVelocity(obj.body.velocity.x * _constants_js__WEBPACK_IMPORTED_MODULE_0__.FRICTION, obj.body.velocity.y * _constants_js__WEBPACK_IMPORTED_MODULE_0__.FRICTION);\n    }\n  } else {\n    //Default friction\n    obj.setVelocity(obj.body.velocity.x * _constants_js__WEBPACK_IMPORTED_MODULE_0__.FRICTION, obj.body.velocity.y * _constants_js__WEBPACK_IMPORTED_MODULE_0__.FRICTION);\n  }\n}\n\n//Returns the adjusted asset path directory name for the given relative path (written by ChatGPT, 08-19-2025)\nfunction getAssetPath(relativePath) {\n  // Detect if hosted on GitHub Pages\n  var pathParts = window.location.pathname.split(\"/\").filter(Boolean);\n\n  // If the URL looks like /username.github.io/repo-name/...\n  // then pathParts[0] is the repo name\n  var repoName = pathParts.length > 0 ? pathParts[0] : \"\";\n\n  // If running locally (e.g. http://localhost:8080/), repoName will be empty\n  if (repoName && window.location.hostname.endsWith(\"github.io\")) {\n    return \"/\".concat(repoName, \"/\").concat(relativePath);\n  } else {\n    return relativePath; // local dev, just use plain relative path\n  }\n}\n\n// Adjusts image paths for HTML objects (written by ChatGPT, 08-19-2025)\nfunction fixAssetPaths(container) {\n  container.querySelectorAll(\"img[data-src]\").forEach(function (img) {\n    img.src = getAssetPath(img.getAttribute(\"data-src\"));\n  });\n}\n\n//# sourceURL=webpack://phaser_portal_golf/./src/utils/utils.js?\n}");

/***/ }),

/***/ "./src/utils/wallUtils.js":
/*!********************************!*\
  !*** ./src/utils/wallUtils.js ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getCollisionSide: () => (/* binding */ getCollisionSide),\n/* harmony export */   getNearestValidWall: () => (/* binding */ getNearestValidWall),\n/* harmony export */   setPortalWallColliders: () => (/* binding */ setPortalWallColliders)\n/* harmony export */ });\n/* harmony import */ var _sprites_Cube_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sprites/Cube.js */ \"./src/sprites/Cube.js\");\nfunction _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(r, a) { if (r) { if (\"string\" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return \"Object\" === t && r.constructor && (t = r.constructor.name), \"Map\" === t || \"Set\" === t ? Array.from(r) : \"Arguments\" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }\nfunction _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }\nfunction _iterableToArrayLimit(r, l) { var t = null == r ? null : \"undefined\" != typeof Symbol && r[Symbol.iterator] || r[\"@@iterator\"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t[\"return\"] && (u = t[\"return\"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }\nfunction _arrayWithHoles(r) { if (Array.isArray(r)) return r; }\n\n\n//Removes collision from walls with portals attached to them\nfunction setPortalWallColliders(wallLayer, portals) {\n  wallLayer.forEachTile(function (tile) {\n    if (tile.index !== -1) {\n      var i;\n      for (var _i = 0, _Object$entries = Object.entries(portals); _i < _Object$entries.length; _i++) {\n        var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),\n          key = _Object$entries$_i[0],\n          portal = _Object$entries$_i[1];\n        //Loop throught the portals object\n        if (Phaser.Geom.Rectangle.Overlaps(portal.getBounds(), tile.getBounds())) {\n          tile.setCollision(false);\n          break;\n        } else {\n          tile.setCollision(true);\n        }\n      }\n    }\n  });\n}\n\n//Determines and returns what side of the wall the object hit\nfunction getCollisionSide(x, y, wall) {\n  var wx = wall.pixelX + wall.width / 2;\n  var wy = wall.pixelY + wall.height / 2;\n\n  //Allows cubes to be considered walls\n  if (wall instanceof _sprites_Cube_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]) {\n    wx = wall.body.center.x;\n    wy = wall.body.center.y;\n  }\n  var dx = x - wx;\n  var dy = y - wy;\n  if (Math.abs(dx) > Math.abs(dy)) {\n    if (dx > 0) {\n      return 'right';\n    } else {\n      return 'left';\n    }\n  } else {\n    if (dy > 0) {\n      return 'bottom';\n    } else {\n      return 'top';\n    }\n  }\n}\n\n//Function used by createPortal() to find the other tile to attach the portal to\nfunction getNearestValidWall(x, y, wall, wallLayer) {\n  var wallx = wall.x;\n  var wally = wall.y;\n  var tileId = wall.index;\n  var adjacentTiles = [];\n\n  //Find adjacent walls horizontally and vertically\n  //Check whether the wall is of the same type as the wall shot\n  //Check left\n  if (wallx > 0) {\n    var leftTile = wallLayer.getTileAt(wallx - 1, wally);\n    if (leftTile && leftTile.index === tileId) {\n      adjacentTiles.push(leftTile);\n    }\n  }\n  //Check right\n  if (wallx < wallLayer.layer.width - 1) {\n    var rightTile = wallLayer.getTileAt(wallx + 1, wally);\n    if (rightTile && rightTile.index === tileId) {\n      adjacentTiles.push(rightTile);\n    }\n  }\n\n  //Check up\n  if (wally > 0) {\n    var upTile = wallLayer.getTileAt(wallx, wally - 1);\n    if (upTile && upTile.index === tileId) {\n      adjacentTiles.push(upTile);\n    }\n  }\n\n  //Check down\n  if (wally < wallLayer.layer.height - 1) {\n    var downTile = wallLayer.getTileAt(wallx, wally + 1);\n    if (downTile && downTile.index === tileId) {\n      adjacentTiles.push(downTile);\n    }\n  }\n\n  //Determine which valid adjacent wall is nearest to the x and y\n  if (adjacentTiles.length > 0) {\n    var ret = adjacentTiles[0];\n\n    //Measurement Variables\n    var wallCenterX;\n    var wallCenterY;\n    var dx;\n    var dy;\n    var distance;\n    var near = null;\n    for (var i = 0; i < adjacentTiles.length; i++) {\n      wallCenterX = adjacentTiles[i].pixelX + adjacentTiles[i].width / 2;\n      wallCenterY = adjacentTiles[i].pixelY + adjacentTiles[i].height / 2;\n      dx = wallCenterX - x;\n      dy = wallCenterY - y;\n      distance = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));\n      if (near == null || distance < near) {\n        near = distance;\n        ret = adjacentTiles[i];\n      }\n    }\n    return ret;\n  } else {\n    return null;\n  }\n}\n\n//# sourceURL=webpack://phaser_portal_golf/./src/utils/wallUtils.js?\n}");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			if (cachedModule.error !== undefined) throw cachedModule.error;
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		try {
/******/ 			var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 			__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/ 			module = execOptions.module;
/******/ 			execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 		} catch(e) {
/******/ 			module.error = e;
/******/ 			throw e;
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// expose the module execution interceptor
/******/ 	__webpack_require__.i = [];
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript update chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.hu = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + __webpack_require__.h() + ".hot-update.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get update manifest filename */
/******/ 	(() => {
/******/ 		__webpack_require__.hmrF = () => ("main." + __webpack_require__.h() + ".hot-update.json");
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("f96ce8a011dd995190c9")
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "phaser_portal_golf:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hot module replacement */
/******/ 	(() => {
/******/ 		var currentModuleData = {};
/******/ 		var installedModules = __webpack_require__.c;
/******/ 		
/******/ 		// module and require creation
/******/ 		var currentChildModule;
/******/ 		var currentParents = [];
/******/ 		
/******/ 		// status
/******/ 		var registeredStatusHandlers = [];
/******/ 		var currentStatus = "idle";
/******/ 		
/******/ 		// while downloading
/******/ 		var blockingPromises = 0;
/******/ 		var blockingPromisesWaiting = [];
/******/ 		
/******/ 		// The update info
/******/ 		var currentUpdateApplyHandlers;
/******/ 		var queuedInvalidatedModules;
/******/ 		
/******/ 		__webpack_require__.hmrD = currentModuleData;
/******/ 		
/******/ 		__webpack_require__.i.push(function (options) {
/******/ 			var module = options.module;
/******/ 			var require = createRequire(options.require, options.id);
/******/ 			module.hot = createModuleHotObject(options.id, module);
/******/ 			module.parents = currentParents;
/******/ 			module.children = [];
/******/ 			currentParents = [];
/******/ 			options.require = require;
/******/ 		});
/******/ 		
/******/ 		__webpack_require__.hmrC = {};
/******/ 		__webpack_require__.hmrI = {};
/******/ 		
/******/ 		function createRequire(require, moduleId) {
/******/ 			var me = installedModules[moduleId];
/******/ 			if (!me) return require;
/******/ 			var fn = function (request) {
/******/ 				if (me.hot.active) {
/******/ 					if (installedModules[request]) {
/******/ 						var parents = installedModules[request].parents;
/******/ 						if (parents.indexOf(moduleId) === -1) {
/******/ 							parents.push(moduleId);
/******/ 						}
/******/ 					} else {
/******/ 						currentParents = [moduleId];
/******/ 						currentChildModule = request;
/******/ 					}
/******/ 					if (me.children.indexOf(request) === -1) {
/******/ 						me.children.push(request);
/******/ 					}
/******/ 				} else {
/******/ 					console.warn(
/******/ 						"[HMR] unexpected require(" +
/******/ 							request +
/******/ 							") from disposed module " +
/******/ 							moduleId
/******/ 					);
/******/ 					currentParents = [];
/******/ 				}
/******/ 				return require(request);
/******/ 			};
/******/ 			var createPropertyDescriptor = function (name) {
/******/ 				return {
/******/ 					configurable: true,
/******/ 					enumerable: true,
/******/ 					get: function () {
/******/ 						return require[name];
/******/ 					},
/******/ 					set: function (value) {
/******/ 						require[name] = value;
/******/ 					}
/******/ 				};
/******/ 			};
/******/ 			for (var name in require) {
/******/ 				if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
/******/ 					Object.defineProperty(fn, name, createPropertyDescriptor(name));
/******/ 				}
/******/ 			}
/******/ 			fn.e = function (chunkId, fetchPriority) {
/******/ 				return trackBlockingPromise(require.e(chunkId, fetchPriority));
/******/ 			};
/******/ 			return fn;
/******/ 		}
/******/ 		
/******/ 		function createModuleHotObject(moduleId, me) {
/******/ 			var _main = currentChildModule !== moduleId;
/******/ 			var hot = {
/******/ 				// private stuff
/******/ 				_acceptedDependencies: {},
/******/ 				_acceptedErrorHandlers: {},
/******/ 				_declinedDependencies: {},
/******/ 				_selfAccepted: false,
/******/ 				_selfDeclined: false,
/******/ 				_selfInvalidated: false,
/******/ 				_disposeHandlers: [],
/******/ 				_main: _main,
/******/ 				_requireSelf: function () {
/******/ 					currentParents = me.parents.slice();
/******/ 					currentChildModule = _main ? undefined : moduleId;
/******/ 					__webpack_require__(moduleId);
/******/ 				},
/******/ 		
/******/ 				// Module API
/******/ 				active: true,
/******/ 				accept: function (dep, callback, errorHandler) {
/******/ 					if (dep === undefined) hot._selfAccepted = true;
/******/ 					else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 					else if (typeof dep === "object" && dep !== null) {
/******/ 						for (var i = 0; i < dep.length; i++) {
/******/ 							hot._acceptedDependencies[dep[i]] = callback || function () {};
/******/ 							hot._acceptedErrorHandlers[dep[i]] = errorHandler;
/******/ 						}
/******/ 					} else {
/******/ 						hot._acceptedDependencies[dep] = callback || function () {};
/******/ 						hot._acceptedErrorHandlers[dep] = errorHandler;
/******/ 					}
/******/ 				},
/******/ 				decline: function (dep) {
/******/ 					if (dep === undefined) hot._selfDeclined = true;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._declinedDependencies[dep[i]] = true;
/******/ 					else hot._declinedDependencies[dep] = true;
/******/ 				},
/******/ 				dispose: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				addDisposeHandler: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				removeDisposeHandler: function (callback) {
/******/ 					var idx = hot._disposeHandlers.indexOf(callback);
/******/ 					if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 				},
/******/ 				invalidate: function () {
/******/ 					this._selfInvalidated = true;
/******/ 					switch (currentStatus) {
/******/ 						case "idle":
/******/ 							currentUpdateApplyHandlers = [];
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							setStatus("ready");
/******/ 							break;
/******/ 						case "ready":
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							break;
/******/ 						case "prepare":
/******/ 						case "check":
/******/ 						case "dispose":
/******/ 						case "apply":
/******/ 							(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
/******/ 								moduleId
/******/ 							);
/******/ 							break;
/******/ 						default:
/******/ 							// ignore requests in error states
/******/ 							break;
/******/ 					}
/******/ 				},
/******/ 		
/******/ 				// Management API
/******/ 				check: hotCheck,
/******/ 				apply: hotApply,
/******/ 				status: function (l) {
/******/ 					if (!l) return currentStatus;
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				addStatusHandler: function (l) {
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				removeStatusHandler: function (l) {
/******/ 					var idx = registeredStatusHandlers.indexOf(l);
/******/ 					if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
/******/ 				},
/******/ 		
/******/ 				// inherit from previous dispose call
/******/ 				data: currentModuleData[moduleId]
/******/ 			};
/******/ 			currentChildModule = undefined;
/******/ 			return hot;
/******/ 		}
/******/ 		
/******/ 		function setStatus(newStatus) {
/******/ 			currentStatus = newStatus;
/******/ 			var results = [];
/******/ 		
/******/ 			for (var i = 0; i < registeredStatusHandlers.length; i++)
/******/ 				results[i] = registeredStatusHandlers[i].call(null, newStatus);
/******/ 		
/******/ 			return Promise.all(results).then(function () {});
/******/ 		}
/******/ 		
/******/ 		function unblock() {
/******/ 			if (--blockingPromises === 0) {
/******/ 				setStatus("ready").then(function () {
/******/ 					if (blockingPromises === 0) {
/******/ 						var list = blockingPromisesWaiting;
/******/ 						blockingPromisesWaiting = [];
/******/ 						for (var i = 0; i < list.length; i++) {
/******/ 							list[i]();
/******/ 						}
/******/ 					}
/******/ 				});
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function trackBlockingPromise(promise) {
/******/ 			switch (currentStatus) {
/******/ 				case "ready":
/******/ 					setStatus("prepare");
/******/ 				/* fallthrough */
/******/ 				case "prepare":
/******/ 					blockingPromises++;
/******/ 					promise.then(unblock, unblock);
/******/ 					return promise;
/******/ 				default:
/******/ 					return promise;
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function waitForBlockingPromises(fn) {
/******/ 			if (blockingPromises === 0) return fn();
/******/ 			return new Promise(function (resolve) {
/******/ 				blockingPromisesWaiting.push(function () {
/******/ 					resolve(fn());
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotCheck(applyOnUpdate) {
/******/ 			if (currentStatus !== "idle") {
/******/ 				throw new Error("check() is only allowed in idle status");
/******/ 			}
/******/ 			return setStatus("check")
/******/ 				.then(__webpack_require__.hmrM)
/******/ 				.then(function (update) {
/******/ 					if (!update) {
/******/ 						return setStatus(applyInvalidatedModules() ? "ready" : "idle").then(
/******/ 							function () {
/******/ 								return null;
/******/ 							}
/******/ 						);
/******/ 					}
/******/ 		
/******/ 					return setStatus("prepare").then(function () {
/******/ 						var updatedModules = [];
/******/ 						currentUpdateApplyHandlers = [];
/******/ 		
/******/ 						return Promise.all(
/******/ 							Object.keys(__webpack_require__.hmrC).reduce(function (
/******/ 								promises,
/******/ 								key
/******/ 							) {
/******/ 								__webpack_require__.hmrC[key](
/******/ 									update.c,
/******/ 									update.r,
/******/ 									update.m,
/******/ 									promises,
/******/ 									currentUpdateApplyHandlers,
/******/ 									updatedModules
/******/ 								);
/******/ 								return promises;
/******/ 							}, [])
/******/ 						).then(function () {
/******/ 							return waitForBlockingPromises(function () {
/******/ 								if (applyOnUpdate) {
/******/ 									return internalApply(applyOnUpdate);
/******/ 								}
/******/ 								return setStatus("ready").then(function () {
/******/ 									return updatedModules;
/******/ 								});
/******/ 							});
/******/ 						});
/******/ 					});
/******/ 				});
/******/ 		}
/******/ 		
/******/ 		function hotApply(options) {
/******/ 			if (currentStatus !== "ready") {
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw new Error(
/******/ 						"apply() is only allowed in ready status (state: " +
/******/ 							currentStatus +
/******/ 							")"
/******/ 					);
/******/ 				});
/******/ 			}
/******/ 			return internalApply(options);
/******/ 		}
/******/ 		
/******/ 		function internalApply(options) {
/******/ 			options = options || {};
/******/ 		
/******/ 			applyInvalidatedModules();
/******/ 		
/******/ 			var results = currentUpdateApplyHandlers.map(function (handler) {
/******/ 				return handler(options);
/******/ 			});
/******/ 			currentUpdateApplyHandlers = undefined;
/******/ 		
/******/ 			var errors = results
/******/ 				.map(function (r) {
/******/ 					return r.error;
/******/ 				})
/******/ 				.filter(Boolean);
/******/ 		
/******/ 			if (errors.length > 0) {
/******/ 				return setStatus("abort").then(function () {
/******/ 					throw errors[0];
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			// Now in "dispose" phase
/******/ 			var disposePromise = setStatus("dispose");
/******/ 		
/******/ 			results.forEach(function (result) {
/******/ 				if (result.dispose) result.dispose();
/******/ 			});
/******/ 		
/******/ 			// Now in "apply" phase
/******/ 			var applyPromise = setStatus("apply");
/******/ 		
/******/ 			var error;
/******/ 			var reportError = function (err) {
/******/ 				if (!error) error = err;
/******/ 			};
/******/ 		
/******/ 			var outdatedModules = [];
/******/ 		
/******/ 			var onAccepted = function () {
/******/ 				return Promise.all([disposePromise, applyPromise]).then(function () {
/******/ 					// handle errors in accept handlers and self accepted module load
/******/ 					if (error) {
/******/ 						return setStatus("fail").then(function () {
/******/ 							throw error;
/******/ 						});
/******/ 					}
/******/ 		
/******/ 					if (queuedInvalidatedModules) {
/******/ 						return internalApply(options).then(function (list) {
/******/ 							outdatedModules.forEach(function (moduleId) {
/******/ 								if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 							});
/******/ 							return list;
/******/ 						});
/******/ 					}
/******/ 		
/******/ 					return setStatus("idle").then(function () {
/******/ 						return outdatedModules;
/******/ 					});
/******/ 				});
/******/ 			};
/******/ 		
/******/ 			return Promise.all(
/******/ 				results
/******/ 					.filter(function (result) {
/******/ 						return result.apply;
/******/ 					})
/******/ 					.map(function (result) {
/******/ 						return result.apply(reportError);
/******/ 					})
/******/ 			)
/******/ 				.then(function (applyResults) {
/******/ 					applyResults.forEach(function (modules) {
/******/ 						if (modules) {
/******/ 							for (var i = 0; i < modules.length; i++) {
/******/ 								outdatedModules.push(modules[i]);
/******/ 							}
/******/ 						}
/******/ 					});
/******/ 				})
/******/ 				.then(onAccepted);
/******/ 		}
/******/ 		
/******/ 		function applyInvalidatedModules() {
/******/ 			if (queuedInvalidatedModules) {
/******/ 				if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
/******/ 				Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 					queuedInvalidatedModules.forEach(function (moduleId) {
/******/ 						__webpack_require__.hmrI[key](
/******/ 							moduleId,
/******/ 							currentUpdateApplyHandlers
/******/ 						);
/******/ 					});
/******/ 				});
/******/ 				queuedInvalidatedModules = undefined;
/******/ 				return true;
/******/ 			}
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = __webpack_require__.hmrS_jsonp = __webpack_require__.hmrS_jsonp || {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		var currentUpdatedModulesList;
/******/ 		var waitingUpdateResolves = {};
/******/ 		function loadUpdateChunk(chunkId, updatedModulesList) {
/******/ 			currentUpdatedModulesList = updatedModulesList;
/******/ 			return new Promise((resolve, reject) => {
/******/ 				waitingUpdateResolves[chunkId] = resolve;
/******/ 				// start update chunk loading
/******/ 				var url = __webpack_require__.p + __webpack_require__.hu(chunkId);
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				var loadingEnded = (event) => {
/******/ 					if(waitingUpdateResolves[chunkId]) {
/******/ 						waitingUpdateResolves[chunkId] = undefined
/******/ 						var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 						var realSrc = event && event.target && event.target.src;
/******/ 						error.message = 'Loading hot update chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 						error.name = 'ChunkLoadError';
/******/ 						error.type = errorType;
/******/ 						error.request = realSrc;
/******/ 						reject(error);
/******/ 					}
/******/ 				};
/******/ 				__webpack_require__.l(url, loadingEnded);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		self["webpackHotUpdatephaser_portal_golf"] = (chunkId, moreModules, runtime) => {
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					currentUpdate[moduleId] = moreModules[moduleId];
/******/ 					if(currentUpdatedModulesList) currentUpdatedModulesList.push(moduleId);
/******/ 				}
/******/ 			}
/******/ 			if(runtime) currentUpdateRuntime.push(runtime);
/******/ 			if(waitingUpdateResolves[chunkId]) {
/******/ 				waitingUpdateResolves[chunkId]();
/******/ 				waitingUpdateResolves[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var currentUpdateChunks;
/******/ 		var currentUpdate;
/******/ 		var currentUpdateRemovedChunks;
/******/ 		var currentUpdateRuntime;
/******/ 		function applyHandler(options) {
/******/ 			if (__webpack_require__.f) delete __webpack_require__.f.jsonpHmr;
/******/ 			currentUpdateChunks = undefined;
/******/ 			function getAffectedModuleEffects(updateModuleId) {
/******/ 				var outdatedModules = [updateModuleId];
/******/ 				var outdatedDependencies = {};
/******/ 		
/******/ 				var queue = outdatedModules.map(function (id) {
/******/ 					return {
/******/ 						chain: [id],
/******/ 						id: id
/******/ 					};
/******/ 				});
/******/ 				while (queue.length > 0) {
/******/ 					var queueItem = queue.pop();
/******/ 					var moduleId = queueItem.id;
/******/ 					var chain = queueItem.chain;
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (
/******/ 						!module ||
/******/ 						(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 					)
/******/ 						continue;
/******/ 					if (module.hot._selfDeclined) {
/******/ 						return {
/******/ 							type: "self-declined",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					if (module.hot._main) {
/******/ 						return {
/******/ 							type: "unaccepted",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					for (var i = 0; i < module.parents.length; i++) {
/******/ 						var parentId = module.parents[i];
/******/ 						var parent = __webpack_require__.c[parentId];
/******/ 						if (!parent) continue;
/******/ 						if (parent.hot._declinedDependencies[moduleId]) {
/******/ 							return {
/******/ 								type: "declined",
/******/ 								chain: chain.concat([parentId]),
/******/ 								moduleId: moduleId,
/******/ 								parentId: parentId
/******/ 							};
/******/ 						}
/******/ 						if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 						if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 							if (!outdatedDependencies[parentId])
/******/ 								outdatedDependencies[parentId] = [];
/******/ 							addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 							continue;
/******/ 						}
/******/ 						delete outdatedDependencies[parentId];
/******/ 						outdatedModules.push(parentId);
/******/ 						queue.push({
/******/ 							chain: chain.concat([parentId]),
/******/ 							id: parentId
/******/ 						});
/******/ 					}
/******/ 				}
/******/ 		
/******/ 				return {
/******/ 					type: "accepted",
/******/ 					moduleId: updateModuleId,
/******/ 					outdatedModules: outdatedModules,
/******/ 					outdatedDependencies: outdatedDependencies
/******/ 				};
/******/ 			}
/******/ 		
/******/ 			function addAllToSet(a, b) {
/******/ 				for (var i = 0; i < b.length; i++) {
/******/ 					var item = b[i];
/******/ 					if (a.indexOf(item) === -1) a.push(item);
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			// at begin all updates modules are outdated
/******/ 			// the "outdated" status can propagate to parents if they don't accept the children
/******/ 			var outdatedDependencies = {};
/******/ 			var outdatedModules = [];
/******/ 			var appliedUpdate = {};
/******/ 		
/******/ 			var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 				);
/******/ 			};
/******/ 		
/******/ 			for (var moduleId in currentUpdate) {
/******/ 				if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 					var newModuleFactory = currentUpdate[moduleId];
/******/ 					var result = newModuleFactory
/******/ 						? getAffectedModuleEffects(moduleId)
/******/ 						: {
/******/ 								type: "disposed",
/******/ 								moduleId: moduleId
/******/ 							};
/******/ 					/** @type {Error|false} */
/******/ 					var abortError = false;
/******/ 					var doApply = false;
/******/ 					var doDispose = false;
/******/ 					var chainInfo = "";
/******/ 					if (result.chain) {
/******/ 						chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 					}
/******/ 					switch (result.type) {
/******/ 						case "self-declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of self decline: " +
/******/ 										result.moduleId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of declined dependency: " +
/******/ 										result.moduleId +
/******/ 										" in " +
/******/ 										result.parentId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "unaccepted":
/******/ 							if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 							if (!options.ignoreUnaccepted)
/******/ 								abortError = new Error(
/******/ 									"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "accepted":
/******/ 							if (options.onAccepted) options.onAccepted(result);
/******/ 							doApply = true;
/******/ 							break;
/******/ 						case "disposed":
/******/ 							if (options.onDisposed) options.onDisposed(result);
/******/ 							doDispose = true;
/******/ 							break;
/******/ 						default:
/******/ 							throw new Error("Unexception type " + result.type);
/******/ 					}
/******/ 					if (abortError) {
/******/ 						return {
/******/ 							error: abortError
/******/ 						};
/******/ 					}
/******/ 					if (doApply) {
/******/ 						appliedUpdate[moduleId] = newModuleFactory;
/******/ 						addAllToSet(outdatedModules, result.outdatedModules);
/******/ 						for (moduleId in result.outdatedDependencies) {
/******/ 							if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 								if (!outdatedDependencies[moduleId])
/******/ 									outdatedDependencies[moduleId] = [];
/******/ 								addAllToSet(
/******/ 									outdatedDependencies[moduleId],
/******/ 									result.outdatedDependencies[moduleId]
/******/ 								);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 					if (doDispose) {
/******/ 						addAllToSet(outdatedModules, [result.moduleId]);
/******/ 						appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 			currentUpdate = undefined;
/******/ 		
/******/ 			// Store self accepted outdated modules to require them later by the module system
/******/ 			var outdatedSelfAcceptedModules = [];
/******/ 			for (var j = 0; j < outdatedModules.length; j++) {
/******/ 				var outdatedModuleId = outdatedModules[j];
/******/ 				var module = __webpack_require__.c[outdatedModuleId];
/******/ 				if (
/******/ 					module &&
/******/ 					(module.hot._selfAccepted || module.hot._main) &&
/******/ 					// removed self-accepted modules should not be required
/******/ 					appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 					// when called invalidate self-accepting is not possible
/******/ 					!module.hot._selfInvalidated
/******/ 				) {
/******/ 					outdatedSelfAcceptedModules.push({
/******/ 						module: outdatedModuleId,
/******/ 						require: module.hot._requireSelf,
/******/ 						errorHandler: module.hot._selfAccepted
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			var moduleOutdatedDependencies;
/******/ 		
/******/ 			return {
/******/ 				dispose: function () {
/******/ 					currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 						delete installedChunks[chunkId];
/******/ 					});
/******/ 					currentUpdateRemovedChunks = undefined;
/******/ 		
/******/ 					var idx;
/******/ 					var queue = outdatedModules.slice();
/******/ 					while (queue.length > 0) {
/******/ 						var moduleId = queue.pop();
/******/ 						var module = __webpack_require__.c[moduleId];
/******/ 						if (!module) continue;
/******/ 		
/******/ 						var data = {};
/******/ 		
/******/ 						// Call dispose handlers
/******/ 						var disposeHandlers = module.hot._disposeHandlers;
/******/ 						for (j = 0; j < disposeHandlers.length; j++) {
/******/ 							disposeHandlers[j].call(null, data);
/******/ 						}
/******/ 						__webpack_require__.hmrD[moduleId] = data;
/******/ 		
/******/ 						// disable module (this disables requires from this module)
/******/ 						module.hot.active = false;
/******/ 		
/******/ 						// remove module from cache
/******/ 						delete __webpack_require__.c[moduleId];
/******/ 		
/******/ 						// when disposing there is no need to call dispose handler
/******/ 						delete outdatedDependencies[moduleId];
/******/ 		
/******/ 						// remove "parents" references from all children
/******/ 						for (j = 0; j < module.children.length; j++) {
/******/ 							var child = __webpack_require__.c[module.children[j]];
/******/ 							if (!child) continue;
/******/ 							idx = child.parents.indexOf(moduleId);
/******/ 							if (idx >= 0) {
/******/ 								child.parents.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// remove outdated dependency from module children
/******/ 					var dependency;
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									dependency = moduleOutdatedDependencies[j];
/******/ 									idx = module.children.indexOf(dependency);
/******/ 									if (idx >= 0) module.children.splice(idx, 1);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				},
/******/ 				apply: function (reportError) {
/******/ 					var acceptPromises = [];
/******/ 					// insert new code
/******/ 					for (var updateModuleId in appliedUpdate) {
/******/ 						if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 							__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// run new runtime modules
/******/ 					for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 						currentUpdateRuntime[i](__webpack_require__);
/******/ 					}
/******/ 		
/******/ 					// call accept handlers
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							var module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								var callbacks = [];
/******/ 								var errorHandlers = [];
/******/ 								var dependenciesForCallbacks = [];
/******/ 								for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									var dependency = moduleOutdatedDependencies[j];
/******/ 									var acceptCallback =
/******/ 										module.hot._acceptedDependencies[dependency];
/******/ 									var errorHandler =
/******/ 										module.hot._acceptedErrorHandlers[dependency];
/******/ 									if (acceptCallback) {
/******/ 										if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 										callbacks.push(acceptCallback);
/******/ 										errorHandlers.push(errorHandler);
/******/ 										dependenciesForCallbacks.push(dependency);
/******/ 									}
/******/ 								}
/******/ 								for (var k = 0; k < callbacks.length; k++) {
/******/ 									var result;
/******/ 									try {
/******/ 										result = callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 									} catch (err) {
/******/ 										if (typeof errorHandlers[k] === "function") {
/******/ 											try {
/******/ 												errorHandlers[k](err, {
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k]
/******/ 												});
/******/ 											} catch (err2) {
/******/ 												if (options.onErrored) {
/******/ 													options.onErrored({
/******/ 														type: "accept-error-handler-errored",
/******/ 														moduleId: outdatedModuleId,
/******/ 														dependencyId: dependenciesForCallbacks[k],
/******/ 														error: err2,
/******/ 														originalError: err
/******/ 													});
/******/ 												}
/******/ 												if (!options.ignoreErrored) {
/******/ 													reportError(err2);
/******/ 													reportError(err);
/******/ 												}
/******/ 											}
/******/ 										} else {
/******/ 											if (options.onErrored) {
/******/ 												options.onErrored({
/******/ 													type: "accept-errored",
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k],
/******/ 													error: err
/******/ 												});
/******/ 											}
/******/ 											if (!options.ignoreErrored) {
/******/ 												reportError(err);
/******/ 											}
/******/ 										}
/******/ 									}
/******/ 									if (result && typeof result.then === "function") {
/******/ 										acceptPromises.push(result);
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					var onAccepted = function () {
/******/ 						// Load self accepted modules
/******/ 						for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 							var item = outdatedSelfAcceptedModules[o];
/******/ 							var moduleId = item.module;
/******/ 							try {
/******/ 								item.require(moduleId);
/******/ 							} catch (err) {
/******/ 								if (typeof item.errorHandler === "function") {
/******/ 									try {
/******/ 										item.errorHandler(err, {
/******/ 											moduleId: moduleId,
/******/ 											module: __webpack_require__.c[moduleId]
/******/ 										});
/******/ 									} catch (err1) {
/******/ 										if (options.onErrored) {
/******/ 											options.onErrored({
/******/ 												type: "self-accept-error-handler-errored",
/******/ 												moduleId: moduleId,
/******/ 												error: err1,
/******/ 												originalError: err
/******/ 											});
/******/ 										}
/******/ 										if (!options.ignoreErrored) {
/******/ 											reportError(err1);
/******/ 											reportError(err);
/******/ 										}
/******/ 									}
/******/ 								} else {
/******/ 									if (options.onErrored) {
/******/ 										options.onErrored({
/******/ 											type: "self-accept-errored",
/******/ 											moduleId: moduleId,
/******/ 											error: err
/******/ 										});
/******/ 									}
/******/ 									if (!options.ignoreErrored) {
/******/ 										reportError(err);
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					};
/******/ 		
/******/ 					return Promise.all(acceptPromises)
/******/ 						.then(onAccepted)
/******/ 						.then(function () {
/******/ 							return outdatedModules;
/******/ 						});
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 		__webpack_require__.hmrI.jsonp = function (moduleId, applyHandlers) {
/******/ 			if (!currentUpdate) {
/******/ 				currentUpdate = {};
/******/ 				currentUpdateRuntime = [];
/******/ 				currentUpdateRemovedChunks = [];
/******/ 				applyHandlers.push(applyHandler);
/******/ 			}
/******/ 			if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 			}
/******/ 		};
/******/ 		__webpack_require__.hmrC.jsonp = function (
/******/ 			chunkIds,
/******/ 			removedChunks,
/******/ 			removedModules,
/******/ 			promises,
/******/ 			applyHandlers,
/******/ 			updatedModulesList
/******/ 		) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			currentUpdateChunks = {};
/******/ 			currentUpdateRemovedChunks = removedChunks;
/******/ 			currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 				obj[key] = false;
/******/ 				return obj;
/******/ 			}, {});
/******/ 			currentUpdateRuntime = [];
/******/ 			chunkIds.forEach(function (chunkId) {
/******/ 				if (
/******/ 					__webpack_require__.o(installedChunks, chunkId) &&
/******/ 					installedChunks[chunkId] !== undefined
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				} else {
/******/ 					currentUpdateChunks[chunkId] = false;
/******/ 				}
/******/ 			});
/******/ 			if (__webpack_require__.f) {
/******/ 				__webpack_require__.f.jsonpHmr = function (chunkId, promises) {
/******/ 					if (
/******/ 						currentUpdateChunks &&
/******/ 						__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 						!currentUpdateChunks[chunkId]
/******/ 					) {
/******/ 						promises.push(loadUpdateChunk(chunkId));
/******/ 						currentUpdateChunks[chunkId] = true;
/******/ 					}
/******/ 				};
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.hmrM = () => {
/******/ 			if (typeof fetch === "undefined") throw new Error("No browser support: need fetch API");
/******/ 			return fetch(__webpack_require__.p + __webpack_require__.hmrF()).then((response) => {
/******/ 				if(response.status === 404) return; // no update available
/******/ 				if(!response.ok) throw new Error("Failed to fetch update manifest " + response.statusText);
/******/ 				return response.json();
/******/ 			});
/******/ 		};
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;