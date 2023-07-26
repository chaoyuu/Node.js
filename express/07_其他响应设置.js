const express = require('express');

const app = express();


app.get('/other', (req,res)=>{
    

    //跳转响应
    // res.redirect('http://www.baidu.com');
    // res.end('other');
    // res.download(__dirname + '/package.json');
    //JSON响应
    // res.json({
    //     name:'yuyu',
    //     slogon:'hhhhh'
    // })
    res.sendFile(__dirname  + '/test.html');
});
;


app.listen(3001,()=>{
  
    console.log('3001服务启动了哦');
})