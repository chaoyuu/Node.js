//导入 express

const express = require('express');

//创建应用对象
const app = express();

//创建路由
app.get('/response', (req,res) =>{

    // res.statusCode = 404;
    // res.statusMessage = 'love';
    // res.setHeader('xxx','yyy');
    // res.write('hello');
    // res.end('response');

    //express响应
/*     res.status(500);
    res.set('aaa','bbb');
    res.send('你好'); */
    res.status(500).set('abc','def').send('哈哈哈哈');



});

app.listen(3001,() => {
    console.log('3001 服务启动了哦!!!');
})