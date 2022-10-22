import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addDataBaseUser } from '../utils/usersUtils'
import { addJsonFileUser } from '../utils/usersUtils'
import { addNewPermissionsList } from '../utils/permissionsUtils'
import { setAllJsonFileUsers } from '../Redux/actions'
import { setAllPermissions } from '../Redux/actions'

const AddUser = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [time, setTime] = useState('')
    const [permissions, setPermissions] = useState([])

    const date = new Date()
    const set2Digits = (num) => {return num.toString().padStart(2, '0')}
    const currentDate = `${set2Digits(date.getDate())}/${set2Digits(date.getMonth() + 1)}/${date.getFullYear()}`
    
    const saveAndGoBack = async() => {

        const newDataBaseUser = {
          userName: firstName + ' ' + lastName,
          password: ""
        }
        const user = await addDataBaseUser(newDataBaseUser)

        const newUser = {
            "_id": user._id,
            "firstName":firstName,
            "lastName":lastName,
            "createdDate": currentDate, 
            "sessionTimeOut":time}
        const newJsonFileUsers = await addJsonFileUser(newUser) 
        console.log(newJsonFileUsers);
        dispatch(setAllJsonFileUsers(newJsonFileUsers))

        const newPermissions = {
            "_id": user._id, 
            "permissions": permissions}
        const newPermissionsList = await addNewPermissionsList(newPermissions) 
        console.log(newPermissionsList);
        dispatch(setAllPermissions(newPermissionsList))
        navigate('/main/userManagment/allUsers')
    }
    
    const handlePermsList = () => {
        const allCheckBoxes = Array.from(
            document.querySelectorAll('input[type="checkbox"]:checked')
        )
        const perms = allCheckBoxes.map(input => input.value)
        setPermissions(perms)
        }

  return (
    <div>
        <h3>Edit User</h3>
        First Name:<input type="text" value={firstName} placeholder="First Name" onChange={ e => {setFirstName(e.target.value)}}/> <br />
        Last Name:<input type="text" value={lastName} placeholder="Last Name" onChange={ e => {setLastName(e.target.value)}}/> <br />
        Session Time Out(minutes):<input type="text" value={time} placeholder="Session Time Out" onChange={ e => {setTime(e.target.value)}}/> <br />
        Created Date: {currentDate} <br />
        Premissions: <br />
        <div  onChange={() => handlePermsList()}>
        <input type="checkbox" value="View Subscriptions"/> View Subscriptions <br />
        <input type="checkbox" value="Create Subscriptions"/> Create Subscriptions <br />
        <input type="checkbox" value="Delete Subscriptions"/> Delete Subscriptions <br />
        <input type="checkbox" value="Update Subscriptions"/> Update Subscriptions <br />
        <input type="checkbox" value="View Movies"/> View Movies <br />
        <input type="checkbox" value="Create Movies"/> Create Movies <br />
        <input type="checkbox" value="Delete Movies"/> Delete Movies <br />
        <input type="checkbox" value="Update Movies"/> Update Movies <br />
        </div>

            <input type="button" value="Create" onClick={() => {saveAndGoBack()}}/>
            <input type="button" value="Cancel" onClick={() => {navigate('/main/userManagment/allUsers')}}/>
        
        </div>
  )
}

export default AddUser