"use strict";

let initLightbox = function (items) {

    $(document).keydown(function (event) {
        if (event.key === "Escape") {
            $("#overlay").remove();
            $("#overlay-container").remove();
        }
    });

    $(".items").click(function (event) {
        event.preventDefault();
        let overlay = $.parseHTML("<div id='overlay'></div>");
        $("body").append(overlay);

        let image = $.parseHTML("<img id='image-overlay'>");
        let src = $(this).attr("href");
        $(image).attr("src", src);

        let container = $.parseHTML("<div id='overlay-container'></div>");
        $(image).click(function () {
            $("#overlay").remove();
            $("#overlay-container").remove();
        });
        $(container).append(image);
        $("body").append(container);
    });

};
