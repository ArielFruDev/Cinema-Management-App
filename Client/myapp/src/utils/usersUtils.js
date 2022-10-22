import axios from "axios";

//DB Users


const getAllDataBaseUsers = async() => {
    const resp = await axios.get("http://localhost:8001/userDB")
    const users = resp.data
    return (users)
}

const getDataBaseUserById = async(id) => {
    const resp = await axios.get(`http://localhost:8001/userDB/${id}`)
    const user = resp.data
    return (user)
}

const addDataBaseUser = async(obj) => {
    const resp = await axios.post("http://localhost:8001/userDB", obj)
    const user = resp.data
    return user 
}

const updateDataBaseUser = async(obj) => {
    const resp = await axios.put(`http://localhost:8001/userDB/${obj._id}`, obj)
    const users = resp.data
    return users 
}


const deleteDataBaseUser = async(id) => {
    const resp = await axios.delete(`http://localhost:8001/userDB/${id}`)
    const user = resp.data
    return user 
}


const updateUserPassword = async(user) => {
    const resp = await axios.put("http://localhost:8001/userDB/updatePassword", user)
    const status = resp.data
    return status
}

//JsonFile Users



const addJsonFileUser = async(obj) => {
    const resp = await axios.post("http://localhost:8001/userFile", obj)
    const users = resp.data
    return users 

}

const deleteJsonFileUser = async(id) => {
    const resp = await axios.delete(`http://localhost:8001/userFile/${id}`)
    const users = resp.data
    return users 

}

const getAllJsonFileUsers = async() => {
    const resp = await axios.get("http://localhost:8001/userFile")
    const users = resp.data
    return (users)
}


const updateUserInFile = async(obj) => {
    const resp = await axios.put(`http://localhost:8001/userFile/${obj._id}`, obj)
    const users = resp.data
    return users
}


export {getAllDataBaseUsers, getDataBaseUserById, updateDataBaseUser, addDataBaseUser, updateUserPassword, deleteDataBaseUser, 
    addJsonFileUser, getAllJsonFileUsers, updateUserInFile, deleteJsonFileUser}