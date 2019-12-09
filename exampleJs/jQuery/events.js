"use strict";


//tells the HTML DOM to wait until it is ready to load Html (for example, if script is linked in the head)
jQuery(document).ready(function ($) {

    $(".st").click(function () {
    $(".st").css("color", "red");

});


    $(".st1").click(function () {
        $(this).css("color", "blue");
});


    // Hover with jQuery
    $(".paragraph3").mouseenter(function () {
        $(this).css("color", "red");
    });
    $(".paragraph3").mouseleave(function () {
        $(this).css("color", "black");
    });

// Hover with jQuery
    $(".paragraph4")
        .click(function () {
            $(this).css("color", "yellow");
        })
        .mouseenter(function () {
            $(this).css("color", "blue");
        })
        .mouseleave(function () {
            $(this).css("color", "green");
        })

});
