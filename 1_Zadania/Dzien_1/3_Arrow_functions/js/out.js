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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


$(document).ready(function () {
  // Zadanie 1
  var hello = function hello() {
    return console.log('Hello World');
  };
  hello();

  // Zadanie 2
  var count = function count() {
    var number = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 5;
    return number * 2;
  };
  console.log(count());

  // Zadanie 3
  var big = function big(a, b) {
    if (a > b) {
      return a;
    } else if (b > a) {
      return b;
    } else {
      return "Są równe";
    }
  };
  console.log(big(6, 5));

  // Zadanie 4
  var arr1 = [2, 3, 1, 6, 100, 49, 5, 7, 8, 9];
  function getSecondMaxNumber(array) {
    array.sort(function (a, b) {
      return b - a;
    });
    return array[1];
  }
  console.log(getSecondMaxNumber(arr1));

  // Zadanie 5
  var param = "Zielony";
  (function (e) {
    console.log(e);
    return e;
  })(param);

  // Zadanie 6
  var foo = function foo() {
    var number = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;

    var counter = 0;
    var interval = setInterval(function () {
      counter += 1;
      console.log('Hello');
      if (counter >= number) {
        clearInterval(interval);
      }
    }, 1000);
  };
  foo(3);
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Students = function Students(students) {
  this.names = students;
  this.numberOfLetters = [];
};

Students.prototype.countLetters = function () {
  var _this = this;

  this.names.forEach(function (item) {
    return _this.numberOfLetters.push(item.length);
  });
};

var students = new Students(["Ania", "Kamil", "Mariusz"]);
students.countLetters();
console.log(students.numberOfLetters);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var App = function App() {
  this.websites = ['onet', 'wp', 'facebook'];
  this.links = [];
};

App.prototype.generateLinks = function () {
  var _this = this;

  this.websites.forEach(function (e) {
    _this.links.push('https://www.' + e + '.com');
  });
};

var app = new App();
app.generateLinks();
console.log(app.links);

var aElement1 = $('.menu').find('a').first();
var aElement2 = $('.menu').find('a').next();
var aElement3 = $('.menu').find('a').last();
aElement1.attr('href', app.links[0]);
aElement2.attr('href', app.links[1]);
aElement3.attr('href', app.links[2]);

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var dog = {
    type: "Mammal",
    name: "",
    setName: function setName(newName) {
        dog.name = newName;
    }
};

dog.setName("Reksio");
console.log(dog.name);

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


$(function () {
  var slide = $('div').find('span');
  var list = $('div').find('ul');
  list.hide();
  slide.on('mouseenter', function () {
    var slider = $(this);
    var show = function show() {
      return slider.next().slideDown();
    };
    show();
  });
  slide.on('mouseleave', function () {
    list.slideUp();
  });
});

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(0);
__webpack_require__(1);
__webpack_require__(2);
__webpack_require__(3);
module.exports = __webpack_require__(4);


/***/ })
/******/ ]);