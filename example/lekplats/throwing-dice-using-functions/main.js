/**
 * Work with strings.
 */
$(document).ready(function(){
  'use strict';
  var str, out,
    element = document.getElementById('text');

  console.log('Starting');
  element.className = 'black';
  element.innerHTML = '<p><b>Dice - Functions in JavaScript</b></p>';

  function random (min, max) {
    return Math.floor(Math.random()*(max+1-min)+min);
  }
  
  function rollDice(times) {
    var i, val, res = '', sum = 0;
    times = times || 1;
    
    for(i = 0; i < times; i++) {
      val = random(1, 6);
      sum += val; 
      res += val + ', ';
    }
    return 'Average: ' + (sum/times).toPrecision(2) + ' Serie: ' + res;
  }
  
  out = function (e, s) {
    e.innerHTML += '<p>' + s;
  };
  
  str = 'Throw a serie of 6 with a dice.<br/>' + rollDice(6);
  out(element, str);

  str = 'Throw a serie of 12 with a dice.<br/>' + rollDice(12);
  out(element, str);

  str = 'Throw a serie of 100 with a dice.<br/>' + rollDice(100);
  out(element, str);

  console.log('Ready');
});
