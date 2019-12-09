"use strict";

jQuery(document).ready(function ($) {

    //in variabke zwischenspeichern
    let p = $("p.absatz");

    console.log(p);

     p.css("color","blue");
     p.css("background","grey");
});


jQuery(document).ready(function ($) {
     //ohne zwischenspeichern ( code zeilen sparen )
     $("p.absatz1")
        .css("color", "white")
        .css("background-color", "red");
    console.log(p);
});

