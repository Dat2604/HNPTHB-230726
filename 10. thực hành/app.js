  
 //bài 1

//  const color= ["Red", "Green", "White", "Black"];
//  console.log(color.join(", ")); cách 1
//  console.log(color.join(" + "));
//  console.log(color.join(" "));
//  const joinstring = color.join(", ") cách 2
//   console.log (joinstring) ;


 //bài 2

//  let num="024568"
//  let str= num.toString();
//  let listnum = str.split();
//  let result = [];
 
//  for(let i=0; i<str.length; i++)
//  {
//     if((str[i-1]%2 ==0)&&(str[i]%2 == 0))
//      {
//       result.push("-", str[i]);
//      }
//     else
//      {
//       result.push(str[i]);
//      }
//   }
//  console.log(result.join(""));

//bài 3

// let str = 'The Quick Brown Fox';
// let UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
// let LOWER = 'abcdefghijklmnopqrstuvwxyz';
// let result = [];
  
//   for(let i=0; i<str.length; i++)
//   {
//     if(UPPER.indeiOf(str[i]) !== -1)
//     {
//       result.push(str[i].toLowerCase());
//     }
//     else if(LOWER.indeiOf(str[i]) !== -1)
//     {
//       result.push(str[i].toUpperCase());
//     }
//     else 
//     {
//       result.push(str[i]);
//     }
//   }
// console.log(result.join(''));

// Cách 2
// let string = " The Quick Brown Fox "
// let result =""
// for (let i = 0 ; i<string.length ; i++)
// { const element = string [i];
//    console.log(element)
//    let compareWord = element.toLowerCase ()
//    console.log(compareWord)
//  if(element==compareWord)
//  { console.log("chu hoa");
//  result += element.toLowerCase()
//  }
//  else
//  { console.log( "chu thuong");
//  result += element.toLocaleUpperCase()
//  }
// }
// console.log(result);



 //bài 4

//   let num=window.prompt("");
//   let listnum = num.split(",");
//   let sum = 0
//   for (let i = 0 ; i < listnum.length ; i++)
//   {  
//      sum += Number(listnum [i]); 
//   }  
//    console.log(sum);  

// bài 5
//  let numberr = window.prompt("nhập vào 1 số bất kì");
//  let arraystring = numberr.split(",");
//  let arraynumber =[]

//  for ( let i =0 ;i<arraystring.length; i++)
//  { 
//    const element = arraystring[i];
//    const  number = number(element)
//  console.log("")
//  arraynumber.push(number)
//  }
// console.log("")
//  let min = arraynumber[0]
// console.log("")
//  for(let i =1; i<arraynumber.length;i++)
//  {
//    const element = arraynumber[i];
//    console.log("")
//    if (element< min)
//    {
//       min=element
//    }
//  }
//  console.log("giá trị nhỏ nhất là :", min)

// bài 6 

//  let array =[1,3,23,34,55];
//  let userinput ="1"
//  const isarray = array.includes(number(userinput))
//  if (isarray)
//  {
//    let index = array.indexOf(number(userinput))
//    console.long("nguoi dung nhap vao so ", number(userinput))
//    let temlatestring= `nguoi dung nhap vao so ${number(userinput)} co trong mang o vi tri thu : ${index}`
// console.log (temlatestring)
//  }
//  else 
//  {
//     console.log("khong tim thay gia tri nguoi dung nhap vao !!");

// } 

//  BÀI 7
// 7.1

// let sheeps = [5 ,7 , 300 ,90 , 24, 50 ,75]
// console.log ("xin chào đây là đàn cừu của tôi" , sheeps) ;
// // 7.2 tìm ra con cừu lớn nhất

// let maxsheep = sheeps [0]
// for (i = 1 ; i < sheeps.length ; i++){
//     const sheep = sheeps [i] ;
//     if (sheep > maxsheep) {
//         maxsheep = sheep
//     }
// }
// console.log (`con cừu lớn nhất của tôi có kích thước ${maxsheep} , hãy cạo lông nó`);
// // 7.3 reset con cừu về 8kg

