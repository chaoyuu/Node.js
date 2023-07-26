//变量

const ejs = require('ejs');
const fs = require('fs');
let isLogin = true;

//原生JS
// if(isLogin){
//     console.log('<span>欢迎回来</span>' );
// }else{
//     console.log('<button>登陆</button> <button>注册</button>  ');
// }


//ejs实现
let html  = fs.readFileSync('./03_home.html').toString();
let result = ejs.render(html,{isLogin: isLogin});
console.log(result);
