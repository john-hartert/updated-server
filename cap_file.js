// const readline = require('readline');
// const fs = require('fs');
// const outputFileSync = require('output-file-sync');

// const rl = readline.createInterface({
//   input: fs.createReadStream('file1.txt')
// });

// rl.on('line', (line) => {
//   outputFileSync('output.txt', line);
// });
//////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
const readline = require('readline');
const fs = require('fs');
const outputFileSync = require('output-file-sync');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter a file: ', (value) => {
    let domain = value
    rl.close();
    fs.createReadStream(domain)
    rl.question('Enter a new file: ', (valueOne) => {
        let domainOne = valueOne
        rl.on('line', (line) => {
        outputFileSync(domainOne, line);
        rl.close();
    });
});

});