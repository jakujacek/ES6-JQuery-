
//TODO: spróbuj zmienić zmienną name nadpisująć ją niżej innym imieniem.
const name = "Agata";
//name = "Jacek";
// W konsoli wyskoczył błąd, nie można nadpisać wartości, const można tylko
// modyfikować

//TODO:
//a) spróbuj zmienić zmienną simpleArray nadpisująć ją niżej inną tablicą.
//b) spróbuj dodać nową wartość do tablicy
//c) spróbuj zmienić którąkolwiek wartość z tablicy simpleArray
const simpleArray = [1,2,3,4];
//simpleArray = [7,8,9];// nie można nadpisać;
simpleArray.push(5); // mozna zmodyfikować const
simpleArray[0] = 5;// można zmieniać elementy tablicy
console.log(simpleArray);

//TODO:
//a) spróbuj zmienić zmienną dog nadpisująć ją niżej innym obiektem.
//b) spróbuj zmienić właśność skill obiektu dog
//c) spróbuj dodać nową własność do obiektu dog np. age
const dog = {
    name: "Puszek",
    skill: "killing"
}
// nastąpił błąd nie można nadpisać stałej wartości
/*dog = {
  name: "Killer",
  skill: "Snoring"
} */
dog.skill = "snoring"; // można zmodyfikować właściwości obiektu 'dog'
dog.age = 6.5;// obiekt nabył nową własność
