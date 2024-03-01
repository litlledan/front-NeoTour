import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import './AsiaCard.scss'
function AsiaCard() {
  const [cards, setCards] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFeaturedCards = async () => {
      try {
        const response = await axios.get(' https://phobic-honey-production.up.railway.app/api/trips/asia');
        setCards(response.data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchFeaturedCards();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <div className='asiacards'>
      {cards.slice(3,6).map((el)=>(
        <div className="asiacards__card">
          <img src={el.imageUrl} alt="" className="asiacards__img" />
          <div className="asiacards__div"></div>
          <p className="asiacards__title">{el.destination}</p>
        </div>
      ))}
    </div>
  )
}

export default AsiaCard