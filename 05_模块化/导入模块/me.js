function tiemo(){
    console.log('贴膜....');
}
function niejiao(){
    console.log('捏脚....');
}
//暴露数据

// module.exports = {
//     tiemo,
//     niejiao

// };

// exports.niejiao = niejiao;
// exports.tiemo = tiemo;

// module.exports= 'ilove';

// module.exports = 521;

// console.log(module.exports);
// console.log(module.exports === exports);

exports = module.exports = {tiemo:tiemo}
exports.tiemo = tiemo;
