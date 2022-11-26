import React from "react";
import remove from "../../assets/images/buttonRemove.svg";

import './styles.scss'


const snikImg = 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/770a3993-e584-4a42-9711-be44fb648a0b/sb-zoom-blazer-mid-skate-shoes-qX3MZV.png'
const closeBtn = 'https://icon-library.com/images/svg-close-icon/svg-close-icon-4.jpg'

export const SideBasket = ({ setIsSideBasket }) => {
  
  const closeBtnHandler = () => {
    setIsSideBasket(false)
  }
  
  return (
    <div className="overlay">
      <div className="drawer">
        <div className='d-flex align-center justify-between mb-30'>
          <div className='d-flex'>
            <h2>
              Basket
            </h2>
          </div>
          <div className='d-flex'>
            <img
              onClick={closeBtnHandler}
              className='closeBtn'
              alt='close'
              src={closeBtn}
              width={20}
              height={20}
            />
          </div>
        </div>
        
        <div className="items flex">
          <div className="basketItem d-flex align-center">
            <div
              style={{ backgroundImage: `url(${snikImg})` }}
              className='basketItemImg'
            />
            <div className='mr-20 flex'>
              <p className='mb-5'>Nike</p>
              <b>350 AZN</b>
            </div>
            <img className='removeBtn' src={remove} alt='remove '/>
          </div>
        </div>
        <div className="basketTotalBlock">
          <ul>
            <li className='d-flex'>
              <span>Total:</span>
              <div></div>
              <b>350 AZN</b>
            </li>
            <li className='d-flex'>
              <span>Tax 5%: </span>
              <div></div>
              <b>17.5 AZN</b>
            </li>
          </ul>
          <button className='greenButton'>Create order -></button>
        </div>
      </div>
    </div>
  )
}