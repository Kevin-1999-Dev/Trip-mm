import {React,useEffect,useState,useCallback} from 'react'
import "./trip.css";

export default function Trip() {
  let [trips, setTrips] = useState([]);
  let [url,setUrl] = useState("http://localhost:5000/trips");

  let fetchTrips = useCallback(() => {
    fetch(url)
    .then(response => response.json())
    .then(data => setTrips(data));
  }, [url]);

  useEffect(() => {
      fetchTrips();
  }, [fetchTrips]);

  return (
    <div>
      <div >
        <button className="filter-btn" onClick={() => setUrl("http://localhost:5000/trips")}>
          All
        </button>
        <button className="filter-btn" onClick={() => setUrl("http://localhost:5000/trips?location=Paris")}>
          Paris
        </button>
        <button className="filter-btn" onClick={() => setUrl("http://localhost:5000/trips?location=Japan")}>
          Japan
        </button>
        <button className="filter-btn" onClick={() => setUrl("http://localhost:5000/trips?location=Myanmar")}>
          Myanmar
        </button>
      </div>
      <ul>
        {trips.map(trip =>
          <div style={{ marginBottom: '10px', border: '1px solid #ccc', padding: '10px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)',borderRadius: '4px' }} key={trip.id}>
          <h4>Name: {trip.name}</h4>
          <p>Description: {trip.description}</p>
          <p>Location: {trip.location}</p>
          <p>Price: ${trip.price.toFixed(2)}</p>
        </div>)}
      </ul>
    </div>
  )
}
