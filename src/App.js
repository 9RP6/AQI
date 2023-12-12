// App.js
import React from 'react';
import LineChart from './linechart';

const App = () => {
  return (
    <div>
      <h1>Multi-File Line Chart App</h1>
      <LineChart fileNames={['a.csv',]} />
    </div>
  );
};

export default App;
