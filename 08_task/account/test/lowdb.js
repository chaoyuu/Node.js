const low = require('lowdb')//导入lowdb
const FileSync = require('lowdb/adapters/FileSync')
 
const adapter = new FileSync('db.json')

//获取对象
const db = low(adapter)

//初始化数据
 
// Set some defaults
// db.defaults({ posts: [], user: {} }) .write()

//写入数据
//  db.get('posts').push({id:1, title: 'aaa'}).write();
// db.get('posts').unshift({id:2, title: 'aaa'}).write();

//获取单条数据
// let res =db.get('posts').find({id:1}).value();
// console.log(res);

//获取数据
// console.log(db.get('posts').value());

//删除数据

// let res = db.get('posts').remove({id:1}).write();
// console.log(res);


//更新数据
db.get('posts').find({id:2}).assign({title: 'bbb'}).write();