const subscriptionsDAL = require('../DAL/subscriptionsDAL')


const getAll = async() => {
    const subscriptions = await subscriptionsDAL.getAllSubscriptions()
    return(subscriptions)
}

const getById = async(id)=>{
    const subscription = await subscriptionsDAL.getSubscriptionById(id)
    return(subscription)
}

const create = async(obj) => {
    const subscriptions = await subscriptionsDAL.createSubscription(obj)
    return subscriptions
}

const update = async(id, obj) => {
    const subscriptions = await subscriptionsDAL.updateSubscription(id, obj)
    return subscriptions
}

const remove = async(id)=>{
    const status = await subscriptionsDAL.deleteSubscription(id)
    return(status)
}

// const addMovie = async(id) => {
//     const subscription = 
// }


module.exports = {getAll, getById, create, update, remove}