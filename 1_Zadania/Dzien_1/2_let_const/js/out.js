/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


document.addEventListener("DOMContentLoaded", function () {
  var PI = 3.14;
  var cztery = 4;

  for (var _cztery = 0; _cztery < 3; _cztery++) {
    var _PI = 3.16;
    console.log("Cztery z pętli", _cztery);
    console.log("const", _PI);
  }
  console.log(cztery);
  console.log("PI", PI);

  (function () {
    //const PI = 2;
    //let cztery = 8;

    console.log("PI IIFE", PI);
    console.log("CZTERY IIFE", cztery);
  })();

  // Zadanie 3

  for (var i = 1; i <= 10; i++) {
    console.log(i);
  }
  console.log('Po pętli', i);
  for (var j = 1; j <= 10; j++) {}
  //console.log(j);
  // 'j' is not defined


  // Zadanie 5

  (function () {
    console.log('hello world');
  })();

  // Zadanie 6
  var name = "Ziomek";
  (function (e) {
    console.log(e);
  })(name);
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//I. Sprawdź najpierw zasięg let
{
    //A1 - wypisuję zmienną numbers przed deklaracją
    //Wynik w konsoli to TODO: undefined
    //Dlaczego taki wynik? TODO: ponieważ odwołanie się do zmiennej
    // nastąpiło przed jej deklaracją
    //console.log(numbers);

    var numbers = [2, 3, 4];
    //A2 - wypisuję zmienną numbers po deklaracji
    //Wynik w konsoli to TODO: [2, 3, 4]
    //Dlaczego taki wynik? TODO: zmienna została wywołana w bracketcie
    //po zadeklarowaniu zmiennej
    console.log(numbers);
}

//A3 - wypisuję zmienną numbers za blokiem
//Wynik w konsoli to TODO: numbers is not defined
//Dlaczego taki wynik? TODO: nie istnieje zmienna poza bracketem
//console.log(numbers);


//II. Sprawdź teraz  zasięg const
{
    //A1 - wypisuję zmienną PI przed deklaracją
    //Wynik w konsoli to TODO: undefined
    //Dlaczego taki wynik? TODO: ponieważ używany jest przed
    // zadeklarowaniem
    //console.log(Pi);

    var PI = 3.14;
    //A2 - wypisuję zmienną PI po deklaracji
    //Wynik w konsoli to TODO: 3.14
    //Dlaczego taki wynik? TODO: jest bracketcie i pozadeklarowaniu
    console.log(PI);
}

//A3 - wypisuję zmienną PI za blokiem
//Wynik w konsoli to TODO: undefined
//Dlaczego taki wynik? TODO: poza bracketem
//console.log(PI);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var character = "księżniczka";
var timeOfDay = "dzień";
var lover = 'Shrek';

{
    var _timeOfDay = "noc";
    var _character = "ogrzyca";
    console.log("Teraz jest: " + _timeOfDay + " i Fiona to: " + _character + ", a jej ukochany to: " + lover);
    // teraz jest noc i Fiona to ogrzyca a jej ukochany to Shrek
}

console.log("Teraz jest: " + timeOfDay + " i Fiona to: " + character + ", a jej ukochany to: " + lover);
// Teraz jest dzień i Fiona to księżniczka a jej ukochany to Shrek

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//TODO: spróbuj zmienić zmienną name nadpisująć ją niżej innym imieniem.
var name = "Agata";
//name = "Jacek";
// W konsoli wyskoczył błąd, nie można nadpisać wartości, const można tylko
// modyfikować

//TODO:
//a) spróbuj zmienić zmienną simpleArray nadpisująć ją niżej inną tablicą.
//b) spróbuj dodać nową wartość do tablicy
//c) spróbuj zmienić którąkolwiek wartość z tablicy simpleArray
var simpleArray = [1, 2, 3, 4];
//simpleArray = [7,8,9];// nie można nadpisać;
simpleArray.push(5); // mozna zmodyfikować const
simpleArray[0] = 5; // można zmieniać elementy tablicy
console.log(simpleArray);

//TODO:
//a) spróbuj zmienić zmienną dog nadpisująć ją niżej innym obiektem.
//b) spróbuj zmienić właśność skill obiektu dog
//c) spróbuj dodać nową własność do obiektu dog np. age
var dog = {
  name: "Puszek",
  skill: "killing"
};
// nastąpił błąd nie można nadpisać stałej wartości
/*dog = {
  name: "Killer",
  skill: "Snoring"
} */
dog.skill = "snoring"; // można zmodyfikować właściwości obiektu 'dog'
dog.age = 6.5; // obiekt nabył nową własność

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(0);
__webpack_require__(1);
__webpack_require__(2);
module.exports = __webpack_require__(3);


/***/ })
/******/ ]);