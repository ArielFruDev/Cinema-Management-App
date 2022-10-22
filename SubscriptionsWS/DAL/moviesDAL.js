const mongoose = require('mongoose')
const moviesModel = require('../models/moviesModel')


const getAllMovies = ()=>{
    return new Promise((resolve, reject) => {
        moviesModel.find({}, (err, data)=>{
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}

const getMovieById = (id)=> {
    return new Promise((resolve, reject)=>{
        moviesModel.findById(id, (err,data)=>{
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}

const createMovie = (obj)=> {
    return new Promise((resolve, reject)=>{
        let movie = moviesModel({
            name: obj.name,
            genres: obj.genres,
            image: obj.image,
            premiered: obj.premiered
        })

        movie.save((err) => {
            if (err) {
                reject(err)
            } else {
                resolve(getAllMovies())
            }
        })
    })
}

const updateMovie = (id, obj) => {
    return new Promise((resolve, reject) => {
        moviesModel.findByIdAndUpdate(id, obj, (err, data)=>{
            if (err) {
                reject(err)
            } else {
                resolve(getAllMovies())
            }
        })
    })
}


const deleteMovie = (id)=> {
    return new Promise((resolve, reject)=>{
        moviesModel.findByIdAndDelete(id, (err)=>{
            if (err) {
                reject(err)
            } else {
                resolve(getAllMovies())
            }
        })
    })
}


module.exports = {getAllMovies, getMovieById, createMovie, updateMovie, deleteMovie}
