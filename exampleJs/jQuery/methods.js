"use strict";

jQuery(document).ready(function ($) {
    $(".button").click(function (event) {
        console.log(event);
        event.preventDefault();
         //ereignes verhindert Standard verhalten  - in diesen Beispiel wird verhindert das der link auf die verlinkte seite führt!
         $(this).removeClass("button");
         $(this).addClass("button-border")
    })

});
