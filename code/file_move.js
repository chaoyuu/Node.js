const fs = require('fs');

// fs.rename('./data.txt', './test.txt', err =>{
//     if(err) {
//         console.log('操作失败~');
//         return;
//     }
//     console.log('操作成功');
// })

fs.rename('./code/test.txt', './code/text.txt', (err) =>{ if(err) throw err; console.log('移动完成') });
// fs.renameSync('./座右铭.txt', './论语/我的座右铭.txt');