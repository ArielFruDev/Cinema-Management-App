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
    const status = await subscriptionsBL.create(obj)
    return resp.json(status)
})

router.put('/:id', (req, resp)=>{
    const id = req.params.id
    const obj = req.body
    const updatedSubscription = subscriptionsBL.update(id, obj)
    resp.json(updatedSubscription)
})
router.delete('/:id', async(req, resp)=>{
    const id = req.params.id
    const deleted = await subscriptionsBL.remove(id)
    return resp.json(deleted)
})
//work!!

module.exports = router