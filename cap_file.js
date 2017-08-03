const readline = require('readline');
const fs = require('fs');
const outputFileSync = require('output-file-sync');

const rl = readline.createInterface({
  input: fs.createReadStream('file1.txt')
});

rl.on('line', (line) => {
  outputFileSync('output.txt', line);
});

// const fs = require('fs');
// outputFileSync('output.txt', line);
