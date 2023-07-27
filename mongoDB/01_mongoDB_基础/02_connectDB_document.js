const mongoose = require('mongoose');

mongoose.set('strictQuery', true);
mongoose.connect('mongodb://127.0.0.1:27017/yuyu');

mongoose.connection.once('open', async () => {
  let BookSchema = new mongoose.Schema({
    name: String,
    author: String,
    price: Number
  });

  let BookModel = mongoose.model('book', BookSchema);

  try {
    const bookExists = await BookModel.exists({ name: '西游记' });
    if (!bookExists) {
      // Use .create() method to add a new book
      const newBook = await BookModel.create({
        name: '西游记',
        author: '吴承恩',
        price: 19.9
      });
      console.log('New book added:', newBook);
    } else {
      console.log('书籍已经存在，不需要重复添加。');
    }
  } catch (err) {
    console.error('Error adding new book:', err);
  } finally {
    // Close the MongoDB connection after adding the book or checking if it exists
    mongoose.disconnect();
  }
});

mongoose.connection.on('error', () => {
  console.log('失败了哦 老弟');
});

mongoose.connection.on('close', () => {
  console.log('拜拜了哦 老兄');
});
