/**
 * Pushing the ball.
 */
$(document).ready(function(){
  'use strict';
  var text = document.getElementById('text'),
      flash = document.getElementById('flash'),    
      myBall, pos;

  console.log('Starting');
  text.className = 'black';
  text.innerHTML = '<b>Click the ball to make it move around.</b>';

  myBall = {};

  myBall.image = 'http://dbwebb.se/img/black_ball_64_64.png';
  myBall.position = {x:10, y:10}
  myBall.dimension = {w:64, h:64}
  
  pos = Mos.getOffset(flash);
  myBall.canvas = {
    x: pos.left,
    y: pos.top,
    x2: pos.left + flash.clientWidth - myBall.dimension.w,
    y2: pos.top + flash.clientHeight - myBall.dimension.h
  }
  
  console.log(myBall.position.x); // prints out 10
  
  myBall.position.X = 27;  
  console.log('The x-position of my ball is: ' + myBall.position.x);
  
  myBall.HTMLelement = document.getElementById('ball');
  
  myBall.draw = function () {
    this.HTMLelement.style.backgroundImage = 'url(' + this.image + ')';
    this.HTMLelement.style.left = this.position.x + 'px';
    this.HTMLelement.style.top = this.position.y + 'px';
    console.log('Drawing ball at: ' + this.position.x + ' x ' + this.position.y);
  }
  
  myBall.moveTo = function (x, y) {
    this.position.x = x;
    this.position.y = y;
    this.draw();
    console.log('Moving ball to: ' + this.position.x + ' x ' + this.position.y);
  }
  
  myBall.keepWithinRange = function (a, min, max) {
    var b = a >= min ? ( a <= max ? a : max) : min;
    console.log('Check if ball is within the area, range (requested pos, min, max): ' + a + ':' + min + ':' + max + ' returns ' + b);
    return b;
  }
  
  myBall.moveBy = function (x, y) {
    console.log('Trying to move ball by: ' + x + ' x ' + y);
    this.position.x = this.keepWithinRange(this.position.x + x, this.canvas.x, this.canvas.x2);
    this.position.y = this.keepWithinRange(this.position.y + y, this.canvas.y, this.canvas.y2);
    this.draw();
  }
  
  myBall.pushAt = function (x, y) {
    var newX, newY;
    newX = (this.position.x + this.dimension.w/2 - x) * 10;
    newY = (this.position.y + this.dimension.h/2 - y) * 10;
    console.log('Current position is: ' + this.position.x + ' x ' + this.position.y);
    this.moveBy(newX, newY);
  }
  
  myBall.center = function () {
    this.position.x = this.canvas.x + (this.canvas.x2 - this.canvas.x)/2;
    this.position.y = this.canvas.y + (this.canvas.y2 - this.canvas.y)/2;
    this.draw();
    console.log('Centered ball at: ' + this.position.x + ' x ' + this.position.y);
  }
  
  myBall.HTMLelement.addEventListener('click', function (event) {
    console.log('Clicked on (client): ' + event.clientX + ' x ' + event.clientY);
    console.log('Clicked on (screen): ' + event.screenX + ' x ' + event.screenY);
    console.log('Clicked on (page): ' + event.pageX + ' x ' + event.pageY);
    //myBall.pushAt(event.clientX, event.clientY);
    myBall.pushAt(event.pageX, event.pageY);
  });
  
  myBall.center();
  
  console.log('Ready');
});
