/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/Content/content.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Content/Base64Links.js":
/*!************************************!*\
  !*** ./src/Content/Base64Links.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Links2 = __webpack_require__(/*! ./Links.js */ "./src/Content/Links.js");

var _Links3 = _interopRequireDefault(_Links2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Base64Links = function (_Links) {
	_inherits(Base64Links, _Links);

	function Base64Links() {
		_classCallCheck(this, Base64Links);

		return _possibleConstructorReturn(this, (Base64Links.__proto__ || Object.getPrototypeOf(Base64Links)).apply(this, arguments));
	}

	_createClass(Base64Links, [{
		key: 'getLink',
		value: function getLink(item) {
			return item;
		}
	}]);

	return Base64Links;
}(_Links3.default);

exports.default = Base64Links;

/***/ }),

/***/ "./src/Content/FromHightToLowTypeSort.js":
/*!***********************************************!*\
  !*** ./src/Content/FromHightToLowTypeSort.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _TypeSort2 = __webpack_require__(/*! ./TypeSort.js */ "./src/Content/TypeSort.js");

var _TypeSort3 = _interopRequireDefault(_TypeSort2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FromHightToLowTypeSort = function (_TypeSort) {
	_inherits(FromHightToLowTypeSort, _TypeSort);

	function FromHightToLowTypeSort() {
		_classCallCheck(this, FromHightToLowTypeSort);

		return _possibleConstructorReturn(this, (FromHightToLowTypeSort.__proto__ || Object.getPrototypeOf(FromHightToLowTypeSort)).apply(this, arguments));
	}

	_createClass(FromHightToLowTypeSort, [{
		key: 'getTypeSort',
		value: function getTypeSort(a, b) {
			if (a[2] < b[2]) return 1;
			if (a[2] > b[2]) return -1;
		}
	}]);

	return FromHightToLowTypeSort;
}(_TypeSort3.default);

exports.default = FromHightToLowTypeSort;

/***/ }),

/***/ "./src/Content/Links.js":
/*!******************************!*\
  !*** ./src/Content/Links.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Links = function () {
	function Links() {
		_classCallCheck(this, Links);
	}

	_createClass(Links, [{
		key: "getLink",
		value: function getLink(item) {
			return item;
		}
	}]);

	return Links;
}();

exports.default = Links;

/***/ }),

/***/ "./src/Content/LinksCreator.js":
/*!*************************************!*\
  !*** ./src/Content/LinksCreator.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _WithHttpLinks = __webpack_require__(/*! ./WithHttpLinks.js */ "./src/Content/WithHttpLinks.js");

var _WithHttpLinks2 = _interopRequireDefault(_WithHttpLinks);

var _WithoutHostNameLinks = __webpack_require__(/*! ./WithoutHostNameLinks.js */ "./src/Content/WithoutHostNameLinks.js");

var _WithoutHostNameLinks2 = _interopRequireDefault(_WithoutHostNameLinks);

var _WithStartDoubleSlashLinks = __webpack_require__(/*! ./WithStartDoubleSlashLinks.js */ "./src/Content/WithStartDoubleSlashLinks.js");

var _WithStartDoubleSlashLinks2 = _interopRequireDefault(_WithStartDoubleSlashLinks);

var _Base64Links = __webpack_require__(/*! ./Base64Links.js */ "./src/Content/Base64Links.js");

var _Base64Links2 = _interopRequireDefault(_Base64Links);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LinksCreator = function LinksCreator(item) {
	_classCallCheck(this, LinksCreator);

	if (item.substring(0, 4) === "http" || item.substring(0, 5) === "https") {
		return new _WithHttpLinks2.default();
	} else if (item.substring(0, 2) === "//") {
		return new _WithStartDoubleSlashLinks2.default();
	} else if (item.indexOf("data:image/gif;base64,") !== -1) {
		return new _Base64Links2.default();
	} else {
		return new _WithoutHostNameLinks2.default();
	}
};

exports.default = LinksCreator;

/***/ }),

/***/ "./src/Content/Model.js":
/*!******************************!*\
  !*** ./src/Content/Model.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _LinksCreator = __webpack_require__(/*! ./LinksCreator.js */ "./src/Content/LinksCreator.js");

var _LinksCreator2 = _interopRequireDefault(_LinksCreator);

var _TypeSort = __webpack_require__(/*! ./TypeSort.js */ "./src/Content/TypeSort.js");

var _TypeSort2 = _interopRequireDefault(_TypeSort);

