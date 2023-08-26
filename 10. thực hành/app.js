  
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

let sheeps = [5, 7, 300, 90, 24, 50, 75]
console.log ("-Xin chào, đay là kích thước đàn cừu của tôi:",sheeps)
let max = sheeps[0]
for (let i = 1; i < sheeps.length; i++){
    let sheeps1 = sheeps[i]
    let maxsheeps = sheeps1
    if (maxsheeps > max){
        max = maxsheeps
    }
}
console.log ("-Con cừu có kích thước lớn nhất là: ", max , ", hãy cạo lông nó")

let indexMax = sheeps.indexOf(max)
sheeps[indexMax] = 8
console.log ("-Sau khi cạo lông đây là đàn cừu của tôi: " ,sheeps)

let newsheep = sheeps.map(after1month)
function after1month(sheeps){
    return sheeps + 50;
}
console.log ("-Đây là đàn cừu của tôi sau 1 tháng: " ,newsheep)

max = newsheep[0]
for (let i = 1; i < newsheep.length; i++){
    let sheeps1 = newsheep[i]
    let maxsheeps = sheeps1
    if (maxsheeps > max){
        max = maxsheeps
    }
}
console.log ("-Con cừu có kích thước lớn nhất là: ", max , ", hãy cạo lông nó")

indexMax = newsheep.indexOf(max)
newsheep[indexMax] = 8
console.log ("-Sau khi cạo lông đây là đàn cừu của tôi: " ,newsheep)
//Tháng 2
let newsheeps1 = newsheep.map(after2month)
function after2month(newsheep){
    return newsheep + 50;
}
console.log ("-Đây là đàn cừu của tôi sau 1 tháng tiếp theo: " ,newsheeps1)

max = newsheeps1[0]
for (let i = 1; i < newsheeps1.length; i++){
    let sheeps1 = newsheeps1[i]
    let maxsheeps = sheeps1
    if (maxsheeps > max){
        max = maxsheeps
    }
}
console.log ("-Con cừu có kích thước lớn nhất là: ", max , ", hãy cạo lông nó")

indexMax = newsheeps1.indexOf(max)
newsheeps1[indexMax] = 8
console.log ("-Sau khi cạo lông đây là đàn cừu của tôi: " ,newsheeps1)
// Tháng 3
let newsheep2 = newsheeps1.map(after3month)
function after3month(newsheeps1){
    return newsheeps1 + 50;
}
console.log ("-Đây là đàn cừu của tôi sau 1 tháng tiếp theo: " ,newsheep2)

max = newsheep2[0]
for (let i = 1; i < newsheep2.length; i++){
    let sheeps1 = newsheep2[i]
    let maxsheeps = sheeps1
    if (maxsheeps > max){
        max = maxsheeps
    }
}
console.log ("-Con cừu có kích thước lớn nhất là: ", max , ", hãy cạo lông nó")

indexMax = newsheep2.indexOf(max)
newsheep2[indexMax] = 8
console.log ("-Sau khi cạo lông đây là đàn cừu của tôi: " ,newsheep2);
// Ban cuu
let sum = 0
newsheep2.forEach((sheeps) => {
   sum = sum + sheeps
   
})
console.log("-tổng cân nặng đàn cừu của tôi la :", sum)

// console.log ("-Chán chăm cừu nên bán được:",KQ * 2,"$")