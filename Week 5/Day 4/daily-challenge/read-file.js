const fs = require('fs');
const path = require('path');

function readFileContent() {
    try {
        const filePath = path.join(__dirname, 'files', 'file-data.txt');
        const content = fs.readFileSync(filePath, 'utf8');
        return content;
    } catch (error) {
        console.error('Error reading file:', error.message);
        return null;
    }
}

module.exports = readFileContent; 