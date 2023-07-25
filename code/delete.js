const fs = require('fs');

// fs.unlink('./data.txt', err=>{
//     if(err) {
//         console.log("删除失败");
//         return;
//     }
//     console.log("删除成功");
// })

fs.rm('./text.txt', err=>{
    if(err) {
        console.log("删除失败");
        return;
    }
    console.log("删除成功");
})