var _FromHightToLowTypeSort = __webpack_require__(/*! ./FromHightToLowTypeSort.js */ "./src/Content/FromHightToLowTypeSort.js");

var _FromHightToLowTypeSort2 = _interopRequireDefault(_FromHightToLowTypeSort);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Model = function () {
	function Model(DEFAULT_TYPE_SORT, DEFAULT_NUMBER_FILES) {
		_classCallCheck(this, Model);

		this.hostProtocol = window.location.protocol;
		this.hostName = window.location.hostname;
		this.numberFiles = DEFAULT_NUMBER_FILES;
		this.defineTypeSort(DEFAULT_TYPE_SORT);
		this.initModel();
	}

	_createClass(Model, [{
		key: 'initModel',
		value: function initModel() {
			if (this.getUniqueSrcs().size !== 0) {
				this.mergeUrlSizeScale();
			} else {
				this.setEmptyArrayFiles();
			}
		}
	}, {
		key: 'setEmptyArrayFiles',
		value: function setEmptyArrayFiles() {
			this.readyArr = [];
		}
	}, {
		key: 'setReadyArr',
		value: function setReadyArr(arrayUrlSizeScale) {
			this.readyArr = this.editFormatSizeFile(arrayUrlSizeScale).sort(this.sortState);
		}
	}, {
		key: 'getReadyArr',
		value: function getReadyArr() {
			return this.readyArr;
		}
	}, {
		key: 'mergeUrlSizeScale',
		value: function mergeUrlSizeScale() {
			var _this = this;

			var createdValidLinkArr = this.createValidLink();
			var arrayUrlSizeScale = [];
			var countIteration = 0;

			var _loop = function _loop(i) {
				Promise.all([_this.findSizeFiles(createdValidLinkArr[i]), _this.findScalePic(createdValidLinkArr[i])]).then(function (results) {
					countIteration++;
					arrayUrlSizeScale.push([createdValidLinkArr[i], results[0], results[1]]);
					if (arrayUrlSizeScale.length === countIteration) {
						_this.setReadyArr(arrayUrlSizeScale);
					}
				});
			};

			for (var i = 0; i < createdValidLinkArr.length; i++) {
				_loop(i);
			}
		}
	}, {
		key: 'editFormatSizeFile',
		value: function editFormatSizeFile(size) {
			var arrayFromStorage = size.map(function (item, i) {
				if (item[1] === null || item[1] === "error") {
					return [item[0], 0, item[2]];
				} else {
					return [item[0], Math.round(item[1] / 1024 * 100) / 100, item[2]];
				}
			});
			return arrayFromStorage;
		}
	}, {
		key: 'findSizeFiles',
		value: function findSizeFiles(item) {
			return new Promise(function (resolve, reject) {
				var xhr = new XMLHttpRequest();
				xhr.open('GET', item, true);
				xhr.send();
				xhr.onreadystatechange = function () {
					if (xhr.readyState === 4) {
						if (xhr.status === 200) {
							if (item.indexOf("data:image/gif;base64,") === -1) {
								resolve(xhr.getResponseHeader('Content-Length'));
							} else {
								var base64str = item.substr(item.indexOf('data:image/gif;base64,')).substr(22);
								resolve(atob(base64str).length);
							}
						} else {
							resolve("error");
						}
					}
				};
			});
		}
	}, {
		key: 'findScalePic',
		value: function findScalePic(item) {
			return new Promise(function (resolve) {
				var img = document.createElement("img");
				img.src = item;
				try {
					img.onload = function () {
						resolve(img.width * img.height);
					};
				} catch (err) {
					resolve("error");
				}
			});
		}
	}, {
		key: 'createValidLink',
		value: function createValidLink() {
			var _this2 = this;

			var collectLinksArr = this.createSrcsArray();
			return collectLinksArr.map(function (item) {
				var linksCreator = new _LinksCreator2.default(item);
				return linksCreator.getLink(item, _this2.hostProtocol, _this2.hostName);
			});
		}
	}, {
		key: 'createSrcsArray',
		value: function createSrcsArray() {
			var srcsSet = this.getUniqueSrcs();
			var srcsArray = [];
			srcsSet.forEach(function (item) {
				srcsArray.push(item);
			});
			return srcsArray;
		}
	}, {
		key: 'defineTypeSort',
		value: function defineTypeSort(codeSort) {
			if (codeSort === 1) {
				this.sortState = new _FromHightToLowTypeSort2.default().getTypeSort;
			} else {
				this.sortState = new _TypeSort2.default().getTypeSort;
			}
		}
	}, {
		key: 'getUniqueSrcs',
		value: function getUniqueSrcs() {
			var srcsSet = new Set();
			document.querySelectorAll("img").forEach(function (item) {
				srcsSet.add(item.getAttribute("src"));
			});
			return srcsSet;
		}
	}, {
		key: 'getNumberFiles',
		value: function getNumberFiles() {
			return this.numberFiles;
		}
	}, {
		key: 'setNumberFiles',
		value: function setNumberFiles(number) {
			this.numberFiles = number;
		}
	}, {
		key: 'setNumberFilesToStorage',
		value: function setNumberFilesToStorage(number) {
			chrome.storage.sync.set({ number_storage: number }, function () {});
			this.setNumberFiles(number);
		}
	}, {
		key: 'getNumberLinksFromStorage',
		value: function getNumberLinksFromStorage() {
			var _this3 = this;

			return new Promise(function (resolve, reject) {
				chrome.storage.sync.get("number_storage", function (data) {
					if (data.number_storage == undefined) {
						resolve(_this3.numberFiles);
					} else {
						resolve(data.number_storage);
					}
				});
			});
		}
	}, {
		key: 'getNumberDownload',
		value: function getNumberDownload() {
			return this.getNumberFiles() > this.getReadyArr().length ? this.getReadyArr().length : this.getNumberFiles();
		}
	}, {
		key: 'downloadFiles',
		value: function downloadFiles() {
			for (var i = 0; i < this.getNumberDownload(); i++) {
				chrome.runtime.sendMessage({ msg: "downloadFiles", url: this.getReadyArr()[i][0] }, function (response) {});
			}
		}
	}]);

	return Model;
}();

