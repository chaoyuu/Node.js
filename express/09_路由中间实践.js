const express = require('express');
const app = express();




app.get('/home', (req, res) => {
  //获取url 和 ip

  res.send('前台首页');
});


//声明中间件函数
let checkCodeMiddleWare = (req, res, next) => {

  //判断 URL 中是否 code 参数等于521
  if (req.query.code === '521') {
     next();
  } else {
    res.send('暗号错误');

  }
}

app.get('/admin', checkCodeMiddleWare,(req, res) => {
  res.send('后台首页');

});

app.get('/setting', checkCodeMiddleWare,(req, res) => {
  res.send('设置首页');
});

app.all('*', (req, res) => {
  res.send('<h1>404 not found </h1>')
})
app.listen(3001, () => {

  console.log('3001服务启动了哦');
})