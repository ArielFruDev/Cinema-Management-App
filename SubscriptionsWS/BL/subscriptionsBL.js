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
    const status = await subscriptionsDAL.createSubscription(obj)
    return status
}

const update = async(id, obj) => {
    const updatedSubscription = await subscriptionsDAL.updateSubscription(id, obj)
    return updatedSubscription
}

const remove = async(id)=>{
    const status = await subscriptionsDAL.deleteSubscription(id)
    return(status)
}


module.exports = {getAll, getById, create, update, remove}