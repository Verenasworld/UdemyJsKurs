"use strict";

let persons = ["Verena", "Andrea", "Karli", "leo"];

let keksi = "In unserem Kurs sind folgende Teilnehmer: ";
for (let person of persons) {
    keksi = keksi + person + ", ";
    console.log(keksi);
}