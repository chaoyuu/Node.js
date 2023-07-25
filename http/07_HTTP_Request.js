const  http = require('http');

const server = http.createServer((request, response)=>{
    response.setHeader('Content-Type', 'text/html;charset=utf-8');
    //获取请求的方法
    let {method} =request;
    
    //获取请求的url 路径
    let  {pathname} = new URL(request.url,'http://127.0.0.1');
    // console.log(method);
    // console.log(pathname);
   if(method == 'GET' && pathname === '/login'){


       response.end('登录画面');
   }else if(method === 'GET' && pathname === '/reg'){
       response.end('注册页面');
   
   }else{
    response.end('not found');
   }

    // response.end('practise');
});



server.listen(9000,() =>{
    console.log('运行成功！！！');
})