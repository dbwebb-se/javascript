/**
 * Print out literals and their type.
 */
$(document).ready(function(){
  'use strict';
  var e1, i,
    rows = '',
    element = document.getElementById('text'),
    numbers = [42, 4.2, 1.21e4, 1.12e-2, 0xff00ff];

  console.log('Starting');
  element.className = 'black';
  element.innerHTML = '<b>Numbers - Datatypes and values</b>';
  e1 = document.createElement('table');
  
  for (i=0;  i<numbers.length; i++) {
    rows += '<th>' + numbers[i] + '</th>';
  }
  rows = '<tr><th>Function</th>' + rows + '</tr>';
  
  rows += '<tr><td>Exponentialform</td>';
  for (i=0;  i<numbers.length; i++) {
    rows += '<td>' + numbers[i].toExponential() + '</td>';
  }
  rows += '</tr>';
    
  rows += '<tr><td>Fixed form, three decimals</td>';
  for (i=0;  i<numbers.length; i++) {
    rows += '<td>' + numbers[i].toFixed(3) + '</td>';
  }
  rows += '</tr>';
    
  rows += '<tr><td>Round to closes integer</td>';
  for (i=0;  i<numbers.length; i++) {
    rows += '<td>' + Math.round(numbers[i]) + '</td>';
  }
  rows += '</tr>';
    
  rows += '<tr><td>Square root</td>';
  for (i=0;  i<numbers.length; i++) {
    rows += '<td>' + Math.sqrt(numbers[i]).toPrecision(5) + '</td>';
  }
  rows += '</tr>';
    
  rows += '<tr><td>Value for sinus</td>';
  for (i=0;  i<numbers.length; i++) {
    rows += '<td>' + Math.sin(numbers[i]).toPrecision(5) + '</td>';
  }
  rows += '</tr>';
    
  e1.innerHTML = rows;
  element.parentElement.appendChild(e1);
  
  element.innerHTML += '<br/><br/>Eulers constant E = ' + Math.E;
  element.innerHTML += '<br/>PI = ' + Math.PI;
  element.innerHTML += '<br/>Largest value possible = ' + Number.MAX_VALUE;
  element.innerHTML += '<br/>Positive infinity = ' + Number.POSITIVE_INFINITY;
  
  console.log('Ready');
});
