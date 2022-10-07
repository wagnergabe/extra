import React, { useState, useEffect } from "react";

const App = () => {
    const [user, setUsers] = useState([]);


    const  ThingsToDo = () => {
        fetch("https://api.opentripmap.com/0.1/en/places/geoname?name=${cityName}&country=us&apikey=5ae2e3f221c38a28845f05b6b28dd69575b483ead24be6a1f3db9410")
            .then(response => {
                response.json();
            })
            .then((data) => {
                setUsers(data)}
            )
            }

            useEffect(() => {
                fetchData();
            },[])

             // add a onclick button for users to create data 
             // it should be able to display the info sent 
            return (
                <div className="App">
                    <button onClick={ThingsToDo}>Things To Do</button>
                    <ul>
                        {user && user.length > 0 && user.map((userObj, index) => (
                            <li key={userObj.id}>{userObj.name}</li>
                        ))}
                    </ul>
                </div>

            );


}

export default App;