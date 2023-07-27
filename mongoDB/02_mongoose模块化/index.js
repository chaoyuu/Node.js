const mongoose = require('mongoose');

const db = require('./db/db');
//导入bookmodel
const BookModel = require('./models/BookModel');
//调用函数
db(async () => {


  try {
    const bookExists = await BookModel.exists({ name: '西游记2' });
    if (!bookExists) {
      // Use .create() method to add a new book
      const newBook = await BookModel.create({
        name: '西游记2',
        author: '吴承恩',
        price: 19.9
      });
      console.log('New book added:', newBook);
    }
  } catch (err) {
    console.error('Error adding new book:', err);
  } finally {
    // Close the MongoDB connection after adding the book or checking if it exists
    mongoose.disconnect();
  }
}, () => {
  console.log('连接失败了哦 老弟');
});
