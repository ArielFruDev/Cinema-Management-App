const subscriptionsModel = require('../models/subscriptionsModel')


const getAllSubscriptions = ()=>{
    return new Promise((resolve, reject) => {
        subscriptionsModel.find({}, (err, data)=>{
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}

const getSubscriptionById = (id)=> {
    return new Promise((resolve, reject)=>{
        subscriptionsModel.findById(id, (err,data)=>{
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}

const createSubscription = (obj)=> {
    return new Promise((resolve, reject)=>{
        let subscription = subscriptionsModel({
            memberId: obj.memberId,
            movies: obj.movies
        })

        subscription.save((err) => {
            if (err) {
                reject(err)
            } else {
                resolve(getAllSubscriptions())
            }
        })
    })
}

const updateSubscription = (id, obj) => {
    return new Promise((resolve, reject) => {
        subscriptionsModel.findByIdAndUpdate(obj._id, obj, (err)=>{
            if (err) {
                reject(err)
            } else {
                resolve(getAllSubscriptions())
            }
        })
    })
}


const deleteSubscription = (id)=> {
    return new Promise((resolve, reject)=>{
        subscriptionsModel.findByIdAndDelete(id, (err)=>{
            if (err) {
                reject(err)
            } else {
                resolve(`The subscription with ID ${id} seccessfully deleted`)
            }
        })
    })
}


module.exports = {getAllSubscriptions, getSubscriptionById, createSubscription, updateSubscription, deleteSubscription}
