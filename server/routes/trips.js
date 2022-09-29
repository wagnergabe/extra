const express = require('express')
const Trip = require('../models/trips')

const router = express.Router()

//GET all trips
router.get('/', (req, res) => {
    res.json({mssg: 'Get all trips'})
});

//Get a single trip
router.get('/:id', (req, res) => {
    res.json({mssg: 'GET a single trip'})
})

//Create a trip (This is where API comes in I believe)
router.post('/', async (req, res) => {
    const {title, location, date} = req.body

    try {
        const trip = await Trip.create({title, location, date})
        res.status(200).json(trip)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})

//delete a trip
router.delete('/:id', (req, res) => {
    res.json({ mssg:' DELETE a trip'})
})

// UPDATE a trip
router.put('/:id', (req, res) => {
    res.json({ mssg:' UPDATE a new trip'})
})

module.exports = router