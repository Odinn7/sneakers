import React from 'react';
import { SneakerCard } from "./components/SneakerCard/SneakerCard";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";

import './index.scss'


export const App = () => {
  return (
    <div className='wrapper clear'>
      <Header/>
      <Main/>
      <SneakerCard/>
    </div>
  );
};