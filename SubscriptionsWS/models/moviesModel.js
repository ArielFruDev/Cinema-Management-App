const mongoose = require('mongoose')

const ShowsSchema = new mongoose.Schema({
    name: String,
    genres: [String],
    image: String,
    premiered: String
})

module.exports = mongoose.model('show', ShowsSchema)