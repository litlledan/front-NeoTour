import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Featured.scss';

function FeaturedCard() {
  const [cards, setCards] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFeaturedCards = async () => {
      try {
        const response = await axios.get('https://phobic-honey-production.up.railway.app/api/trips/featured');
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
    <div className='featured'>
      {cards.slice(0, 3).map((el) => (
        <div className="featured__card" key={el.id}>
          <img src={el.imageUrl} alt="" className="featured__img" />
          <div className="featured__div"></div>
          <p className='featured__title'>{el.destination}</p>
        </div>
      ))}
    </div>
  );
}

export default FeaturedCard;
