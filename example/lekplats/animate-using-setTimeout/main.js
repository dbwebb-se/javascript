/**
 * Work with strings.
 */
$(document).ready(function(){
  'use strict';
  var text = document.getElementById('text'),
  button = document.getElementById('button');

  console.log('Starting');
  text.className = 'black';
  text.innerHTML = '<p><b>Animate using <code>setTimeout()</code></b></p>';

  button.addEventListener('click', function () {
    var colors = ['green', 'yellow', 'red', 'blue', 'pink'],
      step = 0,
      animateFunction = function () {
        console.log('Animate function called.');
        if (step === colors.length) {
          console.log('Done.');
          button.style.backgroundColor = '';
        } else {
          button.style.backgroundColor = colors[step];
          step += 1;
          window.setTimeout(animateFunction, 500);
        }
      };
    console.log(button.style.backgroundColor);
    window.setTimeout(animateFunction, 500);
  }, false);
  
  console.log('Ready');
});
