import React from "react";
import logo from "../../assets/images/logo.svg";
import basket from "../../assets/images/basket.svg";
import favorites from "../../assets/images/favorites.svg";
import user from "../../assets/images/user.svg";

import './styles.scss'
import { Link } from "react-router-dom";


export const Header = ({ viewSide }) => {
  
  return (
    <header className='d-flex justify-between align-center p-40'>
      <div className='d-flex align-center'>
        <Link to='/'>
          <img alt='mainLogo' src={logo}/>
        </Link>
        <div>
          <h3>
            React Sneakers
          </h3>
          <p className='opacity-5'>Sneakers shop</p>
        </div>
      </div>
      <ul className='d-flex'>
        <li className=' mr-30 d-flex justify-around cu-p' onClick={viewSide}>
          <img alt='icon' className='viewSideImage' src={basket}/>
          <p className='price'>1200 AZN</p>
        </li>
        <li className='d-flex mr-5 '>
          <Link to='/favorites'>
            <img alt='icon' src={favorites}/>
          </Link>
        </li>
        <li className='d-flex ml-15'>
          <img alt='icon' src={user}/>
        </li>
      </ul>
    </header>
  )
}