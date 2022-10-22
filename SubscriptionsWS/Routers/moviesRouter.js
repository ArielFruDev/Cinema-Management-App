const express = require('express')
const moviesBL = require('../BL/moviesBL')



const router = express.Router()

router.get('/', async(req, resp)=>{
    const movies = await moviesBL.getAll()
    console.log("3");
    return resp.json(movies)
})

router.get('/:id', async(req, resp)=>{
    const id = req.params.id
    const movie = await moviesBL.getById(id)
    return resp.json(movie)
})

router.post('/', async(req, resp) => {
    const obj = req.body
    const status = await moviesBL.create(obj)
    return resp.json(status)
})

router.put('/:id', async(req, resp)=>{
    const id = req.params.id
    const obj = req.body
    const movies = await moviesBL.update(id, obj)
    return resp.json(movies)
})
router.delete('/:id', async(req, resp)=>{
    const id = req.params.id
    const deleted = await moviesBL.remove(id)
    return resp.json(deleted)
})

//work!!
module.exports = router