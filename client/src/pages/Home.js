import { useEffect, useState } from "react";

// components
import TripInfo from '../components/TripInfo';
import TripForm from "../components/TripForm";

const Home = () => {
    const [trips, setTrips] = useState(null)

    useEffect(() => {
        const fetchTrips = async () => {
            const response = await fetch('/api/trips')
            const json = await response.json() 

            if (response.ok) {
                setTrips(json)
            }
        }

        fetchTrips()
    }, [])

    return (
        <div className="home">
            <div className="trips">
            {trips && trips.map((trip) => (
                <TripInfo key = {trip._id} trip ={trip} />
            ))}
        </div>
        <TripForm />
        </div>
    )
}

export default Home;