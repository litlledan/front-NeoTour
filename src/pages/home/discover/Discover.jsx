import React, { useState } from 'react';
import {  useNavigate } from 'react-router-dom';
import arrow from './discover-img/arrow (2).png';
import './Discover.scss';
import PopularCard from '../../../components/PopularCard/PopularCard';
import FeaturedCard from '../../../components/FeaturedCard/FeaturedCard';
import MostVisitedcard from '../../../components/MostVisited/MostVisitedcard';
import EuropeCard from '../../../components/Europe/EuropeCard';
import AsiaCard from '../../../components/Asia/AsiaCard';

function Discover() {
  const tabs = ['Popular', 'Featured', 'MostVisited', 'Europe', 'Asia'];
  const [active, setActive] = useState('Popular');
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('onetour:id');
  };
   const handleActiveClick =(tab)=>{
    setActive(tab)
    console.log(tab);
   }
  const cardsData = {
    Popular: <PopularCard key="popularCard" />,
    Featured: <FeaturedCard key="featuredCard" />,
    MostVisited: <MostVisitedcard key="mostVisitedCard" />,
    Europe: <EuropeCard key="europeCard" />,
    Asia: <AsiaCard key="asiaCard" />,
  };
  return (
    <div className='discover'>
      <div className="discover__container">
        <div className="discover__text">
          <p className='discover__text__p'>Discover</p>
          <div className="discover__text__arrows">
            <button className='discover__btn'>
              <img src={arrow} alt="" className='discover__prew-img' />
            </button>
            <button className='discover__btn'>
              <img src={arrow} alt="" className='discover__next-img' />
            </button>
          </div>
        </div>
        <div className="discover__list" >
          {tabs.map((tab) => (
            <li
              key={tab}
              className={`discover__list__li ${active === tab ? 'active' : ''}`}
              onClick={()=>handleActiveClick(tab)}
              style={{ color: active === tab ? '#6A62B7' : 'black' }}
            >
              {tab}
            </li>
          ))}
        </div>

        <div className="discover__cards" onClick={handleClick}>
          {cardsData[active]}
        </div>
      </div>
    </div>
  );
}

export default Discover;

