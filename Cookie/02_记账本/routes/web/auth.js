var express = require('express');
var router = express.Router();
//导入用户模型

const UserModel = require('../../models/UserModel');
const md5 = require('md5');
//检查用户名是否存
router.get('/reg',(req,res)=>{
    //响应html
    res.render('auth/reg');
})
//注册用户
router.post('/reg',(req,res)=>{
    

    //获取请求体的数据
    // console.log(req.body);
    UserModel.create({...req.body,password:md5(req.body.password)},(err,data)=>{
        if(err){
            res.status(500).send('注册失败，请再试一次吧');
            return
        }
        res.render('success',{msg:'注册成功',url:'/login'});
    })
    // res.send('测试');
})
module.exports = router;
