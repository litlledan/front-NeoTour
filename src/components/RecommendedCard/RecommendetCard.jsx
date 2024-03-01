import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './RecommendetCard.scss'
const RecommendedTrips = () => {
  const navigate = useNavigate();
  const [trips, setTrips] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrips = async () => {
      try {
        const response = await axios.get('https://phobic-honey-production.up.railway.app/api/trips/recommended');
        setTrips(response.data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchTrips();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }
  
  const handleClick = ()=>{
    navigate('onetour:id')
  }
  return (
    <div className='recocard'>
      <div className="recocard__cards">
          {trips.map((trip) => (
             <div className="recocard__card" key={trip.id} onClick={handleClick}>
            <img src={trip.imageUrl} alt="" className='recocard__img' />
            <div className="recocard__name">
            </div>
            <p className='recocard__title'>{trip.destination}</p>
            </div>
             ))}
             
            </div>
    </div>
  );
};

export default RecommendedTrips;
