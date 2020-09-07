const { join } = require('path')

module.exports = {
	port: 3030,
	basePath: join(__dirname, 'views'),
	dbSetting: {
		connect: 'mongodb://localhost:27017/sys',
		userCollection: 'users',
		productCollection: 'products'
	}
}