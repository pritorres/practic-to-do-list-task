const mongoose = require('mongoose')
const Schema = mongoose.Schema

const taskModel = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true }
})

module.exports = mongoose.model('taskModel', taskModel)