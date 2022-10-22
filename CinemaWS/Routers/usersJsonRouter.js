const express = require('express')
const usersJsonBL = require('../BL/usersJsonBL')

const router = express.Router()

router.get('/', async(req, resp)=>{
    const users = await usersJsonBL.getUsers()
    return resp.json(users)
})

router.get('/:id', async(req, resp)=>{
    const id = req.params.id
    const user = await usersJsonBL.getUser(id)
    return resp.json(user)
})

router.post('/', async(req, resp)=>{
    const obj = req.body
    const status = await usersJsonBL.addUser(obj)
    return resp.json(status)
})

router.put('/:id', async(req, resp)=>{
    const id = req.params.id
    const obj = req.body
    const status = await usersJsonBL.updateUser(id, obj)
    return resp.json(status)
})

router.delete('/:id', async(req, resp)=>{
    const id = req.params.id
    const status = await usersJsonBL.deleteUser(id)
    return resp.json(status)
})


module.exports = router