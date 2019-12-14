"use strict";

jQuery.fn.lightbox = function(){
    $(document).keydown(function (event) {
        if (event.key === "Escape") {
            $("#overlay").remove();
            $("#overlay-container").remove();
            console.log("done");
        }
    });

    $(this).click(function (event) {
        event.preventDefault();
        let overlay = $.parseHTML("<div id='lightbox-overlay'></div>");
        $("body").append(overlay);

        let image = $.parseHTML("<img id='lightbox-image-overlay'>");
        let src = $(this).attr("href");
        $(image).attr("src", src);

        let container = $.parseHTML("<div id='lightbox-overlay-container'></div>");
        $(image).click(function () {
            $("#overlay").remove();
            $("#overlay-container").remove();
        });
        $(container).append(image);
        $("body").append(container);
    });
};
