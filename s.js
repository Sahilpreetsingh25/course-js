// take arugment from proess.argv and make mutliples folder
const fs = require('fs');
const path = require('path');

const folderNames = process.argv.slice(2);

if (folderNames.length === 0) {
    console.log('Please provide at least one folder name.');
    process.exit(1);
}

folderNames.forEach(folderName => {
    const folderPath = path.join(__dirname, folderName);
    if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath);
        console.log(`Folder created: ${folderPath}`);
    } else {
        console.log(`Folder already exists: ${folderPath}`);
    }
});