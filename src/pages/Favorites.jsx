import React from 'react';
import { SneakerCard } from "../components/SneakerCard/SneakerCard";

import cryIcon from '../assets/images/crySmile.png'
import '../components/SideBasket/styles.scss'

import './styles.scss'
import { Link } from "react-router-dom";


const addedUrl = 'https://6386100bbeaa64582671f921.mockapi.io/basket/';

export const Favorites = ({ favorites, addToFavHandler }) => {
  return (
    <div>
      <div className='content p-40'>
        <div className='d-flex align-center mb-40 justify-between'>
          <h1>My favorites: </h1>
        </div>
      </div>
      <div className='d-flex flex-wrap'>
        {
          favorites.length > 0 ?
          favorites?.map(
            sneaker =>
              <SneakerCard
                key={sneaker.name}
                sneaker={sneaker}
                favorited={true}
                // onPlus={(obj) => addToBasketHandler(obj)}
                onFavorite={addToFavHandler}
              />)
                               :
          <div
            className='d-flex flex-column align-center justify-center w100p h100p'>
            <img src={cryIcon} alt='cry'/>
            <h3>Here is no any sneaker :(</h3>
            <Link to='/'>
              <button className='greenButton'>
                Back to sneakers
              </button>
            </Link>
          </div>
        }
      </div>
    </div>
  );
};