// LineChart.js
import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';
import TemperatureChart from './TemperatureChart';
import HumidityChart from './HumidityChart';
import PressureChart from './PressureChart';
import PMChart from './PMChart';

const LineChart = ({ fileNames }) => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchDataFromCSV = async (fileName) => {
          const response = await fetch(fileName);
          const text = await response.text();
          const result = Papa.parse(text, { header: true });
          return result.data;
        };

        const allData = await Promise.all(fileNames.map(fetchDataFromCSV));
        // Combine data from multiple files into a single array
        const combinedData = allData.reduce((acc, data) => acc.concat(data), []);
        setChartData(combinedData);
      } catch (error) {
        console.error('Error fetching or parsing CSV:', error);
      }
    };

    fetchData();
  }, [fileNames]);

  const chartStyle = {
    width: '33%', // 3 columns in a row
    height: '33vh', // 2 rows in a column
    marginBottom: '20px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
  };

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {/* Temperature Chart */}
      <div style={chartStyle}>
        <h2>Temperature Chart</h2>
        <TemperatureChart chartData={chartData} />
      </div>

      {/* Humidity Chart */}
      <div style={chartStyle}>
        <h2>Humidity Chart</h2>
        <HumidityChart chartData={chartData} />
      </div>

      {/* Pressure Chart */}
      <div style={chartStyle}>
        <h2>Pressure Chart</h2>
        <PressureChart chartData={chartData} />
      </div>

      {/* PM Chart */}
      <div style={chartStyle}>
        <h2>PM Chart</h2>
        <PMChart chartData={chartData} />
      </div>
    </div>
  );
};

export default LineChart;
