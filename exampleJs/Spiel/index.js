"use strict";


                                                                                                                          // Create a class for playing area to be able to display this / Klasse erstellen für die Anzeige des Spiels
                                                                                                                          // renderer = denotes the process that we are indicating / was anzeigen
    class Renderer {                                                                                                //Construktor bekommt das element übergeben mit dem der renderer arbeiten soll.

    constructor(element) {                                                                                          //  constructor funktion ???
        this.element = element;                                                                                     //  game element in klasse gespeichert
        this.setup()                                                                                                // konstruktor führt die setup methode aus

    }

    setup() {                                                                                                        //Set up Methode - erstellen eines Einstellung Setup zum  stylen & hinzufügen zum DOM einer Box.

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




class Box {                                                                           //klasse erstellen für die "steuerung" der box ( position, speed , click Event)
    constructor(){
        this.position = 0;                                                                //box position anfang
        this.speed = 0;                                                                   //box geschiwndigkeit anfang
    }
    runLoop(){                                                                             //erstekken einer methode _
        this.speed ++;                                                                      //erhöhen der geschwindigkeit ums eins !!
       this.position = this.position + this.speed;                                                       //verschieben der box  in verbindung mit der geschiwndigkeit somit wird die box im fall immer schneller !
    };

    moveUp(){
        // this.position = this.position -20;                                                    //wenn box geklickt wird dann ändere position 20 px nach oben
        this.speed = this.speed - 20;                                                              //wir verringern die geschwindigkeit - dadurch bewegt sich die box langsamer nach oben
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
