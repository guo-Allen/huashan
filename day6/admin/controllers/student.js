const db = require('../db')
const moment = require('moment')

exports.showIndex = (req, res, next) => {
  res.render('student/list.html')
}

exports.showAdd = (req, res, next) => {
  db.find('subjects', {}, (err, docs) => {
    if (err) {
      throw err
    }
    res.render('student/add.html', {
      subjects: docs
    })
  })
}

exports.showEdit = (req, res, next) => {

}

exports.doAdd = (req, res, next) => {

}

exports.doEdit = (req, res, next) => {

}

exports.doRemove = (req, res, next) => {

}

exports.getList = (req, res, next) => {
  db.aggregate('students', {
    $lookup: {
      from: "subjects",
      localField: "stu_subject_id",
      foreignField: "_id",
      as: "subject"
    }
  }, (err, result) => {
    if (err) {
      throw err
    }
    result.forEach(s => s.stu_birthday = moment(s.stu_birthday).format('YYYY-MM-DD'))
    res.json({
      status: 'ok',
      result: result
    })
  })
}
