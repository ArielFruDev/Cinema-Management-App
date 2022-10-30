import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { deleteMovie } from '../utils/moviesUtils'
import { setAllMovies } from '../Redux/actions'
import MovieSubscriptions from './movieSubscriptions'

const Movie = ({movie}) => {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const subscriptions = useSelector(state => state.subscriptions)

  const userPermissions = JSON.parse(sessionStorage.getItem("permissions"))

  const removeMovie = async() => {
    const newMoviesList = await deleteMovie(movie._id)
    // console.log(newMoviesList);
    dispatch(setAllMovies(newMoviesList))
  }

  return (
    <div >
        <h4>{movie.name}, {movie.premiered}</h4> 

        genres: {movie.genres.map((genre) => {
            return genre + ',' + '         '})} <br />
            <div>
              <img style={{height: '80px'}} src={movie.image} alt="movie img" /> <br /><br />
              <MovieSubscriptions movieId={movie._id}/>
               <br /><br />

            </div>


              {/* add condition according to premissions */}
              {/* add logic */}
             {userPermissions.includes("Update Movies") && <button onClick={() => {navigate('/main/movies/editMovie', {state:{movie: movie}})}}>Edit</button>}
             {userPermissions.includes("Delete Movies") && <button onClick={() => {removeMovie()}}>Delete</button>}
    </div>
  )
}

export default Movie