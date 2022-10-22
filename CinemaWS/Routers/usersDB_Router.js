const express = require('express')
const userBL = require('../BL/usersDB_BL')

const router = express.Router()

router.get('/', async(req, resp) => {
    const users = await userBL.getAllUsers()
    return resp.json(users)
})

router.get('/:id', async(req, resp) => {
    const id = req.params.id 
    const users = await userBL.getUserById(id)
    return resp.json(users)
})

router.post('/', async(req, resp) => {
    const obj = req.body
    const user = await userBL.createUser(obj)
    return resp.json(user)
})

//check path

router.put('/:id', async(req, resp) => {
    const obj = req.body
    const id = req.params.id
    const users = await userBL.updateUser(id, obj)
    return resp.json(users)
})

//check path

router.put('/updatePassword', async(req, resp) => {
    const obj = req.body
    const status = await userBL.updateUserPassword(obj)
    return resp.json(status)
})

//check path


router.get('/login', async(req, resp) => {
    const obj = req.body
    const status = await userBL.loginAccess(obj)
    return resp.json(status)
})

router.delete('/:id', async(req, resp) => {
    const id = req.params.id
    const status = await userBL.deleteUser(id)
    console.log(status);
    return resp.json(status)
})

module.exports = router