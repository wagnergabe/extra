import React, { useState, useEffect } from 'react';
import FlightInfoForm from './FlightInfoForm';
import FlightTable from './FlightTable';
import "../flight.css";
import { getBrowseDates, useFlights } from '../custom_hooks/custome_hooks';


function FlightSearchPage() {
    const [origin, setOrigin] = useState("");
    const [destination, setDestination] = useState("");
    const [outboundDate, setOutboundDate] = useState("");
    const [inboundDate, setInboundDate] = useState("");
    const [currency, setCurrency] = useState("USD");

    const [showTable, setShowTable] = useState(false);

    const [quotes, setQuotes] = useState([])    

    const [sortLowToHigh, setSortLowToHigh] = useState(true);

    const allFlights = useFlights(quotes, sortLowToHigh, outboundDate, inboundDate, currency);


    useEffect(() => {
        getAllQuotes().then(data => {
            setQuotes(data)
        })
    }, [origin, destination, outboundDate, inboundDate, currency])

    useEffect(() => {

        
        if (allFlights.length > 0) {
            setShowTable(true);
        }
        else {
            setShowTable(false);
        }
    }, [quotes]);

    async function getAllQuotes() {
        const data = await getBrowseDates(origin, destination, outboundDate, inboundDate, currency);
        console.log('----> getBrowseDates: ', data)
        return data
    }

    function handleSortSelect(e) {
        if (e.target.value === "true") {
            setSortLowToHigh(true);
        }
        else if (e.target.value === "false") {
            setSortLowToHigh(false);
        }
    }

    return (
        <div>
            <FlightInfoForm origin={origin} setOrigin={setOrigin}
                destination={destination} setDestination={setDestination}
                outboundDate={outboundDate} setOutboundDate={setOutboundDate}
                inboundDate={inboundDate} setInboundDate={setInboundDate}
                currency={currency} setCurrency={setCurrency}>
            </FlightInfoForm>

            {showTable ? <FlightTable allFlights={allFlights} sortLowToHigh={sortLowToHigh} handleSortSelect={handleSortSelect}></FlightTable> : <></>}
            {(origin.length > 1 && destination.length > 1 && outboundDate !== "" && !showTable) ? <p style={{ animation: "fade-in 2s", animationDelay: "2s", animationFillMode: "backwards" }}>No Flights Available</p> : <></>}
        </div>
    )
}

export default FlightSearchPage
