const fs = require('fs');

const filePath = 'welcome.txt';

const content = 'hello node';

fs.writeFile(filePath, content, (err) => {
    if (err) {
        console.error('Error writing to file:', err);
    } else {
        console.log('File created and content written successfully.');
    }
});
