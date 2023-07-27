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
    // const updateResult = await BookModel.updateOne({ name: '红楼梦' }, { price: 10.9 });
    const updateResult = await BookModel.updateMany({ author: '黑男爵' }, { is_hot: true });


    console.log('Updated novels:', updateResult.modifiedCount);
  } catch (err) {
    console.error('Error updating novels:', err);
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
