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
 * True prototypal inheritance by Douglas Crockford.
 * http://javascript.crockford.com/prototypal.html
 */
Object.create = function (o) {
    function F() {}
    F.prototype = o;
    return new F();
};
//newObject = Object.create(oldObject);


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
 * All objects are Vectors
 */
function Vector(x, y) {
  this.x = x || 0;
  this.y = y || 0;
};



/**
 * A Player as an object.
 */
function Player(width, height, position, velocity, direction) {
  this.height     = height    || 32;
  this.width      = width     || 32;
  this.position   = position  || new Vector();
  this.velocity   = velocity  || new Vector(1,1);
  this.direction  = direction || 0;
}

Player.prototype.draw = function(ct) {
  ct.save();
  ct.translate(this.position.x, this.position.y);
  ct.rotate(this.direction+Math.PI/2)
  ct.beginPath();
  ct.moveTo(0,-this.height/2);
  ct.lineTo(this.width/2,this.height/2);
  ct.lineTo(0,this.height/2-this.height*0.1);
  ct.lineTo(-this.width/2,this.height/2);
  ct.lineTo(0,-this.height/2);
  ct.stroke();
  ct.restore();
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

Player.prototype.moveForward = function() {
  this.position.x += this.velocity.x * Math.cos(this.direction);
  this.position.y += this.velocity.y * Math.sin(this.direction);
};

Player.prototype.moveBackward = function() {
  this.position.x -= this.velocity.x * Math.cos(this.direction);
  this.position.y += this.velocity.y * Math.sin(-this.direction);
};

Player.prototype.rotateLeft = function() {
  this.direction -= Math.PI/30;
  //console.log('rotateLeft');
};

Player.prototype.rotateRight = function() {
  this.direction += Math.PI/30;
  //console.log('rotateRight');
};

Player.prototype.update = function() {
  if (Key.isDown(Key.UP, Key.W))     this.moveForward();
  if (Key.isDown(Key.LEFT, Key.A))   this.rotateLeft();
  if (Key.isDown(Key.DOWN, Key.S))   this.moveBackward();
  if (Key.isDown(Key.RIGHT, Key.D))  this.rotateRight();
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
window.Asteroids = (function(){
  var canvas, ct, ship, lastGameTick;

  var init = function(canvas) {
    canvas = document.getElementById(canvas);
    ct = canvas.getContext('2d');
    width = 900,
    height = 400,
    ct.lineWidth = 1;
    ct.strokeStyle = 'hsla(0,0%,100%,1)',
    ship = new Player(20, 40, new Vector(width/2, height/2), new Vector(2, 2), 0);

    console.log('Init the game');
  };


  var update = function() {
    ship.update();
    ship.stayInArea(width, height);
  };

  var render = function() {
    ct.clearRect(0,0,width,height);
    ship.draw(ct);
  };

  var gameLoop = function() {
    lastGameTick = Date.now();
    requestAnimFrame(gameLoop);
    update();
    // only render if something was updated.
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

  Asteroids.init('canvas1');
  Asteroids.gameLoop();

  console.log('Ready to play.');  
});


