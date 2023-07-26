const express = require('express');
const app = express();
const homeRouter = require('./routes/homeRouter');
const adminRouter = require('./routes/adminRouter');


//设置
app.use(homeRouter,adminRouter);







app.all('*', (req, res) => {
  res.send('<h1>404 not found </h1>')
})
app.listen(3001, () => {

  console.log('3001服务启动了哦');
})