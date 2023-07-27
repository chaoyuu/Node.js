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
    // Update the price of a book named "红楼梦" to 9.9
    // const allBooks = await BookModel.find();
   // const allBooks = await BookModel.findOne();
    const allBooks =await BookModel.findById('64c1e47e5bc9f97dde30d223')
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
