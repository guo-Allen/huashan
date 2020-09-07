var http = require('http')
var config = require('./config')
var router = require('./router')

http
  .createServer(function (req, res) {
    router(req, res)
  })
  .listen(config.port, config.host, function () {
    console.log('Server is running at port ' + config.port)
    console.log('    You can Press Ctrl + C to Stop this server...')
  })
