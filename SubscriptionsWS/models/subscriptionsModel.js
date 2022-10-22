const mongoose = require('mongoose')

const SubscriptionSchema = new mongoose.Schema({
    memberId: mongoose.ObjectId,
    movies: [{movieId: mongoose.ObjectId, date: String}],
})

module.exports = mongoose.model('subscription', SubscriptionSchema)