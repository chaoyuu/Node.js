const mongoose = require('mongoose');

mongoose.set('strictQuery', true);
mongoose.connect('mongodb://127.0.0.1:27017/yuyu');

mongoose.connection.once('open', async () => {
  let BookSchema = new mongoose.Schema({
    name: String,
    author: String,
    price: Number,
    is_hot: Boolean,
    // tags: Array,
    // pub_time: Date,
    // test: mongoose.Schema.Types.Mixed
  });

  let BookModel = mongoose.model('novels', BookSchema);

  try {
   
   //设置字段
//    const allBooks = await BookModel.find().select({name:1,author:1, _id:0});
     //正序 1 反序 -1 排序
//   const allBooks = await BookModel.find().select({name:1,price:1,_id:0}).sort({price:-1});
  //数据截取
   const allBooks = await BookModel.find().select({name:1,price:1,_id:0}).skip(3).sort({price:-1}).limit(3);


    console.log('All Books:', allBooks);

  } catch (err) {
    console.error('Error finding document:', err);
  } finally {
    mongoose.disconnect();
  }

});

mongoose.connection.on('error', () => {
  console.log('连接失败');
});

mongoose.connection.on('close', () => {
  console.log('连接关闭');
});
