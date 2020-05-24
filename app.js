const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const route = require('./routes/index')
require('./config/mongoose')

const app = express()
const PORT = process.env.PORT || 3000

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(route)

app.listen(PORT, () => console.log(`The server listening on http://localhost/${PORT}`))