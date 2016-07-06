/**
 * Playing Asteroids while learning JavaScript object model.
 */

/** 
 * Shim layer, polyfill, for requestAnimationFrame with setTimeout fallback.
 * http://paulirish.com/2011/requestanimationframe-for-smart-animating/
 */ 
window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       || 
          window.webkitRequestAnimationFrame || 
          window.mozRequestAnimationFrame    || 
          window.oRequestAnimationFrame      || 
          window.msRequestAnimationFrame     || 
          function( callback ){
            window.setTimeout(callback, 1000 / 60);
          };
})();



/**
 * Shim layer, polyfill, for cancelAnimationFrame with setTimeout fallback.
 */
window.cancelRequestAnimFrame = (function(){
  return  window.cancelRequestAnimationFrame || 
          window.webkitCancelRequestAnimationFrame || 
          window.mozCancelRequestAnimationFrame    || 
          window.oCancelRequestAnimationFrame      || 
          window.msCancelRequestAnimationFrame     || 
          window.clearTimeout;
})();



/**
 * Trace the keys pressed
 * http://nokarma.org/2011/02/27/javascript-game-development-keyboard-input/index.html
 */
window.Key = {
  pressed: {},

  LEFT:   37,
  UP:     38,
  RIGHT:  39,
  DOWN:   40,
  SPACE:  32,
  A:      65,
  S:      83,
  D:      68,
  w:      87,
  
  isDown: function(keyCode, keyCode1) {
    return this.pressed[keyCode] || this.pressed[keyCode1];
  },
  
  onKeydown: function(event) {
    this.pressed[event.keyCode] = true;
    //console.log(event.keyCode);
  },
  
  onKeyup: function(event) {
    delete this.pressed[event.keyCode];
  }
};
window.addEventListener('keyup',   function(event) { Key.onKeyup(event); },   false);
window.addEventListener('keydown', function(event) { Key.onKeydown(event); }, false);



/**
 * All positions and forces 
 */
function Vector(x, y) {
  this.x = x || 0;
  this.y = y || 0;
};



/**
 * A Player as an object.
 */
function Player(height, width, position, velocity) {
  this.height   = height    || 32;
  this.width    = width     || 32;
  this.position = position  || new Vector();
  this.velocity = velocity  || new Vector(1,1);
}

Player.prototype.draw = function(ct) {
  ct.fillRect(this.position.x, this.position.y, this.height, this.width); 
  ct.clearRect(this.position.x+8, this.position.y+8, this.height/2, this.width/2); 
};

Player.prototype.moveLeft = function() {
  this.position.x -= 1 * this.velocity.x;
  //console.log('moveLeft');
};

Player.prototype.moveRight = function() {
  this.position.x += 1 * this.velocity.x;
  //console.log('moveRight');
};

Player.prototype.moveUp = function() {
  this.position.y -= 1 * this.velocity.y;
  //console.log('moveUp');
};

Player.prototype.moveDown = function() {
  this.position.y += 1 * this.velocity.y;
  //console.log('moveDown');
};

Player.prototype.update = function() {
  if (Key.isDown(Key.UP, Key.W))     this.moveUp();
  if (Key.isDown(Key.LEFT, Key.A))   this.moveLeft();
  if (Key.isDown(Key.DOWN, Key.S))   this.moveDown();
  if (Key.isDown(Key.RIGHT, Key.D))  this.moveRight();
};

Player.prototype.stayInArea = function(width, height) {
  if(this.position.y < -this.height)  this.position.y = height;
  if(this.position.y > height)        this.position.y = -this.height;
  if(this.position.x > width)         this.position.x = -this.width;
  if(this.position.x < -this.width)   this.position.x = width;
};



/**
 * Asteroids, the Game
 */
window.Game = (function(){
  var canvas, ct, player;

  var init = function(canvas) {
    canvas = document.getElementById(canvas);
    ct = canvas.getContext('2d');
    width = 900,
    height = 400,
    ct.lineWidth = 1;
    ct.strokeStyle = 'hsla(0,0%,100%,1)',
    ct.fillStyle = 'hsla(0,0%,100%,1)',
    
    player = new Player(32, 32, new Vector(width/2, height/2), new Vector(6, 4));

    console.log('Init the game');
  };


  var update = function() {
    player.update();
    player.stayInArea(width, height);
  };

  var render = function() {
    ct.clearRect(0,0,width,height);
    player.draw(ct);
  };

  var gameLoop = function() {
    lastGameTick = Date.now();
    requestAnimFrame(gameLoop);
    update();
    render();
  };

  return {
    'init': init,
    'gameLoop': gameLoop
  }
})();



// On ready
$(function(){
  'use strict';

  Game.init('canvas1');
  Game.gameLoop();

  console.log('Ready to play.');  
});


