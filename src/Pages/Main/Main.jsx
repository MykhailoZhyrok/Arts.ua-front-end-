import React from 'react'
import videoFile from '../../video/videoplayback.mp4'
import image from '../../img_ref/dali_salvador.jpg'
import cl from './main.module.css'
import { useNavigate } from 'react-router-dom'

export const Main = () => {
  const navigate = useNavigate();
  const handleClick =(e)=>{
    e.preventDefault()
    console.log('click')
    navigate('/collection')
  }
  return (
    <div>
     <div style={{display: 'flex', position: 'relative'}}>
  <video style={{ width: '100%', zIndex: '0', padding: '5px', margin: '0', padding: '0' }} autoPlay muted loop>
    <source src={videoFile} type="video/mp4" />
    Your browser does not support the video tag.
  </video>
  <div onClick={handleClick} style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
    <p className={cl.videoTitle}>Go to collection</p>
  </div>
</div>
      <div className={cl.info}>
        <h1 className={cl.infoText}>Just as Dalí's surrealistic masterpieces transcended conventional norms, AI-generated art challenges traditional paradigms. The intricate algorithms and neural networks of artificial intelligence can weave together colors, shapes, and concepts in ways that mirror the enigmatic essence of Dalí's surrealism.</h1>
        <img src={image}></img>
      </div>
      <div className={cl.footer}>
      <p>&copy; 2024 Moons.ua  by Mykhailo Zhyrok</p>
      </div>
    </div>
  )
}

