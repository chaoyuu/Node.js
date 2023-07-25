const fs = require('fs');

//相对路径
// fs.writeFileSync('./index.html', 'Hello World');




//绝对路径
fs.writeFileSync('/Users/chaoyuyang/Desktop/web/index.html', 'love');//for Mac
// fs.writeFileSync('/index.html', 'love');//for Linux
// fs.writeFileSync('/index.html', 'love');//for windows
