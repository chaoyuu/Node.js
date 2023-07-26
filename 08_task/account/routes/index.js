var express = require('express');
var router = express.Router();

const low = require('lowdb')//导入lowdb
const FileSync = require('lowdb/adapters/FileSync')
 
const adapter = new FileSync(__dirname + '/../data/db.json')

//获取对象
const db = low(adapter)

//导入shortid
const shortid = require('shortid');
/* 记账本列表 */
router.get('/account', function(req, res, next) {
  //获取所有的账单信息
  let accounts = db.get('accounts').value();
  // console.log(accounts);
  res.render('list',{accounts: accounts});
});

//添加记录
router.get('/account/create', function(req, res, next) {
  res.render('create');
});

//新增记录

router.post('/account', (req, res) =>{
  //获取请求数据
  console.log(req.body);
 //生成id
  let id =shortid.generate();

  //写入文件
  db.get('accounts').unshift({id:id, ...req.body}).write();
  
  //成功提醒
  res.render('success',{msg: '添加成功了哦', url:'/account'});


  
});

  //删除提交
router.get('/account/:id',(req,res) =>{
   
  //获取prams的id参数

  let id = req.params.id;
  db.get('accounts').remove({id:id}).write();

  //提醒

  res.render('success',{msg: '删除成功了哦', url:'/account'});

})

module.exports = router;
