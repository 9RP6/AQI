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

          if (!response.ok) {
            throw new Error(`Failed to fetch ${fileName}`);
          }

          const text = await response.text();
          const result = Papa.parse(text, { header: true });

          if (result.errors.length > 0) {
            console.warn(`Parsing errors for ${fileName}:`, result.errors);
          }

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

  const columnStyle = {
    display: 'flex',
    flexDirection: 'column',
    flex: '1', // Distribute equal space for both columns
    minWidth: '300px', // Minimum width to prevent charts from getting too small
    margin: '10px',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
    fontFamily: 'Arial, sans-serif', // Change the font to a suitable one
  };

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', fontFamily: 'Arial, sans-serif' }}>
      {/* Temperature, Humidity, and Pressure Charts */}
      <div style={columnStyle}>
        {/* Temperature Chart */}
        <div>
          <h2>Temperature</h2>
          <TemperatureChart chartData={chartData} />
        </div>

        {/* Humidity Chart */}
        <div>
          <h2>Humidity</h2>
          <HumidityChart chartData={chartData} />
        </div>

        {/* Pressure Chart */}
        <div>
          <h2>Pressure</h2>
          <PressureChart chartData={chartData} />
        </div>
      </div>

      {/* PM Charts */}
      <div style={columnStyle}>
        {/* Combined PM Chart */}
        <div>
          <h2>Combined PM's</h2>
          <PMChart chartData={chartData} />
        </div>
      </div>
    </div>
  );
};

export default LineChart;
