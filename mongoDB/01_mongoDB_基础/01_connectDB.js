const mongoose  =require('mongoose');

mongoose.set('strictQuery',true);
mongoose.connect('mongodb://127.0.0.1:27017/yuyu');

//设置回调

mongoose.connection.once('open',()=>{
    console.log('成功了哦 老弟');
});

mongoose.connection.on('error',()=>{
    console.log('失败了哦 老弟');
});

mongoose.connection.on('close',()=>{
    console.log('拜拜了哦 老兄');
})

//关闭mongodb

// setTimeout(()=>{

//     mongoose.disconnect();
// },2000)