// let indexMaxsheep = sheeps.indexOf(maxsheep);
// let newsheeps = []

// for( let i = 0 ; i < sheeps.length ; i++) {
//     const element = sheeps [i] ;
//     if ( indexMaxsheep == i) {
//         newsheeps.push (8)
//     }
//     else {
//         newsheeps.push ( element)
//     }
// }
// console.log(" sau khi cạo lông ,đây là đàn cừu của tôi" , newsheeps) ;
// // 7.4 tăng kích thước toàn bộ đàn cừu thêm 50kg

// let sheepsaftermonth = []
// for ( let i = 0 ; i< newsheeps.length ; i++){
//     let sheep = newsheeps [i] ;
//     let newsheep = sheep + 50 ;
//     sheepsaftermonth.push (newsheep)
// }
// console.log("Đã được 1 tháng trôi qua ,bây giờ đàn ừu của tôi đã lớn,đây là kích thước của tụi nó" , sheepsaftermonth);
// //7.5 tìm ra con cừu lớn nhất mới tăng 50kg và cạo lông nó
// // tìm cừu lớn nhất
// let maxsheep1 = sheeps [0]
// for (i = 1 ; i < sheepsaftermonth.length ; i++){
//     const sheep = sheepsaftermonth [i] ;
//     if (sheep > maxsheep1) {
//         maxsheep1 = sheep
//     }
// }
// console.log (`con cừu lớn nhất của tôi có kích thước ${maxsheep1} , hãy cạo lông nó`);

// // cạo lông về 8kg

// let indexMaxsheep1 = sheepsaftermonth.indexOf(maxsheep1);
// let newsheeps1 = sheepsaftermonth.map((sheep , index)=>{
//     if (index== indexMaxsheep1){
//     return 8
//     }
//     else{
//         return sheep
//     }
// })
// console.log(" sau khi cạo lông ,đây là đàn cừu của tôi" , newsheeps1);

// // làm trong 3 tháng
// for ( let i = 0 ; i < 3 ; i++){
//     // tăng kích thước đàn cừu thêm 50kg
//     console.log (`MONTH ${ i + 1}`);
//     let sheepsaftermonth = []
// for ( let i = 0 ; i< newsheeps1.length ; i++){
//     let sheep = newsheeps1 [i] ;
//     let newsheep = sheep + 50 ;
//     sheepsaftermonth.push (newsheep)
// }
// console.log("Đã được 1 tháng trôi qua ,bây giờ đàn cừu của tôi đã lớn ,đây là kích thước của nó",sheepsaftermonth);
//     // tìm cừu lớn nhất 
//     let maxsheep1 = sheeps [0]
// for (let i = 1 ; i < sheepsaftermonth.length ; i++){
//     const sheep = sheepsaftermonth [i] ;
//     if (sheep > maxsheep1) {
//         maxsheep1 = sheep
//     }
// }
// console.log (`con cừu lớn nhất của tôi có kích thước ${maxsheep1} , hãy cạo lông nó`);
//     //  cạo lông về 8kg
//     let indexMaxsheep1 = sheepsaftermonth.indexOf(maxsheep1);
//   newsheeps1 =sheepsaftermonth.map((sheep, index) => {
//     if ( indexMaxsheep1 == index ) {
//         return 8
//     }
//     else{
//         return sheep
//     }
// })
// console.log ("sau khi cạo lông ,đây là đàn cừu ủa tôi" , newsheeps1);

// }
// console.log(" sau 3 tháng chăn cừu ,đàn cừu của tôi có kích thước là", newsheeps1);

// // tính tổng
//  let sum = 0 ;
//  newsheeps1.forEach((sheep)=> {
//     sum = sum + sheep
//  })
//  console.log(" tổng cân nặng đàn cừu là :" , sum) ;
// //   tính tiền
// console.log(`tôi sẽ lấy ${sum}*2$ = ${sum * 2 }`);