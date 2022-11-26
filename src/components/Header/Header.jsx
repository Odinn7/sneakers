import React, { useState } from "react";
import { SideBasket } from "../SideBasket/SideBasket";
import logo from "../../assets/images/logo.svg";
import basket from "../../assets/images/basket.svg";
import favorites from "../../assets/images/favorites.svg";
import user from "../../assets/images/user.svg";

import './styles.scss'


export const Header = () => {
  const [isSideBasket, setIsSideBasket] = useState(false);
  
  const viewSide = () => {
    setIsSideBasket(true)
  }
  
  return (
    <header className='d-flex justify-between align-center p-40'>
      {
        isSideBasket ? <SideBasket setIsSideBasket={setIsSideBasket}/> : null
      }
      
      <div className='d-flex align-center'>
        <img src={logo}/>
        <div>
          <h3>
            React Sneakers
          </h3>
          <p className='opacity-5'>Sneakers shop</p>
        </div>
      </div>
      <ul className=' d-flex'>
        <li className='mr-30 d-flex justify-around'>
          <img className='viewSideImage' src={basket} onClick={viewSide}/>
          <p>1200 AZN</p>
          <img src={favorites}/>
        </li>
        <li>
          <img src={user}/>
        </li>
      </ul>
    </header>
  )
}