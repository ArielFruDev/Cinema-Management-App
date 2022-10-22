const mongoose = require('mongoose')
const membersModel = require('../models/membersModel')


const getAllMembers = ()=>{
    // console.log("hello");
    return new Promise((resolve, reject) => {
        membersModel.find({}, (err, data)=>{
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}

const getMemberById = (id)=> {
    return new Promise((resolve, reject)=>{
        membersModel.findById(id, (err,data)=>{
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}

const createMember = (obj)=> {
    return new Promise((resolve, reject)=>{
        let member = membersModel({
            name: obj.name,
            email: obj.email,
            city: obj.city
        })

        member.save((err) => {
            if (err) {
                reject(err)
            } else {
                resolve(getAllMembers())
            }
        })
    })
}

const updateMember = (id, obj) => {
    return new Promise((resolve, reject) => {
        membersModel.findByIdAndUpdate(id, obj, (err)=>{
            if (err) {
                reject(err)
            } else {
                resolve(getAllMembers())
            }
        })
    })
}


const deleteMember = (id)=> {
    return new Promise((resolve, reject)=>{
        membersModel.findByIdAndDelete(id, (err)=>{
            if (err) {
                reject(err)
            } else {
                resolve(getAllMembers())
            }
        })
    })
}


// const sayHello = () => {
//     return("hallo")
// }
// getAllMembers().then(data => {console.log(data)})


module.exports = {getAllMembers, getMemberById,createMember, updateMember, deleteMember}