import React, { useState } from "react";
import addToFavorites from "../../assets/images/addToFavorites.svg";
import addedToFavorites from "../../assets/images/addedToFavorites.svg";
import addToBasket from "../../assets/images/addToBasket.svg";
import addedButton from "../../assets/images/addedButton.svg";

import './styles.scss';

// const snikImg = 'https://freesvg.org/img/1517505968.png';

export const SneakerCard = ({
                              sneaker,
                              onPlus,
                              onFavorite,
                              favorited = false,
                              added
                            }) => {
  
  const { id, name, price, image } = sneaker;
  
  const [isFav, setIsFav] = useState(favorited);
  const [isAdded, setIsAdded] = useState(added = false);
  
  const onPlusHandler = () => {
    onPlus({ id, name, price, image });
    setIsAdded(!isAdded)
  }
  
  const onFavHandler = () => {
    onFavorite({ name, price, image, id });
    setIsFav(!isFav)
  }
  
  return (
    <div className="card">
      
      <div className='favorite'>
        <img onClick={onFavHandler}
             src={isFav ? addedToFavorites : addToFavorites}
             alt='addToFavorite'/>
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
        <img
          className='addToBasketImage'
          src={isAdded ? addedButton : addToBasket}
          alt='addToBasket'
          onClick={onPlusHandler}
        />
      </div>
    </div>
  );
};
