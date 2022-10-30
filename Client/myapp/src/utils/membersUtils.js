import axios from "axios";

const getAllMembers = async() => {
    const resp = await axios.get('http://localhost:8001/subs/members')
    const members = resp.data
    return members
}

const createMember = async(obj) => {
    const resp = await axios.post('http://localhost:8001/subs/members', obj)
    const members = resp.data
    return members
}

const updateMember = async(id, obj) => {
    const resp = await axios.put(`http://localhost:8001/subs/members/${id}`, obj)
    const members = resp.data
    return members
}

const deleteMember = async(id) => {
    const resp = await axios.delete(`http://localhost:8001/subs/members/${id}`)
    const members = resp.data
    return members 
}

    export {getAllMembers, createMember, updateMember, deleteMember}