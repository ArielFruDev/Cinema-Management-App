const utils = require('../utils') 
const mongoose = require('mongoose')
const membersModel = require('../models/membersModel')
const membersDAL = require('../DAL/membersDAL')


const getAll = async() => {
    const members = await membersDAL.getAllMembers()
    return(members)
}

const getById = async(id)=>{
    const member = await membersDAL.getMemberById(id)
    return(member)
}

const create = async(obj) => {
    const members = await membersDAL.createMember(obj)
    return members
}

const update = async(id, obj) => {
    const members = await membersDAL.updateMember(id, obj)
    return members
}

const remove = async(id)=>{
    const members = await membersDAL.deleteMember(id)
    return(members)
}


const sayHello = ()=>{
    const hello = membersDAL.sayHello()
    return(hello)
} 










//that BL should push 'usersList'  to mongoDB as two collections

const pushUsersToMongo = async() => {
    let users = await utils.getUsers()
    users.forEach( user => {
        return new Promise((resolve, reject) => {
            let newUser = membersModel({
                name: user.name,
                email: user.email,
                city: user.city
            })
            newUser.save(err => {
                if (err) {
                    reject(err)
                } else {
                    resolve("mongo has updated")
                }
            })
        })
    })
    // console.log(users);
}


module.exports = {pushUsersToMongo, getAll, getById, create, update, remove, sayHello}

