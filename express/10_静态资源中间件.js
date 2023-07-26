const express = require('express');
const app = express();


//静态资源中间件设置
app.use(express.static( __dirname +'/public'));
app.get('/home',(res,req) =>{

  res.end('hello')
})

app.listen(3001, () => {

  console.log('3001服务启动了哦');
})