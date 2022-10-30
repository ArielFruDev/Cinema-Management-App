import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { updateMember } from '../utils/membersUtils'
import { setAllMembers } from '../Redux/actions'

const EditMember = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const location = useLocation()
  
  const member = location.state.member
  const [name, setName] = useState(member.name)
  const [email, setEmail] = useState(member.email)
  const [city, setCity] = useState(member.city)

  const editMember = async() => {
    const editedMember = {
      _id: member._id,
      name: name,
      email: email,
      city: city
    } 
    const newMembersList = await updateMember(member._id, editedMember)
    dispatch(setAllMembers(newMembersList))
    navigate('/main/subscriptions/allMembers')
    // console.log(newMembersList);
  }

  return (
    <div>
        <h1>Edit Member</h1>

        Name: <input type="text" value={name} onChange={(event) => {setName(event.target.value)}}/> <br />
        Email: <input type="text" value={email} onChange={(event) => {setEmail(event.target.value)}}/> <br />
        City: <input type="text" value={city} onChange={(event) => {setCity(event.target.value)}}/> <br />

        <button onClick={() => {editMember()}}>update</button>
        <button onClick={() => {navigate('/main/subscriptions/allMembers')}}>cancel</button>
        
        </div>
  )
}


export default EditMember