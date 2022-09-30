const express = require('express')
const { createTrip, 
        getTrips,
        getTrip,
        deleteTrip,
        updateTrip } = require('../controllers/tripController')

const router = express.Router()

//GET all trips
router.get('/', getTrips)

//Get a single trip
router.get('/:id', getTrip)

//Create a trip (This is where API comes in I believe)
router.post('/', createTrip) 

//delete a trip
router.delete('/:id', deleteTrip)

// UPDATE a trip
router.put('/:id', updateTrip)

module.exports = router