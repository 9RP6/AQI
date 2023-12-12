// HumidityChart.js
import React from 'react';
import { Chart } from 'react-google-charts';

const HumidityChart = ({ chartData }) => {
  const options = {
    title: 'Humidity Chart',
    titleTextStyle: { color: 'goldenrod', bold: true },
    width: '100%',
    height: '100%',
    vAxis: {
      title: 'Humidity',
      titleTextStyle: { color: 'goldenrod', bold: true },
    },
    hAxis: { textPosition: 'none' }, // Hide x-axis labels
  };

  const data = [
    ['Time', 'Humidity'],
    ...chartData.map((row) => [row.UTCDateTime, parseFloat(row.current_humidity)]),
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

export default HumidityChart;
