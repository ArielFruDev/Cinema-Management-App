import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addNewMovie } from '../utils/moviesUtils'
import { setAllMovies } from '../Redux/actions'

const AddMovie = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [name, setName] = useState('')
    const [genres, setGenres] = useState([])
    const [image, setImage] = useState('')
    const [premiered, setPremiered] = useState('')
    const [dateError, setDateError] = useState(false)

    const setGenresByConvention = (event) => {
        const genresFromInput = event.target.value.split(', ')
        const genresToInput = genresFromInput.map((genre, index) => index ? ` ${genre}` : genre)
        setGenres(genresToInput)
    }

    const saveAndGoBack = async() => {
        //check date
        if (premiered.length === 10 && premiered[4] === premiered[7] && premiered[7] === '-') {
            const newMovie = {
                name: name,
                genres: genres,
                image: image,
                premiered: premiered
            }
            const newMoviesList = await addNewMovie(newMovie)
            dispatch(setAllMovies(newMoviesList))
            navigate('/main/movies/allMovies')

        } else {
            setDateError(true)
        }
    }

  return (
    <div>
        <h1>AddMovie</h1> <br /><br />

 
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

export default AddMovie