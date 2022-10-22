import { Button } from 'react-bootstrap';
import React, { useState } from "react";
import {Link, useNavigate} from 'react-router-dom'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';


const LoginPage = () => {
    const navigate = useNavigate()

    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [loginError, setLoginErr] = useState(false)


    const dateBaseUsers = useSelector(state => state.dateBaseUsers)
    const permissions = useSelector(state => state.permissions)
    
    useEffect(() => {
        sessionStorage.setItem("loggedUser", "")
        sessionStorage.setItem("permissions", "")
    }, [])

    const loginCheck = () => {
        const user = dateBaseUsers.find(user => user.userName === name && user.password === password)
        if(user) {
            sessionStorage.setItem("loggedUser", JSON.stringify(user))
            const userPermissions = permissions.find(permissionListUser => permissionListUser._id === user._id).permissions
            sessionStorage.setItem("permissions", JSON.stringify(userPermissions))
            navigate(`/main`)
        } else {
            setLoginErr(true)
                }
    }


    return <div>
        <h1>LoginPage</h1>

        User Name: <input type="text" value={name} onChange={(event)=>{setName(event.target.value)}}/> <br />
        Password: <input type="text" value={password} onChange={(event)=>{setPassword(event.target.value)}}/> <br />
        <Button variant="primary" onClick={()=>{loginCheck()}}>Login</Button> <br />
        {loginError && <p style={{color: "red"}}>User name and password combination not found</p>} 
        New user? <Link to={'/createAccount'}>Create Account</Link> <br />
    </div>
}

export default LoginPage