import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import Axios from 'axios';
import './ArcticChart.css';
import { LinearScale, CategoryScale } from 'chart.js';
import Chart from 'chart.js/auto';

Chart.register(LinearScale, CategoryScale);

function ArcticChart() {
  const [data, setData] = useState([]);

  useEffect(() => {
    Axios.get('https://global-warming.org/api/arctic-api')
      .then((response) => {
       
        const arcticData = response.data.arcticData || [];
        const filteredData = arcticData.map((item) => ({
          year: item.year,
          extent: item.extent,
        }));

        setData(filteredData);
      })
      .catch((error) => {
        console.error('Errore nella richiesta API:', error);
      });
  }, []);

  // Configurazione del grafico
  const chartData = {
    labels: data.map((item) => item.year),
    datasets: [
      {
        label: 'Estensione Artica',
        data: data.map((item) => item.extent),
        borderColor: 'blue',
        backgroundColor: 'rgba(0, 0, 255, 0.2)',
        fill: true,
      },
    ],
  };

  const chartOptions = {
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: 'white',
        },
      },
      y: {
        grid: {
          display: false,
        },
        ticks: {
          color: 'white',
        },
      },
    },
  };

  
  
  

  return (
    <div className="arcticchart">
      <div className="chart-container-polar">
        <Line data={chartData} options={chartOptions} />
      </div>
      
      <div className="causes-remedies-polar">
        <h3>Cause:</h3>
        <ul className="cause-list-polar">
          <li>
            <p> L'aumento delle temperature provoca lo scioglimento accelerato del ghiaccio marino, mettendo in pericolo gli habitat della fauna artica, come l'orso polare.</p>
          </li>
          <li>
          <p>  Lo scioglimento del ghiaccio artico contribuisce all'innalzamento del livello del mare, minacciando le comunità costiere in tutto il mondo.</p>
          </li>
          <li>
          <p>  L'artico gioca un ruolo fondamentale nella regolazione del clima globale, e il suo riscaldamento può portare a eventi meteorologici estremi in molte parti del mondo.</p>
          </li>
        </ul>
        <h3>Rimedi:</h3>
        <ul className="remedy-list-polar">
          <li>
          <p>  Ridurre drasticamente le emissioni attraverso politiche di transizione verso fonti di energia rinnovabile e tecnologie a basse emissioni di carbonio.</p>
          </li>
          <li>
          <p>  Creare riserve marine e terrestri, nonché adottare misure di conservazione per proteggere gli ecosistemi artici.</p>
          </li>
          <li>
          <p> Investire in ricerca scientifica per comprendere meglio le dinamiche dell'Artico e sviluppare tecnologie per l'adattamento ai cambiamenti climatici.</p>  
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ArcticChart;
