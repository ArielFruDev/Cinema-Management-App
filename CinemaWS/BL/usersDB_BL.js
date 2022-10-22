const usersDAL = require('../DAL/usersDB_DAL')

const getAllUsers = async() => {
    const users = await usersDAL.getAllUsers()
    return(users)
}

const getUserById = async(id) => {
    const user = await usersDAL.getUserById(id)
    return(user)
}

const updateUser = async(id, obj) => {
    const users = await usersDAL.updateUser(id, obj) 
    return (users)
}

const updateUserPassword = async(obj) => {
    const status = await usersDAL.updateUserPassword(obj)
    return(status)
}

const createUser = async(obj) => {
    const user = await usersDAL.createUser(obj)
    return(user) 
}

const deleteUser = async(id) => {
    const status = await usersDAL.deleteUser(id)
    return(status)
}

const loginAccess = async(obj) => {
    const status = await usersDAL.loginAccess(obj)
    return(status)
}

module.exports = {getAllUsers, getUserById, createUser, updateUser, updateUserPassword, deleteUser, loginAccess} 