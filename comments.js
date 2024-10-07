// Create web server
var http = require('http');

// Create web server
var server = http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World!');
});

// Start server
server.listen(3000, function() {
  console.log('Server is listening on port 3000');
});