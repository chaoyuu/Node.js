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
    // Delete all books by a specific author (e.g., '吴承恩')
    // const deleteResult = await BookModel.deleteMany({ author: '吴承恩' });
    //  const deleteResult =await BookModel.deleteOne({"_id" : "64c1dd9d9b10ebfe60713c4b"})
    const deleteResult = await BookModel.deleteMany({ is_hot:false });

     console.log('Deleted novels:', deleteResult.deletedCount);
  } catch (err) {
    console.error('Error deleting novels:', err);
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
