/**
 * Created by as on 05.03.2016.
 */
// WOW Activate
new WOW().init();

jQuery(document).ready(function() { // makes sure the whole site is loaded
    $('#status').fadeOut(); // will first fade out the loading animation
    $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
    $('body').delay(350).css({'overflow':'visible'});
});

$(document).ready(wrapResize);
$(window).resize(wrapResize);

function wrapResize (){
    var back = $('.paper-back-full');

    var size = $(window).height();
    back.css('min-height', size + "px");
}