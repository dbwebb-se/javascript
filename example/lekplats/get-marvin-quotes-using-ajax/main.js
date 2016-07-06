/**
 * Place your JS-code here.
 */
$(document).ready(function(){
  'use strict';

  $('#flash img').click(function(){
  	$.ajax({
  		url: 'quote.php',
  		dataType: 'json',
  		success: function(data){
  			$('#quote').fadeOut(function() {
  				$('#quote').html(data.quote).fadeIn();
  			});
  			console.log('Ajax request returned successfully.');    
    	},
  		error: function(jqXHR, textStatus, errorThrown){
  			console.log('Ajax request failed: ' + textStatus + ', ' + errorThrown);    
    	},
  	});
  });

  console.log('Everything is ready.');
});

