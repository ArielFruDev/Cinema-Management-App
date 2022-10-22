const express = require('express')
const membersBL = require('../BL/membersBL')

const router = express.Router()


// router.get('/sayHello', (req, resp)=>{
//     const hello = membersBL.sayHello()
//     return resp.json(hello)
// })

router.get('/', async(req, resp)=>{
    const members = await membersBL.getAll()
    return resp.json(members)
})

router.get('/:id', async(req, resp)=>{
    const id = req.params.id
    const member = await membersBL.getById(id)
    return resp.json(member)
})

router.post('/', async(req, resp) => {
    const obj = req.body
    const members = await membersBL.create(obj)
    return resp.json(members)
})

router.put('/:id', (req, resp)=>{
    const id = req.params.id
    const obj = req.body
    const members = membersBL.update(id, obj)
    resp.json(members)
})
router.delete('/:id', async(req, resp)=>{
    const id = req.params.id
    const members = await membersBL.remove(id)
    return resp.json(members)
})

//work!!





module.exports = router