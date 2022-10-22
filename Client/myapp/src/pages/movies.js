import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";


const Movies = () => {

      const navigate = useNavigate()

      useEffect(() => {
        const defaultPage = () => {navigate('/main/movies/allMovies')}
        defaultPage()
      }, [])
      

      const userPermissions = JSON.parse(sessionStorage.getItem("permissions"))

    return <div>
        <h1>Movies</h1> 

        <button onClick={() => {navigate("/main/movies/allMovies")}}>All Movies</button>
        {userPermissions.includes("Create Movies") && <button onClick={() => {navigate("/main/movies/addMovie")}}>Add Movie</button>}
       <br /><br /><br />
        <Outlet/>
        
    </div>
}

export default Movies