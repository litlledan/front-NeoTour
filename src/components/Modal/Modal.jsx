import  { useState } from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import './Modal.scss';
import styles from './PhoneStyle.css'
import close from '../../assets/close.svg';
import peopleSvg from '../../assets/people (2).png' 
import BookedModal from '../BookedModal/BookedModal';
 
const Modal = ({ active, setActive}) => {
  const [count, setCount] = useState(0);
  const [phoneNumber, setPhoneNumber] = useState('')
  const [open,setOpen]=useState(false)
  const handelCloseClick =()=>{
    setActive(false);
    setOpen(true);
  }
  
  const intl = {
    'KZ': '+7',
    'RU': '+7',
    'KG': '+996',
  };

 

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  
  return (
    <>
    
    {active && (
      <div className={`modal ${active ? 'active' : ''}`}>
      <div className="modal__overlay" onClick={() => setActive(false)}>
        <div className="modal__content" onClick={(e) => e.stopPropagation()}>
          <div className="modal__info">
            <p className='modal__info_p'>Info</p>
            <img src={close} alt="" className='modal__close' 
             onClick={(e) => {
            e.stopPropagation();
            setActive(false);
         
            }} />
          </div>
          <p className='modal__title'>
            To submit an application for a tour reservation, you need to fill in <br />
            your information and select the number of people for the <br />
            reservation
          </p>
          <div className="modal__phone">
            <p className="modal__phone-p">Phone number</p>
            <div className="modal__input">
            < PhoneInput className='modal__phone__input'
                placeholder="_ _ _ _ _ _ _ _ _"
                value={phoneNumber}
                onChange={setPhoneNumber}
                countries={['KZ', 'RU', 'KG']}
                international
                intl={intl}
                inputStyle={styles.PhoneInputInput}
                />
               </div>
          </div>
          <div className="modal__commentari">
            <p className="modal__phone-p">Commentaries to trip</p>
            <input type="text" placeholder='Write your wishes to trip...' className='modal__commentari__in' />
          </div>
          <div className="modal__people">
            <div className="modal__people__count">
            <button className='modal__people__btn' onClick={decrement}>-</button>
              <p>{count}</p>
              <button className='modal__people__btn' onClick={increment}>+</button>
            </div>
            <div className="modal__people__len">
              <img src={peopleSvg} alt="" className='modal__people__svg'/>
               <p className='modal__people__p'>{count} People</p>
            </div>
          </div>
          <button className='modal__submit' type='button' onClick={() => handelCloseClick()}  >Submit</button>
        </div>
      </div>
    </div>)}
    {open &&   <BookedModal /> }
    </>
    
  );
};

export default Modal;
