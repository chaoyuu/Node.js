const  fs = require('fs');


// fs.mkdir('./html', err=>{
//     if(err){
//         console.log('创建失败');
//         return;

    
//     }
//     console.log('创廽数据成功');

// })

//递归创建
// fs.mkdir('./a/b/c', {recursive:true}, err=>{
//     if(err){
//         console.log('创建失败');
//         return;

    
//     }
//     console.log('创廽数据成功');

// });

//读取文件夹

// fs.readdir('../videos', (err, data)=>{
   

//     if(err) {
//         console.log('读取失败');
//         return;

//     }
//     console.log(data);

// })

//删除文件夹

// fs.rmdir('./html', err=>{
//     if(err){
//         console.log('删除失败');
//         return;

//     }
//     console.log('删除成功');


// })


//递归删除
fs.rmdir('./code/a',{recursive:true},err=>{
    if(err){
        console.log('删除失败');
        return;

    }
    console.log('删除成功');


})


