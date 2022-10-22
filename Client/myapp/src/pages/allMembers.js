import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Member from './member'

const AllMembers = () => {

    const members = useSelector(state => state.members)

    const [searchLetters, setSearchLetters] = useState('')

    const membersToRender = members.map((member, index) => {
        return <div>
            <Member key={index} member={member}/>
            </div>  
    })

    const filteredMembersToRender = members.filter(member => member.name.toLowerCase().includes(searchLetters.toLowerCase()))
    .map((member, index) => { 
        return <div>
            <Member key={index} member={member}/>
            </div>  
    })
  return (
    <div>
        <h1>Members</h1><br />

        Enter Member Name: <input type="text" value={searchLetters} onChange={(event) => {setSearchLetters(event.target.value)}}/>
        <br /><br /><br />

        {searchLetters? filteredMembersToRender: membersToRender}
        

        
        
        </div>
  )
}

export default AllMembers