import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const SubscriptionDetails = ({subscription}) => {

    const movies = useSelector(state => state.movies)


  return (
    <div style={{border: '3px solid black'}}>
        <h5>Movies Subscribed</h5>
        <ul>{subscription.movies?.map(movie => {
            const id = movie._id
            const selectedMovie = movies.find(mov => mov._id === id)
            return <li><Link to={'/main/movies/allMovies'} state={{movieName: selectedMovie.name}}>{selectedMovie.name}</Link>,  {movie.date}</li>
        })}</ul>
    </div>
  )
}

export default SubscriptionDetails