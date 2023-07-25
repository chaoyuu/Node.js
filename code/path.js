const fs = require ('fs');
const path =  require('path');
// fs.wirteFileSync(__dirname + '/index.html', 'love');
// console.log(__dirname + './index.html');

//resolve

// console.log(path.resolve(__dirname,'./index.html'));
// console.log(path.resolve(__dirname,'index.html'));
// console.log(path.resolve(__dirname,'/index.html', './test'));


//sep分隔符

console.log(path.sep);



//parse

console.log(__filename);//文件的绝对路径

let str = '//Users//chaoyuyang//Desktop//web//nodeJS//code/path.js';

// console.log(path.parse(str));

//basename
// console.log(path.basename(str));

//dirname
// console.log(path.dirname(str));

//extname

console.log(path.extname(str));

