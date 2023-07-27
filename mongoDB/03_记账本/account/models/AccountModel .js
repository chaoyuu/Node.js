const mongoose = require('mongoose');
  
  let AccountSchema = new mongoose.Schema({
    //
    title:{
      type: String,
      required:true
    },
    time:Date,

    type:{
      type:Number,
      default:-1
    
    },
    account:{
       type:Number,
       required:true
    },
    remaks:{
      type:String,
      // default:''
    
    }
     
  
  });

  let AccountModel = mongoose.model('accounts', AccountSchema);



  //暴露模型对象

  module.exports = AccountModel;