exports.default = Model;

/***/ }),

/***/ "./src/Content/TypeSort.js":
/*!*********************************!*\
  !*** ./src/Content/TypeSort.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TypeSort = function () {
	function TypeSort() {
		_classCallCheck(this, TypeSort);
	}

	_createClass(TypeSort, [{
		key: "getTypeSort",
		value: function getTypeSort(a, b) {
			if (a[1] > b[1]) return 1;
			if (a[1] < b[1]) return -1;
		}
	}]);

	return TypeSort;
}();

exports.default = TypeSort;

/***/ }),

/***/ "./src/Content/WithHttpLinks.js":
/*!**************************************!*\
  !*** ./src/Content/WithHttpLinks.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Links2 = __webpack_require__(/*! ./Links.js */ "./src/Content/Links.js");

var _Links3 = _interopRequireDefault(_Links2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WithHttpLinks = function (_Links) {
	_inherits(WithHttpLinks, _Links);

	function WithHttpLinks() {
		_classCallCheck(this, WithHttpLinks);

		return _possibleConstructorReturn(this, (WithHttpLinks.__proto__ || Object.getPrototypeOf(WithHttpLinks)).apply(this, arguments));
	}

	_createClass(WithHttpLinks, [{
		key: 'getLink',
		value: function getLink(item) {
			return item;
		}
	}]);

	return WithHttpLinks;
}(_Links3.default);

exports.default = WithHttpLinks;

/***/ }),

/***/ "./src/Content/WithStartDoubleSlashLinks.js":
/*!**************************************************!*\
  !*** ./src/Content/WithStartDoubleSlashLinks.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Links2 = __webpack_require__(/*! ./Links.js */ "./src/Content/Links.js");

var _Links3 = _interopRequireDefault(_Links2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WithStartDoubleSlashLinks = function (_Links) {
	_inherits(WithStartDoubleSlashLinks, _Links);

	function WithStartDoubleSlashLinks() {
		_classCallCheck(this, WithStartDoubleSlashLinks);

		return _possibleConstructorReturn(this, (WithStartDoubleSlashLinks.__proto__ || Object.getPrototypeOf(WithStartDoubleSlashLinks)).apply(this, arguments));
	}

	_createClass(WithStartDoubleSlashLinks, [{
		key: "getLink",
		value: function getLink(item, hostProtocol) {
			return hostProtocol + "//" + item.split("").slice(2).join("");
		}
	}]);

	return WithStartDoubleSlashLinks;
}(_Links3.default);

exports.default = WithStartDoubleSlashLinks;

/***/ }),

