const express = require('express')
const subBL = require('../BL/subscriptionsBL')

const router = express.Router()

//Members services

router.get('/members', async(req, resp) => {
    const members = await subBL.getAllMembers()
    return resp.json(members)
} )

router.get('/members/:id', async(req, resp) => {
    try {
        const id = req.params.id
        const member = await subBL.getMemberById(id)
        return resp.json(member)
    }
    catch(err){
        return resp.status(500).send(err)
    }
    
})

router.post('/members', async(req, resp) => {
    const obj = req.body
    const members = await subBL.createMember(obj)
    return resp.json(members)
})

router.put('/members/:id', async(req, resp) => {
    const id = req.params.id
    const obj = req.body
    const members = await subBL.updateMember(id, obj)
    return resp.json(members)
})

router.delete('/members/:id', async(req, resp) => {
    const id = req.params.id
    const members = await subBL.deleteMember(id)
    return resp.json(members)
    
})

// Movies routers

router.get('/movies', async(req, resp) => {
    const movies = await subBL.getAllMovies()
    console.log("3");
    return resp.json(movies)
} )

router.get('/movies/:id', async(req, resp) => {
    const id = req.params.id
    const movie = await subBL.getMovieById(id)
    return resp.json(movie)
    
})

router.post('/movies', async(req, resp) => {
    const obj = req.body
    const status = await subBL.createMovie(obj)
    return resp.json(status)
})

router.put('/movies/:id', async(req, resp) => {
    const id = req.params.id
    const obj = req.body
    const movies = await subBL.updateMovie(id, obj)
    return resp.json(movies)
})

router.delete('/movies/:id', async(req, resp) => {
    const id = req.params.id
    const status = await subBL.deleteMovie(id)
    return resp.json(status)
})

//subscriptions routers

router.get('/subscriptions', async(req, resp) => {
    const subscriptions = await subBL.getAllSubscriptions()
    return resp.json(subscriptions)
} )

router.get('/subscriptions/:id', async(req, resp) => {
    const id = req.params.id
    const subscription = await subBL.getSubscriptionById(id)
    return resp.json(subscription)
    
})

router.get('/subscriptions/getByMemId/:id', async(req, resp) => {
    const id = req.params.id
    const subscription = await subBL.getSubscriptionByMemberId(id)
    return resp.json(subscription)    
})

router.get('/subscriptions/getByMovId/:id', async(req, resp) => {
    const id = req.params.id
    const subscriptions = await subBL.getSubscriptionByMovieId(id)
    return resp.json(subscriptions)    
})

router.post('/subscriptions', async(req, resp) => {
    const obj = req.body
    const status = await subBL.createSubscription(obj)
    return resp.json(status)
})

router.put('/subscriptions/:id', async(req, resp) => {
    const id = req.params.id
    const obj = req.body
    const subscription = await subBL.updateSubscription(id, obj)
    return resp.json(subscription)
})

router.put('/subscriptions/:id', async(req, resp) => {
    const id = req.params.id
    const obj = req.body
    const subscription = await subBL.addMovieToSubscription(id, obj)
    return resp.json(subscription)
})

router.delete('/subscriptions/:id', async(req, resp) => {
    const id = req.params.id
    const status = await subBL.deleteSubscription(id)
    return resp.json(status)
    
})





module.exports = router