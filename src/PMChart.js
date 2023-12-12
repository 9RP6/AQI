// PMChart.js
import React from 'react';
import { Chart } from 'react-google-charts';

const PMChart = ({ chartData }) => {
  const options = {
    titleTextStyle: { color: 'goldenrod', bold: true },
    width: 900,
    height: 400,
    vAxis: {
      titleTextStyle: { bold: true },
    },
  };

  const pm1Data = [
    ['Time', 'PM1.0'],
    ...chartData.map((row) => [row.UTCDateTime, parseFloat(row.pm1_0_cf_1)]),
  ];

  const pm25Data = [
    ['Time', 'PM2.5'],
    ...chartData.map((row) => [row.UTCDateTime, parseFloat(row.pm2_5_cf_1)]),
  ];

  const pm10Data = [
    ['Time', 'PM10.0'],
    ...chartData.map((row) => [row.UTCDateTime, parseFloat(row.pm10_0_cf_1)]),
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {/* PM1.0 Chart */}
      <Chart
        width={options.width}
        height={options.height}
        chartType="LineChart"
        loader={<div>Loading Chart...</div>}
        data={pm1Data}
        options={{
          ...options,
          vAxis: { title: 'PM1.0', titleTextStyle: { color: 'goldenrod', bold: true } },
          hAxis: { textPosition: 'none' }, // Hide x-axis labels
          margin: -10, // Set a negative margin value for closer spacing
        }}
      />

      {/* PM2.5 Chart */}
      <Chart
        width={options.width}
        height={options.height}
        chartType="LineChart"
        loader={<div>Loading Chart...</div>}
        data={pm25Data}
        options={{
          ...options,
          vAxis: { title: 'PM2.5', titleTextStyle: { color: 'blue', bold: true } },
          hAxis: { textPosition: 'none' }, // Hide x-axis labels
          margin: -10, // Set a negative margin value for closer spacing
        }}
      />

      {/* PM10.0 Chart */}
      <Chart
        width={options.width}
        height={options.height}
        chartType="LineChart"
        loader={<div>Loading Chart...</div>}
        data={pm10Data}
        options={{
          ...options,
          vAxis: { title: 'PM10.0', titleTextStyle: { color: 'green', bold: true } },
          hAxis: { title: 'Time', titleTextStyle: { color: 'black', bold: true } }, // Show x-axis labels only for PM10.0
          margin: -20, // Set a negative margin value for closer spacing
        }}
      />
    </div>
  );
};

export default PMChart;
