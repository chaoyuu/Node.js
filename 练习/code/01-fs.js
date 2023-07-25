const fs = require('fs');

const ws =fs.createWriteStream('./test.txt');


ws.write('Hello World\r\n');
ws.write('Hello World\r\n');
ws.write('Hello World\r\n');
ws.write('Hello World\r\n');


ws.close();