import axios from "axios";

const getAllSubscriptions = async() => {
    const resp = await axios.get('http://localhost:8001/subs/subscriptions')
    const subscriptions = resp.data
    return subscriptions
}

const getSubscriptionByMemberId = async(id) => {
    const resp = await axios.get(`http://localhost:8001/subs/subscriptions/getByMemId/${id}`)
    const subscription = resp.data
    return subscription
} 

const AddMovieOrCreateSubscription = async(memberId, obj) => {
    const resp = await axios.put(`http://localhost:8001/subs/subscriptions/addMovie/${memberId}`, obj)
    const subscriptions  = resp.data
    return subscriptions
}


export {getAllSubscriptions, getSubscriptionByMemberId, AddMovieOrCreateSubscription}