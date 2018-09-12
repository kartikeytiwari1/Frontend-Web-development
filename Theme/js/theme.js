/**
 * Medical Theme
 *
 * This file contains all template JS functions
 *
 * @package Medical
--------------------------------------------------------------
                   Contents
--------------------------------------------------------------
 * 01 - Owl Carousel
          - Home Slider    


--------------------------------------------------------------*/
$(document).ready(function() {
    $('#example').DataTable();
} );
(function($) {
  "use strict";
    AOS.init();
  
// Owl Carousel
  // Home Slider
    $("#home-slider").owlCarousel({
      loop: true,
      items: 1,
      dots: true,
      nav: true,
      autoplayTimeout: 6000,
      smartSpeed: 2000,
      autoHeight: false,
      touchDrag: true,
      mouseDrag: true,
      margin: 0,
      autoplay: true,
      slideSpeed: 600,
      navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
      responsive: {
        0: {
            items: 1,
            nav: false,
            dots: true,
        },
        600: {
            items: 1,
            nav: false,
            dots: true,
        },
        768: {
            items: 1,
            nav: false,
            dots: true,
        },
        1100: {
            items: 3,
            nav: true,
            dots: true,
        }
      }
    });
// 
// Home Slider
    $("#testimonial-slider").owlCarousel({
      loop: true,
      items: 3,
      dots: true,
      nav: true,
      autoplayTimeout: 6000,
      smartSpeed: 2000,
      autoHeight: false,
      touchDrag: true,
      mouseDrag: true,
      margin: 30,
      autoplay: true,
      slideSpeed: 600,
      navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
      responsive: {
        0: {
            items: 3,
            nav: false,
            dots: true,
        },
        600: {
            items: 3,
            nav: false,
            dots: true,
        },
        768: {
            items: 3,
            nav: false,
            dots: true,
        },
        1100: {
            items: 3,
            nav: true,
            dots: true,
        }
      }
    });
// Lightbox Gallery
    // Product Gallery
    $('.gallery-popup').magnificPopup({
      type: 'image',
      closeOnContentClick: true,
      mainClass: 'mfp-img-mobile',
      image: {
        verticalFit: true,
        titleSrc: function(item) {
          return item.el.attr('title') + '<small>by Theme</small>';
        }
      }
    });

// Walkway JS
  var svg = new Walkway({
    selector: '.svg-icon',
    duration: '1000',
    // can pass in a function or a string like 'easeOutQuint'
    easing: function (t) {
      return t * t;
    }
  });
  svg.draw(function(){
    $('path').attr('class','finish');
  });

  
  // video play three
  $('#play-video').on('click', function(e){
    e.preventDefault();
  $('#video-overlay').addClass('open');
  $("#video-overlay").append('<iframe width="560" height="315" src="https://www.youtube.com/embed/ngElkyQ6Rhs" frameborder="0" allowfullscreen></iframe>');
  });

  $('.video-overlay, .video-overlay-close').on('click', function(e){
    e.preventDefault();
    close_video();
  });

  $(document).keyup(function(e){
    if(e.keyCode === 27) { close_video(); }
  });

  function close_video() {
  $('.video-overlay.open').removeClass('open').find('iframe').remove();
  };

  })(jQuery);