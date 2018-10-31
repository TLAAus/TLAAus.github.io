var is_chrome = navigator.userAgent.indexOf('Chrome') > -1;
var is_safari = navigator.userAgent.indexOf("Safari") > -1;
var is_edge_or_ie;    

var ua = window.navigator.userAgent;
var trident = ua.indexOf('Trident/');
var edge = ua.indexOf('Edge/');

$( document ).ready(function() {
    //Detect browser and disable fixed backgrounds if on Safari or IE/Edge
    
    if (trident > 0 || edge > 0) {
      is_edge_or_ie = true;
    }
    if ((is_chrome)&&(is_safari)) {
      is_safari=false;
    }
    if($(window).width() < 1000 || !is_edge_or_ie ){
      $('.jarallax').jarallax({
          speed: 0.3
      });
      $('.jarallax-img').css('z-index', '-1');
    }
    else {
      $('.jarallax-img').css('z-index', '-1');
    }
});

$( document ).ready(function() {
  $('.jarallax').css('z-index', 'unset');
});

//collapse the navbar upon selection from hamburger menu
$('.navbar-nav > li > a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});
$('[data-toggle="slide-collapse"]').on('click', function() {
    $navMenuCont = $($(this).data('target'));
    $navMenuCont.animate({'width':'toggle'}, 350);
});
$(document).ready(function () {
    // bind click event to all internal page anchors
    $('a[href*="#"]').on('click', function (e) {
        // prevent default action and bubbling
        e.preventDefault();
        e.stopPropagation();
        // set target to anchor's "href" attribute
        var target = $(this).attr('href');
        // scroll to each target
        $(target).velocity("scroll", 1000);
    });
});