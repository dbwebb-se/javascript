/**
 * Work with strings.
 */
$(document).ready(function(){
  'use strict';
  var text = document.getElementById('text');
  text.innerHTML = 'Hello World, document is ready!';
  text.className = 'green';
  console.log('Everything is ready.');  

});


/*
(function(){
  // A self-invoking anonymous function, a siaf.
})();


(function(window, this, undefined){
  var document = window.document;
  // A siaf with parameters.
})(window, this);



window.Mos = (function(){
  var i1, i2;

  function private1() {
    console.log('f1');
  };

  function public1() {
    console.log('f2');
  };

  return {
    public1: public1;
  };

})();

*/

/*
$(document).ready(function(){
  'use strict';
  var text = document.getElementById('text');
  text.innerHTML = 'Hello World, document is ready!';
  text.className = 'green';

  myBall.HTMLelement.addEventListener('click', function (event) {
    console.log('Clicked on: ' + event.clientX + ' x ' + event.clientY);
    myBall.pushAt(event.clientX, event.clientY);
  });

});




// Example on closure where inner function 
// has access to non-local variables
window.accessToInner = (function() {
  var a = 1;

  function inner (b) {
    a += b;
    return a;
  }

  return inner;
})();

*/