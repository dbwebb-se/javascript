/**
 * Place your JS-code here.
 */
$(document).ready(function(){
  'use strict';

  $('#ajax').click(function(){
    $.ajax({
      url: 'quote.php',
      dataType: 'json',
      success: function(data){
        $('#quote').fadeOut(function() {
          $('#quote').html(data.quote).fadeIn();
        });
        console.log('.ajax() request returned successfully.');    
      },
      error: function(jqXHR, textStatus, errorThrown){
        console.log('.ajax() request failed: ' + textStatus + ', ' + errorThrown);    
      },
    });
  });

  $('#get').click(function(){
    $.getJSON('quote.php', function(data){
      $('#quote').fadeOut(function() {
        $('#quote').html(data.quote).fadeIn();
      });
      console.log('.getJSON() request returned successfully.');    
    });
  });

  console.log('Everything is ready.');
});

