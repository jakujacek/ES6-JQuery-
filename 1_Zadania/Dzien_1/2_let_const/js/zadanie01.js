//I. Sprawdź najpierw zasięg let
 {
     //A1 - wypisuję zmienną numbers przed deklaracją
     //Wynik w konsoli to TODO: undefined
     //Dlaczego taki wynik? TODO: ponieważ odwołanie się do zmiennej
     // nastąpiło przed jej deklaracją
     //console.log(numbers);

     let numbers = [2, 3, 4];
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

    const PI = 3.14;
    //A2 - wypisuję zmienną PI po deklaracji
    //Wynik w konsoli to TODO: 3.14
    //Dlaczego taki wynik? TODO: jest bracketcie i pozadeklarowaniu
    console.log(PI);
}

//A3 - wypisuję zmienną PI za blokiem
//Wynik w konsoli to TODO: undefined
//Dlaczego taki wynik? TODO: poza bracketem
//console.log(PI);
