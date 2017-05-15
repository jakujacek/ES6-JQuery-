$(document).ready(function(){
  // Zadanie 1
  var hello = () => console.log('Hello World');
  hello();

  // Zadanie 2
  var count = (number = 5) => number*2;
  console.log(count());

  // Zadanie 3
  var big = (a,b) => {
    if (a > b) {
      return a;
    } else if (b > a) {
      return b;
    } else {
      return "Są równe";
    }
  }
  console.log(big(6,5));

  // Zadanie 4
  var arr1 = [2, 3, 1, 6, 100, 49, 5, 7, 8, 9 ];
  function getSecondMaxNumber(array) {
    array.sort((a, b) => {return b - a});
    return array[1];
  }
  console.log(getSecondMaxNumber(arr1));

  // Zadanie 5
  var param = "Zielony";
  (
    (e) => {
      console.log(e);
      return e;}
  )(param);

  // Zadanie 6
  let foo = (number = 10) => {
    var counter = 0;
    var interval = setInterval(() => {
      counter += 1;
      console.log('Hello');
    if (counter >= number) {
      clearInterval(interval);
    }
  },1000);
  }
  foo(3);


});
