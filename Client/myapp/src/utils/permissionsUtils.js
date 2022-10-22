import axios from "axios";


const getAllPermissions = async() => {
    const resp = await axios.get("http://localhost:8001/permissions")
    const users = resp.data
    return (users)
}

const updatePermissions = async(obj) => {
    const resp = await axios.put(`http://localhost:8001/permissions/${obj._id}`, obj)
    const users = resp.data
    return users
}

const addNewPermissionsList = async(obj) => {
    const resp = await axios.post("http://localhost:8001/permissions", obj)
    const users = resp.data
    // console.log(users);
    return users 

}

const deletePermissionsList = async(id) => {
    const resp = await axios.delete(`http://localhost:8001/permissions/${id}`)
    const users = resp.data
    return users 

}

export {getAllPermissions, addNewPermissionsList, updatePermissions, deletePermissionsList}