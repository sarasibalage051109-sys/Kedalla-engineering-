const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, 'src', 'assets');
const files = fs.readdirSync(targetDir);

let count = 1;
files.forEach(file => {
  if (file.endsWith('.jpeg') && file.startsWith('WhatsApp')) {
    const oldPath = path.join(targetDir, file);
    const newPath = path.join(targetDir, `cabana_${count++}.jpeg`);
    fs.renameSync(oldPath, newPath);
    console.log(`Moved ${file} to cabana_${count - 1}.jpeg`);
  }
});

