"use strict";

jQuery(document).ready(function ($) {
    $(".gallery-item").click(function (event) {
        event.preventDefault();
    //    bedeutet wenn ich auf Bild drücke dann passiert jetzt nichts den wir wollem mit js die funktionalität überschreiben!

    //    div in DOM einfügen für Overlay Element
        let overlay = $.parseHTML("<div id='overlay'></div>");
        $("body").append(overlay);

        let image = $.parseHTML("<img> id='image-overlay'</img>");
        let src = $(this).attr("href");
        $(image).attr("src", src);
        $("body").append(image);
    });
    
});
