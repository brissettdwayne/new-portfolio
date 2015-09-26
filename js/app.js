$(document).ready(function() {
	$("#about-link").click(function() {
	$(".introduction").hide();
    $(".projects").hide();
    $(".about-me").show();
    $("#about-link").addClass("active")
    $("#home").removeClass("active");
});
	$("#home").click(function() {
	location.reload();
});
	$("#project-link").click(function() {
	$(".introduction").hide();
    $(".about-me").hide();
    $(".projects").show();
    $("#project-link").addClass("active");
    $("#home").removeClass("active");
    $("#about-link").removeClass("active")
});
});