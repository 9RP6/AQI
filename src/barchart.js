// barchart.js
import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';
import BarChart from './barchart'; // Import the BarChart component

const BarChartContainer = () => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('data_sample.csv');
        const text = await response.text();
        const result = Papa.parse(text, { header: true });
        setChartData(result.data);
      } catch (error) {
        console.error('Error fetching or parsing CSV for BarChartContainer:', error);
      }
    };

    fetchData();
  }, []);

  const chartStyle = {
    width: '33%', // 3 columns in a row
    height: '33vh', // 2 rows in a column
    marginBottom: '20px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
  };

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {/* Bar Chart for 'current_temp_f' */}
      <div style={chartStyle}>
        <h2>Temperature Bar Chart</h2>
        <BarChart chartData={chartData} parameter="current_temp_f" />
      </div>

      {/* Bar Chart for 'current_humidity' */}
      <div style={chartStyle}>
        <h2>Humidity Bar Chart</h2>
        <BarChart chartData={chartData} parameter="current_humidity" />
      </div>

      {/* Bar Chart for 'pressure' */}
      <div style={chartStyle}>
        <h2>Pressure Bar Chart</h2>
        <BarChart chartData={chartData} parameter="pressure" />
      </div>

      {/* Bar Chart for 'pm1_0_cf_1' */}
      <div style={chartStyle}>
        <h2>PM1.0 Bar Chart</h2>
        <BarChart chartData={chartData} parameter="pm1_0_cf_1" />
      </div>

      {/* Bar Chart for 'pm2_5_cf_1' */}
      <div style={chartStyle}>
        <h2>PM2.5 Bar Chart</h2>
        <BarChart chartData={chartData} parameter="pm2_5_cf_1" />
      </div>

      {/* Bar Chart for 'pm10_0_cf_1' */}
      <div style={chartStyle}>
        <h2>PM10.0 Bar Chart</h2>
        <BarChart chartData={chartData} parameter="pm10_0_cf_1" />
      </div>
    </div>
  );
};

export default BarChartContainer;
