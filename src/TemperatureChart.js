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

  // Extract the last data point
  const lastDataPoint = chartData.length > 0 ? chartData[chartData.length - 1] : null;

  const data = [
    ['Time', 'Temperature (°F)'],
    ...chartData.map((row) => [row.UTCDateTime, parseFloat(row.current_temp_f)]),
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
            Date and Time: {lastDataPoint.UTCDateTime}, Temperature: {lastDataPoint.current_temp_f} °F
          </p>
        </div>
      )}
    </div>
  );
};

export default TemperatureChart;
