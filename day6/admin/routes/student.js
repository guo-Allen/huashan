const express = require('express')
const router = express.Router()
const studentController = require('../controllers/student')

router
  .get('/', studentController.showIndex)
  .get('/add', studentController.showAdd)
  .post('/add', studentController.doAdd)
  .get('/edit/:id', studentController.showEdit)
  .post('/edit/', studentController.doEdit)
  .get('/remove/:id', studentController.doRemove)
  .get('/list', studentController.getList)

module.exports = router
