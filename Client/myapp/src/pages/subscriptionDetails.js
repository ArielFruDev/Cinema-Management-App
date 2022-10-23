import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const SubscriptionDetails = ({subscription}) => {

    const movies = useSelector(state => state.movies)

    const [movieSubscriptionDiv, setMovieSubscriptionDiv] = useState(false)
    const [unwatched, setUnwatched] = useState([])

    useEffect(() => {
      const setMoviesToSubscribe = () => {
        const subscribedMoviesNames = subscription.movies?.map(movie => {
          const id = movie._id
          const movieName = movies.find(mov => mov._id === id).name
          return movieName
        })
        const moviesNames = movies.map(movie => {
          const id = movie._id
          const movieName = movies.find(mov => mov._id === id).name
          return movieName
        })
        const unwatchedMovies = moviesNames.filter(movie => !subscribedMoviesNames?.includes(movie))
        setUnwatched(unwatchedMovies)
      }
      setMoviesToSubscribe()
    },[subscription])

    const date = new Date()
    const set2Digits = (num) => {return num.toString().padStart(2, '0')}
    const currentDate = `${set2Digits(date.getDate())}/${set2Digits(date.getMonth() + 1)}/${date.getFullYear()}`
    
    
    const subscriptionDivToRender = <div style={{border: '2px solid black'}}>
      <h6>Add a new movie</h6>
      Movie: <select name="" id="">
        {unwatched.map(movie => {

          return <option value={movie}>{movie}</option>
        })}
      </select>
      Date: <input type="text" value={currentDate}/> <br />
      <button onClick={() => {console.log(unwatched);}}>subscribe</button>
    </div>


  return (
    <div style={{border: '3px solid black'}}>
        <h5>Movies Subscribed</h5>
        <ul>{subscription.movies?.map(movie => {
          const id = movie._id
          const selectedMovie = movies.find(mov => mov._id === id)
          return <li><Link to={'/main/movies/allMovies'} state={{movieName: selectedMovie.name}}>{selectedMovie.name}</Link>,  {movie.date}</li>
        })}</ul>
        <button onClick={() => {setMovieSubscriptionDiv(!movieSubscriptionDiv)}}>subscribe to new movie</button>
        {movieSubscriptionDiv && subscriptionDivToRender}
    </div>
  )
}

export default SubscriptionDetails