const permissionsDAL = require('../DAL/permissionsDAL')

const getUsers = async()=>{
    const {users} = await permissionsDAL.getData()
    return(users)
}

const getUser = async(id)=>{
    const {users} = await permissionsDAL.getData()
    const user = users.filter(user => user._id == id)
    return(user)
}

const addUser = async(obj)=>{
    let {users} = await permissionsDAL.getData()
    users.push(obj)
    const fullData = {"users": users}
    const status = await permissionsDAL.changeData(fullData)
    return(users)
}

const updatePermissions = async(id, obj)=>{
    let {users} = await permissionsDAL.getData()
    const newUsers = users.map(user => {
        if (user._id == id) {
            return obj
        } else {
            return user
        }     
    })
    const fullData = {"users": newUsers}
    const resp = await permissionsDAL.changeData(fullData)
    return resp.users
}

const deleteUser = async(id)=>{
    let {users} = await permissionsDAL.getData()
    const newUsers = users.filter(user => user._id !== id)
    const fullData = {"users": newUsers}
    const status = await permissionsDAL.changeData(fullData)
    return(newUsers)
}

module.exports = {getUsers, getUser, addUser, deleteUser, updatePermissions}