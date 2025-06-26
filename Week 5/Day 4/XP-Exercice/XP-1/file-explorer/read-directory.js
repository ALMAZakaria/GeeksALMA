const fs = require('fs');

try {
    const files = fs.readdirSync('.');
    console.log('Files in current directory:');
    files.forEach(file => {
        const stats = fs.statSync(file);
        const type = stats.isDirectory() ? 'Directory' : 'File';
        console.log(`${type}: ${file}`);
    });
} catch (error) {
    console.error('Error reading directory:', error.message);
} 