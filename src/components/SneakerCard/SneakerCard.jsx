import React from "react";
import addToFavorite from "../../assets/images/addToFavorites.svg";
import addToBasket from "../../assets/images/addToBasket.svg";

import './styles.scss';


const snikImg = 'https://freesvg.org/img/1517505968.png'

export const SneakerCard = ({ sneaker }) => {
  const { name, price, image } = sneaker;
  console.log(sneaker, 'image')
  
  return (
    <div className="card">
      
      <div className='favorite'>
        <img src={addToFavorite} alt='addToFavorite'/>
      </div>
      <img
        // src={snikImg}
        src={image}
        alt='sneaker'
        width={130}
        height={130}
      />
      <h5>{name}</h5>
      <div className='cardBottom d-flex justify-between align-center'>
        <div>
          <span>Price: </span>
          <b>{price} RUB</b>
        </div>
        <img className='addToBasketImage' src={addToBasket}
             alt='addToBasket'/>
      </div>
    </div>
  
  )
}
