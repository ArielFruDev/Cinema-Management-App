const subDAL = require('../DAL/subscriptionsDAL')

//Members services

const getAllMembers = async() => {
   const members = await subDAL.getAllMembers()
   return (members)
}

const getMemberById = async(id) => {
    const member = await subDAL.getMemberById(id)
    return (member)
 }

const createMember = async(obj) => {
    const members = await subDAL.createMember(obj)
    return (members)
 }

const updateMember = async(id, obj) => {
    const members = await subDAL.updateMember(id, obj)
    return (members)
 }
const deleteMember = async(id) => {
    const members = await subDAL.deleteMember(id)
    return (members)
 }

//Movies services

const getAllMovies = async() => {
    const movies = await subDAL.getAllMovies()
    console.log("2");
    return (movies)
 }
 
 const getMovieById = async(id) => {
     const movie = await subDAL.getMovieById(id)
     return (movie)
  }
 
 const createMovie = async(obj) => {
     const status = await subDAL.createMovie(obj)
     return (status)
  }
 
 const updateMovie = async(id, obj) => {
     const movies = await subDAL.updateMovie(id, obj)
     return (movies)
  }
 const deleteMovie = async(id) => {
     const movie = await subDAL.deleteMovie(id)
     return (movie)
  }

// subscriptions services

const getAllSubscriptions = async() => {
    const subscription = await subDAL.getAllSubscriptions()
    return (subscription)
 }
 
 const getSubscriptionById = async(id) => {
     const subscription = await subDAL.getSubscriptionById(id)
     return (subscription)
  }

  const getSubscriptionByMemberId = async(memberId) => {
    const allSubs = await subDAL.getAllSubscriptions()
    const subscription = allSubs.filter(sub => sub.memberId == memberId)[0]
    return (subscription)
 }
//תמצא כל איבר שבתוך מערך הסרטים יש איבר עם האיידי של הסרט
 const getSubscriptionByMovieId = async(movieId) => {
    const allSubs = await subDAL.getAllSubscriptions()
    const subsWatchedMovie = []
    allSubs.forEach(sub => {
        const isMovieExist = sub.movies.filter(movie => movie.movieId == movieId)
        isMovieExist.length == 1 && subsWatchedMovie.push(sub) 
    })
    return (subsWatchedMovie)
 }
 
 const createSubscription = async(obj) => {
     const status = await subDAL.createSubscription(obj)
     return (status)
  }

 const addMovieToSubscription = async(id, obj) => {
    const sub = await subDAL.getSubscriptionById(id)
    sub.movies.push(obj)
    const newSub = await subDAL.updateSubscription(id, sub)
 }
 
 const updateSubscription = async(id, obj) => {
     const subscription = await subDAL.updateSubscription(id, obj)
     return (subscription)
  }
 const deleteSubscription = async(id) => {
     const subscription = await subDAL.deleteSubscription(id)
     return (subscription)
  }


module.exports = {getAllMembers, getMemberById, createMember, updateMember, deleteMember,
getAllMovies ,getMovieById ,createMovie ,updateMovie ,deleteMovie,
getAllSubscriptions, getSubscriptionById,getSubscriptionByMemberId, getSubscriptionByMovieId, createSubscription, addMovieToSubscription, updateSubscription, deleteSubscription} 