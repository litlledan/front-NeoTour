import React from 'react'
import './Winter.css'
import frame from '../../../assets/Frame 25.png'
import lets from '../../../assets/lets.png'

function Winter() {
  return (
    <div>
      <header className='header'>
        <h1>𝐖𝐢𝐧𝐭𝐞𝐫 <br />𝐕𝐚𝐜𝐚𝐭𝐢𝐨𝐧 𝐓𝐫𝐢𝐩𝐬</h1>
        <p>𝐄𝐧𝐣𝐨𝐲 𝐲𝐨𝐮𝐫 𝐰𝐢𝐧𝐭𝐞𝐫 𝐯𝐚𝐜𝐚𝐭𝐢𝐨𝐧𝐬 𝐰𝐢𝐭𝐡 𝐰𝐚𝐫𝐦𝐭𝐡
          𝐚𝐧𝐝 𝐚𝐦𝐚𝐳𝐢𝐧𝐠 𝐬𝐢𝐠𝐡𝐭𝐬𝐞𝐞𝐢𝐧𝐠 𝐨𝐧 𝐭𝐡𝐞 𝐦𝐨𝐮𝐧𝐭𝐚𝐢𝐧𝐬.
          𝐄𝐧𝐣𝐨𝐲 𝐭𝐡𝐞 𝐛𝐞𝐬𝐭 𝐞𝐱𝐩𝐞𝐫𝐢𝐞𝐧𝐜𝐞 𝐰𝐢𝐭𝐡 𝐮𝐬!</p>
        <img className='imagemount' src={frame} />
        <button className='headerbtn'
          onClick={() =>
            window.scrollTo({
              top: 700,
              left: 0,
              behavior: 'smooth',
            })
          }><img className='lets' src={lets} />
        </button>
      </header>
    </div>
  )
}

export default Winter