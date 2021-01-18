$(document).ready( function() {
    $("#toggle>.title>p").click( () => {
        $("#queue-menu").toggleClass("close");
    });
    $("#menu-link1").click( () => {
        $("#latest-menu1").toggleClass("close");
    });
    $("#menu-link2").click( () => {
        $("#latest-menu2").toggleClass("close");
    });
    $("#menu-link3").click( () => {
        $("#latest-menu3").toggleClass("close");
    });
    $("#menu-link4").click( () => {
        $("#latest-menu4").toggleClass("close");
    });
});