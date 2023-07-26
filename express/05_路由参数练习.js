//导入 express
const express = require('express');
const  {singers} = require('./singers.json');
// console.log(singers);
//创建应用对象
const app = express();

//创建路由
app.get('/singer/:id.html', (req, res) => {
  
  //获取路由参数
  let {id} = req.params;
  //在数组中寻找id
  let result = singers.find(item => {
    if(item.id === Number(id)){
      return true;
    }
  });
  if(!result){
    res.statusCode =404;
    res.end(`<h1>404 not found </h1>`);
    return;
  
  }
  // console.log(result);
  res.end(`
      <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <h2>${result.singer_name}</h2>
        <img src='${result.singer_pic}'>
    </body>
    </html>`);
});

//监听端口, 启动服务
app.listen(3001, () => {
  console.log('服务已经启动, 端口 3001 正在监听中....')
})