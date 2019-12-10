"use strict";



jQuery(document).ready(function ($){
$(".test").click(function () {
    let li = $.parseHTML("<li>Team</li>");
    $(".test").append(li);

});
});
