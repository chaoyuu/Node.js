const fs =require('fs');

fs.stat('./videos/sing.mp4', (err,data)=>{
   
    if(err){
        console.log('操作失败');
        return;
    }
    // console.log(data);

    //isFile
    console.log(data.isFile());
    console.log(data.isDirectory());
});