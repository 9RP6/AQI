import React, { useEffect, useState } from 'react';
import LineChart from './linechart';
import fileList from './filelist.json'; // Import the JSON directly

const App = () => {
  const [fileListData, setFileListData] = useState([]);

  useEffect(() => {
    // No need to use fetch, fileList is already the JSON object
    setFileListData(fileList);
  }, []);

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Multi-File Line Chart App</h1>
      {fileListData.length > 0 ? (
        <LineChart fileNames={fileListData} />
      ) : (
        <p>Loading file list...</p>
      )}
    </div>
  );
};

export default App;
