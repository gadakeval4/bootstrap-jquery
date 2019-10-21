$(document).ready(function () {

    $("#hideButton").click(function () {
        $("#heading").hide();
    });


    $("#showButton").click(function () {
        $("#heading").show();
    });


    $("#fadeinButton").click(function () {
        $("#heading").css("color", "red").fadeOut(2000).fadeIn(3000);
    });

    $("#basics2").click(function () {
        alert("Hello World!!!");
    });

    

});

