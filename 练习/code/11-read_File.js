//流式读取

const fs = require('fs');

const rs = fs.createReadStream('./videos/sing.mp4');

rs.on('data',chunk => {

    console.log(chunk.length);
});

rs.on('end',() =>{
    console.log('读取完成');
})