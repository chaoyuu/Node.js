var express = require('express');
var router = express.Router();

const low = require('lowdb')//导入lowdb
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync(__dirname + '/../data/db.json')

//获取对象
const db = low(adapter)

//导入shortid
const shortid = require('shortid');
const moment = require('moment');
const AccountModel = require('../models/AccountModel ');
//测试
// console.log(moment('2023-07-27').toDate());

//格式化日期对象
// console.log(moment(new Date()).format('YYYY-MM-DD'));
/* 记账本列表 */
router.get('/account', async function (req, res, next) {
  try {
    // Fetch data from MongoDB
    const mongoAccounts = await AccountModel.find().sort({ time: -1 });

    // Fetch data from lowdb
    const lowdbAccounts = db.get('accounts').value();

    // Map lowdbAccounts to match the structure of mongoAccounts
    const mappedLowdbAccounts = lowdbAccounts.map((account) => ({
      _id: account.id, // Assuming 'id' is the unique identifier in lowdb
      title: account.title,
      account: account.account,
      type: account.type,
      time: moment(account.time).toDate(),
    }));

    // Merge the results
    const mergedAccounts = [...mongoAccounts, ...mappedLowdbAccounts];
        // Sort the mergedAccounts array by 'time' property in descending order
        mergedAccounts.sort((a, b) => b.time - a.time);
    res.render('list', { accounts: mergedAccounts });
  } catch (err) {
    // Handle error if something goes wrong
    res.render('error', { msg: '读取失败了哦', error: err, url: '/account' });
  }
});



//添加记录
router.get('/account/create', function (req, res, next) {
  res.render('create');
});

//新增记录

router.post('/account', async (req, res) => {


  //查看获取请求数据
  // console.log(req.body);
  //  //生成id
  //   let id =shortid.generate();

  //   //写入文件
  //   db.get('accounts').unshift({id:id, ...req.body}).write();
  //修改req.body.time的值
  // req.body.time= moment(req.body.time).toDate();
  //插入数据库
  try {
    // Insert the new account into the database
    const newAccount = await AccountModel.create({
      ...req.body,
      time: moment(req.body.time).toDate()
    });

    // Successful message with the new account details
    res.render('success', { msg: '添加成功了哦', account: newAccount, url: '/account' });
  } catch (err) {
    // Handle error if something goes wrong
    res.render('error', { msg: '添加失败了哦', error: err, url: '/account' });
  }

});

//删除提交

router.get('/account/:id', async (req, res) => {
  //获取params的id参数
  let id = req.params.id;

  try {
    // Delete the record from lowdb by id
    db.get('accounts').remove({ id: id }).write();

    // Delete the record from MongoDB using AccountModel
    await AccountModel.deleteOne({ _id: id });

    // Successful message
    res.render('success', { msg: '删除成功了哦', url: '/account' });
  } catch (err) {
    // Handle error if something goes wrong
    res.render('error', { msg: '删除失败了哦', error: err, url: '/account' });
  }
});


module.exports = router;
