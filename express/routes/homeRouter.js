const  express = require('express');

const router = express.Router();

//路由规则
router.get('/home', (req, res) => {
  //获取url 和 ip

  res.send('前台首页');
});

router.get('/search', (req, res) => {
  //获取url 和 ip

  res.send('search');

});

//暴露router

module.exports = router;