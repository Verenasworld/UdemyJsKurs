"use strict";



jQuery(document).ready(function ($){
$(".test").click(function () {
    let li = $.parseHTML("<li>Team</li>");
    let li1 = $.parseHTML("<li>Shop</li>");
    $(".test").append(li).prepend(li1);
});
});
