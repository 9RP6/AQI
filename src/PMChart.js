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

  // Extract the last data point for each PM value
  const lastPM1DataPoint = chartData.length > 0 ? chartData[chartData.length - 1].pm1_0_cf_1 : null;
  const lastPM25DataPoint = chartData.length > 0 ? chartData[chartData.length - 1].pm2_5_cf_1 : null;
  const lastPM10DataPoint = chartData.length > 0 ? chartData[chartData.length - 1].pm10_0_cf_1 : null;

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
      {lastPM1DataPoint && (
        <p>Last Recorded PM1.0 Value: {lastPM1DataPoint} at {chartData[chartData.length - 1].UTCDateTime}</p>
      )}

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
      {lastPM25DataPoint && (
        <p>Last Recorded PM2.5 Value: {lastPM25DataPoint} at {chartData[chartData.length - 1].UTCDateTime}</p>
      )}

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
      {lastPM10DataPoint && (
        <p>Last Recorded PM10.0 Value: {lastPM10DataPoint} at {chartData[chartData.length - 1].UTCDateTime}</p>
      )}
    </div>
  );
};

export default PMChart;
