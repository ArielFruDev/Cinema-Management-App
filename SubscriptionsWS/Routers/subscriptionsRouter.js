const express = require("express")
const subscriptionsBL = require('../BL/subscriptionsBL')



const router = express.Router()

router.get('/', async(req, resp)=>{
    const subscriptions = await subscriptionsBL.getAll()
    return resp.json(subscriptions)
})

router.get('/:id', async(req, resp)=>{
    const id = req.params.id
    const subscription = await subscriptionsBL.getById(id)
    return resp.json(subscription)
})

router.post('/', async(req, resp) => {
    const obj = req.body
    const subscriptions = await subscriptionsBL.create(obj)
    return resp.json(subscriptions)
})

router.put('/:id', async(req, resp)=>{
    const id = req.params.id
    const obj = req.body
    const subscriptions = await subscriptionsBL.update(id, obj)
    return resp.json(subscriptions)
})
router.delete('/:id', async(req, resp)=>{
    const id = req.params.id
    const deleted = await subscriptionsBL.remove(id)
    return resp.json(deleted)
})
//work!!

module.exports = router