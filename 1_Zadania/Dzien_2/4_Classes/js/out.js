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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Vehicle = function Vehicle() {
  _classCallCheck(this, Vehicle);
};

var Boat = function (_Vehicle) {
  _inherits(Boat, _Vehicle);

  function Boat() {
    _classCallCheck(this, Boat);

    return _possibleConstructorReturn(this, (Boat.__proto__ || Object.getPrototypeOf(Boat)).apply(this, arguments));
  }

  _createClass(Boat, [{
    key: "swim",
    value: function swim() {
      console.log("Boat swimming");
    }
  }]);

  return Boat;
}(Vehicle);

var Car = function (_Vehicle2) {
  _inherits(Car, _Vehicle2);

  function Car() {
    _classCallCheck(this, Car);

    return _possibleConstructorReturn(this, (Car.__proto__ || Object.getPrototypeOf(Car)).apply(this, arguments));
  }

  _createClass(Car, [{
    key: "drive",
    value: function drive() {
      console.log("Car driving");
    }
  }]);

  return Car;
}(Vehicle);

var Plane = function (_Vehicle3) {
  _inherits(Plane, _Vehicle3);

  function Plane() {
    _classCallCheck(this, Plane);

    return _possibleConstructorReturn(this, (Plane.__proto__ || Object.getPrototypeOf(Plane)).apply(this, arguments));
  }

  _createClass(Plane, [{
    key: "fly",
    value: function fly() {
      console.log("Plane flying");
    }
  }]);

  return Plane;
}(Vehicle);

var boat = new Boat();
var car = new Car();
var plane = new Plane();
boat.swim();
car.drive();
plane.fly();

// Zadanie 1

var Kaczka = function () {
  function Kaczka(type) {
    _classCallCheck(this, Kaczka);

    this.type = type;
  }

  _createClass(Kaczka, [{
    key: "kwacz",
    value: function kwacz() {
      console.log("kwa kwa");
    }
  }, {
    key: "plywaj",
    value: function plywaj() {
      console.log("płynę...");
    }
  }, {
    key: "wyswietl",
    value: function wyswietl() {
      console.log("Wygląda jak " + this.type + " Kaczka");
    }
  }, {
    key: "lec",
    value: function lec() {
      console.log('Lecę');
    }
  }]);

  return Kaczka;
}();

var kaczucha = new Kaczka('zwykła');
kaczucha.kwacz();
kaczucha.plywaj();
kaczucha.wyswietl();

// Zadanie 2

var DzikaKaczka = function (_Kaczka) {
  _inherits(DzikaKaczka, _Kaczka);

  function DzikaKaczka(type) {
    _classCallCheck(this, DzikaKaczka);

    var _this4 = _possibleConstructorReturn(this, (DzikaKaczka.__proto__ || Object.getPrototypeOf(DzikaKaczka)).call(this, type));

    _this4.type = 'dzika';
    return _this4;
  }

  return DzikaKaczka;
}(Kaczka);

var dzikaKaczucha = new DzikaKaczka();
dzikaKaczucha.wyswietl();
// Zadanie 3

var KrzyzowkaKaczka = function (_Kaczka2) {
  _inherits(KrzyzowkaKaczka, _Kaczka2);

  function KrzyzowkaKaczka(type) {
    _classCallCheck(this, KrzyzowkaKaczka);

    var _this5 = _possibleConstructorReturn(this, (KrzyzowkaKaczka.__proto__ || Object.getPrototypeOf(KrzyzowkaKaczka)).call(this, type));

    _this5.type = 'krzyżówka';
    return _this5;
  }

  return KrzyzowkaKaczka;
}(Kaczka);

var krzyzoKaczucha = new KrzyzowkaKaczka();
krzyzoKaczucha.wyswietl();
krzyzoKaczucha.lec();

var GumowaKaczka = function (_Kaczka3) {
  _inherits(GumowaKaczka, _Kaczka3);

  function GumowaKaczka(type) {
    _classCallCheck(this, GumowaKaczka);

    var _this6 = _possibleConstructorReturn(this, (GumowaKaczka.__proto__ || Object.getPrototypeOf(GumowaKaczka)).call(this, type));

    _this6.type = 'gumowa';
    return _this6;
  }

  _createClass(GumowaKaczka, [{
    key: "lec",
    value: function lec() {
      console.log("Gumowe kaczki nie potrafią latać :(");
    }
  }]);

  return GumowaKaczka;
}(Kaczka);

var gumowaKaczucha = new GumowaKaczka();
gumowaKaczucha.lec();
console.log(gumowaKaczucha);

// Zadanie 6

var Food = function () {
  function Food(name, protein, carbs, fat, type) {
    _classCallCheck(this, Food);

    this.name = name;
    this.protein = protein;
    this.carbs = carbs;
    this.fat = fat;
    this.type = type;
  }

  _createClass(Food, [{
    key: "getName",
    value: function getName() {
      return this.name;
    }
  }, {
    key: "getProtein",
    value: function getProtein() {
      return this.protein;
    }
  }, {
    key: "getCarbs",
    value: function getCarbs() {
      return this.carbs;
    }
  }, {
    key: "getFat",
    value: function getFat() {
      return this.fat;
    }
  }, {
    key: "calcCalories",
    value: function calcCalories() {
      return this.protein * 4 + this.carbs * 4 + this.fat * 9;
    }
  }, {
    key: "print",
    value: function print() {
      var newLi = $('<li>');
      var ul = $('#products');
      newLi.append(this.type + ": " + this.name + ' protein: ' + this.protein + " carbs: " + this.carbs + ' fat: ' + this.fat + " calories: " + this.calcCalories());
      ul.append(newLi);
    }
  }]);

  return Food;
}();

var FastFood = function (_Food) {
  _inherits(FastFood, _Food);

  function FastFood() {
    _classCallCheck(this, FastFood);

    return _possibleConstructorReturn(this, (FastFood.__proto__ || Object.getPrototypeOf(FastFood)).apply(this, arguments));
  }

  return FastFood;
}(Food);

var FatFreeFood = function (_Food2) {
  _inherits(FatFreeFood, _Food2);

  function FatFreeFood() {
    _classCallCheck(this, FatFreeFood);

    return _possibleConstructorReturn(this, (FatFreeFood.__proto__ || Object.getPrototypeOf(FatFreeFood)).apply(this, arguments));
  }

  return FatFreeFood;
}(Food);

$('.button').on('click', function () {
  var name = $('.name').val();
  var protein = $('.protein').val();
  var carbs = $('.carbs').val();
  var fat = $('.fat').val();
  var food = new Food(name, protein, carbs, fat, "");
  var calories = food.calcCalories();
  if (calories >= 250) {
    var ff = new FastFood(name, protein, carbs, fat, "FastFood");
    ff.print();
  } else {
    var fff = new FatFreeFood(name, protein, carbs, fat, "FatFreeFood");
    fff.print();
  }
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(0);


/***/ })
/******/ ]);