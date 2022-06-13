

import express from 'express'


const app = express()


app.set('view engine', 'ejs')




app.get('/', function(req, res) {
  res.send('')
  res.render('index')
})



app.listen(3002, function() {

})
