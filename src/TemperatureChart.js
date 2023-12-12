// TemperatureChart.js
import React from 'react';
import { Chart } from 'react-google-charts';

const TemperatureChart = ({ chartData }) => {
  const options = {
    title: 'Temperature Chart',
    titleTextStyle: { color: 'goldenrod', bold: true },
    width: '100%',
    height: '100%',
    vAxis: {
      title: 'Temperature (°F)',
      titleTextStyle: { color: 'goldenrod', bold: true },
    },
    hAxis: { textPosition: 'none' }, // Hide x-axis labels
  };

  const data = [
    ['Time', 'Temperature (°F)'],
    ...chartData.map((row) => [row.UTCDateTime, parseFloat(row.current_temp_f)]),
  ];

  return (
    <Chart
      width={options.width}
      height={options.height}
      chartType="LineChart"
      loader={<div>Loading Chart...</div>}
      data={data}
      options={options}
    />
  );
};

export default TemperatureChart;
