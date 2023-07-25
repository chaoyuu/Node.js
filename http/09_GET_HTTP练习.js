const http = require('http');

const server = http.createServer((request, response) => {
    // response.setHeader('Content-Type', 'text/html;charset=utf-8');
    // res.setHeader('Access-Control-Allow-Origin', '*');
    // res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
    // res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Access-Control-Allow-Headers');
    // res.setHeader('Access-Control-Allow-Credentials', true);
    // res.setHeader('Access-Control-Max-Age', 3600);
    // res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });//设置响处理处理处理处理处理处理处理处理处理处理处理处理处理处理处理处理处理处理处理处理处理处理处理处理处理处理处理处理处理处理处理处理处理处理处理�
    // http://127.0.0.1:9000/search?keyword=h5&num=1



    response.end(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
      <style>
      td{
          padding:20px 40px;
      }
      table tr:nth-child(odd){
         background:#fcb
      }

      table tr:nth-child(even){
        background:#aef
     }
      table, td{
        border-collapse: collapse;
      }
      </style>
      </head>
      <body>
      <table border="1">
      <tr><td></td><td></td><td></td></tr>
      <tr><td></td><td></td><td></td></tr>
      <tr><td></td><td></td><td></td></tr>
      <tr><td></td><td></td><td></td></tr>


      </table>
      <script>
      let tds = document.querySelectorAll('td');

      tds.forEach(item => {
        item.onclick = function(){
            this.style.background = '#222';
        }
      })
      </script>
</body>
</html>

    `);//设置响应体

});

server.listen(9000, () => {

    console.log('服务已启动了.....');
})