import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {addToCard } from '../../features/art/artSlice'
import { useDispatch} from 'react-redux'
import './carousel.css'

const Carousel = ({data, setArt}) => {
  const [clickedItems, setClickedItems] = useState([])
  const dispatch = useDispatch();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (currentSlide) => {
      setArt(currentSlide);
    },
  };



  const activeStyle = {
    backgroundColor: 'red',
  }
 

  return (
    <div>
      <Slider {...settings}>
      {
        data?data.map(item => (
          <div className='card'>
            <div className='text-content'>
            <img className='img' style={{maxWidth: '150px', borderRadius: '5px', padding: '5px'}} src={`http://localhost:4444${item.imageUrl}`} alt={item.title} />
            <h2 style={{width: '100%', padding: '10px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quasi, consectetur magni error sequi ducimus eveniet! Est molestiae illum, nihil debitis eos voluptatum  at pariatur sapiente tempora alias voluptates cupiditate.</h2>
            </div>
            <div className='bottom'>
            <div className='card-bottom'><h2 className='price'>{item.price}&#x24;</h2>
            <div className='card-top'>
              <h1 style={{color: 'white'}}>{item.title}</h1>
            </div>
          <button style={{
                    backgroundColor: clickedItems.includes(item._id) ? 'red' : 'green',
                    pointerEvents: clickedItems.includes(item._id) ? 'none' : 'auto',
                  }} className='button' onClick={()=>{
              if (!clickedItems.includes(item._id)) {
               const product = {
                id: item._id,
                title: item.title,
                price: item.price,
                imageUrl: item.imageUrl
              }
              dispatch(addToCard(product))
              setClickedItems((prevClickedItems) => [...prevClickedItems, item._id]);
            }
            }}>Add to basket</button></div>
          
          </div>
          </div>  
        )
        ):<div></div>
      }
      </Slider>
     
    </div>


  );
};

export default Carousel;

