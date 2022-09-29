const express = require('express')
const { createTrip, getTrips, getTrip } = require('../controllers/tripController')

const router = express.Router()

//GET all trips
router.get('/', getTrips)

//Get a single trip
router.get('/:id', getTrip)

//Create a trip (This is where API comes in I believe)
router.post('/', createTrip) 

//delete a trip
router.delete('/:id', (req, res) => {
    res.json({ mssg:' DELETE a trip'})
})

// UPDATE a trip
router.put('/:id', (req, res) => {
    res.json({ mssg:' UPDATE a new trip'})
})

module.exports = router