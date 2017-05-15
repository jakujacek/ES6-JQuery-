document.addEventListener('DOMContentLoaded', function(){
  var cities = ['Kraków', 'Olsztyn', 'Szczecin', 'Ostrów Wielkopolski'];

  function cit(element) {
    return element.len;
  }

  var result1 = cities.map(cit);

  console.log(result1);

  function randomize (param1, param2, callback) {
    var result1 = Math.floor(Math.random() * (param2 +1)) + param1;

    if (typeof callback === 'function') {
      callback(result1);
    }
  }

  randomize(0, 100, function(res) {
    console.log(res);
  });

  // Zadanie 2

  var animals = ['cat', 'shrimp', 'giraffe'];
  function fn(element) {
    console.log(element);
  }

  animals.forEach(fn);

  // Zadanie 3

  var years = [1995, 1856, 2014, 1987];
  var date = 2017;


  function age(element) {
    return date - element;
  }
  var result = years.map(age);
  console.log(result);

  // Zadanie 4
  var integers= [3,4,6];
  function sum(prev, curr) {
    return prev + curr;
  }
  var integersSum = integers.reduce(sum);
  console.log(integersSum);

  //pkt 4.2

  function multiply(prev, curr){
    return prev * curr;
  }

  var integerMultiply = integers.reduce(multiply);
  console.log(integerMultiply);

});
