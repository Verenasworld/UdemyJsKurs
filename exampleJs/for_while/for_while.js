"use strict"

//for schleife
// for schleife wenn ich vorher Anzahl weiß zb wie beim hochzaelen von 0 auf 10
for (let x = 0; x <= 10; x++){
  console.log(x);
}
// wenn ( start erfuellung , bis end erfuellung , erhoehe um 1 ) , gibt 0 - 10 aus !

for (let x = 0; x <= 10; x +=2) {
    console.log(x);
}

//while schleife
// läuft so lange durch bis eine bedingung erfuellt ist

let a = 0;
while (a < 20){
    console.log(a);
    a++;
}
//so lange a kleiner als 20 ist erhöhe ich den wert von a um 1 (a++) diese Umsetzung wuerde auch mit einer for schleife gehen
//eine while schleife brauche ich dann wenn ich zusaetzlich berechnungen oder kobinationen bis ich zum gewünschten ziel komme und daher nicht weiß wie viel ich benötige ???

let students = [
    "Simone",
    "Katharina",
    "Maria",
    "Fritz"
];

// break um eine schleife abzubrechen wenn mein gewuentschte ausgabe erreicht ist ( brauche dann den rest nicht mehr durchgehen)
let inArray = false;
for (let student of students){
    console.log(student);
    if (student == "Katharina"){
        inArray = true;
        break;
    }
}
console.log(inArray);







