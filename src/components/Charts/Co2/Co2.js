import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import Axios from 'axios';
import './Co2.css';

function CO2Chart() {
  const [chartData, setChartData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Axios.get('https://global-warming.org/api/co2-api')
      .then((response) => {
        const co2Data = response.data.co2 || [];
        const labels = co2Data.map((item) => `${item.year}-${item.month}-${item.day}`);
        const values = co2Data.map((item) => parseFloat(item.cycle));

        const data = {
          labels: labels,
          datasets: [
            {
              label: 'CO2 Cycle',
              data: values,
              borderColor: '#36A2EB',
              backgroundColor: '#9BD0F5',
            },
          ],
        };

        setChartData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Si è verificato un errore nella chiamata API:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Caricamento in corso...</div>;
  }

  return (
    <div className="chart-co2">
      <h2>Andamento del CO2</h2>
      <div className="chart-container-co2">
        <Bar
          data={chartData}
          options={{
            maintainAspectRatio: false,
            responsive: true,
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
          }}
          plugins={{
            legend: {
              display: false, 
            },
          }}
          className="custom-chart-co2"
        />
      </div>
      <div className="causes-remedies-co2">
        <h3>Cause</h3>
        <ul className="cause-list">
          <li>
            <p> La combustione di combustibili fossili come carbone, petrolio e gas naturale per l'energia e i trasporti è la principale causa dell'aumento delle emissioni di gas serra, come il biossido di carbonio (CO2) e il metano (CH4).</p>
          </li>
          <li>
            <p>L'innalzamento delle temperature ha portato allo scioglimento dei ghiacciai e del ghiaccio marino, contribuendo all'innalzamento del livello del mare e mettendo a rischio le comunità costiere.</p>
          </li>
          <li>
            <p> L'aumento delle temperature ha alterato i modelli meteorologici, causando eventi meteorologici estremi più frequenti e intensi, come uragani, inondazioni e siccità.</p>
          </li>
        </ul>
        <h3>Rimedi</h3>
        <ul className="remedy-list">
          <li>
            <p> Ridurre drasticamente le emissioni di gas serra attraverso la transizione verso fonti di energia rinnovabile come il solare e l'eolico, nonché l'efficienza energetica.</p>
          </li>
          <li>
            <p>Conservare le foreste esistenti, ripristinare le foreste danneggiate e promuovere la riforestazione per assorbire il carbonio atmosferico.</p>
          </li>
          <li>
            <p> Adottare pratiche agricole più sostenibili, come l'agricoltura biologica, la gestione delle risorse idriche e la riduzione delle emissioni di metano dal bestiame.</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default CO2Chart;
