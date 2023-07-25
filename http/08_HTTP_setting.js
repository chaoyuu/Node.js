const  http = require('http');

const server = http.createServer((request, response)=>{
    //设置响应状态码
    // response.statusCode = 200;
    
    //响应状态描述
    // response.statusMessage= "i iii"

    //响应头
    // response.setHeader('Content-Type','text/html;charset=utf-8');
    // response.setHeader('server', 'node.js');
    // response.setHeader('myHeader','test');
    // response.setHeader('myHeader',['a','b','c']);
     
    //响应体设置
    response.write('love');
     response.end();//只能有一个end的方法
});



server.listen(9000,() =>{
    console.log('运行成功！！！');
})