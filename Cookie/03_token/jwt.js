//导入

const jwt = require('jsonwebtoken');

// // //创建 token
// let token = jwt.sign({
//      username:'yuyu'
// },'chaoyu',{
//     expiresIn:60,
// })

// console.log(token);

 let  t ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Inl1eXUiLCJpYXQiOjE2OTA1MjE0NjQsImV4cCI6MTY5MDUyMTUyNH0.CP_k3eiObx4GrFX-HhA9Nln838Fq2XjU3-CHX79jJGk'

//校验 token
jwt.verify(t,'chaoyu',(err,data)=>{
   if(err){
    console.log('校验失败');
    return
}
console.log(data);
})
