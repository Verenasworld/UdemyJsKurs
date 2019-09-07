"use strict";

let person = ["Verena","Leo", "Karin"];
person.push("Susanne");
person.unshift("Andi");
console.log(person);

person.pop();
console.log(person);
console.log(person.length);
let removedPerson = person.shift();
console.log(removedPerson);
console.log(person);
console.log("in dem Kurs sind " + person.length + " Teilnehmer");