//西游记

const xiyou = ['YUU', 'CHOAYU', 'YANG', 'FANFAN'];

const ejs = require('ejs');
// let str = '<ul>';

// xiyou.forEach(item=> {
//     str+= `<li>${item}</li>`;
// })

// //闭合ul
// str += '</ul>';

// console.log(str);

//EJS实现
const fs = require('fs');
let html= fs.readFileSync('./02_xiyou.html').toString();
let result = ejs.render(html,{ xiyou:xiyou });
console.log(result);