/**
 * When the submit-button is clicked, resize the div
 */
$(document).ready(function(){
  'use strict';
  var values, target;

  target = document.getElementById('flash');
  values = document.getElementById('size');
  values['width'].value = target.offsetWidth;
  values['height'].value = target.offsetHeight;    

  values['resize'].onclick = (function() {
    var width, height;
    width = values['width'].value;
    height = values['height'].value;    
    console.log('Resize it to ' + width + ' x ' + height + '. Current is: ' + target.offsetWidth + ' x ' + target.offsetHeight);
    target.style.width = width+'px';
    target.style.height = height+'px';
  });
  
  console.log('Current size is ' + target.offsetWidth + ' x ' + target.offsetHeight);
  console.log('Element now has listener on event onclick attached: ' + values['resize'].onclick);
});
