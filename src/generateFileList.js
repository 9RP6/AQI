// generateFileList.js
const fs = require('fs');
const path = require('path');

const directoryPath = 'E:\\new aq dash\\AQI\\public\\Dataset';

try {
  if (fs.existsSync(directoryPath)) {
    const files = fs.readdirSync(directoryPath);
    const filesWithPrefix = files.map((file) => `Dataset/${file}`); // Prepend "Dataset/" before each file name
    const jsonContent = JSON.stringify(filesWithPrefix, null, 2);

    // Specify the path where you want to save the JSON file in the 'src' directory
    const outputPath = path.join(__dirname, 'filelist.json');

    fs.writeFileSync(outputPath, jsonContent);
    console.log('File list generated successfully:', outputPath);
  } else {
    console.error('Directory does not exist:', directoryPath);
  }
} catch (error) {
  console.error('Error generating file list:', error.message);
}
