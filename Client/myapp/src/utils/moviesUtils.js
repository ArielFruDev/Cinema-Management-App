import axios from "axios"


const getAllMovies = async() => {
    const resp = await axios.get('http://localhost:8001/subs/movies')
    const movies = resp.data
    // console.log(movies);
    return movies
}

const addNewMovie = async(obj) => {
    const resp = await axios.post('http://localhost:8001/subs/movies', obj)
    const movies = resp.data
    return movies
}

const updateMovie = async(obj) => {
    const resp = await axios.put(`http://localhost:8001/subs/movies/${obj._id}`, obj)
    const movies = resp.data
    return movies
}

const deleteMovie = async(id) => {
    const resp = await axios.delete(`http://localhost:8001/subs/movies/${id}`)
    const movies = resp.data
    return movies
}

export {getAllMovies, addNewMovie, updateMovie, deleteMovie}