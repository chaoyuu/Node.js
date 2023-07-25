const http = require('http');
const fs = require('fs');
const server = http.createServer((request, response) => {
  
//读取文件内容
let html = fs.readFileSync(__dirname + '/table.html')

    response.end(html);//设置响应体

});

server.listen(9000, () => {

    console.log('服务已启动了.....');
})