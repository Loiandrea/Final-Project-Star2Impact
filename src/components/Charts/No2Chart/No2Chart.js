import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import Axios from 'axios';
import './No2Chart.css';

function NitrousOxide() {
  const [data, setData] = useState([]);

  useEffect(() => {
    Axios.get('https://global-warming.org/api/nitrous-oxide-api', {
      params: {
        json: true,
      },
    })
      .then(response => {
        const nitrousOxideData = response.data.nitrous;
        setData(nitrousOxideData);
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
        label: 'Concentrazione di N2O',
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
        ticks: {
          color: 'white',
          maxRotation: 0,
          autoSkip: true,
          maxTicksLimit: 10,
        },
      },
      y: {
        type: 'linear',
        beginAtZero: false, 
        min: 300,
        grid: {
          display: false,
        },
        ticks: {
          color: 'white',
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: 'white',
        },
      },
    },
  };

  return (
    <div className="no2">
      <div className="chart-container-no2">
        <Line data={chartData} options={chartOptions} />
      </div>
      <div className="causes-remedies">
        <h3>Cause</h3>
        <ul className="cause-list">
          <li>
            <strong>Emissioni dei veicoli a motore:</strong> L'uso di veicoli alimentati a combustibili fossili, come benzina e diesel, contribuisce in modo significativo alle emissioni di NO2 attraverso il processo di combustione nei motori.
          </li>
          <li>
            <strong>Emissioni industriali:</strong> Le attività industriali, come la produzione di energia e l'industria manifatturiera, rilasciano NO2 nell'atmosfera come sottoprodotto dei processi di combustione e di produzione di energia.
          </li>
          <li>
            <strong>Agricoltura:</strong> L'uso di fertilizzanti azotati nell'agricoltura può contribuire alle emissioni di NO2 nell'atmosfera, poiché il surplus di azoto può reagire con l'ossigeno atmosferico per formare NO2.
          </li>
        </ul>
        <h3>Rimedi</h3>
        <ul className="remedy-list">
          <li>
            <strong>Trasporto pubblico e mobilità sostenibile:</strong> Promuovere il trasporto pubblico, l'uso di veicoli a basse emissioni o elettrici e l'adozione di pratiche di mobilità sostenibile per ridurre le emissioni di NO2 da veicoli a motore.
          </li>
          <li>
            <strong>Tecnologie per il controllo delle emissioni industriali:</strong> Implementare tecnologie avanzate di riduzione delle emissioni industriali, come il controllo catalitico selettivo, per ridurre le emissioni di NO2 nelle attività industriali.
          </li>
          <li>
            <strong>Gestione delle emissioni agricole:</strong> Promuovere pratiche agricole sostenibili, come l'uso responsabile dei fertilizzanti e la gestione delle emissioni di ammoniaca, che possono contribuire alla formazione di NO2 nell'atmosfera.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NitrousOxide;
