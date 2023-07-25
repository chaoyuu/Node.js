
const fs = require('fs');

//读取code

const files = fs.readdirSync('./code');

console.log(files);


//遍历数组

files.forEach(item => {

    //拆分
    let data = item.split('-');
    let [num,name] =data;
    console.log(num, name);
    //判断
    if(Number(num)  <10){

        num = '0'+num;
    }

    //创建新的文件名
    let newName = num + '-' + name;


    console.log(newName);

    //重命名
    fs.renameSync(`./code/${item}`, `./code/${newName}`);
})