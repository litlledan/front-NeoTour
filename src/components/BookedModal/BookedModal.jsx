import React from 'react'
import  { useState } from 'react';
import './BookedModal.scss'
function BookedModal() {
    const [newModal,setnewModal] = useState(true)
    const handleCloseModal = () => {
      setnewModal(false);
    };
  return (
    <div className={`modal ${newModal ? 'active' : ''}`}>
     <div className="booked" onClick={()=>setnewModal(true)}>
      <p className='booked__p'>Your trip has been booked!</p>
      <button   onClick={ handleCloseModal} className='booked__btn'>Ok</button>
     </div>
  </div>
  );
  
}

export default BookedModal