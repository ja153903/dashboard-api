const express = require('express')
const DashboardEntry = require('../model/dashboard-model')

const dashboardEntryRouter = express.Router()

dashboardEntryRouter.route('/')
  .get((req, res) => {
    DashboardEntry.find({}, (err, entries) => {
      if (err) res.json(err)
      res.json(entries)
    })
  })
  .post((req, res) => {
    const entry = new DashboardEntry({
      entry: req.body.entry
    })
    entry.save()
    res.status(201).send(entry)
  })

dashboardEntryRouter.route('/:entryId')
  .get((req, res) => {
    DashboardEntry.findById(req.params.entryId, (err, entry) => {
      if (err) res.json(err)
      res.json(entry)
    })
  })

module.exports = dashboardEntryRouter
