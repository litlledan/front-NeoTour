import React from 'react'
import { useNavigate } from 'react-router-dom';
import RecommendedTrips from '../../../components/RecommendedCard/RecommendetCard'
import './Recommended.scss'
function Recommended() {
  
  return (
    <div className='recommended'>
        <div className="recommended__container">
            <p className='recommended__p'>Recommended</p>
                   <RecommendedTrips/>
                
        </div>
    </div>
  )
}

export default Recommended