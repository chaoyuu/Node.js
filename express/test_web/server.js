//导入 express

const express = require('express');

//创建应用对象
const app = express();

//设置中间件
app.use(express.static(__dirname + '/footer'));
// //创建路由
// app.get('./home', (req,res) =>{
//     res.end('helll');
// });

app.listen(3001,() => {
    console.log('服务启动了哦！！！');
})