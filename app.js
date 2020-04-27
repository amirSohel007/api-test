const express = require('express')
const app = express();
const routes = require('./router/router')
const bodyParser = require('body-parser')
require('dotenv').config()
//PORT 
const PORT = process.env.PORT || 8000

// parse application/json
app.use(bodyParser.json())

app.use('/', routes)

//Starting server on port 
app.listen(PORT, () => console.log('Server is up and running now ...'))