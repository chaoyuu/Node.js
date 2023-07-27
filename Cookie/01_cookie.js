const express = require('express');

const app = express();

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
app.listen(3000,()=>{
    console.log("server is running on port 3000");
});
