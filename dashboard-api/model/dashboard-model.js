const mongoose = require('mongoose')

const Schema = mongoose.Schema

const DashboardEntryModel = new Schema({
  entry: { type: String }
})

module.exports = mongoose.model('dashboardEntry', DashboardEntryModel)
