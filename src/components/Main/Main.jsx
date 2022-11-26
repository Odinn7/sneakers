import React from "react";

import search from "../../assets/images/searchIcon.svg";
import './styles.scss'


export const Main = () => {
  return (
    <div className='content p-40'>
      <div className='d-flex align-center mb-40 justify-between'>
        <h1>All sneakers</h1>
        <div className='searchBlock'>
          <img src={search} alt='search'/>
          <input placeholder='Search...'/>
        </div>
      </div>
    </div>
  )
}
