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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/View/View.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/View/View.js":
/*!**************************!*\
  !*** ./src/View/View.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var View = function () {
	function View() {
		_classCallCheck(this, View);

		this.listenerMessages();
		this.resultTable = document.querySelector(".result-table__result");
		this.inputNumber = document.querySelector(".extension__input");
		this.inputNumber.addEventListener("input", function () {
			window.parent.postMessage({ message: "clickOnCountRowsField", numberFiles: this.value }, "*");
		});
		document.querySelector("#download").addEventListener("click", function () {
			window.parent.postMessage({ message: "clickOnDownloadButton" }, "*");
		});
		document.querySelector("#close").addEventListener("click", function () {
			window.parent.postMessage({ message: "clickOnCloseButton" }, "*");
		});
	}

	_createClass(View, [{
		key: "listenerMessages",
		value: function listenerMessages() {
			var _this = this;

			window.addEventListener("message", function (event) {
				if (event.data.message === "renderExtension") {
					_this.renderNumberFiles(event.data.numberFiles);
					_this.renderFiles(event.data.readyArr, event.data.numberDownload);
				}
			});
		}
	}, {
		key: "renderNumberFiles",
		value: function renderNumberFiles(numberFiles) {
			this.inputNumber.value = numberFiles;
		}
	}, {
		key: "renderFiles",
		value: function renderFiles(links, count) {
			this.resultTable.innerHTML = "";
			if (links.length !== 0) {
				for (var i = 0; i < count; i++) {
					this.resultTable.appendChild(this.renderRow(links[i], i));
				}
			} else {
				this.resultTable.innerHTML = "<p class=\"no-pic-message\">Sorry, but this page has no images.</p>";
			}
		}
	}, {
		key: "renderRow",
		value: function renderRow(item, i) {
			var row = document.createElement("div");
			row.className = "result-table__row";
			row.appendChild(this.renderCellName(item, i));
			row.appendChild(this.renderCellScale(item[2]));
			row.appendChild(this.renderCellSize(item[1]));
			return row;
		}
	}, {
		key: "renderCellName",
		value: function renderCellName(item, i) {
			var cellName = document.createElement("div");
			cellName.className = "result-table__cell";
			cellName.appendChild(this.renderLink(item, i));
			return cellName;
		}
	}, {
		key: "renderLink",
		value: function renderLink(item, i) {
			var link = document.createElement("a");
			link.className = "result-table__link";
			link.setAttribute("href", "" + item[0]);
			link.setAttribute("target", "_blank");
			link.innerText = "image" + (i + 1);
			return link;
		}
	}, {
		key: "renderCellSize",
		value: function renderCellSize(size) {
			var cellSize = document.createElement("div");
			cellSize.className = "result-table__cell";
			if (size === 0) {
				cellSize.innerText = "Dynamic file size";
			} else {
				cellSize.innerText = size + "(Kb)";
			}
			return cellSize;
		}
	}, {
		key: "renderCellScale",
		value: function renderCellScale(scale) {
			var cellScale = document.createElement("div");
			cellScale.className = "result-table__cell";
			cellScale.innerText = scale + "(Px)";
			return cellScale;
		}
	}]);

	return View;
}();

exports.default = View;


new View();

/***/ })

/******/ });
//# sourceMappingURL=View.js.map