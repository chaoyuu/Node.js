const express = require('express');
//导入 path
const path = require('path');
const app = express();
app.set('view engine', 'ejs');
//模版存放位置

app.set('views', path.resolve(__dirname ,'./views'));

app.get('/home', (req,res)=>{
    // res.render('模版的文件名','数据');

    //声明变量
    let title = '尚硅谷';
    res.render('home',{title});
    // res.send('hello');
});


app.listen(3001,()=>{

    console.log('我运行起来了哦');
})