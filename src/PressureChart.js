import React from 'react';
import { Chart } from 'react-google-charts';

const PressureChart = ({ chartData }) => {
  const options = {
    // ... pressure options
  };

  const data = [
    ['Time', 'Pressure'],
    ...chartData.map((row) => [row.UTCDateTime, parseFloat(row.pressure)]),
  ];

  return (
    <Chart
      width={900}
      height={400}
      chartType="LineChart"
      loader={<div>Loading Chart...</div>}
      data={data}
      options={options}
    />
  );
};

export default PressureChart;
