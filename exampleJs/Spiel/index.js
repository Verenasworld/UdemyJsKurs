"use strict";


                                                                                                                          // Create a class for playing area to be able to display this / Klasse erstellen für die Anzeige des Spiels
                                                                                                                          // renderer = denotes the process that we are indicating / was anzeigen
class Renderer {                                                                                                           //Constructor gets passed the element the renderer should work with.

    constructor(element) {                                                                                               //  constructor function
        this.element = element;                                                                                          //  Game element saved in class
        this.setup()                                                                                                      // constructor executes the setup method / ausführung der setup methode

    }

    setup() {                                                                                                             //Set up Method - create a setup setup to style & add to the DOM of a box..


        let box = document.createElement("div");                                                                 // create the box

        box.style.position = "absolute";                                                                                  // position & style the box
        box.style.top = "20px";
        box.style.left = "20px";
        box.style.width = "20px";
        box.style.height = "20px";
        box.style.backgroundColor = "white";
        box.style.border =" 1px solid black";
        box.style.borderRadius="100px";

        this.element.appendChild(box);                                                                                   // insert the box into my playing area
        this.box = box;                                                         // setzte die box auf die box ( dient dazu das ich in render methode auf die box zugreifen kann)
    }


    render(position) {                                                                                                    //    implement the render method

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
        this.speed = -20;                                                              //wir verringern die geschwindigkeit - dadurch bewegt sich die box langsamer nach oben
    }
}


class Game{                                                                             // klasse erstellen  - die das spiel "representieren" soll
    constructor(element){                                                                //die klasse hat einen  constructor dem ich das element übergebe
            this.renderer = new Renderer(element);
            this.box = new Box();                                                    // Box objekt variabke ??
            this.element = element;
            this.isRunning = true;                                                      // läuft
            this.setup();

    }

    setup(){
        this.element.addEventListener("click", () => {                                //wenn mein spielfeld geklickt wird dann soll etwas passieren -
            this.box.moveUp();                                                    //diese methode soll ausgedführt werden
            }, false);

    }
    start(){
        let counter = 0;

        let timer = setInterval(() => {                                                             // eine funktion erstellen die mir die render methode 1 mal pro sekunde ausführt sie hat einen rückgabe wert der in der variable timer gespeichert wird
            counter++;                                                                              //counter erhöhen um 1
            this.box.runLoop();                                                                  //position wird aktualisiert
           if (this.box.position < 0){                                                              //wenn die box einen minus wert erreicht ( spielflächen Kante)
              this.isRunning = false;                                                                    //setzt isRunning auf false somit wird  keine position mehr übergeben somit bleibt die box an der kante stehen oben
               clearInterval(timer);
               alert(" GAME OVER ! \n Your SCORE is "  + counter );                                                            // ausführung wenn oberer Rand erreicht
           }
           if (this.box.position +20 > this.element.clientHeight) {             //aus Dom = Attribut für die  angabe der höhe des elements, wird verwendet für den unteren Rand den die Box erreichen kann ( begrenzung ) ( unterer Rand box & spielfeldkante
               this.isRunning = false;                                                                  //setzt isRunning auf false somit wird  keine position mehr übergeben somit bleibt die box an der kante stehen unten
               clearInterval(timer);                                                                     // intervall stoppen
            alert(" GAME OVER ! \n Your SCORE is " + counter );                                                  //ausgabe wenn unterer rand erreicht wurde
           }

            if (this.isRunning === true){
                this.renderer.render(this.box.position);                                                                 //ausführung der methode render
            }


        },40);
       console.log(timer);
    }

}


let game = new Game(document.getElementById("game"));                                               //die verbindung zu Html DOM ? erstellung eines objektes ?! hier übergebe ich mein spielfeld element
game.start();





//TODO counter position korr. the steps are to big         done !!!

// TODO change in cor. pos. ( relative & absolute dont working   done!!!
