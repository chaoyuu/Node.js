const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

//声明中间件函数

function recordMiddleware(req,res,next){
    //获取url 和ip
    let {url, ip} = req;
    console.log(url, ip);
    //将信息保存在文件中 access.log
    fs.appendFileSync(path.resolve(__dirname,'./access.log'), ` ${url} ${ip}\r\n`);

    //调用next
    next();
}
//使用中间件函数
app.use(recordMiddleware)
app.get('/home', (req,res)=>{
    //获取url 和 ip
  
  res.send('前台首页');
});

app.get('/admin', (req,res)=>{
    res.send('后台首页');
  });

app.all('*',(req,res)=>{
    res.send('<h1>404 not found </h1>')
})
app.listen(3001,()=>{
  
    console.log('3001服务启动了哦');
})