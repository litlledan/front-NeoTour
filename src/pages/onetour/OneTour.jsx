import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState,useEffect } from 'react'
import axios from 'axios'
import Modal from '../../components/Modal/Modal';
import './OneTour.scss'
import mon from './Rectangle 38.png'
// import arrow from '../home/winter/winter-img/Arrow 1.svg'
import location from './u_map-marker.svg' 
function OneTour() {
  const [tripData, setTripData] = useState(null);
  const [error, setError] = useState(null);
 const navigate = useNavigate();
  const handleClick = ()=>{
    navigate('/')
  }
 
  const [ModalActive, SetModalActive]=useState (false)
  useEffect(() => {
    // Пример: Получение данных для нескольких id (1, 2, 3)
    const ids = [1, 2, 3];

    const fetchDataForIds = async () => {
      try {
        const promises = ids.map(async (id) => {
          const response = await axios.get(`https://phobic-honey-production.up.railway.app/api/trips/${id}`);
          return response.data;
        });

        // Дождитесь выполнения всех запросов и установите данные
        const dataForIds = await Promise.all(promises);
        setTripData(dataForIds);
      } catch (error) {
        setError(error.message);
      }
    };
 console.log(ids);
    fetchDataForIds();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!tripData) {
    return <div>Loading...</div>;
  }

 
  return (
    <div className='onetour'>
      
      <img src={mon} alt=""  className='onetour__img'/>
      <button className='onetour__btn' onClick={handleClick}>
        {/* <img src={arrow} alt=""  className='onetour__arrow'/> */}
        Go back</button>
      <div className="onetour__container">
      
           <div className="onetour__box">
            <h2 className='onetour__name'>Mount Fuji</h2>
            <div className="onetour__location">
              <img src={location} alt=""className='onetour__location__svg' />
              <p className='onetour__location__p'>Honshu, Japan</p>
            </div>
            <div className="onetour__description">
              <p className='onetour__description__p'>Description</p>
              <p className='onetour__description__title' ></p>
            </div>
            <div className="onetour__reviews">
              <p className='onetour__description__p'>Reviews</p>
              <p className='onetour__description__title' ></p>
            </div>
            <button className='onetour__btns' onClick={() => SetModalActive(true)}>
            Book now
          </button>
           </div>
        <Modal  active={ModalActive} setActive={SetModalActive}  />
      </div>
    </div>
  )
}

export default OneTour