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

  // Extract the last data point
  const lastDataPoint = chartData.length > 0 ? chartData[chartData.length - 1] : null;

  const data = [
    ['Time', 'Humidity'],
    ...chartData.map((row) => [row.UTCDateTime, parseFloat(row.current_humidity)]),
  ];

  return (
    <div>
      <Chart
        width={options.width}
        height={options.height}
        chartType="LineChart"
        loader={<div>Loading Chart...</div>}
        data={data}
        options={options}
      />
      {lastDataPoint && (
        <div>
          <p>Last Recorded Value:</p>
          <p>
            Date and Time: {lastDataPoint.UTCDateTime}, Humidity: {lastDataPoint.current_humidity}
          </p>
        </div>
      )}
    </div>
  );
};

export default HumidityChart;
