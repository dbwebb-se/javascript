/**
 * A websocket client.
 */
$(document).ready(function(){
  'use strict';

  var url = 'ws://dbwebb.se:1337/',
    websocket,
    form = $('#form1'),
    output = $('#output');

  // Display the url in form field for the user to change
  $('#connect_url').val(url);


  // Event handler to create the websocket connection
  $('#connect').on('click', function(event) {
    console.log('Connecting to: ' + url);
    websocket = new WebSocket(url, 'echo-protocol');

    websocket.onopen = function() {
      console.log('The websocket is now open.');
      console.log(websocket);
      websocket.send('Thanks for letting me connect to you.');
      outputLog('The websocket is now open.');
    }

    websocket.onmessage = function(event) {
      console.log('Receiving message: ' + event.data);
      console.log(event);
      console.log(websocket);
      outputLog('Server said: ' + event.data);
    }

    websocket.onclose = function() {
      console.log('The websocket is now closed.');
      console.log(websocket);
      outputLog('Websocket closed.');
    }
  });


  // Add the message to the log
  function outputLog(message) {
    var now = new Date();
    $(output).append(now.toLocaleTimeString() + ' ' + message + '<br/>').scrollTop(output[0].scrollHeight);
  }


  // Send a message to the server
  $('#send_message').on('click', function(event) {
    var msg = $('#message').val();

    if(!websocket || websocket.readyState === 3) {
      console.log('The websocket is not connected to a server.');
    } else {
      websocket.send(msg);      
      outputLog('You said: ' + msg);
    }
  });


  // Close the connection to the server
  $('#close').on('click', function() {
    console.log('Closing websocket.');
    websocket.send('Client closing connection by intention.');
    websocket.close();
    console.log(websocket);
  });


  console.log('Everything is ready.'); 
});

