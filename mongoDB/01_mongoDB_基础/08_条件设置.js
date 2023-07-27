const mongoose = require('mongoose');

mongoose.set('strictQuery', true);
mongoose.connect('mongodb://127.0.0.1:27017/yuyu');

mongoose.connection.once('open', async () => {
  let BookSchema = new mongoose.Schema({
    name: String,
    author: String,
    price: Number,
    is_hot: Boolean,
    tags: Array,
    pub_time: Date,
    test: mongoose.Schema.Types.Mixed
  });

  let BookModel = mongoose.model('novels', BookSchema);

  try {
    // 小于20元价格的书
    // const allBooks = await BookModel.find({price:{$lt:20}});
    // const allBooks = await BookModel.findOne();
    //寻找作者的书
    // const allBooks = await BookModel.find({$or: [{author:'曹雪芹'},{author:'余华'}]});
    //价格大于30 小于 70
    // const allBooks = await BookModel.find({$and: [{price: {$gt: 30}}, {price: {$lt: 70}}]});

    //正则表达式，搜索书籍名字带有三的图书
    // const allBooks = await BookModel.find({name:/三/});

   const allBooks = await BookModel.find({name: new RegExp('三')});



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
