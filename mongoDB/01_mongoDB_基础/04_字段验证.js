const mongoose = require('mongoose');

mongoose.set('strictQuery', true);
mongoose.connect('mongodb://127.0.0.1:27017/yuyu');

mongoose.connection.once('open', async () => {
  let BookSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
     // unique:true//独一无二
    },
    author:{
      type: String,
     // default:'匿名'
    },
    //类型
    style:{
      type:String,
      //枚举
      enum:['小记','大记','考试']
    },

    price: Number
  });

  let BookModel = mongoose.model('book', BookSchema);

  try {
    // Create a new book
    const newBook = await BookModel.create({
      name: '西游记',
      author: '吴承恩',
      price: 19.9,
      style:'大记'
     
    });
    console.log('New book added:', newBook);

    // Find a book by name and update its price
    const updatedBook = await BookModel.findOneAndUpdate(
      { name: '西游记' }, // Criteria to find the book
      { $set: { price: 29.9 } }, // Updated data
      {style: '大记'},
      { new: true } // Return the updated document
     
    );
    console.log('Updated book:', updatedBook);
  } catch (err) {
     console.error('Error:', err);
    // console.log('插入失败～～～');

  } finally {
    mongoose.disconnect();
  }
});

mongoose.connection.on('error', () => {
  console.log('失败了哦 老弟');
});

mongoose.connection.on('close', () => {
  console.log('拜拜了哦 老兄');
});
