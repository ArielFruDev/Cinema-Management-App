const utils = require('../utils') 
const mongoose = require('mongoose')
const moviesModel = require('../models/moviesModel')
const moviesDAL = require('../DAL/moviesDAL')

const getAll = async() => {
    const movies = await moviesDAL.getAllMovies()
    return(movies)
}

const getById = async(id)=>{
    const movie = await moviesDAL.getMovieById(id)
    return(movie)
}

const create = async(obj) => {
    const status = await moviesDAL.createMovie(obj)
    return status
}

const update = async(id, obj) => {
    const movies = await moviesDAL.updateMovie(id, obj)
    return movies
}

const remove = async(id)=>{
    const status = await moviesDAL.deleteMovie(id)
    return(status)
}






//that BL should push 'usersList'  to mongoDB as two collections

const pushShowsToMongo = async() => {
    let shows = await utils.getShows()
    shows.forEach( show => {
        return new Promise((resolve, reject) => {
            let newShow = moviesModel({
                name: show.name,
                genres: show.genres,
                image: show.image,
                premiered: show.premiered          
            })
            newShow.save(err => {
                if (err) {
                    reject(err)
                } else {
                    resolve("mongo has updated")
                }
            })
        })
    })
}


module.exports = {pushShowsToMongo, getAll, getById, create, update, remove}

