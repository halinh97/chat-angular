$(document).ready(function () {
    $("header-bar nav.navbar-inverse").on("mresize", function () {
        var marginTop = $(".navbar-inverse").height();
        $("left-side div.left-side, right-side div.right-side").css("margin-top", marginTop + "px");
    });

});