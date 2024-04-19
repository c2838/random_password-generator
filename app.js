// loading express
const express = require('express')
const app = express()
const port = 3000
// loading express-handlebars engine
const { engine } = require('express-handlebars')\
// use hbs & seting views route
app.engine('.hbs', engine({extname: '.hbs'}));
app.set('view engine', 'hbs');
app.set('views', './views');
// use static files
app.use(express.static('public'))

app.get('/', (req,res) => {
  res.render('index')
})

app.listen(port, () => {
  console.log(`express server is running on http://localhost:${port}`)
})