import React, { useState, useEffect } from 'react';
export default function MainPage() {
    const [rides, setRides] = useState([]);
    const [newRide, setNewRide] = useState({destination: '', date: '', time: ''});
    const [showForm, setShowForm] = useState(false);
    useEffect(() => {
        const fetchedData = [];
        setRides(fetchedData);
    }, []);
    const handleInput = (e) => {
        const {name, value} = e.target;
        setNewRide({ ...newRide, [name]: value});
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const submittedRide = { ...newRide, id:rides.lenght + 1};
        setRides([...rides, submittedRide]);
        setNewRide({ destination: '', date: '', time: ''});
        setShowForm(false)
    }
    return (
        <div className='MainPage'>
            <h1>Upcoming Rides</h1>
            <div className='ride-table'>
                <table>
                    <thead>
                        <tr>
                        <th>Destination</th>
                        <th>Date</th>
                        <th>Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rides.map((ride)=>(
                            <tr key={ride.id}>
                                <td>{ride.destination}</td>
                                <td>{ride.date}</td>
                                <td>{ride.time}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <p>Can't Find Your Ride?</p>
                <button onClick={() => setShowForm(true)}>Add Ride</button>
                {showForm &&(
                    <div className="form-container">
                        <form onSubmit={handleSubmit}>
                            <label>
                                Destination:
                                <input
                                type = "text"
                                name = "destination"
                                value = {newRide.destination}
                                onChange = {handleInput}
                                required
                                />
                            </label>
                            <label>
                                Date:
                                <input
                                type = "date"
                                name = "date"
                                value = {newRide.date}
                                onChange = {handleInput}
                                required
                                />
                            </label>
                            <label>
                                Time of Arrival:
                                <input
                                type = "time"
                                name = "time"
                                value = {newRide.time}
                                onChange = {handleInput}
                                required
                                />
                            </label>
                            <button type = "submit"> Submit </button>
                            <button type = "button" onClick={() => setShowForm(false)}>Cancel</button>
                        </form>
                    </div>
                )}
            </div>
        </div>
    )
}
