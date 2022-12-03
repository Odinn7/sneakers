import React, { useEffect, useState } from 'react';
import { Header } from "./components/Header/Header";
import { SneakerCard } from "./components/SneakerCard/SneakerCard";
import axios from "axios";

import search from "./assets/images/searchIcon.svg";
import './index.scss'


const baseUrl = "https://6386100bbeaa64582671f921.mockapi.io/sneakers"

export const App = () => {
  
  const [sneakers, setSneakers] = useState([])
  
  useEffect(() => {
    axios.get(baseUrl)
      .then(resp => setSneakers(resp.data))
  }, [])
  
  return (<div className='wrapper clear'>
    <Header/>
    <div className='content p-40'>
      <div className='d-flex align-center mb-40 justify-between'>
        <h1>All sneakers</h1>
        <div className='searchBlock'>
          <img src={search} alt='search'/>
          <input placeholder='Search...'/>
        </div>
      </div>
    </div>
    <div className='d-flex flex-wrap'>
      {
        sneakers?.map(
          sneaker => <SneakerCard key={sneaker.name} sneaker={sneaker}/>)
      }
    </div>
  </div>);
};