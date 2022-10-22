import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const AddMember = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [city, setCity] = useState('')

  return (
    <div>
        <h1>Create New Member</h1>

        Name: <input type="text" value={name} onChange={(event) => {setName(event.target.value)}}/> <br />
        Email: <input type="text" value={email} onChange={(event) => {setEmail(event.target.value)}}/> <br />
        City: <input type="text" value={city} onChange={(event) => {setCity(event.target.value)}}/> <br />

        <button>save</button>
        <button onClick={() => {navigate('/main/subscriptions/allMembers')}}>cancel</button>
        
        </div>
  )
}

export default AddMember