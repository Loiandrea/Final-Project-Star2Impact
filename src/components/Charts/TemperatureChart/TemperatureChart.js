import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import Axios from 'axios';
import './TemperatureChart.css';
import { LinearScale, CategoryScale } from 'chart.js';
import Chart from 'chart.js/auto';

Chart.register(LinearScale, CategoryScale);

function Temperature() {
  const [data, setData] = useState([]);

  useEffect(() => {
    Axios.get('https://global-warming.org/api/temperature-api')
      .then((response) => {
        const temperatureData = response.data.result
          .filter((item, index) => index % 10 === 0) // Visualizza dati ogni 10 anni
          .map((item) => ({
            time: item.time,
            station: parseFloat(item.station),
            land: parseFloat(item.land),
          }));
        setData(temperatureData);
      })
      .catch((error) => {
        console.error('Errore nella richiesta API:', error);
      });
  }, []);

  const chartData = {
    labels: data.map((item) => item.time),
    datasets: [
      {
        label: 'Temperatura su stazione',
        data: data.map((item) => item.station),
        borderColor: 'blue',
        borderWidth: 1, // Linee più sottili
        backgroundColor: 'rgba(0, 0, 255, 0.2)',
        fill: true,
      },
      {
        label: 'Temperatura su terra',
        data: data.map((item) => item.land),
        borderColor: 'red',
        borderWidth: 1, // Linee più sottili
        backgroundColor: 'rgba(255, 0, 0, 0.2)',
        fill: true,
      },
    ],
  };

  const chartOptions = {
    scales: {
      x: {
        type: 'category',
        title: {
          display: true,
          text: 'Anno', // Spiegazione per l'asse X (barra orizzontale)
        },
        labels: data.map((item) => item.time),
      },
      y: {
        type: 'linear',
        beginAtZero: true,
        title: {
          display: true,
          text: 'Temperatura (°C)', // Spiegazione per l'asse Y (barra verticale)
        },
      },
    },
  };

  return (
    <div className="chart-temperature">
      <div className="chart-container-temperature custom-chart-temperature">
        <Line data={chartData} options={chartOptions} className="custom-chart" /> {/* Aggiunta della classe custom-chart */}
      </div>
      <div className="causes-remedies-temperature">
        <h3>Cause</h3>
        {/* Aggiungi le spiegazioni sulle cause e i rimedi come desiderato */}
      </div>
    </div>
  );
}

export default Temperature;
