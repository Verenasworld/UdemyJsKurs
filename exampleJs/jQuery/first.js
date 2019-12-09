"use strict";

jQuery(document).ready(function ($) {
    // store in variable
    let p = $("p.paragraph");
         p.css("color","blue");
         p.css("background","grey");

});


jQuery(document).ready(function ($) {
     //without caching (save code lines)
    $("p.paragraph1")
        .css("color", "white")
        .css("background-color", "red");
});

