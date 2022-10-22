const axios = require('axios')

const mongoose = require('mongoose')
const usersModel = require('../Models/usersModel')

//To Do: check if the services match the requirements. especially create and updatePassword. 

const getAllUsers = () => {
    return new Promise((resolve, reject)=>{
        usersModel.find({}, (err, data)=>{
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}

const getUserById = (id) => {
    return new Promise((resolve, reject)=>{
        usersModel.findById(id, (err, data)=>{
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}

const createUser = (obj) => {
    return new Promise((resolve, reject)=>{
                let user = usersModel({
                    userName: obj.userName,
                    password: obj.password
                })
                user.save((err) => {
                    if (err) {
                        reject(err)
                    } else {
                        const user = getAllUsers().then(users => users.splice(-1)[0])
                        resolve(user)
                    }
                })
        })
}

const updateUser = (id, obj) => {
    return new Promise((resolve, reject)=> {
        usersModel.findByIdAndUpdate( id, {userName: obj.userName, password: obj.password} , (err)=> {
            if(err) {
                reject(err)
            } else {
                resolve(getAllUsers())
            }
        })
    })
}

const updateUserPassword = (obj) => {
    return new Promise((resolve, reject)=> {
        usersModel.findOneAndUpdate({userName: obj.userName}, obj, (err)=> {
            if(err) {
                reject(err)
            } else {
                resolve(getAllUsers())
            }
        })
    })
}

const deleteUser = (id) => {
    return new Promise((resolve, reject) => {
        usersModel.findByIdAndDelete(id , (err) => {
            if(err) {
                reject(err)
            } else {
                resolve(getAllUsers())
            }
        })
    })
}

const loginAccess = (obj) => {
    return new Promise((resolve, reject) => {
        usersModel.find({userName: obj.userName, password: obj.password}, (err, data) => {
            if(err) {
                reject(err)
            } else if (data.length == 1) {
                resolve(data)
            } else {
                resolve("No match")
            }
        })
    })
}





module.exports = {getAllUsers, getUserById, createUser, updateUser, updateUserPassword, deleteUser, loginAccess}