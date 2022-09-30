const TripInfo = ({ trip }) => {
    return (
        <div className="trip-info">
            <h3>{trip.title}</h3>
            <p>{trip.location}</p>
            <p>{trip.date}</p>
        </div>
    )
} 

export default TripInfo