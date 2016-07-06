/**
 * Place your JS-code here.
 */
$(document).ready(function(){
  'use strict';
  var step, target, area, top, left, moveIt, centerIt, bubble, handle;

  step = 64; // The baddie is 64x64 so move it 64px each time its moved
  target = document.getElementById('b1');
  area = document.getElementById('flash');
  bubble = document.getElementById('bubble');
  left = target.offsetLeft;
  top  = target.offsetTop;
  
  // Move the baddie
  moveIt = function(moveLeft, moveTop) {
    target.style.left = (target.offsetLeft + moveLeft) + 'px';
    target.style.top  = (target.offsetTop + moveTop) + 'px';
  };
  //moveIt(0, 0);

  // Center the baddie
  centerIt = function() {
    target.style.left = ($(area).width() / 2) + 'px';
    target.style.top  = ($(area).height() - 100 ) + 'px';
  };
  centerIt();
  
  // handle
  handle = function() {
    console.log('handler');
    target.style.zIndex = 1;
    target.className='baddie down';
    centerIt();

    bubble.style.top  = ($(area).height() - 100 - 250) + 'px';

    setTimeout(function() {
        bubble.style.left = ($(area).width() / 2 + 50) + 'px';
    
        setTimeout(function() {
          bubble.style.left = "-9999px"; 
        }, 400);
      }, 200);
  }

  document.onkeydown = function(event) {
    var key;
    key = event.key || event.which;
    switch(key) {
      case 37:  // ascii value for arrow left 
        target.className='baddie left'; 
        moveIt(-step, 0); 
        break;
      case 39:  // ascii value for arrow right 
        target.className='baddie right'; 
        moveIt(step, 0); 
        break;
      case 38:  // arrow up
        target.className='baddie up';
        moveIt(0, -step); 
        break;
      case 40:  // arrow down
        target.className='baddie down';
        moveIt(0, step); 
        break;
      case 66:  // b = back
        target.style.zIndex = -1;
        break;                   
      case 70:  // f = front 
        target.style.zIndex = 1;
        break;
      case 72:  // h = home 
        moveIt(left-target.offsetLeft, top-target.offsetTop);
        break;
      case 32:  // space = jump
        moveIt(0, -step);
        // What jumps up, must come down, a bit later.
        setTimeout(function(){moveIt(0, step);console.log('Timer!');}, 300);
        break;
      case 82:  // r = random
        moveIt(step*Math.floor(Math.random()*(3)-1), step*Math.floor(Math.random()*(3)-1));
        break;
      case 83:  // s = secret
        handle();
        break;
      default:
        target.className='baddie down';
        break;
    }    
    console.log('Keypress: ' + event + ' key: ' + key + ' new pos: ' + target.offsetLeft + ', ' + target.offsetTop);
  };

  area.onclick = function(event) {
    moveIt(event.clientX-target.offsetLeft-32, event.clientY-target.offsetTop-32);
    console.log('Clicked area.' + event + ' Moving baddie to mouse pointer position.');
  };
  
  console.log('Current position: ' + target.offsetLeft + ', ' + target.offsetTop);
  console.log('Everything is ready.');  
  console.log("The secret key is 's'.");  
});
