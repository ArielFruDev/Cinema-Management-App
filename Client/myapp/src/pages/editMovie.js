import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { setAllMovies } from '../Redux/actions'
import { updateMovie } from '../utils/moviesUtils'

const EditMovie = () => {

    const location = useLocation()
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const movie = location.state.movie 

    const [name, setName] = useState(movie.name)
    const [genres, setGenres] = useState(movie.genres)
    const [image, setImage] = useState(movie.image)
    const [premiered, setPremiered] = useState(movie.premiered)
    const [dateError, setDateError] = useState(false)

    const setGenresByConvention = (event) => {
        const genresFromInput = event.target.value.split(', ')
        const genresToInput = genresFromInput.map((genre, index) => index ? ` ${genre}` : genre)
        setGenres(genresToInput)
    }

    const saveAndGoBack = async() => {
        if (premiered.length === 10 && premiered[4] === premiered[7] && premiered[7] === '-') {
            const newMovie = {
                _id: movie._id,
                name: name,
                genres: genres,
                image: image,
                premiered: premiered
            }
            const newMoviesList = await updateMovie(newMovie)
            dispatch(setAllMovies(newMoviesList))
            navigate('/main/movies/allMovies')

        } else {
            setDateError(true)
        }
    }


  return (
    <div>
        <h1>Edit Movie</h1> <br /><br />

 
        Name: <input type="text" value={name} onChange={ e => (setName(e.target.value))}/> <br />
        Genres: <input type="text" value={genres} onChange={ e => {setGenresByConvention(e)}} placeholder='separate by comma & space'/> <br /> {/*set as different values in array*/}
        Image url: <input type="text" value={image} onChange={ e => (setImage(e.target.value))}/> <br /> 
        Premiered: <input type="text" value={premiered} onChange={ e => {setPremiered(e.target.value)}} placeholder='YYYY-MM-DD'/> <br /> {/*add check if the input follows the convention*/}
        {dateError && <p style={{color: "red"}}>Please follow date convention: YYYY-MM-DD</p>} <br />

        <button onClick={() => {saveAndGoBack()}}>Save</button>
        <button onClick={() => {navigate('/main/movies/allMovies')}}>Cancel</button>
    </div>
  )
}

export default EditMovie