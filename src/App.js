import React from 'react';
import logo from './assets/images/logo.svg';
import bascket from './assets/images/bascket.svg';
import user from './assets/images/user.svg';


export const App = () => {
  return (
    <div className='wrapper'>
      <header>
        <div className='headerLeft'>
          <img src={logo}/>
          <div className='headerInfo'>
            <h3>
              React Sneakers
            </h3>
            <p>Sneakers shop</p>
          </div>
        </div>
        <ul className='headerRight'>
          <li>
            <img src={bascket}/>
            
            <span>1200 AZN</span>
            {/*<img src={favorites}/>*/}
          
          </li>
          <li>
            <img src={user}/>
          </li>
        </ul>
      </header>
      <div className='content'>
        <h1>All sneakers</h1>
      </div>
    </div>
  );
};