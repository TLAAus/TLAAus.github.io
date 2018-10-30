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
      if ($(window).width() > 479 && $(window).width() < 2000){
        console.log('eggs');
        $( document ).ready(function() {
          $('.jarallax-img').css('top', '-50px');
        });
        $(window).scroll(function() {
          $('.jarallax-img').css('top', '-50px');
        });
      } 
      if ($(window).width() > 2000 ){
        $( document ).ready(function() {
          $('.jarallax-img').css('top', '-85px');
        });
        $(window).scroll(function() {
          $('.jarallax-img').css('top', '-85px');
        });
      }
      else {
        $( document ).ready(function() {
          $('.jarallax-img').css('top', '0px');
        });
        $(window).scroll(function() {
          $('.jarallax-img').css('top', '0px');
        });
      }
    }
    else {
      $('.jarallax-img').css('top', '0px');
      $('.jarallax-img').css('z-index', '-1');
    }
  });
// $('.jarallax').jarallax({
//     speed: 0.3
// });


$(window).on('resize', function(){
    $( document ).ready(function() {
      $('.jarallax-img').css('top', '0px');
    });
    $(window).scroll(function() {
      $('.jarallax-img').css('top', '0px');
    });
});

$( document ).ready(function() {
  $('.jarallax').css('z-index', 'unset');
  // $('#jarallax-container-0').css('transform', 'skewY(3deg) translateZ(0)');
});
$(window).scroll(function() {
  $('.jarallax').css('top', 'unset');
  // $('#jarallax-container-0').css('transform', 'skewY(3deg) translateZ(0)');
});

//collapse the navbar upon selection from hamburger menu
$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
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