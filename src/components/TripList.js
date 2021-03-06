import { useState } from 'react'
import './tripList.css'
import { useFetch } from "../hooks/useFetch";

export default function TripList() {
    const [url, setUrl] = useState('http://localhost:3000/trips')
    const { data: trips, isPending } = useFetch(url, {type: 'GET'})

    return (
        <div className="trip-list">
            <h2>Trip List</h2>
            {isPending && <h3>Loading...</h3>}
            <ul>
                {trips && trips.map(trip => (
                    <li key={trip.id}>
                        <h3>{trip.title}</h3>
                        <p>Price: {trip.price}</p>
                    </li>
                ))}
            </ul>
            <div className="filters">
                <button onClick={() => setUrl('http://localhost:3000/trips?loc=europe')}>European Trips</button>{' '}
                <button onClick={() => setUrl('http://localhost:3000/trips?loc=asia')}>Asian Trips</button>{' '}
                <button onClick={() => setUrl('http://localhost:3000/trips?loc=america')}>American Trips</button>{' '}
                <button onClick={() => setUrl('http://localhost:3000/trips')}>All Trips</button>
            </div>
        </div>
    )
}