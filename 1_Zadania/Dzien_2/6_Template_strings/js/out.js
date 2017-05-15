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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function whoAreYou(object) {
  return "My name is " + object.name + " " + object.lastName + ".\nI am " + (2017 - object.yearOfBirth) + " years old.\nMy proffesion is " + object.proffesion;
}

var person = {
  name: "Vlad",
  lastName: "Drăculea",
  yearOfBirth: 1431,
  proffesion: "Lord of Wallachia"
};

console.log(whoAreYou(person));

// Zadanie 1
var num1 = 5;
var num2 = 12;
console.log("Suma " + (num1 + num2));

// Zadanie 2

var name = 'Jacek';
console.log(name + " Norris");

// Zadanie 3

function showText() {
  return "\"My\u015Bl\u0119, \u017Ce jest wiele pi\u0119kna\n  w posiadaniu problem\xF3w.\n  To jeden ze sposob\xF3w w jaki si\u0119 uczymy\"\n  Herbie Hancock";
}
console.log(showText());

document.querySelector('.cite').innerHTML = showText();

// Zadanie 4
function queryString(arr) {
  return [].concat(_toConsumableArray(arr));
}

var arr = [1, 2, 3, 4];
console.log("" + queryString(arr));

// Zadanie 5
/*To jest button.
Jego szerokość to 140px.
Napis, który na nim widnieje to "Send message" */

var button = {
  value: "Send message",
  idName: "sendMsg",
  width: "100px",
  padding: "20px"
};

console.log("To jest button.\nJego szeroko\u015B\u0107 " + button.width + ".\nNapis, kt\xF3ry na nim widnieje to \"" + button.value + "\"");

var body = $('body');
var newButton = $("<button id=\"" + button.idName + "\" style=\"width: " + button.width + ";\n padding: " + button.padding + "\">" + button.value + "</button>");
body.append(newButton);

/***/ })
/******/ ]);