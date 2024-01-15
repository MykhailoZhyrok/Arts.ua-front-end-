import React from 'react'
import instagram from '../../img_ref/instagram.png';
import telegram from '../../img_ref/telegram.png'
import envelope from '../../img_ref/envelope.png'
import phone from '../../img_ref/phone.png'
import cl from './Contact.module.css'
 export const Contact = () => {
  return (
    <div className={cl.base}>
      <div className={cl.box}>
      <div className={cl.collectBox}>
        <img style={{maxWidth: '20px'}} src={instagram} alt='instagram'/>
        <h1>mishanya.zrk</h1>
      </div>
      <div className={cl.collectBox}>
        <img style={{maxWidth: '20px'}} src={telegram} alt='telegram'/>
        <h1>mishanyazrk</h1>
      </div>
      <div className={cl.collectBox}>
        <img style={{maxWidth: '20px'}} src={phone} alt='phone'/>
        <h1>+380664020596</h1>
      </div>
      <div className={cl.collectBox}>
        <img style={{maxWidth: '20px'}} src={envelope} alt='mail'/>
        <h1>mihail.zhirok@gmail.com</h1>
      </div>
      </div>
    </div>
  )
}
