const express = require('express');
const app = express();

//声明中间件
app.use((req,res,next) =>{
  //检测请求头的referer是否为127.0.0.1
  let referer = req.get('referer');
  if(referer){
    console.log(referer);
    let url = new URL(referer);
  
    //获取hostname
    let hostname = url.hostname;
    // console.log(hostname);
    if(hostname !== '127.0.0.1'){
      //响应404
      res.status(404).send('<h1>404 Not Found</h1>');
      return;
    }
  }

  next();
})

//静态资源中间件设置
app.use(express.static( __dirname +'/public'));
// app.get('/',(res,req) =>{

//   res.end('hello')
// })

app.listen(3001, () => {

  console.log('3001服务启动了哦');
})