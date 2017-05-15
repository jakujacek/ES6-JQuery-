function whoAreYou(object) {
  return `My name is ${object.name} ${object.lastName}.
I am ${2017 - object.yearOfBirth} years old.
My proffesion is ${object.proffesion}`
}

const person = {
  name: "Vlad",
  lastName: "Drăculea",
  yearOfBirth: 1431,
  proffesion: "Lord of Wallachia"
};

console.log(whoAreYou(person));

// Zadanie 1
let num1 = 5;
let num2 = 12;
console.log(`Suma ${num1 + num2}`);

// Zadanie 2

let name = 'Jacek';
console.log(`${name} Norris`);

// Zadanie 3

function showText(){
  return `"Myślę, że jest wiele piękna
  w posiadaniu problemów.
  To jeden ze sposobów w jaki się uczymy"
  Herbie Hancock`
}
console.log(showText());

document.querySelector('.cite').innerHTML = showText();

// Zadanie 4
function queryString(arr){
  return [...arr];
}

var arr = [1,2,3,4];
console.log(`${queryString(arr)}`);

// Zadanie 5
/*To jest button.
Jego szerokość to 140px.
Napis, który na nim widnieje to "Send message" */

const button = {
  value: "Send message",
  idName: "sendMsg",
  width: "100px",
  padding: "20px",
}

console.log(`To jest button.
Jego szerokość ${button.width}.
Napis, który na nim widnieje to "${button.value}"`);

var body = $('body');
var newButton = $(`<button id="${button.idName}" style="width: ${button.width};
 padding: ${button.padding}">${button.value}</button>`);
body.append(newButton);
