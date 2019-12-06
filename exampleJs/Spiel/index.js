"use strict";


                                                                                                                          // Create a class for playing area to be able to display this / Klasse erstellen für die Anzeige des Spiels
                                                                                                                          // renderer = denotes the process that we are indicating / was anzeigen
    class Renderer {                                                                                                     //Constructor gets passed the element the renderer should work with.

    constructor(element) {                                                                                               //  constructor function
        this.element = element;                                                                                          //  Game element saved in class
        this.setup()                                                                                              // konstruktor führt die setup methode aus

    }

    setup() {                                                                                                      //Set up Methode - erstellen eines Einstellung Setup zum  stylen & hinzufügen zum DOM einer Box.


        let box = document.createElement("div");                                                                 // create the box

        box.style.position = "absolute";                                                                                  // position & style the box
        box.style.top = "20px";
        box.style.left = "20px";
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
            this.box.runLoop();                                                                  //position wird aktualisiert
           if (this.box.position < 0){                                                              //wenn die box einen minus wert erreicht ( spielflächen Kante)
               console.log(" GAME OVER ! top edge reached");                                                            //gib etwas aus ....
           }
           if (this.box.position + 20 > this.element.clientHeight)                 //aus Dom = Attribut für die  angabe der höhe des elements, wird verwendet für den unteren Rand den die Box erreichen kann ( begrenzung ) ( unterer Rand box & spielfeldkante
               console.log(" GAME OVER ! top edg reached lower edge");                                                 //untere Kannte erreicht
            this.renderer.render(this.box.position);                                            //ausführung der methode render
        },100);
    }

}


let game = new Game(document.getElementById("game"));                                               //die verbindung zu Html DOM ? erstellung eines objektes ?! hier übergebe ich mein spielfeld element
game.start();





//TODO counter position korr. the steps are to big         done !!!

// TODO change in cor. pos. ( relative & absolute dont working )
