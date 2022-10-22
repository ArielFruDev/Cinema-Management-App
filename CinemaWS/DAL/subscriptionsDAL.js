const axios = require('axios')

// members services

const getAllMembers = async() => {
    const resp = await axios.get('http://localhost:8000/members')
    const members = resp.data
    return(members)
}

const getMemberById = async(id) => {
    const resp = await axios.get(`http://localhost:8000/members/${id}`)
    const member = resp.data
    return(member)
}

const createMember = async(obj) => {
    const resp = await axios.post(`http://localhost:8000/members`, obj)
    const members = resp.data
    return(members)
}

const updateMember = async(id, obj) => {
    const resp = await axios.put(`http://localhost:8000/members/${id}`, obj)
    const members = resp.data
    return(members)
}

const deleteMember = async(id) => {
    const resp = await axios.delete(`http://localhost:8000/members/${id}`)
    const members = resp.data
    return(members)
}

//Movies services

const getAllMovies = async() => {
    const resp = await axios.get('http://localhost:8000/movies')
    const movies = resp.data
    return(movies)
}

const getMovieById = async(id) => {
    const resp = await axios.get(`http://localhost:8000/movies/${id}`)
    const movie = resp.data
    return(movie)
}

const createMovie = async(obj) => {
    const resp = await axios.post(`http://localhost:8000/movies`, obj)
    const movies = resp.data
    return(movies)
}

const updateMovie = async(id, obj) => {
    const resp = await axios.put(`http://localhost:8000/movies/${id}`, obj)
    const movies = resp.data
    return(movies)
}

const deleteMovie = async(id) => {
    const resp = await axios.delete(`http://localhost:8000/movies/${id}`)
    const movies = resp.data
    return(movies)
}

//Subscriptions services

const getAllSubscriptions = async() => {
    const resp = await axios.get('http://localhost:8000/subscriptions')
    const subscriptions = resp.data
    return(subscriptions)
}

const getSubscriptionById = async(id) => {
    const resp = await axios.get(`http://localhost:8000/subscriptions/${id}`)
    const subscription = resp.data
    return(subscription)
}

const createSubscription = async(obj) => {
    const resp = await axios.post(`http://localhost:8000/subscriptions`, obj)
    const subscription = resp.data
    return(`New subscription created! ID: ${subscription._id}`)
}

const updateSubscription = async(id, obj) => {
    const resp = await axios.put(`http://localhost:8000/subscriptions/${id}`, obj)
    const subscription = resp.data
    return(subscription)
}

const deleteSubscription = async(id) => {
    const resp = await axios.delete(`http://localhost:8000/subscriptions/${id}`)
    return(`Subscription with id ${id} seccessfully deleted!`)
}

module.exports = {getAllMembers, getMemberById, createMember, updateMember, deleteMember, 
                    getAllMovies, getMovieById, createMovie, updateMovie, deleteMovie,
                    getAllSubscriptions, getSubscriptionById, createSubscription, updateSubscription, deleteSubscription }