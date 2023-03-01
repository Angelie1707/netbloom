var $ = require( "jquery" );

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if (scroll >= 150) {
        $("body").addClass("sticky-header");
    } else {
        $("body").removeClass("sticky-header");
    }
}); 