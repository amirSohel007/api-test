const express = require('express')
const app = express();
const routes = require('./router/router')
const bodyParser = require('body-parser')
const cors = require('cors')

//enable dotenv environment file
require('dotenv').config()

//enable cros for all origin
app.use(cors())

// parse application/json
app.use(bodyParser.json())

//config api routes
app.use('/', routes)

//PORT 
const PORT = process.env.PORT || 8000

//Starting server on port 
app.listen(PORT, () => console.log('Server is up and running now ...'))