/***/ "./src/Content/WithoutHostNameLinks.js":
/*!*********************************************!*\
  !*** ./src/Content/WithoutHostNameLinks.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Links2 = __webpack_require__(/*! ./Links.js */ "./src/Content/Links.js");

var _Links3 = _interopRequireDefault(_Links2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WithoutHostNameLinks = function (_Links) {
	_inherits(WithoutHostNameLinks, _Links);

	function WithoutHostNameLinks() {
		_classCallCheck(this, WithoutHostNameLinks);

		return _possibleConstructorReturn(this, (WithoutHostNameLinks.__proto__ || Object.getPrototypeOf(WithoutHostNameLinks)).apply(this, arguments));
	}

	_createClass(WithoutHostNameLinks, [{
		key: "getLink",
		value: function getLink(item, hostProtocol, hostName) {
			return hostProtocol + "//" + hostName + "/" + item;
		}
	}]);

	return WithoutHostNameLinks;
}(_Links3.default);

exports.default = WithoutHostNameLinks;

/***/ }),

/***/ "./src/Content/content.js":
/*!********************************!*\
  !*** ./src/Content/content.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Model = __webpack_require__(/*! ./Model.js */ "./src/Content/Model.js");

var _Model2 = _interopRequireDefault(_Model);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Controller = function () {
	function Controller(DEFAULT_NUMBER_FILES, DEFAULT_TYPE_SORT) {
		_classCallCheck(this, Controller);

		if (window && window.top === window) {
			this.model = new _Model2.default(DEFAULT_TYPE_SORT, DEFAULT_NUMBER_FILES);
			this.startExtension();
			this.listenerMessages();
		}
	}

	_createClass(Controller, [{
		key: 'startExtension',
		value: function startExtension() {
			var _this = this;

			chrome.extension.onMessage.addListener(function (msg, sender, sendResponse) {
				if (msg.action == 'open_dialog_box') {
					var extensionOrigin = 'chrome-extension://' + chrome.runtime.id;
					if (!location.ancestorOrigins.contains(extensionOrigin)) {
						if (document.querySelector("#downLoadImagesExtension")) {
							return;
						} else {
							_this.initFrame();
							_this.model.getNumberLinksFromStorage().then(function (numberFiles) {
								_this.model.setNumberFiles(numberFiles);
							});
							setTimeout(function () {
								return _this.renderExtension();
							}, 1000);
						}
					}
				}
			});
		}
	}, {
		key: 'listenerMessages',
		value: function listenerMessages() {
			var _this2 = this;

			window.addEventListener("message", function (event) {
				switch (event.data.message) {
					case "clickOnCountRowsField":
						_this2.changeOnCountRowsField(event.data.numberFiles);
						break;
					case "clickOnDownloadButton":
						_this2.model.downloadFiles();
						break;
					case "clickOnCloseButton":
						_this2.closeExtension();
						break;
					default:
						return;
				}
			});
		}
	}, {
		key: 'renderExtension',
		value: function renderExtension() {
			this.iframe.contentWindow.postMessage({
				message: "renderExtension",
				numberFiles: this.model.getNumberFiles(),
				numberDownload: this.model.getNumberDownload(),
				readyArr: this.model.getReadyArr()
			}, "*");
		}
	}, {
		key: 'changeOnCountRowsField',
		value: function changeOnCountRowsField(number) {
			this.model.setNumberFilesToStorage(event.data.numberFiles);
			this.renderExtension();
		}
	}, {
		key: 'closeExtension',
		value: function closeExtension() {
			var iframe = document.querySelector("#downLoadImagesExtension");
			document.body.removeChild(iframe);
		}
	}, {
		key: 'initFrame',
		value: function initFrame() {
			this.iframe = document.createElement('iframe');
			this.iframe.src = chrome.runtime.getURL('frame.html');
			this.iframe.id = "downLoadImagesExtension";
			this.iframe.style.cssText = 'border:none;position:fixed;top:0;left:0;right:0;bottom:0;margin:auto;display:flex;justify-content:center; align-items: center; width:100%;max-width:560px;height:90vh;z-index:99999999;';
			document.body.appendChild(this.iframe);
		}
	}]);

	return Controller;
}();

var DEFAULT_TYPE_SORT = 1;
var DEFAULT_NUMBER_FILES = 5;
setTimeout(function () {
	return new Controller(DEFAULT_NUMBER_FILES, DEFAULT_TYPE_SORT);
}, 1000);

/***/ })

/******/ });
//# sourceMappingURL=content.js.map