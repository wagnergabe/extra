import React from 'react'
import "../flight.css";


function AirportSelect(props) {
    return (
        <div>
            <label><small>Select Airport{(props.value === "" || props.value === "-") ? <small style={{color: "rgb(240, 44, 86)"}}><i> (required)</i></small> : <></>}: </small></label>
            <select className="AirportMenu" value={props.value} onChange={props.onChange}>
                <option value='-'>-</option>
                {props.places.map((place, index) => {
                        return (<option key={index} value={place.PlaceId}>{place.PlaceName}</option>)
                    })
                }
            </select>
        </div>
    )
}

export default AirportSelect
