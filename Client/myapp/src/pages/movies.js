import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";


const Movies = () => {

  //fix issue: when rendered after rendering from "subscriptionDetails", it deosn't render "allMovies" as expected.

      const navigate = useNavigate()

      useEffect(() => {
        const defaultPage = () => {navigate('/main/movies/allMovies',{state:{movieName: ""}})}
        defaultPage()
      }, [])
      

      const userPermissions = JSON.parse(sessionStorage.getItem("permissions"))

    return <div>
        <h1>Movies</h1> 

        <button onClick={() => {navigate("/main/movies/allMovies",{state:{movieName: ""}})}}>All Movies</button>
        {userPermissions.includes("Create Movies") && <button onClick={() => {navigate("/main/movies/addMovie")}}>Add Movie</button>}
       <br /><br /><br />
        <Outlet/>
        
    </div>
}

export default Movies