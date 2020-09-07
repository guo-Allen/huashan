const {readFile} = require('fs')
const {join} = require('path')
const {basePath} = require('../config')
const template = require('art-template')

module.exports = function (res) {
	res.render = (url, data = {}) => {
		const viewPath = join(basePath, url) + '.html'
		readFile(viewPath, (err, tplData) => {
			res.writeHead(200, {'Content-Type': 'text/html; charset = utf-8' })
			const htmlStr = template.compile(tplData.toString())(data)
			res.end(htmlStr)
		})
	}
}