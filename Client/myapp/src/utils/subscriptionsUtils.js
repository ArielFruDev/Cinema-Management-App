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


export {getAllSubscriptions, getSubscriptionByMemberId}