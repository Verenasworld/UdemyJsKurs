"use strict";


 //klasse erstellen für spielfläche um diese anzeigen zu können

class Renderer {


    //konstruktor bekommt das element übergeben mit dem der renderer arbeiten soll.
    constructor(element){
        this.element= element;
    }

    //    render methode implemendieren
        render() {
            // console.log(this);
            //eine box erstellen
            let box = document.createElement("div");
        //    eingügen der Box in mein Spielfeld
            this.element.appendChild(box);

        }

    
}

//die verbindung zu Html DOM ?
let renderer = new Renderer(document.getElementById("game"));

//ausführung der methode render
renderer.render();
