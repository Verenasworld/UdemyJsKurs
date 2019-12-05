"use strict";


                                                                                 //klasse erstellen für spielfläche um diese anzeigen zu können
                                                                                // renderer = bezeichnet den Prozess das wir irgendwas anzeigen
    class Renderer {                                                              //konstruktor bekommt das element übergeben mit dem der renderer arbeiten soll.

    constructor(element) {                                                          //  constructor funktion ???
        this.element = element;                                                      //  game element in klasse gespeichert
        this.setup()                                                                  // konstruktor führt die setup methode aus

    }

    setup() {                                                                   //erstellen eines Einstellung Setup zum erstellen stylen & hinzufügen zum DOM einer Box.

                                                                                // eine box erstellen
        let box = document.createElement("div");
                                                                                // box positionieren
        box.style.position = "absolute";
        box.style.top = "20px";
        box.style.left = "20px";
                                                                                    // box stylen
        box.style.width = "20px";
        box.style.height = "20px";
        box.style.backgroundColor = "white";

        this.element.appendChild(box);                                          // einfügen der Box in mein Spielfeld
        this.box = box;                                                         // setzte die box auf die box ( dient dazu das ich in render methode auf die box zugreifen kann)
    }


    render(position) {                                                            //    render methode implemendieren!

        this.box.style.top = position + "px";
    }
}




class Box {                                                                           //klasse erstellen für die "steuerung" der box
    constructor(){
        this.position = 0;

    }
    runLoop(){                                                                                 //erstekken einer methode _
       this.position ++;                                                     //verschieben der box um eines nach unten!!!
    };

    moveUp(){
        this.position = this.position -20;                                       //wenn box geklickt wird dann ändere position 20 px nach oben

    }
}


class Game{                                                                             // klasse erstellen  - die das spiel "representieren" soll
    constructor(element){                                                                //die klasse hat einen  constructor dem ich das element übergebe
            this.renderer = new Renderer(element);
            this.box = new Box();
            this.element = element;
            this.setup();

    }

    setup(){
        this.element.addEventListener("click", () => {                                //wenn mein spielfeld geklickt wird dann soll etwas passieren -
            this.box.moveUp();                                                    //diese methode soll ausgedführt werden
            }, false);

    }
    start(){
        setInterval(() => {                                                             // eine funktion erstellen die mir die render methode 1 mal pro sekunde ausführt
            this.box.runLoop();                                                                  //steuerung ??
            this.renderer.render(this.box.position);                                            //ausführung der methode render
        },100);
    }

}


let game = new Game(document.getElementById("game"));                                               //die verbindung zu Html DOM ? erstellung eines objektes ?! hier übergebe ich mein spielfeld element
game.start();





//TODO counter position korr. the steps are to big         done !!!

// TODO change in cor. pos. ( relative & absolute dont working )
