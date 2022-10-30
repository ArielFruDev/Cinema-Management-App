import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { deleteMember } from '../utils/membersUtils'
import { getSubscriptionByMemberId } from '../utils/subscriptionsUtils'
import { setAllMembers } from '../Redux/actions'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import { useEffect } from 'react'
import SubscriptionDetails from './subscriptionDetails'

const Member = ({member}) => {

    const userPermissions = JSON.parse(sessionStorage.getItem("permissions"))
    const subscriptions = useSelector(state => state.subscriptions)

    const [subscription, setSubscription] = useState({})

    useEffect(() => {
        const findSubscription = async() => {
            const sub = await getSubscriptionByMemberId(member._id)
            setSubscription(sub)
        }
        findSubscription()
    }, [subscriptions])

    const navigate = useNavigate()
    const dispatch = useDispatch()



    const removeMember = async(id) => {
        const members = await deleteMember(id)
        dispatch(setAllMembers(members))

        //remove also from subs DB
    }
    
    const subDetails = <div>
        <SubscriptionDetails subscription={subscription}/>
    </div>

  return (
    <div style={{border: '3px solid black'}}>
        <h3>{member.name}</h3>
        Email: {member.email} <br />
        City: {member.city} <br />

        {/* build here logic for "movies watched" */}
        {subDetails} <br />
        {userPermissions.includes("Update Subscriptions") && <button onClick={() => {navigate('/main/subscriptions/editMember',{state:{member: member}})}}>Edit</button>}
        {userPermissions.includes("Delete Subscriptions") && <button onClick={() => {removeMember(member._id)}}>Delete</button>}
    </div>
  )
}

export default Member