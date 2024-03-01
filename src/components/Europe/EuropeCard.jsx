import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './EuropeCard.scss'
function EuropeCard() {
  const [cards, setCards] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFeaturedCards = async () => {
      try {
        const response = await axios.get('https://phobic-honey-production.up.railway.app/api/trips/europe');
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
    <div className='europecards'>
      {cards.slice(0,3).map((el)=>(
        <div className="europecards__card">
          <img src={el.imageUrl} alt="" className="europecards__img" />
          <div className="europecards__div"></div>
          <p className="europecards__title">{el.destination}</p>
        </div>
      ))}
    </div>
  )
}

export default EuropeCard