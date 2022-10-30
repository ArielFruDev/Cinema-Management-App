import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { AddMovieOrCreateSubscription } from '../utils/subscriptionsUtils'
import { setAllSubscriptions } from '../Redux/actions'
const SubscriptionDetails = ({subscription}) => {

    const movies = useSelector(state => state.movies)
    const CurrentSubscription = useSelector(state => state.subscriptions[subscription._id])
    const dispatch = useDispatch()

    const [movieSubscriptionDiv, setMovieSubscriptionDiv] = useState(false)
    const [unwatched, setUnwatched] = useState([])
    const [movieId, setMovieId] = useState("")

    useEffect(() => {
      const setMoviesToSubscribe = () => {
        const subscribedMoviesNames = subscription.movies?.map(movie => {
          const id = movie.movieId
          const movieName = movies.find(movie => movie._id === id).name
          return movieName
        })
        // const moviesNames = movies.map(movie => movie.name)
        const unwatchedMovies = movies.filter(movie => !subscribedMoviesNames?.includes(movie.name))
        setUnwatched(unwatchedMovies)
        setMovieId(unwatched[0]?._id)
      }
      setMoviesToSubscribe()
    },[CurrentSubscription, subscription])

    const date = new Date()
    const set2Digits = (num) => {return num.toString().padStart(2, '0')}
    const currentDate = `${set2Digits(date.getDate())}/${set2Digits(date.getMonth() + 1)}/${date.getFullYear()}`

    const addNewMovie = async() => {
      const newMovie = {
        movieId: movieId,
        date: currentDate
      }
      const newSubscriptionsList = await AddMovieOrCreateSubscription(subscription.memberId, newMovie)
      dispatch(setAllSubscriptions(newSubscriptionsList))
    }
    
    
    const subscriptionDivToRender = <div style={{border: '2px solid black'}}>
      <h6>Add a new movie</h6>
      Movie: <select name="" id="" onClick={(event) => {setMovieId(event.target.value)}}>
        {unwatched.map(movie => {
          return <option value={movie._id}>{movie.name}</option>
        })}
      </select>
      Date: <input type="text" value={currentDate}/> <br />
      <button onClick={() => {addNewMovie()}}>subscribe</button>
    </div>


  return (
    <div style={{border: '3px solid black'}}>
        <h5>Movies Subscribed</h5>
        <ul>{subscription.movies?.map(movie => {
          const id = movie.movieId
          const selectedMovie = movies.find(movie => movie._id === id)
          return <li><Link to={'/main/movies/allMovies'} state={{movieName: selectedMovie.name}}>{selectedMovie.name}</Link>,  {movie.date}</li>
        })}</ul>
        <button onClick={() => {setMovieSubscriptionDiv(!movieSubscriptionDiv)}}>subscribe to new movie</button>
        {movieSubscriptionDiv && subscriptionDivToRender}
    </div>
  )
}

export default SubscriptionDetails


