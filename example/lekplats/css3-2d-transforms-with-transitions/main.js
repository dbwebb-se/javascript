/**
 * Place your JS-code here.
 */
$(document).ready(function(){
  'use strict';
  var t1 = document.getElementById('b1'),
    t2 = document.getElementById('b2'),
    t3 = document.getElementById('b3'),
    t4 = document.getElementById('b4'),
    t5 = document.getElementById('b5'),
    t6 = document.getElementById('b6'),
    t7 = document.getElementById('b7'),
    t8 = document.getElementById('b8');
  
  t1.swap = t2.swap = t3.swap = t4.swap = t5.swap = t6.swap = t7.swap = t8.swap = 1;
  
  t1.onclick = function() { this.className = (this.swap++ % 2) ? 'baddie flip' : 'baddie'; };
  t2.onclick = function() { this.className = (this.swap++ % 2) ? 'baddie flipx2' : 'baddie'; };
  t3.onclick = function() { this.className = (this.swap++ % 2) ? 'baddie size-half' : 'baddie'; };
  t4.onclick = function() { this.className = (this.swap++ % 2) ? 'baddie size-double' : 'baddie'; };
  t5.onclick = function() { this.className = (this.swap++ % 2) ? 'baddie skew-horisontal' : 'baddie'; };
  t6.onclick = function() { this.className = (this.swap++ % 2) ? 'baddie skew-vertical' : 'baddie'; };
  t7.onclick = function() { this.className = (this.swap++ % 2) ? 'baddie move' : 'baddie'; };
  t8.onclick = function() { this.className = (this.swap++ % 2) ? 'baddie move-flip' : 'baddie'; };
  
  console.log('Everything is ready.');  
});
