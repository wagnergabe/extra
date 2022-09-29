const Trip = require('../models/trips');
const mongoose = require('mongoose')

//get all trips

const getTrips = async (req, res) => {
    const trips = await Trip.find({})

    res.status(200).json(trips)
}

//get a single trip
const getTrip = async (req, res) => {
    const { id } = req.params

    //keeps internal errors from crashing app
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'no trip found'})
    }

    const trip = await Trip.findById(id)
    
    if (!trip) {
        return res.status(404).json({error: "No trip found"});
    }
    res.status(200).json(trip)
}

//create trip
const createTrip = async (req, res) => {
    const {title, location, date} = req.body

try {
    const trip = await Trip.create({title, location, date})
    res.status(200).json(trip)
} catch (error) {
    res.status(400).json({error: error.message})
}
}

//delete trip
const deleteTrip = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'no trip found'})
    }

    const trip = await Trip.findOneAndDelete({_id: id})

    if (!trip) {
        return res.status(404).json({error: "No trip found"});
    }

    res.status(200).json(trip)
}

//update trip
const updateTrip = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'no trip found'})
    }

    const trip = await Trip.findOneAndUpdate({_id: id}, {
        //spread all properties of object
        ...req.body
    })

    if(!trip) {
        return res.status(400).json({error: 'No trip found'})
    }

    res.status(200).json(trip)
}

module.exports = {
    getTrips,
    getTrip,
    createTrip,
    deleteTrip,
    updateTrip
}
