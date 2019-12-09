"use strict";

jQuery(document).ready(function ($) {
    // store in variable
    let p = $("p.paragraph");
         p.css("color","blue");
         p.css("background","grey");

});


jQuery(document).ready(function ($) {
     //without caching (lines are shorter)
    $("p.paragraph1")
        .css("color", "white")
        .css("background-color", "red");
});


//  Example of what that would look like without jQuery
let elements = document.querySelectorAll("p.paragraph2");
    for (let element of elements) {
        element.style.color = "green";
        element.style.backgroundColor = "yellow";
    }


