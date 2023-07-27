const cookieParser = require('cookie-parser');
const express = require('express');

const app = express();
app.use(cookieParser());
app.get('/set-cookie',(req,res)=>{
    // res.cookie('name','yuyu');
    res.cookie('name','lisi',{maxAge:60 *1000});
     res.cookie('theme','blue');
    res.send("heloo");
});

// 删除 cookie
app.get('/remove-cookie',(req,res)=>{
 res.clearCookie('name');
 res.send('删除成功了哦')

});

//获取cookie
app.get('/get-cookie',(req,res)=>{
    console.log(req.cookies);
    res.send(`我来了哦 ${req.cookies.name}`);
})
app.listen(3000,()=>{
    console.log("server is running on port 3000");
});
