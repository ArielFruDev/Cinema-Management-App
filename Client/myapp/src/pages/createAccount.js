// change the logic- instead get users from DB its better to take them from userJsonFile


import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {Link, useNavigate} from 'react-router-dom'
import { getAllDataBaseUsers, updateUserPassword, updateUserInFile, getAllJsonFileUsers } from "../utils/usersUtils";
import { setAllDataBaseUsers, setAllJsonFileUsers } from "../Redux/actions";
const CreateAccount = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [updateError, setUpdateError] = useState(false)


    const accountCreation = async() => {
        const users = await getAllJsonFileUsers()
        users.forEach( async (user) => {
            if (user.firstName === name.split(" ")[0] && user.lastName === name.split(" ")[1]) {

                const DBObj = {
                    _id: user._id,
                    userName: `${user.firstName} ${user.lastName}`,
                    password: password
                }

                const date = new Date()
                const set2Digits = (num) => {return num.toString().padStart(2, '0')}
                const currentDate = `${set2Digits(date.getDate())}/${set2Digits(date.getMonth() + 1)}/${date.getFullYear()}`
                
                const FileObj = 
                    {"_id" : user._id,
                    "firstName" : user.firstName,
                    "lastName" : user.lastName,
                    "createdDate" : user.createdDate,
                    "sessionTimeOut" : user.sessionTimeOut}

                const newDataBaseUsersList = await updateUserPassword(DBObj)
                dispatch(setAllDataBaseUsers(newDataBaseUsersList))

                const newJsonFileUsersList = await updateUserInFile(FileObj)
                dispatch(setAllJsonFileUsers(newJsonFileUsersList))
                navigate(`/`)
            } 
        })
        setUpdateError(true)
    }

    return <div>
        <h1>Create New Account</h1>
        User Name: <input type="text" value={name} onChange={(event)=>{setName(event.target.value)}}/> <br />
        Password: <input type="text" value={password} onChange={(event)=>{setPassword(event.target.value)}}/> <br />
        {updateError && <p style={{color: "red"}}>User name not found. plaese contact SYS admin!</p>}
        <input type="button" value="Create" onClick={()=>{accountCreation()}}/> <br />

       
    </div>
}

export default CreateAccount