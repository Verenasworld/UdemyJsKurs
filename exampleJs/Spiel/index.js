"use strict";


                                                                                 //klasse erstellen für spielfläche um diese anzeigen zu können

class Renderer {


    //konstruktor bekommt das element übergeben mit dem der renderer arbeiten soll.
    constructor(element) {
        this.element = element;                                                      //  game element in klasse gespeichert
        this.setup()                                                                  // konstruktor führt die setup methode aus

    }

    setup() {                                                                   //erstellen eines Einstellung Setup zum erstellen stylen & hinzufügen zum DOM einer Box.


        // eine box erstellen
        let box = document.createElement("div");

        // box positionieren
        box.style.top = "20px";
        box.style.left = "20px";
        box.style.position = "absolute";

        // box stylen
        box.style.width = "20px";
        box.style.height = "20px";
        box.style.backgroundColor = "white";
        box.style.border = "1px solid black";

        this.element.appendChild(box);                                          // einfügen der Box in mein Spielfeld
        this.box = box;                                                         //    setzte die box auf die box ( dient dazu das ich in render methode auf die box zugreifen kann)

    }


    render(position) {                                                                    //    render methode implemendieren!

        this.box.style.top = position + "40px";
    }

}


let renderer = new Renderer(document.getElementById("game"));                     //die verbindung zu Html DOM ?
let counter = 0;

setInterval(() => {                                                             // eine funktion erstellen die mir die render methode 1 mal pro sekunde ausführt
    counter = counter + 1;
    renderer.render(counter);                                                                    //ausführung der methode render ( 1x pro sekunde)
},1000);


//TODO counter position korr. the steps are to big
