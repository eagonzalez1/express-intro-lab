

import express from 'express'
import { students } from './data/student-data.js'


const app = express()


app.set('view engine', 'ejs')



app.get('/', function(req, res) {
  res.render('student-data/index', {
    students: students
  })
})



app.listen(3000, function() {
  console.log('listening on port 3000')
})
