/**
 * Work with strings.
 */
$(document).ready(function(){
  'use strict';
  var text = document.getElementById('text');
  text.innerHTML = 'Hello World, document is ready!';
  text.className = 'green';


  $('#flash').on('click', function() {
    var tests = '';

    tests += "window.innerWidth: " + window.innerWidth + '<br>';
    tests += "window.innerHeight: " + window.innerHeight + '<br>';
    tests += "$(window).width(): " + $(window).width() + '<br>';
    tests += "$(window).height(): " + $(window).height() + '<br>';
    tests += "$('#flash').width(): " + $('#flash').width() + '<br>';
    tests += "$('#flash').height(): " + $('#flash').height() + '<br>';

    text.innerHTML = tests;
  });


  console.log('Everything is ready.');  
});

