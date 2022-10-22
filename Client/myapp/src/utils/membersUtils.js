import axios from "axios";

const getAllMembers = async() => {
    const resp = await axios.get('http://localhost:8001/subs/members')
    const members = resp.data
    return members
}

const deleteMember = async(id) => {
    const resp = await axios.delete(`http://localhost:8001/subs/members/${id}`)
    const members = resp.data
    return members 
}

export {getAllMembers, deleteMember}