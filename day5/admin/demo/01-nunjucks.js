var nunjucks = require('nunjucks')
var fs = require('fs')

var user = {
  name: 'Jack',
  age: 18
}

var items = [
  '123',
  '456'
]
fs.readFile('./tpl.html', 'utf8', function (err, data) {
  var result = nunjucks.renderString(data, {
    name: 'NunJucks',
    items: items,
    user: user
  })

  console.log(result)
})
