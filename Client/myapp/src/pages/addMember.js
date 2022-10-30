import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { createMember } from '../utils/membersUtils'
import { setAllMembers } from '../Redux/actions'

const AddMember = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [city, setCity] = useState('')

    const editMember = async() => {
      const editedMember = {
        name: name,
        email: email,
        city: city
      } 
      const newMembersList = await createMember(editedMember)
      console.log(newMembersList);
      dispatch(setAllMembers(newMembersList))
      navigate('/main/subscriptions/allMembers')
    }

  return (
    <div>
        <h1>Create New Member</h1>

        Name: <input type="text" value={name} onChange={(event) => {setName(event.target.value)}}/> <br />
        Email: <input type="text" value={email} onChange={(event) => {setEmail(event.target.value)}}/> <br />
        City: <input type="text" value={city} onChange={(event) => {setCity(event.target.value)}}/> <br />

        <button onClick={() => {editMember()}}>save</button>
        <button onClick={() => {navigate('/main/subscriptions/allMembers')}}>cancel</button>
        
        </div>
  )
}

export default AddMember