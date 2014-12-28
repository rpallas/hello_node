(function () {

  var http = require('http');
  var greetee = require('../lib/greetee.js');
  
  http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello ' + greetee() + ' 1\n');
  }).listen(8070, '127.0.0.1');
  
  console.log('Hello_Node_1 server running at http://127.0.0.1:8070/');

})();
