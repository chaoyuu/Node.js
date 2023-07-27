const db = require('./db/db');
const MovieModel = require('./models/MovieModel');

// Define an async function to handle the database operations
async function performDatabaseOperations() {
  try {
    const newMovie = await MovieModel.create({ title: 'yuyuuy', director: 'chaoyu' });
    console.log('插入成功:', newMovie);
  } catch (err) {
    console.error('插入失败～～', err);
  }
}

//调用函数
db(() => {
  performDatabaseOperations();
}, () => {
  console.log('连接失败了哦');
});


