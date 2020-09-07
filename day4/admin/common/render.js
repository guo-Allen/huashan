var fs = require('fs')
var path = require('path')
var template = require('art-template')
var config = require('../config')

module.exports = function (res) {
  res.render = function (viewName, data) {
    var viewPath = path.join(config.viewPath, viewName) + '.html'
    fs.readFile(viewPath, 'utf8', function (err, tplData) {
      if (err) {
        throw err
      }
      var htmlStr = template.compile(tplData)(data || {})
      res.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8'
      })
      res.end(htmlStr)
    })
  }
}
