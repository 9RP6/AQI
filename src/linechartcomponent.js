import React, { useEffect, useState } from 'react';
import { Chart } from 'react-google-charts';
import Papa from 'papaparse';

const LineChartComponent = () => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('data_sample.csv'); // Replace with the path to your CSV file
        const text = await response.text();
        const result = Papa.parse(text, { header: true });

        setChartData(result.data);
      } catch (error) {
        console.error('Error fetching or parsing CSV:', error);
      }
    };

    fetchData();
  }, []);

  const commonOptions = {
    titleTextStyle: { color: 'goldenrod', bold: true },
    hAxis: {
      title: 'Time',
      titleTextStyle: { color: 'black', bold: true },
      textStyle: { color: 'black', bold: true },
      gridlines: { color: 'transparent' }, // Remove x-axis gridlines
      baselineColor: 'goldenrod', // Set x-axis baseline color
    },
    vAxis: {
      titleTextStyle: { color: 'black', bold: true },
      textStyle: { color: 'black', bold: true },
      gridlines: { color: 'goldenrod', count: 4 }, // Set y-axis gridlines with a count of 4
      baselineColor: 'goldenrod', // Set y-axis baseline color
    },
  };

  const temperatureOptions = {
    ...commonOptions,
    title: 'Temperature Over Time',
    width: 900, // Set width for temperature chart
    vAxis: { title: 'Temperature (°F)', titleTextStyle: { color: 'goldenrod', bold: true }, textStyle: { color: 'goldenrod', bold: true } },
  };

  const humidityOptions = {
    ...commonOptions,
    title: 'Humidity Over Time',
    width: 900, // Set width for humidity chart
    vAxis: { title: 'Humidity', titleTextStyle: { color: 'goldenrod', bold: true }, textStyle: { color: 'goldenrod', bold: true } },
  };

  const pressureOptions = {
    ...commonOptions,
    title: 'Pressure Over Time',
    width: 900, // Set width for pressure chart
    vAxis: { title: 'Pressure', titleTextStyle: { color: 'goldenrod', bold: true }, textStyle: { color: 'goldenrod', bold: true } },
  };

  const pmOptions = {
    ...commonOptions,
    title: 'PM Over Time',
    width: 900, // Set width for PM chart
    vAxes: {
      0: { title: 'PM1.0', titleTextStyle: { color: 'goldenrod', bold: true }, textStyle: { color: 'goldenrod', bold: true } },
      1: { title: 'PM2.5', titleTextStyle: { color: 'blue', bold: true }, textStyle: { color: 'blue', bold: true } },
      2: { title: 'PM10.0', titleTextStyle: { color: 'green', bold: true }, textStyle: { color: 'green', bold: true } },
    },
    series: {
      0: { targetAxisIndex: 0 },
      1: { targetAxisIndex: 1 },
      2: { targetAxisIndex: 2 },
    },
  };

  const temperatureData = [
    ['Time', 'Temperature (°F)'],
    ...chartData.map((row) => [row.UTCDateTime, parseFloat(row.current_temp_f)]),
  ];

  const humidityData = [
    ['Time', 'Humidity'],
    ...chartData.map((row) => [row.UTCDateTime, parseFloat(row.current_humidity)]),
  ];

  const pressureData = [
    ['Time', 'Pressure'],
    ...chartData.map((row) => [row.UTCDateTime, parseFloat(row.pressure)]),
  ];

  const pmData = [
    ['Time', 'PM1.0', 'PM2.5', 'PM10.0'],
    ...chartData.map((row) => [
      row.UTCDateTime,
      parseFloat(row.pm1_0_cf_1),
      parseFloat(row.pm2_5_cf_1),
      parseFloat(row.pm10_0_cf_1),
    ]),
  ];

  return (
    <div>
      {/* Temperature Chart */}
      <Chart
        width={temperatureOptions.width}
        height={400}
        chartType="LineChart"
        loader={<div>Loading Chart...</div>}
        data={temperatureData}
        options={temperatureOptions}
      />

      {/* Humidity Chart */}
      <Chart
        width={humidityOptions.width}
        height={400}
        chartType="LineChart"
        loader={<div>Loading Chart...</div>}
        data={humidityData}
        options={humidityOptions}
      />

      {/* Pressure Chart */}
      <Chart
        width={pressureOptions.width}
        height={400}
        chartType="LineChart"
        loader={<div>Loading Chart...</div>}
        data={pressureData}
        options={pressureOptions}
      />

      {/* PM Chart */}
      <Chart
        width={pmOptions.width}
        height={400}
        chartType="LineChart"
        loader={<div>Loading Chart...</div>}
        data={pmData}
        options={pmOptions}
      />
    </div>
  );
};

export default LineChartComponent;
