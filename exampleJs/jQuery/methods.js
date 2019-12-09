"use strict";

jQuery(document).ready(function ($) {
    $(".button").click(function () {
         $(this).removeClass("button");
         $(this).addClass("button-border")
    })

});
