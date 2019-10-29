// aufgabe: change background in 5 sec after the screen is white and give out how long it have works to see the change
//Berechne wie lange der Wechsel benötigt und gib es in einem eigenen



"use strict";

window.addEventListener("load", function () {
    setTimeout(function() {
        document.body.style.backgroundColor = "#acd1ef";
        let start = Date.now();

        document.body.addEventListener("click" , function () {
            let end = Date.now();
            let difference = end - start;
            alert( " du hast " + (difference / 1000 + " Sekunden benötigt " ));
            alert("Reaktionstester");
            
        }, false);
    },2500 + Math.random() * 5000 )

});
