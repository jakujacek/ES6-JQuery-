var weather = [ "snow", "rain", "sun" ];
var [a, ,b] = weather;
console.log(a,b);

// Zadanie 0.1

let {type, autoStart} = {
    type: "infinite",
    numberOfItems: 10,
    center: true,
    autoStart: true
}
console.log(type, autoStart);

// Zadanie 1

let names = ['Jack', 'Black', 'Rupert'];
let [name1,name2,name3] = names;
console.log(name1, name2, name3);

// Zadanie 2
function generateRandomNubers(){
  var arr =[];
  while( arr.length < 6) {
    var number = Math.floor(Math.random() *6);
    arr.push(number);
  }
  return arr;
}
var nmb = generateRandomNubers();
let [first, ,third] = nmb;
console.log(first, third);

// Zadanie 4
function getAnimal(){
  return { name: "Mruczek",
        age: 10,
        getVoice: () => "miau miau"
        }
}

let {name: catName, getVoice: catVoice} = getAnimal();

console.log(catName, catVoice());
