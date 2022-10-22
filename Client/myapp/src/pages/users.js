import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { deleteDataBaseUser } from '../utils/usersUtils'
import { deleteJsonFileUser } from '../utils/usersUtils'
import { deletePermissionsList } from '../utils/permissionsUtils'
import { setAllDataBaseUsers, setAllPermissions, setAllJsonFileUsers } from '../Redux/actions'
import { useDispatch } from 'react-redux'
const Users = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const users = useSelector(state => state.jsonFileUsers)
    const permissions = useSelector(state => state.permissions)

const deleteUser = async(userId) => {
  //delete from DB
  const newDataBaseUsersList = await deleteDataBaseUser(userId) 
  // console.log(newDataBaseUsersList);
  dispatch(setAllDataBaseUsers(newDataBaseUsersList))
  //delete from JF
  const newJsonFileUsersList = await deleteJsonFileUser(userId) 
  // console.log(newJsonFileUsersList);
  dispatch(setAllJsonFileUsers(newJsonFileUsersList))
  //delete from Prems
  const newPermissionsList = await deletePermissionsList(userId)
  // console.log(newPermissionsList);
  dispatch(setAllPermissions(newPermissionsList))
}

  return (
    <div>
        Users
        {users.map((user, index)=>{
          const userPermissions = permissions.filter(permFileUser => permFileUser._id === user._id)[0]?.permissions
            return <div key={index} style={{border: "2px solid black"}}>
              Name: {user.firstName + ' ' + user.lastName} <br />
              Creation Date: {user.createdDate} <br />
              Session Time Out (Minutes): {user.sessionTimeOut} <br />
              Permissions: {userPermissions?.map((perm, index) => (<p style={{display: "inline"}}>{index !== userPermissions.length -1 ? perm + ', ' : perm + '.'}</p>))} <br />
              <input type="button" value="Edit" onClick={() => {navigate('/main/editUser', {state:{user: user, permissions: userPermissions}})}}/>
              <input type="button" value="Delete" onClick={() => {deleteUser(user._id)}}/>
              </div>
        })}
        </div>
  )
}

export default Users