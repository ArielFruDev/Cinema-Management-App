// check problem with the deleteUser function.


const usersDAL = require('../DAL/usersJsonDAL')

const getUsers = async()=>{
    const {users} = await usersDAL.getData()
    return(users)
}

const getUser = async(id)=>{
    const {users} = await usersDAL.getData()
    const user = users.filter(user => user._id == id)
    return(user)
}

const addUser = async(obj)=>{
    let {users} = await usersDAL.getData()
    users.push(obj)
    const fullData = {"users": users}
    const status = await usersDAL.changeData(fullData)
    return(users)
}

const updateUser = async(id, obj)=>{
    let {users} = await usersDAL.getData()
    const newUsers = users.map(user => {
        if (user._id == id) {
            return obj
        } else {
            return user
        }     
    })
    const fullData = {"users": newUsers}
    const status = await usersDAL.changeData(fullData)
    return(newUsers)
}

const deleteUser = async(id)=>{
    let {users} = await usersDAL.getData()
    const newUsers = users.filter(user => user._id !== id)
    const fullData = {"users": newUsers}
    const status = await usersDAL.changeData(fullData)
    return(newUsers)
}

module.exports = {getUsers, getUser, addUser, deleteUser, updateUser}