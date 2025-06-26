const fs = require('fs');

// Create source.txt with some content
fs.writeFileSync('source.txt', 'This is the source file content.\nIt will be copied to destination.txt');

// Read from source.txt and write to destination.txt
try {
    const content = fs.readFileSync('source.txt', 'utf8');
    fs.writeFileSync('destination.txt', content);
    console.log('File copied successfully!');
} catch (error) {
    console.error('Error:', error.message);
} 