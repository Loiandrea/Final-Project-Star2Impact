import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import Axios from 'axios';
import './Methane.css';

function Methane() {
  const [data, setData] = useState([]);

  useEffect(() => {
    Axios.get('https://global-warming.org/api/methane-api', {
      params: {
        json: true,
      },
    })
      .then(response => {
        const methaneData = response.data.methane;
        setData(methaneData);
      })
      .catch(error => {
        console.error('Errore nella richiesta API:', error);
      });
  }, []);

  
  const dates = data.map(item => item.date);
  const concentrations = data.map(item => parseFloat(item.average));

  
  const chartData = {
    labels: dates,
    datasets: [
      {
        label: 'Concentrazione di Metano',
        data: concentrations,
        borderColor: 'blue',
        backgroundColor: 'rgba(0, 0, 255, 0.2)',
        fill: true,
      },
    ],
  };

  const chartOptions = {
    scales: {
      x: {
        type: 'category',
        labels: dates,
        grid: {
          display: false, 
        },
      },
      y: {
        grid: {
          display: false, 
        },
      },
    },
  };

  return (
    <div className="methane-chart">
      <div className="chart-container-methane">
        <Line data={chartData} options={chartOptions} />
      </div>
      <div className="causes-remedies-methane">
        <h3>Cause dell'aumento delle concentrazioni di metano nell'atmosfera:</h3>
        <ul>
          <li>
            <p> Le perdite di metano durante l'estrazione, il trasporto e la distribuzione del gas naturale contribuiscono in modo significativo alle emissioni di metano.</p>
          </li>
          <li>
          <p>Il metano viene prodotto quando i rifiuti solidi organici (come il cibo) degradano in discariche o in luoghi in cui la degradazione avviene senza ossigeno.</p>
          </li>
          <li>
          <p> Il sistema digestivo dei ruminanti, come il bestiame, produce metano durante il processo di fermentazione nell'apparato digerente.</p>
          </li>
        </ul>
        <h3>Rimedi per ridurre le concentrazioni di metano nell'atmosfera:</h3>
        <ul>
          <li>
            <p>Catturare il metano emesso dalle operazioni di estrazione di gas naturale e discariche e utilizzarlo come fonte di energia può ridurre notevolmente le emissioni.</p>
          </li>
          <li>
          <p> Ridurre la quantità di rifiuti organici inviati in discarica attraverso il compostaggio o la produzione di energia da biomasse può limitare le emissioni di metano.</p>
          </li>
          <li>
          <p> Migliorare la dieta del bestiame, promuovendo pratiche di allevamento sostenibili e sviluppando additivi alimentari per ridurre la produzione di metano nel sistema digestivo dei ruminanti.</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Methane;
