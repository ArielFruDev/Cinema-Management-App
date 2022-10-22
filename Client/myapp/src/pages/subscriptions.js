import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Subscriptions = () => {

    const navigate = useNavigate()

    const userPermissions = JSON.parse(sessionStorage.getItem("permissions"))

    useEffect(() => {
        const defaultPage = () => {navigate('/main/subscriptions/allMembers')}
        defaultPage()
      }, [])

    return <div>
        <h1>Subscriptions</h1> <br />
        <button onClick={() => {navigate('/main/subscriptions/allMembers')}}>All Members</button>
        {userPermissions.includes("Create Subscriptions") && <button onClick={() => {navigate('/main/subscriptions/addMember')}}>Add Member</button>} <br /><br /><br />
        
        <Outlet/>
    </div>
}

export default Subscriptions