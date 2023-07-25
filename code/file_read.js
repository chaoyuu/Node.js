const fs = require('fs');

// fs.readFile('./data.txt', (err,data) => {
//     if(err) throw err;
//     console.log(data.toString());

// });


//同步读取

// let data = fs.readFileSync('./code/data.txt');
// console.log(data.toString());

// console.log('end');


//写入文件
fs.writeFile('./code/data.txt','hello world',(err) => {
    if(err) throw err;
    console.log('写入成功');
})