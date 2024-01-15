import React from 'react'
import cl from './Basket.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { removeItem } from '../../features/art/artSlice'
export const Basket = () => {
  const card = useSelector(state => state.arts.card)
  const dispatch = useDispatch()
  console.log(card)
  const calculateTotalPrice = () => {
    return card.reduce((total, item) => total + parseFloat(item.price), 0);
  };
  const navigate = useNavigate();
  const handleClickBuy = ()=>{
    navigate('/buy')
  }

  return (
    <div>
 <div className={cl.base} >
 <div className={cl.containerStyle}> 
        {card.length?card.map(item=>(
         
          <div className={cl.box}>
         <div className={cl.collectBox}>
           <div>
           <img style={{maxWidth: '150px', borderRadius: '5px'}} src={`http://localhost:4444${item.imageUrl}`} alt="" />
             <h1>{item.title}</h1>
             <h2>{item.price}</h2>
             <button onClick={()=>{
              dispatch(removeItem(item.id))

             }} >Delete</button>
           </div>
            
       </div></div>  
        
        )):<div className={cl.box}><div style={{color: 'white'}} className={cl.collectBox}>Not found</div></div>}
        </div>
       {card.length?
       <div>
        <p style={{marginLeft: '10%', marginTop: '10px', fontSize: '30px'}}>Total Price: {calculateTotalPrice()}&#36; </p>
        <button onClick={handleClickBuy}  className={cl.buttonOrder}>Buy</button>
       </div>
       
       :<div></div>}
       </div>


     


    </div>
  )
}
