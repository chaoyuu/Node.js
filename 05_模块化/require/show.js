
function require(file){

    let absolutePath = path.resolve(__dirname,file);

    //缓存检测

    if(caches[absolutePath]){
        return caches[absolutePath];
    }

    //读取文件代码
    let code = fs.readFileSync(absolutePath).toString();
    //包裹一个函数 然后执行
    let module ={};
    let exports = module.exports = {}


}


(function (exports, require, module, __filename, __dirname) {
    const test = {
        name: '尚硅谷'
    }

    module.exports = test;


    //
    console.log(arguments.callee.toString());
})(exports, require, module, __filename, __dirname)
   //缓存结果
   caches[absolutePath] = moudle.exports;
   //返回 module.exports
   return moudle.exports;
const m =require('./me.js');
