import React from "react";
import './styles.scss'

import remove from "../../assets/images/buttonRemove.svg";
import arrow from "../../assets/images/arrowRight.svg";


const closeBtn = 'https://icon-library.com/images/svg-close-icon/svg-close-icon-4.jpg'

export const SideBasket = ({
                             setIsSideBasket,
                             removeSneakerHandler,
                             addedSneakers = []
                           }) => {
  
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
        
        {
          // addedSneakers.length > 0 ?
          <>
            <div className="items flex">
              {addedSneakers.map(item =>
                <div key={item.id} className="basketItem d-flex align-center">
                  <div
                    style={{ backgroundImage: `url(${item.image})` }}
                    className='basketItemImg'
                  />
                  <div className='mr-20 flex'>
                    <p className='mb-5'>{item.name}</p>
                    <b>{item.price}</b>
                  </div>
                  <img onClick={id => removeSneakerHandler(item.id)}
                       className='removeBtn'
                       src={remove} alt='remove '/>
                </div>
              )}
            
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
              <button className='greenButton'>
                Create order <img alt="arrow" src={arrow}/>
              </button>
            </div>
          </>
          //                          :
          // <div className='d-flex flex-column align-center'>
          //   <img src={openBox} alt='box' width={80} height={80}/>
          //   <b>No items in the basket :( </b>
          //   <button onClick={closeBtnHandler} className='greenButton'>
          //     <img alt='back' src={arrow}/> Back to
          //     sneakers
          //   </button>
          // </div>
        }
      
      </div>
    </div>
  )
}