// PressureChart.js
import React from 'react';
import { Chart } from 'react-google-charts';

const PressureChart = ({ chartData }) => {
  const options = {
    // ... pressure options
  };

  // Extract the last data point
  const lastDataPoint = chartData.length > 0 ? chartData[chartData.length - 1] : null;

  const data = [
    ['Time', 'Pressure'],
    ...chartData.map((row) => [row.UTCDateTime, parseFloat(row.pressure)]),
  ];

  return (
    <div>
      <Chart
        width={900}
        height={400}
        chartType="LineChart"
        loader={<div>Loading Chart...</div>}
        data={data}
        options={options}
      />
      {lastDataPoint && (
        <div>
          <p>Last Recorded Value:</p>
          <p>Date and Time: {lastDataPoint.UTCDateTime}, Pressure: {lastDataPoint.pressure}</p>
        </div>
      )}
    </div>
  );
};

export default PressureChart;
