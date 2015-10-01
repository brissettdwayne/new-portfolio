$(document).ready(function() {
    $("#about-link").click(function() {
    $('html, body').animate({
        scrollTop: $(".about-me").offset().top
    }, 700);
    $("#about-link").addClass("active");
    $("#home").removeClass("active");
});
    $("#home").click(function() {
    $('html, body').animate({
        scrollTop: $(".introduction").offset().top
    }, 700);
});
    $("#project-link").click(function() {
    $('html, body').animate({
        scrollTop: $(".projects").offset().top
    }, 700);
    $("#project-link").addClass("active");
    $("#home").removeClass("active");
    $("#about-link").removeClass("active")
});
});