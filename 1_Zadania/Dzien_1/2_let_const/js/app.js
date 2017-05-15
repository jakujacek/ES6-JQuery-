document.addEventListener("DOMContentLoaded", function(){
  const PI = 3.14;
  let cztery = 4;

  for (let cztery = 0; cztery < 3; cztery++) {
    const PI = 3.16;
    console.log("Cztery z pętli", cztery);
    console.log("const", PI);
  }
  console.log(cztery);
  console.log("PI", PI);

  (
    function() {
      //const PI = 2;
      //let cztery = 8;

      console.log("PI IIFE", PI);
      console.log("CZTERY IIFE", cztery);
    }
  )();

  // Zadanie 3

  for (var i = 1; i <= 10; i++) {
    console.log(i);
  }
  console.log('Po pętli', i);
  for (let j = 1;  j<=10; j++) {
  }
  //console.log(j);
  // 'j' is not defined


  // Zadanie 5

  (
    function(){
      console.log('hello world');
    }
  )();

  // Zadanie 6
  var name = "Ziomek";
  (
    function(e){
      console.log(e);
    }
  )(name);
});
