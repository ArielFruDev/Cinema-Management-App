//להתייעץ על הארכיטקטורה ולמחוק פונקציות לא רלוונטיות
const jFile = require('jsonfile')

const getData = () => {
    return new Promise((resolve, reject)=>{
        jFile.readFile('./Files/users.json', (err, data)=>{
            if(err) {
                reject(err);
            } else {
                resolve(data);
            }
        })
    })  
}

const changeData = (newData) => {
    return new Promise((resolve, reject)=>{
        jFile.writeFile('./Files/users.json', newData, (err)=>{
            if(err) {
                reject(err);
            } else {
                resolve("success!");
            }
        })
    })
}


module.exports = {getData, changeData}

// const getUsers = () => {
//     return new Promise((resolve, reject)=>{
//         jFile.readFile('./Files/users.json', (err, data)=>{
//             if(err) {
//                 reject(err);
//             } else {
//                 resolve(data);
//             }
//         })
//     })  
// }

// const addUser = (obj) => {
//     return new Promise((resolve, reject)=>{
//         jFile.readFile('./Files/users.json',(err, data)=>{
//             if(err) {
//                 reject(err)
//             } else {
//                 let arr = data.users
//                 arr.push(obj)
//                 let fulldata = {"users": arr}
//                 jFile.writeFile('./Files/users.json', fulldata, (err)=>{
//                     if (err) {
//                         reject(err)
//                     } else {
//                         resolve("created!")
//                     }

//                 })
//             }
//         })
//     })
// }

// const deleteUser = (id) => {
//     return new Promise((resolve, reject)=>{
//         jFile.readFile('./Files/users.json',(err, data)=>{
//             if(err) {
//                 reject(err)
//             } else {
//                 let arr = data.users
//                 const newArray = arr.filter(user => user._id !== id)
//                 let fulldata = {"users": arr}
//                 jFile.writeFile('./Files/users.json', fulldata, (err)=>{
//                     if (err) {
//                         reject(err)
//                     } else {
//                         resolve("deleted!")
//                     }

//                 })
//             }
//         })
//     })
// }


