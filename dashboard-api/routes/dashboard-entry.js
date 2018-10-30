const express = require('express')

const dashboardEntryRouter = express.Router()

dashboardEntryRouter
  .get('/1', (req, res) => {
    res.json([{
      id: '1',
      name: 'Jaime'
    }])
  })

module.exports = dashboardEntryRouter
