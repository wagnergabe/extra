const express = require('express')

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
router.post('/', (req, res) => {
    res.json({ mssg:' POST a new trip'})
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