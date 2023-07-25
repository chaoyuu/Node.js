const fs =require('fs');
const process = require('process');
 let data = fs.readFileSync('./videos/sing.mp4');


//  fs.writeFileSync('../videos/sing-2.mp4',data);

// fs.writeFileSync('../videos/sing-2.mp4', data);
// console.log(process.memoryUsage());

 //流失操作
const rs = fs.createReadStream('./videos/sing.mp4');

const ws =fs.createReadStream('./videos/sing-3.mp4',data);



//绑定事件
// rs.on('data',chunk => {
//     ws.write(chunk);
// });

// rs.on('end',() => {
//     console.log(process.memoryUsage());

// })


rs.pipe(ws);
