const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const dashboardEntry = require('./routes/dashboard-entry')
require('dotenv').config()

const app = express()
const port = process.env.PORT || 5656

const db_user = process.env.DB_USER
const db_pass = process.env.DB_PASSWORD
const db_uri = `mongodb://${db_user}:${db_pass}@ds145573.mlab.com:45573/dashboard-entry-db`

const db = mongoose.connect(db_uri)

app.listen(port, () => {
  console.log(`Port running on localhost:${port}`)
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use('/api/dashboard', dashboardEntry)