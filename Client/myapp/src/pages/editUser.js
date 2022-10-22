import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { updateUserInFile, getDataBaseUserById, updateDataBaseUser } from '../utils/usersUtils'
import { setAllJsonFileUsers, setAllDataBaseUsers } from '../Redux/actions'
import { updatePermissions } from '../utils/permissionsUtils'
import { setAllPermissions } from '../Redux/actions'

const EditUser = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const location = useLocation()
    const user = location.state.user
    const userPermissions = location.state.permissions
    const [firstName, setFirstName] = useState(user.firstName)
    const [lastName, setLastName] = useState(user.lastName)
    const [time, setTime] = useState(user.sessionTimeOut)
    const [permissions, setPermissions] = useState(userPermissions)
    
    useEffect(() => {        
        const displayExistPermissions = () => {
            const allCheckBoxes = Array.from(
                document.querySelectorAll('input[type="checkbox"]')
            )
                allCheckBoxes.forEach(checkbox => {
                if (permissions.includes(checkbox.value)) {
                    // console.log(checkbox.value);
                    checkbox.checked = true
                }
            })
        }
        displayExistPermissions()
    }, []) 
    const saveAndGoBack = async() => {
        const dataBaseUser = await getDataBaseUserById(user._id)
        const newDataBaseUser = {
            "_id": user._id,
            "userName": firstName + " " + lastName,
            "password": dataBaseUser.password
        }
        const newDataBaseUsersList = await updateDataBaseUser(newDataBaseUser)
        dispatch(setAllDataBaseUsers(newDataBaseUsersList))

        const newJsonFileUser = {
            "_id":user._id,
            "firstName":firstName,
            "lastName":lastName,
            "createdDate":user.createdDate,
            "sessionTimeOut":time}
        const newJsonFileUsersList = await updateUserInFile(newJsonFileUser)
        dispatch(setAllJsonFileUsers(newJsonFileUsersList))

        const newPermissions = {
            "_id": user._id,
            "permissions": permissions}
        const newPermissionsList = await updatePermissions(newPermissions)
        dispatch(setAllPermissions(newPermissionsList))

        sessionStorage.setItem("permissions", JSON.stringify(permissions))

        navigate('/main/userManagment')
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
        Created Date: {user.createdDate} <br />
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

            <input type="button" value="Edit" onClick={() => {saveAndGoBack()}}/>
            <input type="button" value="Cancel" onClick={() => {navigate('/main/userManagment')}}/>
        
        </div>
  )
}

export default EditUser