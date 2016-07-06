/**
 * Work with strings.
 */
$(document).ready(function(){
  'use strict';


  // Get the sum from the shopping cart
  $.ajax({
    type: 'post',
    url: 'checkout.php?action=sum',
    dataType: 'json',
    success: function(data){
      $('#sum').html(data.sum);
      console.log('Ajax request returned successfully. Sum updated.');    
    },
    error: function(jqXHR, textStatus, errorThrown){
      console.log('Ajax request failed: ' + textStatus + ', ' + errorThrown);    
    }
  }); 


  /**
   * Check if a creditcard number is valid.
   *
   * Source from http://onesandzeros.biz/notebook/ccvalidation.php
   *
   * Try the following numbers, they should be valid according to the check:
   * 4408 0412 3456 7893
   * 4417 1234 5678 9113
   */
  var isValidCCNumber = function ( ccNum ) {
    var cardNum = new String( ccNum );
    var digitsOnly = "";
    // Filter out non-digit characters
    for( var i = 0; i < cardNum.length; i++ ) {
        if( "0123456789".indexOf( cardNum.charAt( i ) ) > -1 ) {
            digitsOnly += cardNum.charAt( i );
        }
    }
    // Perform Luhn check
    var sum = 0;
    var digit = 0;
    var addend = 0;
    var timesTwo = false;
    for( var i = digitsOnly.length - 1; i >= 0; i-- ) {
        digit = parseInt( digitsOnly.charAt( i ) );
        if( timesTwo ) {
            addend = digit * 2;
            if( addend > 9 ) {
                addend -= 9;
            }
        } else {
            addend = digit;
        }
        sum += addend;
        timesTwo = !timesTwo;
    }
    return sum % 10 == 0;
  };


  /**
   * Check if form is valid
   *
   */
  var theForm = $('#form1');
  theForm.on('submit', function(event) {
    var formData = theForm.serialize();
    //formData.push({ name: 'doPay', value: true });

    console.log("Form: " + theForm.serialize());
    console.log('form submitted, preventing default event');
    event.preventDefault();

    $('#output').removeClass().addClass('working').html('<img src="http://dbwebb.se/img/loader.gif"/> Doing payment, please wait and do NOT reload this page...');

    $.ajax({
      type: 'post',
      url: 'checkout.php?action=pay',
      data: theForm.serialize(),
      dataType: 'json',
      success: function(data){
        var errors = '';

        $.each(data.errors || [], function(index, error) {
          errors += '<p>' + error.label + ' ' + error.message + '</p>';
        });

        $('#output').removeClass().addClass(data.outputClass).html('<p>' + data.output + '</p>' + errors);
        $('#sum').html(data.sum);

        console.log('Ajax request returned successfully. ' + data);    
      },
      error: function(jqXHR, textStatus, errorThrown){
        console.log('Ajax request failed: ' + textStatus + ', ' + errorThrown);    
      }
    }); 


    console.log('Form submitted, lets wait for a response.');
  });


  console.log('Everything is ready.');  
});


