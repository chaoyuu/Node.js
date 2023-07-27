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

  let BookModel = mongoose.model('books', BookSchema);

  try {
    // Create a new book
    const newBook = await BookModel.create({
      name: '西游记',
      author: '吴承恩',
      price: 19.9,
      is_hot: true,
      tags: ['鬼怪', '励志', '社会'],
      pub_time: new Date(),
      test: new Date()
    });
    console.log('New book added:', newBook);

    // Find a book by name and update its price
    const updatedBook = await BookModel.findOneAndUpdate(
      { name: '西游记' }, // Criteria to find the book
      { $set: { price: 29.9 } }, // Updated data
      { new: true } // Return the updated document
    );
    console.log('Updated book:', updatedBook);
  } catch (err) {
    console.error('Error:', err);
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
