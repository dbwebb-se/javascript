
/**
 * Create a http-server to try out node.js
 * 
 */
var port = 1337;

// Require the modules we need
var http = require('http');

// Create a http server with a callback for each request
var httpServer = http.createServer(function(request, response) {
  console.log((new Date()) + ' Received request for ' + request.url);
  response.writeHead(200, {'Content-type': 'text/plain'});
  response.end('Hello world\n');
});

// Setup the http-server to listen to a port
httpServer.listen(port, function() {
  console.log((new Date()) + ' HTTP server is listening on port ' + port);
});
