/**
 * Place your JS-code here.
 */
$(document).ready(function(){
  'use strict';

  /**
   * Related to all examples. This expands the box to full width.
   */
  $('.gift').click(function() {
    $(this).parent().addClass('fullwidth');
    $(this).parent().find('*').show('slow');
    $(this).parent().children('.gift').hide();
    console.log("Clicked to open a box, displaying it in full width.");
  });
  

  /**
   * Related to all examples. This minimizes the box.
   */
  $('.minimize').click(function(event) {
    $(this).parent().find('*').hide();
    $(this).parent().removeClass().addClass('box').show();
    $(this).parent().children('.gift').show();
    console.log("Minimizing the box.");
  });
  

  /**
   * Only related to example 1.
   */
  $('#box1 .example, #box1 p').click(function() {
    $(this).toggleClass('dark');
    console.log("Toggle the dark class.");
  });
  

  /**
   * Only related to example 2. 
   */
  $('#box2').click(function() {
    if($(this).hasClass('fullwidth')) {
      $(this).toggleClass('pink');
      console.log("Make the background a bit pink.");
    }
  });

  $('#box2 img.example').click(function() {
    $(this).toggleClass('thumbnail');
    console.log("Resizing the image.");
  });


  /**
   * Only related to example 3. 
   */
  var addColor = function() {
    $('<div></div>')
      .addClass('palette')
      .css('background-color', $('#box3_color').val())
      .insertAfter('#palette')
      .click(function() {
        $(this).remove();
        console.log("Removing an item from the color palette.");
      });
    console.log("Adding an item to the color palette." + $('#box3_color').val());
  };

  $('#box3 input[type=button]').click(addColor);
  $('#box3 input[type=text]').keypress(function(event) {
    if ( event.which == 13 ) {
      event.preventDefault();
      addColor();
    }
  });


  /**
   * Only related to example 4. 
   */
  var current_dimension = function() {
    var height = $('#me-image-4').height(),
      width = $('#me-image-4').width();
    $('#box4_current').text(width + ' x ' + height);
    console.log("Updated current dimensions on the image.");
  };
  
  $('#box4_dimensions').click(current_dimension());
  
  $('#box4_height_incr').click(function() {
    $('#me-image-4').css('height', '+=5px');
    console.log("Increase the height of the image.");
    current_dimension();
  });
  
  $('#box4_height_decr').click(function() {
    $('#me-image-4').css('height', '-=10px');
    console.log("Decrease the height of the image.");
    current_dimension();
  });
  
  $('#box4_width_incr').click(function() {
    $('#me-image-4').css('width', '+=4px');
    console.log("Increase the width of the image.");
    current_dimension();
  });
  
  $('#box4_width_decr').click(function() {
    $('#me-image-4').css('width', '-=8px');
    console.log("Decrease the width of the image.");
    current_dimension();
  });
  
  
  /**
   * Only related to example 5. 
   */
  $('#fade-toggle').click(function() {
    $('#me-image-51').fadeToggle(1000);
    console.log("Toggle visibility of the image using fade.");
    return false;
  });
  
  $('#slide-toggle').click(function() {
    $('#me-image-52').slideToggle(1000);
    console.log("Toggle visibility of the image using slide.");
    return false;
  });
  

  /**
   * Only related to example 6. 
   */
  $('.lightbox').click(function() {
    var windowHeigth = window.innerHeight || $(window).height(), // make it worjk on ipad & android
        windowWidth  = window.innerWidth  || $(window).width();

    // Display the overlay
    $('<div id="overlay"></div>')
      .css('opacity', '0')
      .animate({'opacity' : '0.5'}, 'slow')
      .appendTo('body');
    
    // Create the lightbox container
    $('<div id="lightbox"></div>')
      .hide()
      .appendTo('body');
    
    // Display the image on load
    $('<img>')
      .attr('src', $(this).attr('src'))
      .css({
        'max-height': windowHeigth, 
        'max-width':  windowWidth
      })
      .load(function() {
        $('#lightbox')
          .css({
            'top':  (windowHeigth - $('#lightbox').height()) / 2,
            'left': (windowWidth  - $('#lightbox').width())  / 2
          })
          .fadeIn();
      })
      .appendTo('#lightbox');
      
      // Remove it all on click
      $('#overlay, #lightbox').click(function() {
        $('#overlay, #lightbox').remove();
      });
    
    console.log("Display image in colorbox.");
  });
  

  /**
   * Only related to example 7. 
   */
  var galleryInit = function() {
    var current = null;

    $('.gallery-all img').each(function() {
      $(this)
        .attr('src', $(this).attr('src1') + '?w=' + $(this).width() + '&h=' + $(this).height() + '&crop-to-fit')
        .click(function() {
          if(!current) {
            current = this;
            console.log("Set current.");
          } else {
            $(current).toggleClass('selected');
            current = this;
            console.log("Toogled current");
          }
          $(this).toggleClass('selected');
          $('.gallery-current img').attr('src', $(this).attr('src1') + '?w=' + $('.gallery-current').width() + '&h=' + $('.gallery-current').height());
          console.log("Click on mini image.");
        });
      console.log("Gallery image was initiated.");
    });
    
    $('.gallery-all img').first().trigger('click');
  };
  galleryInit();


  /**
   * Only related to example 8
   */
  var slideshowInit = function() {
    var numberImages =  $('.slideshow img').length,
      currentImage = numberImages - 1,

      // Get current z-index for the slideshow and stack all images above this z-index
      zIndex = parseInt($('.slideshow').css('z-index')),
      currentZIndex = zIndex,
      
      // To play/pause the slideshow intervall
      intervallId = null;
      
    // Function to rotate images
    var rotateImages = function() {
      // Fade out current image and reorder z-index
      $('.slideshow img')
        .eq(currentImage)
        .fadeOut('slow', function() {
          $(this)
            .css('z-index', zIndex)
            .fadeIn(0)
            .siblings().each(function() {
              $(this).css('z-index', ((parseInt($(this).css('z-index')) - zIndex + 1) % numberImages + zIndex));
          });
        });
      currentImage = (numberImages + currentImage - 1) % numberImages;
      console.log('Rotating pictures in slideshow.' + currentImage);
    };
    
    // Fore each image, set it up.
    $('.slideshow img')
      .each(function() { 
        // Get the crop attribute from the img element, if defined and use to crop the image
        var crop = $(this).attr('crop');
        crop = crop ? 'crop=' + crop + '&' : null;
        
        // Use i to set the z-index of the image, stack them on top of each other
        $(this)
          .attr('src', $(this).attr('src1') + '?' + crop + 'w=' + $(this).width() + '&h=' + $(this).height() + '&crop-to-fit')
          .css('z-index', currentZIndex++);
      })
      .click(function() {rotateImages();});

    $('#box8 .gift').click(function() {
      intervallId = setInterval(function() {rotateImages();}, 4000);
      console.log("Clicked to open slideshow.");
    });
    
    $('#box8 .minimize').click(function(event) {
      clearInterval(intervallId);
      console.log("Clicked to close slideshow.");
    });
   
    console.log("Slideshow was initiated.");
  };
  slideshowInit();


  /**
   * Only related to example 9
   */
  (function($) {
    $.fn.shiftFont = function(options) {
      options = $.extend({}, $.fn.shiftFont.defaults, options);
      $.fn.shiftFont.current = ($.fn.shiftFont.current + 1) % options.fontFamily.length;
     return this.each(function() {
        $(this).css('font-family', options.fontFamily[$.fn.shiftFont.current]);
      });
    };

    $.fn.shiftFont.defaults = {
      'fontFamily': ['sans-serif', 'serif'] 
    }
  
    $.fn.shiftFont.current = 0;
    console.log('Added function shiftFont() to jQuery object as plugin.');
  }) (jQuery);

  $('#box9 h1, #box9 p').click(function() {
    $('#box9 h1, #box9 p').shiftFont({
      'fontFamily': ['monospace', 'cursive', 'fantasy']
    });
  });
  

  /**
   * Only related to example 9 (testing the plugin used in the text for this coursemoment)
   */
  (function($) {
  
    $.fn.fadeInOut = function(options) {
      options = $.extend({}, $.fn.fadeInOut.defaults, options);
      return this.each(function() {
        $(this).fadeOut(options.duration, function() {
          $(this).fadeIn(options.duration)});
      });
    };
  
    $.fn.fadeInOut.defaults = {
      'duration': 'fast',
    }
  
  }) (jQuery);

  $('#box9 img.example').click(function() {
    $(this).fadeInOut({'duration':2000});
    console.log('Clicked image to fade it out and in.');
  });
  

  console.log('Everything is ready.');    
});

