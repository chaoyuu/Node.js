/* 
GET /login 显示表单网页
POST /login 获取表单中的 【用户名】和密码
 */

//导入 express

const express = require('express');
const bodyParser = require('body-parser');
const app = express();


//解析 JSON 格式的请求体的中间件
// const jsonParser = bodyParser.json()

//解析 querystring 格式请求体的中间件
const urlencodedParser = bodyParser.urlencoded({ extended: false })
app.get('/login',(req,res) =>{
    
    // res.end('表单页面');
    res.sendFile(__dirname + '/11_form.html');
})
app.post('/login',urlencodedParser,(req,res) =>{
    console.log(req.body);
    res.send('获取用户数据');
})




app.listen(3001, ()=>{
   console.log('我运行起来了哦嘿嘿！！！');
})