
import { useState } from 'react'

const TripForm = () => {
    const [title, setTitle] = useState('')
    const [location, setLocation] = useState('')
    const [date, setDate] = useState('')
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()

        const trip = {title, location, date}

        const response = await fetch('/api/trips', {
            method: 'POST',
            body: JSON.stringify(trip),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
        }
        if (response.ok) {
            setTitle('')
            setLocation('')
            setDate('')
            setError(null)
            console.log('new trip created')
        }
    }

    return (
        <form className = "newTrip" onSubmit={handleSubmit}>
            <h3>Make a new Trip</h3>

            <label>Name of Trip</label>
            <input
                type='text'
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                />

            <label>Location</label>
            <input
                type='text'
                onChange={(e) => setLocation(e.target.value)}
                value={location}
                />

            <label>Date of Departure</label>
            <input
                type='text'
                onChange={(e) => setDate(e.target.value)}
                value={date}
                />

                <button>Add Trip</button>
                {error && <div className='error'>{error}</div>}
        </form>
        
    )
}

export default TripForm