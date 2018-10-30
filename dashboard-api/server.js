const express = require('express')
const dashboardEntry = require('./routes/dashboard-entry')

const app = express()
const port = process.env.PORT || 5656

app.listen(port, () => {
  console.log(`Port running on localhost:${port}`)
})

app.use('/api/dashboard', dashboardEntry)