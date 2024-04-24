// loading express
const express = require('express')
const app = express()
const port = 3000
// loading express-handlebars engine
const { engine } = require('express-handlebars')
// loading password generator function
const randomPassword = require('./utilites/randomPassword')
// use hbs & seting views route
app.engine('.hbs', engine({extname: '.hbs'}));
app.set('view engine', 'hbs');
app.set('views', './views');
// use static files
app.use(express.static('public'))
// use post method, extended use true for more data type
app.use(express.urlencoded({ extended: true }))

app.get('/', (req,res) => {
  res.redirect('/randomPassword')
})

app.get('/randomPassword', (req, res) => {
  res.render('index')
})

app.post('/randomPassword', (req,res) => {
  // get the data from frontend
  const options = req.body
  // get the random password
  const password = randomPassword(options)
  // send views to frontend
  res.render('index', { password, options })
})

app.listen(port, () => {
  console.log(`express server is running on http://localhost:${port}`)
})