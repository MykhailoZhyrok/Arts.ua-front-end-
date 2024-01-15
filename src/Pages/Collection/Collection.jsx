import React, { useEffect, useState } from 'react'
import cl from './Collect.module.css'

import Carousel from './Carousel'
import { useDispatch, useSelector } from 'react-redux'
import { getArts} from '../../features/art/artSlice'

export const Collection = () => {
  const [artNumber, setArtNumber]=useState(0)
  const dispatch = useDispatch();
useEffect(()=>{
  dispatch(getArts())
}, [])

  const data = useSelector(state =>state.arts.data)
  
  return (
    <div>
      <div className={cl.box}>
        <div className={cl.collectBox}>
        <h1 className={cl.titleNav}>Catalog</h1>
        <hr/>
        <br/>
        <div className={cl.artBox}>
          {data?<img style={{maxWidth: '600px', width: '100%', maxHeight: '392px', borderRadius: '15px', marginBottom: '46px'}} src={`http://localhost:4444${data[artNumber].imageUrl}`} alt="" />:
          <div className={cl.optionArt}></div>}
        </div>
        <div>
        {data?<Carousel data={data} setArt={setArtNumber}/>:<div className={cl.optionSide}>
          </div>}
        </div>
        </div>
      </div>
     
      <div className={cl.base}/>
     

    </div>
    
  )
}
