var express = require('express');
var router = express.Router();
const formidable = require ('formidable');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
//显示网页的 (表单)
router.get('/portrait', (req, res) => {
  res.render('portrait');
});

//处理文件上传
router.post('/portrait', (req, res) => {
  const form = formidable({
    multiples: true,

    //设置上传文件的保存目录

    uploadDir:__dirname + '/../public/images',
    //保存文件后缀

    keepExtensions: true
  
  
  });

  form.parse(req, (err, fields, files) => {
    if (err) {
      next(err);
      return;
    }
    // console.log(fields);
    // console.log(files);
    //images/8fab992f441e220a2f0cf3700.jpeg
    //服务器保存图片url
    let url =  '/images/' +files.portrait.newFilename;//保存到数据库中

    res.send(url);
  });

});


module.exports = router;
