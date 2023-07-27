const mongoose = require('mongoose');

mongoose.set('strictQuery', true);
mongoose.connect('mongodb://127.0.0.1:27017/yuyu');

mongoose.connection.once('open', async () => {
  let BookSchema = new mongoose.Schema({
    name: String,
    author: String,
    price: Number,
    is_hot: Boolean
  });

  let BookModel = mongoose.model('novel', BookSchema);

  try {
    const booksToAdd = [
      // Add your book objects here
      // ...
      {
        name: '西游记',
        author: '吴承恩',
        price: 19.9,
        is_hot: true
      },
      {
        name: '红楼梦',
        author: '曹雪芹',
        price: 29.9,
        is_hot: true
      }, {
        name: '三国演义',
        author: '罗贯中',
        price: 25.9,
        is_hot: true
      }, {
        name: '水浒传',
        author: '施耐庵',
        price: 20.9,
        is_hot: true
      }, {
        name: '活着',
        author: '余华',
        price: 19.9,
        is_hot: true
      }, {
        name: '狂飙',
        author: '徐纪周',
        price: 68,
        is_hot: true
      }, {
        name: '大魏能臣',
        author: '黑男爵',
        price: 9.9,
        is_hot: false
      },
      {
        name: '知北游',
        author: '洛水',
        price: 59,
        is_hot: false
      },{
        name: '道君',
        author: '跃千愁',
        price: 59,
        is_hot: false
      },{
        name: '七煞碑',
        author: '游泳的猫',
        price: 29,
        is_hot: false
      },{
        name: '独游',
        author: '酒精过敏',
        price: 15,
        is_hot: false
      },{
        name: '大泼猴',
        author: '甲鱼不是龟',
        price: 26,
        is_hot: false
      },
      {
        name: '黑暗王者',
        author: '古羲',
        price: 39,
        is_hot: false
      },
      {
        name: '不二大道',
        author: '文刀手予',
        price: 89,
        is_hot: false
      },
      {
        name: '大泼猴',
        author: '甲鱼不是龟',
        price: 59,
        is_hot: false
      },
      {
        name: '长安的荔枝',
        author: '马伯庸',
        price: 45,
        is_hot: true
      },
      {
        name: '命运',
        author: '蔡崇达',
        price: 59.8,
        is_hot: true
      },
      {
        name: '如雪如山',
        author: '张天翼',
        price: 58,
        is_hot: true
      },
      {
        name: '三体',
        author: '刘慈欣',
        price: 23,
        is_hot: true
      },
      {
        name: '秋园',
        author: '杨本芬',
        price: 38,
        is_hot: true
      },
      {
        name: '百年孤独',
        author: '范晔',
        price: 39.5,
        is_hot: true
      },
      {
        name: '在细雨中呼喊',
        author: '余华',
        price: 25,
        is_hot: true
      },

    ];

    // Use insertMany() method to insert multiple books
    const newBooks = await BookModel.insertMany(booksToAdd);
    console.log('Inserted books:', newBooks);
  } catch (err) {
    console.error('Error adding books:', err);
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
