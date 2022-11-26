import React from "react";
import addToFavorite from "../../assets/images/addToFavorites.svg";
import addToBasket from "../../assets/images/addToBasket.svg";

import './styles.scss';


const snikImg = 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/770a3993-e584-4a42-9711-be44fb648a0b/sb-zoom-blazer-mid-skate-shoes-qX3MZV.png'

export const SneakerCard = () => {
  return (
    <div className="card">
      <div className='favorite'>
        <img src={addToFavorite} alt='addToFavorite'/>
      </div>
      <img
        src={snikImg}
        alt='nike'
        width={130}
        height={130}
      />
      <h5>Nike</h5>
      <div className='cardBottom d-flex justify-between align-center'>
        <div>
          <span>Price: </span>
          <b>350 AZN</b>
        </div>
        <img className='addToBasketImage' src={addToBasket}
             alt='addToBasket'/>
      </div>
    </div>
  )
}