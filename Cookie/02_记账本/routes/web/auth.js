var express = require('express');
var router = express.Router();

router.get('/reg',(req,res)=>{
    //响应html
    res.render('auth/reg');
})
module.exports = router;
