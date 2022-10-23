import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import Movie from "./Movie";


const AllMovies = () => {

      const location = useLocation()

      const userPermissions = JSON.parse(sessionStorage.getItem("permissions"))

      const movies = useSelector(state => state.movies)

      const [searchLetters, setSearchLetters] = useState('')

      useEffect(()=>{
        const movieName = location.state.movieName
        setSearchLetters(movieName)
      },[])
      

      const moviesToRender =  movies.map((movie,index) => {
          return <div className="movies-container-item">
            <Movie key={index} movie={movie}/>
          </div>
        })

        const filteredMoviesToRender =  movies.filter(movie => movie.name.toLowerCase().includes(searchLetters.toLowerCase()))
        .map((movie,index) => {
          return <div className="movies-container-item">
            <Movie key={index} movie={movie}/>
          </div>
        })

    return <div>

        find movie: <input type="text" value={searchLetters} onChange ={e => {setSearchLetters(e.target.value)}}/> <br />

        <div className="movies-container"
        >
          {searchLetters? filteredMoviesToRender : moviesToRender}
        </div>
        
        
    </div>
}

export default AllMovies