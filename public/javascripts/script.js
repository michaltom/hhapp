//
//  $(".nav a").on("click", function () {
//    var url = window.location;
//    console.log(url);
//    $(".nav").find(".active").removeClass("active");
//    $(this).parent().addClass("active");
//  });

$(document).ready(function () {
        var url = window.location;
        $('ul.nav a[href="'+ url +'"]').parent().addClass('active');
        $('ul.nav a').filter(function() {
             return this.href == url;
        }).parent().addClass('active');
    });

