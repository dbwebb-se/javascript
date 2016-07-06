/**
 * Print out literals and their type.
 */
$(document).ready(function(){
  'use strict';
  var str, e1, i,
    rows = '',
    element = document.getElementById('text'),
    literals = [42, 4.2, "hello world", 'hello world', true, false, null, undefined, 
      /javascript/, {x:1,y:2}, ['array-item', 'array-item'], function(){}];

  console.log('Starting');
  element.className = 'black';
  element.innerHTML = '<b>Literals and identifiers</b>';
  e1 = document.createElement('ul');
  
  for (i = 0; i < literals.length; i++) {
    str = typeof literals[i] === 'string' ? '"' + literals[i] + '"' : literals[i];
    rows += '<li>' + str + ' &mdash; ' + typeof(literals[i]) + '</li>';
  }
  
  e1.innerHTML = rows;
  element.parentElement.appendChild(e1);
  
  console.log('Ready');
});
