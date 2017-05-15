class Vehicle {
}

class Boat extends Vehicle {
  swim() {
    console.log("Boat swimming");
  }
}
class Car extends Vehicle {
  drive() {
    console.log("Car driving");
  }
}
class Plane extends Vehicle {
  fly(){
    console.log("Plane flying");
  }
}

var boat = new Boat();
var car = new Car();
var plane = new Plane();
boat.swim();
car.drive();
plane.fly();


// Zadanie 1

class Kaczka {
  constructor(type){
    this.type = type;
  }
  kwacz(){
    console.log("kwa kwa");
  }
  plywaj(){
    console.log("płynę...");
  }
  wyswietl(){
    console.log("Wygląda jak " + this.type + " Kaczka");
  }
  lec(){
    console.log('Lecę');
  }
}

var kaczucha = new Kaczka('zwykła');
kaczucha.kwacz();
kaczucha.plywaj();
kaczucha.wyswietl();

// Zadanie 2

class DzikaKaczka extends Kaczka {
  constructor(type) {
      super(type);
      this.type = 'dzika';
  }
}

var dzikaKaczucha = new DzikaKaczka();
dzikaKaczucha.wyswietl();
// Zadanie 3

class KrzyzowkaKaczka extends Kaczka {
  constructor(type){
    super(type);
    this.type = 'krzyżówka';
  }
}
var krzyzoKaczucha = new KrzyzowkaKaczka();
krzyzoKaczucha.wyswietl();
krzyzoKaczucha.lec();

class GumowaKaczka extends Kaczka {
  constructor(type) {
    super(type);
    this.type = 'gumowa';
  }
  lec(){
    console.log("Gumowe kaczki nie potrafią latać :(");
  }
}

var gumowaKaczucha = new GumowaKaczka();
gumowaKaczucha.lec();
console.log(gumowaKaczucha);

// Zadanie 6

class Food {
  constructor(name, protein, carbs, fat, type){
    this.name = name;
    this.protein = protein;
    this.carbs = carbs;
    this.fat = fat;
    this.type = type;
  }
  getName(){
    return this.name;
  }
  getProtein(){
    return this.protein;
  }
  getCarbs(){
    return this.carbs;
  }
  getFat(){
    return this.fat;
  }
  calcCalories(){
    return this.protein * 4 + this.carbs * 4 + this.fat * 9;
  }
  print(){
    var newLi = $('<li>');
    var ul = $('#products');
    newLi.append(this.type + ": " + this.name + ' protein: ' + this.protein + " carbs: " + this.carbs + ' fat: '+ this.fat + " calories: " + this.calcCalories());
    ul.append(newLi);
  }
}

class FastFood extends Food {

}
class FatFreeFood extends Food{

}

$('.button').on('click', function(){
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
