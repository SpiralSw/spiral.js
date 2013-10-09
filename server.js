var  Configurations  = require('configs'),
     http = require('http'),
     jade = require('jade');

var server = new Configurations().server,
    html   = jade.renderFile('template.jade', { });

http.createServer(function(request, response) {
  response.writeHead(200, {'Content-Type': 'text/html'});
  response.end(html);
}).listen(server.port, server.host);