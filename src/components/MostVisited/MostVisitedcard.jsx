import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './MostVisite.scss'
function MostVisitedcard() {
  const [cards, setCards] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFeaturedCards = async () => {
      try {
        const response = await axios.get('https://phobic-honey-production.up.railway.app/api/trips/most-visited');
        setCards(response.data);
        console.log('MostVisitedcard',response.data);
      } catch (error) {
        console.log('MostVisitedcard',error);
        setError(error.message);
      }
    };

    fetchFeaturedCards();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <div className='most'>
      {cards.slice(0,3).map((el)=>(
        <div className="most__card">
          <img src={el.imageUrl} alt="" className='most__img' />
          <div className="most__div"></div>
          <p className='most__title'>{el.destination}</p>
        </div>
      ))}
    </div>
  )
}

export default MostVisitedcard