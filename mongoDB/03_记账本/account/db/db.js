module.exports = function (success, error) {
   if(typeof error !== 'function'){
      error = () => {
        console.log('连接失败哦了');
      }
   }

    const mongoose = require('mongoose');
   //导入配置文件
   const  {DBHOST,DBPORT,DBNAME}= require('../config/config.js');

    mongoose.set('strictQuery', true);
    mongoose.connect(`mongodb://${DBHOST}:${DBPORT}/${DBNAME}`);

    mongoose.connection.once('open', () => {
        // console.log('开始了哦 服务器');
        success();
    })
    mongoose.connection.on('error', () => {
        // console.log('失败了哦 老弟');
        error();
    });

    mongoose.connection.on('close', () => {
        console.log('拜拜了哦 老兄');
    });
}