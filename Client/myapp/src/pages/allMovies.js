import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import Movie from "./Movie";


const AllMovies = () => {

      const userPermissions = JSON.parse(sessionStorage.getItem("permissions"))

      const movies = useSelector(state => state.movies)

      const [searchLetters, setSearchLetters] = useState('')
      

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