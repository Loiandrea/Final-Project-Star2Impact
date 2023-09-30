// src/pages/HomePage.js
import React from 'react';
import './HomePage.css';
import CardContainer from './components/Cards/CardCointainer';

const HomePage = () => {
  return (
    <div className="home">
      
      <h2 className='title'>Cambiamento Climatico: L'Emergenza Globale in Grafici Esplicativi..</h2>
      <p className='text'>Esplora le Tendenze e le Conseguenze del Riscaldamento Globale</p>
      <div className='card-container '>
        <CardContainer/>
      </div>

    </div>
  );
}

export default HomePage;
