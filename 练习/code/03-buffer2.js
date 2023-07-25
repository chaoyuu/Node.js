// let buf_4 = Buffer.from([105,108,111,118,101,121,111,117])
// console.log(buf_4.toString());

// let buf = Buffer.from('hello world');
// // console.log(buf_5[0].toString(2));
// console.log(buf);
// buf[0] = 95;
// console.log(buf.toString());


//溢出

// let buf = Buffer.from('hello world');

// buf[0] =361;//舍弃高位数字


// console.log(buf);

let buf = Buffer.from('你好');

console.log(buf);//舍弃高位数字
