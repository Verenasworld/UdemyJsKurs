"use strict";


// example of a counter function with modular calculation via jquery without counter possible by my parameter i,
// each p gets its own number (count parameter ( i) ,  element (no matter if element or this-it is the same)
jQuery(document).ready(function ($){

    $(".paragraph5").click(function () {
        $(this).css("color", "blue");
    });
    $(".paragraph5").each(function (i, element) {
        if (i % 2 === 0 ){
            $(this).css("color", "red");
        } else{
            $(element).css("color", "green");
        }
    });
});

