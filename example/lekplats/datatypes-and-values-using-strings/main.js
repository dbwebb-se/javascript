/**
 * Work with strings.
 */
$(document).ready(function(){
  'use strict';
  var str, out1, out2, pos,
    element = document.getElementById('text');

  out1 = function (e, s) {
    e.innerHTML += '<br/>' + s + ' (' + s.length + ')';
  };
  
  out2 = function (e, s) {
    e.innerHTML += '<br/>' + s + ' (typeof=' + typeof(s) + ')';
  };
  
  console.log('Starting');
  element.className = 'black';
  element.innerHTML = '<b>Strings - Datatypes and values</b><br/>';

  str = 'Copyright \u00A9 by XXX';
  out1(element, str);
  
  str += ' Mumintrollet ';
  out1(element, str);
  
  str += 1942;
  out1(element, str);
  
  str += '.';
  out1(element, str);
  
  pos = 15;
  str = str.substr(0, pos) + str.substring(pos + 4, str.length);
  out1(element, str);  

  str = "19" + "42";
  out2(element, str);  

  str = "19" + 42;
  out2(element, str);  

  str = 19 + 42;
  out2(element, str);  

  str = 19 + "42";
  out2(element, str);  

  console.log('Ready');
});
