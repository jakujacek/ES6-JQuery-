var namesA = ['Janek', 'Paweł', 'Magda'];
var namesB = ['Justyna', 'Jacek', ...namesA, 'Jan', 'Karol'];
console.log(namesB);

// Zadanie 0 - rozwiązanie łatwe

function getAverage(...args){
  var sum = 0;
  var avg = 0;
  var argsL = args.length;
  for (var i = 0; i < argsL; i++) {
    sum += args[i];
  }
  avg = sum / argsL;
  return avg;
};
console.log(getAverage(2,4,5,6,7,79));

// Zadanie 0 - rozwiązanie łatwiejsze

var getAverages = (...args) => {
  var sum = args.reduce((prev, curr) => {
    return prev + curr;
  });
  return sum / args.length;
}
console.log(getAverages(2,4,5,6,7,79));
// Zadanie 1
var imie = "jacek";
var arr =[...imie];
console.log(arr);

//Zadanie 2
var fruits = ['apple', 'pear', 'melon', 'orange'];
var vegetables = ["tomato", "patato", "cucumber"];
var mix = [...fruits, ...vegetables];
console.log(mix);
