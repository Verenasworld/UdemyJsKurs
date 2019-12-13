"use strict";


//tells the HTML DOM to wait until it is ready to load Html (for example, if script is linked in the head)
jQuery(document).ready(function ($){
$(".test").click(function () {
    let li = $.parseHTML("<li>Team ( setzt sich ans Ende des li Elements mit append) </li>");
    let li1 = $.parseHTML("<li>Shop ( setzt sich an den Anfang des li Elements mit prebend)</li>");
    let libefore = $.parseHTML("<li>Before (vor dem Li element) </li>");
    let liafter = $.parseHTML("<li>After ( nach dem  li element) </li>");
    $(".test").append(li).prepend(li1).before(libefore).after(liafter);

});
});
