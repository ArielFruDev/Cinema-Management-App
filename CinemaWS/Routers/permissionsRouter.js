const express = require('express')
const permissionsBL = require('../BL/permissionsBL')

const router = express.Router()

router.get('/', async(req, resp)=>{
    const users = await permissionsBL.getUsers()
    return resp.json(users)
})

router.get('/:id', async(req, resp)=>{
    const id = req.params.id
    const user = await permissionsBL.getUser(id)
    return resp.json(user)
})

router.post('/', async(req, resp)=>{
    const obj = req.body
    const status = await permissionsBL.addUser(obj)
    return resp.json(status)
})

router.put('/:id', async(req, resp)=>{
    const id = req.params.id
    const obj = req.body
    const status = await permissionsBL.updatePermissions(id, obj)
    return resp.json(status)
})

router.delete('/:id', async(req, resp)=>{
    const id = req.params.id
    const status = await permissionsBL.deleteUser(id)
    return resp.json(status)
})


module.exports = router