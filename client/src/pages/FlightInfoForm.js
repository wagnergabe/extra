import React, { useState } from 'react';
import AirportSelect from './AirportSelect.js';
import { usePlacesQuery } from '../custom_hooks/custome_hooks';
import "../flight.css";


function FlightInfoForm(props) {
    const [originQuery, setOriginQuery] = useState("");
    const [showOrigins, setShowOrigins] = useState(false);
    const originPlaces = usePlacesQuery(originQuery);

    const [destinationQuery, setDestinationQuery] = useState("");
    const destinationPlaces = usePlacesQuery(destinationQuery);
    const [showDestinations, setShowDestinations] = useState(false);

    const [outboundAnytimeChecked, setOutboundAnytimeChecked] = useState(false);
    const [inboundAnytimeChecked, setInboundAnytimeChecked] = useState(false);

    const [tripType, setTripType] = useState("oneWay");

    function handleOrigin(e) {
        e.preventDefault();

        setOriginQuery(e.target.value);
        if (e.target.value !== "" && e.target.value.length > 3) {
            setShowOrigins(true);
        }
        else {
            setShowOrigins(false);
        }


    }

    function handleDestination(e) {
        e.preventDefault();

        setDestinationQuery(e.target.value);
        if (e.target.value !== "" && e.target.value.length > 3) {
            setShowDestinations(true);
        }
        else {
            setShowDestinations(false);
        }
    }

    function handleOriginSelect(e) {
        props.setOrigin(e.target.value);
    }

    function handleDestinationSelect(e) {
        props.setDestination(e.target.value);
    }

    function handleOutboundDate(e) {
        props.setOutboundDate(e.target.value);
        if (e.target.value === "anytime") {
            if (outboundAnytimeChecked) {
                props.setOutboundDate("");
            }
            setOutboundAnytimeChecked(!outboundAnytimeChecked);
        }

    }

    function handleInboundDate(e) {
        props.setInboundDate(e.target.value);
        if (e.target.value === "anytime") {
            if (inboundAnytimeChecked) {
                props.setInboundDate("");
            }
            setInboundAnytimeChecked(!inboundAnytimeChecked);
        }

    }

    function handleCurrency(e) {
        props.setCurrency(e.target.value);
    }

    function handleClear(e) {
        e.preventDefault();

        setOriginQuery("");
        setDestinationQuery("");
        setShowOrigins(false);
        setShowDestinations(false);
        setInboundAnytimeChecked(false);
        setOutboundAnytimeChecked(false);
        props.setOrigin("");
        props.setDestination("");
        props.setOutboundDate("");
        props.setInboundDate("");
        props.setCurrency("USD");
    }

    let today = new Date().toISOString().substring(0, 10);

    return (
        <div className="MainFlight">
            <big>Search for Flights:</big>
            <form>
                <div className="radio-btn-container">
                    <div
                        className="radio-btn"
                        onClick={() => {
                            setTripType("oneWay");
                        }}
                    >
                        <input
                            type="radio"
                            value={tripType}
                            name="tripType"
                            checked={tripType === "oneWay"}
                        />
                        One-way
                    </div>
                    <div
                        className="radio-btn"
                        onClick={() => {
                            setTripType("roundTrip");
                        }}
                    >
                        <input
                            type="radio"
                            value={tripType}
                            name="tripType"
                            checked={tripType === "roundTrip"}
                        />
                        Round-Trip
                    </div>
                </div>
                <div className="InputArea">
                    <label>
                        <>From: </>
                        <input className="InputField" value={originQuery} onChange={handleOrigin} />
                    </label>
                    {showOrigins ? <AirportSelect places={originPlaces} value={props.origin} onChange={handleOriginSelect} /> : <></>}
                </div>


                <div className="InputArea">
                    <label>
                        <>To: </>
                        <input className="InputField" value={destinationQuery} onChange={handleDestination} />
                    </label>
                    {showDestinations ? <AirportSelect places={destinationPlaces} value={props.destination} onChange={handleDestinationSelect} /> : <></>}
                </div>

                <div className="InputArea">
                    <label>
                        <>Departure Date{(props.outboundDate === "") ? <small style={{ color: "rgb(240, 44, 86)" }}><i> (required)</i></small> : <></>}: </>
                        <input className="InputField" type="date" value={(props.outboundDate !== "anytime") ? props.outboundDate : ""} min={today} max={props.inboundDate} onChange={handleOutboundDate} disabled={outboundAnytimeChecked}></input>
                    </label>

                </div>

                {tripType === "roundTrip" && <div className="InputArea">
                    <label>
                        <>Return Date{(props.inboundDate === "") ? <small><i> (optional)</i></small> : <></>}: </>
                        <input className="InputField" type="date" value={(props.inboundDate !== "anytime") ? props.inboundDate : ""} min={(props.outboundDate !== "anytime") ? props.outboundDate : today} onChange={handleInboundDate} disabled={inboundAnytimeChecked}></input>
                    </label>

                </div>

                }


            </form>
            <button className="ClearButton" onClick={handleClear}>Clear</button>
            
        </div>
    )
}

export default FlightInfoForm
