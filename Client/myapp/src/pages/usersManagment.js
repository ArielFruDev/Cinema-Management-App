import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { Outlet, useNavigate } from "react-router-dom";

const UsersManagment = () => {

  useEffect(()=>{
    const defaultPage = ()=>{navigate('/main/userManagment/allUsers')}
    defaultPage()
  },[])

  const navigate = useNavigate()

    return <div>
        <h1>UsersManagment</h1>
        <nav
        style={{
          paddingBottom: "1rem",
        }}
      >
        <Button variant="primary" onClick={()=>{navigate('/main/userManagment/allUsers')}}>All Users</Button>{' '}
        <Button variant="primary" onClick={()=>{navigate('/main/userManagment/addUser')}}>Add User</Button>{' '}
      </nav>

      <Outlet/>
        
    </div>
}

export default UsersManagment