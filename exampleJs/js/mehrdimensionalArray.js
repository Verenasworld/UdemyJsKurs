"use strict";

let persons = [
    ["Maier", "Müller"],
    ["Erik", "Monika"],

];

console.log(persons [0][1]);

for (let Kurse of persons){
    for ( let person of Kurse){
        console.log(person);
    }
    console.log(Kurse);

}


