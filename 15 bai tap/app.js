// // BÀI TẬP TỔNG HỢP

// // LESION 8
// // Bài 1
// let vatLy = prompt("Nhập vào điểm Vật lý");
// let hoaHoc = prompt("Nhập vào điểm Hoá học");
// let sinhHoc = prompt("Nhập vào điểm Sinh học");

// let ly = parseInt(vatLy);
// let hoa = parseInt(hoaHoc);
// let sinh = parseInt(sinhHoc);

// let sum = ly + hoa + sinh;
// console.log("Tông điểm 3 môn là:" , sum)

// let average = sum / 3;
// console.log("Điểm trung bình 3 môn là:" ,  average)



// // Bài 2

// let inputDoC = prompt("Nhập vào độ C")

// let Celsius  = parseInt(inputDoC);

// let Fahrenheit =  Celsius * (9 / 5)  + 32;

// console.log("do F la :" , Fahrenheit)



// // Bài 3 + 4
// let banKinh = prompt("Nhập vào bán kính hình tròn");

// let pi =   3.141592653589 ;
// let R = parseInt(banKinh);

// let dienTich = R * R * pi;
// console.log("dien tich hinh tron la :" , dienTich)
// let chuVi = R * 2 * pi;
// console.log("chu vi hinh tron la :", chuVi)



// // Bài 5
// console.log("wellcome to Rikkei Academy");

// // Bài 6
// prompt ("mời bạn nhập số tuổi của mình")



// // Bài 7
// document.write("Quyết tâm học lập trình javascript ");



// // Bài 8
// alert ("Chào mừng bạn đến với học viện Rikkei Academy");



// // Bài 9
// confirm ("Bạn đã đủ 18 tuổi chưa ?");



// // Bài 10
// let a = prompt("nhập vào số thứ nhất")
// let b= prompt("nhập vào số thứ hai")
// if ( a > 0, b>0 & a % b== 0){
//     alert ("a là bội của b")
// }
// else{
// alert(" a không phải bội của b")
// }



// // LESSION 9
// //  Bai 1
// let year = prompt("nhập vào số năm bất kì")
// if (year %4==0){
// if( year %100 !== 0 && year %4==0){
// console.log("year", year , "là năm nhuận");
// }
// else{
// console.log("không phải năm nhuận" ,year);
// }
// if (year %100==0 && year %400 !==400){
// console.log("không phải năm nhuận" ,year);
// }
// else{
// console.log("year", year , "là năm nhuận");
// }
// if(year %100==0 && year %400==0){
// console.log("year", year , "là năm nhuận");
// }
// else{
// console.log("không phải năm nhuận" ,year);
// }   
// }


// // Bài 2
// let input=prompt('What is the "offical" name of JavaScript');

// if(input=="ECMAScript"){
//    console.log('Right');
// }else{
//    console.log("Didn't know");
// }


// // bài 3
//     let username=prompt('nhậpp tên');
// if(username=='Admin'){
//    let password=prompt('nhap mat khau');
//    if(password=='TheMaster'){
//        alert('Welcome');
//    }else if(password==null){
//        alert('canceled');
//    }else{
//        alert('Wrong password');
//    }
// }else if(username==null){
//    alert('canceled');
// }else{
//    alert("I don't know you");

// }


// // Bài 4
// let a = prompt ("a :");
// let b = prompt("b:");
// if ((a + b) < 4) {
//     result = 'Below';
//  } else {
//     result = 'Over';
//  }


// // Bài 5
// let browser=prompt('input');
// switch(browser){
//    case'Edge':
//        alert("you've got the Edge");
//        break;
//    case'Chrome':
//    case'Firefox':
//    case'Safari':
//    case'Opera':
//        alert("Okey we support these browsers too");
//        break;
//    default:
//        alert("we hope tha this page looks ok!");
// }


// // Bài 6
//  let canNang = parseFloat(prompt("Nhập vào cân năng theo đơn vị kg"))
//  let bmi = parseFloat(prompt(canNang /chieuCao^2));
//    document.write("Chỉ số cân năng của bạn là: " , bmi );
//   if (bmi < 18.5 && bmi>0){
//       console.log("Cân nặng thấp");
 
//     if (bmi >= 18.5 && bmi <= 24.9){
//       console.log("Bình thường");
//   }
//     else {
//       console.log("thua can");
//     }
//  }
//     else if(bmi == 25 && bmi<30){
//        console.log(" tiền béo phì");
//     }
//     else if(bmi>=30 && bmi<35){
//        console.log("béo phì độ 1");
//     }
//     else if (bmi>=35 && bmi< 40){
//         console.log ("béo phì độ 2");
//     }
//     else if (bmi>=40){
//         console.log("béo phì độ 3");
//     }


    
// // bài 7    
// let month=prompt('nhap vào số tháng bất kì')
// switch(month){
//     case'1':
//     case'3':
//     case'5':
//     case'7':
//     case'8':
//     case'10':
//     case'12':
//         console.log('tháng',month,'có 31 ngày');
//         break;
//     case'2':
//         console.log('tháng',month,'co 28 hoac 29 ngay');
//         break;
//     default:
//         console.log('thấng ',month,'co 30 ngay');
//     }


//  // LESION 10
// // Bài 1 
// const animal= ["Lion", "Tiger", "Wolf", "Kangaroo"];
// console.log(animal.join());

// // Bài 2
// let num=245468
// let str= num.toString();
// let listnum = str.split();
// let result = []

  
// for(let i=0; i<str.length; i++)
// {
//    if((str[i-1]%2 ==0)&&(str[i]%2 == 0))
//     {
//      result.push("-", str[i]);
//     }
//    else
//     {
//      result.push(str[i]);
//     }
//  }
// console.log(result.join(""));

// // Bài 3
// let str = 'cKeep Calm And Code On';
// let strtext = str.split("");
// let result=[]
// for(let i=0; i<strtext.length; i++)
// {  let item = strtext[i]
//    let lowercasechar = item.toLowerCase()
//    let issamechar = lowercasechar == item

//    if(issamechar)
//    {
//     result = result + item.toUpperCase()
//     }
//    else
//    {
//     result= result + item.tolowercase()
//    }

// }
// console.log (result.join(""));

// Bài 4
// let englist = array("hello"," book" , "computer")
// let vietnam = array ("xin chào", "sách", "máy tính")

//     let server = ["request method"]
//     let POST = [ "search"]
//   let searchword =  POST ["search"]; 

//  for(let i = 0 ; i < englist.length ; i++){
//     if
//  }

//      let flag = 1;


//   if( flag == 0){
//      console.log ("Không tìm thấy từ cần tra.");
//   }


// // Bài 5
// let  number = [2,4,3,13,11,9];
// let first = 0;
// let last = number.length -1 ;
// while (first < last) {
//     let b = number[first];
//     number[first] = number[last];
//     number[last] = b;
//     first++;
//     last--;
//  }
//  console.log("mảng đảo ngược là ;",number);


// //  Bài 6
// let value = prompt("enter a number") ;
// let numbers = [2,4,3,13,11,9];
// for ( let i = 0 ; i<numbers.length;i++){
//     if (value == numbers[i]){
//         alert(" giá trị này là : " + numbers[i] + " ở vị trí số : " + i);
//     }
// }



// // Bài 7 
// let number = [2,4,3,13,11,9];
// let max = number [0]
// for (i = 1 ; i < number.length ; i++){
//     const lastnumber = number [i] ;
//     if (lastnumber > max) {
//         max = lastnumber
//     }
// }
// console.log("giá trị lớn nhất trong mảng là :", max)


// //LESION 11
// // Bài 1
//  const color= ["Red", "Green", "White", "Black"];
//  console.log(color.join(", ")); cách 1
//  console.log(color.join(" + "));
//  console.log(color.join(" "));
//  const joinstring = color.join(", ") cách 2
//   console.log (joinstring) ;



// // Bài 2
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



// //bài 3
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



// //bài 4
//   let num=window.prompt("");
//   let listnum = num.split(",");
//   let sum = 0
//   for (let i = 0 ; i < listnum.length ; i++)
//   {  
//      sum += Number(listnum [i]); 
//   }  
//    console.log(sum); 



// // Bài 5
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



// // Bài 6 

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



// // Bài 7
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


// // lESSION 12
// //Bài 1
//  function num (a)
//  {
//     let flag = true
//  if (a < 2)
//  {
//     return false
//  }
//   else
//   {
//     for ( let i = 2 ; i < a ;i ++)
//     {
//     if ( a % i == 0)
//     flag = false;
//    break ;
//     }
//  }
// return flag
//  }

//  let arrayprime = []
//  for ( let i = 0  ; i < 1000; i ++ )
//  {
//     const checking = num (i)
//     if (checking)
//     {
//        console.log (`${i} la so nguyen to `) ;
//        arrayprime.push(i)
//     }
//     else
//     {
//         console.log(`${i}khong phai so nguyen to`);
//     }
//  }
//  console.log(arrayprime);


// // Bài 2
// // phần foot
// function foottometer(foot){
//    return foot * 0.305
// }
// let meter = foottometer()
// // phần 2
// function mettofeet(meter){
//     return meter * 3.279
// }
// let foot = mettofeet ()

// //  Bài 3
// let wellcome = ()=>{
//     console.log("Xin chào Rikkei Academy") ;
// }
// wellcome()


// //  Bài 4
// let square = (number) =>{
//     return number * number
// }
// square()


// // Bài 5
// const  centuryfromyear = (year) =>{
//     const century = year / 100
//     return Math.ceil (century)
// }
// let century = centuryfromyear()
// console.log("", century)


// // Bài 6
// const splitstring = ( string) =>{
//     let lengthstring =string.length ;
//     if (lengthstring < 15){
//         return string
//     }
//     const splitstr = string.slice (0 ,15)
//     return splitstr + "..."
// }
// const string = splitstring()


// // Bài 7
// function firstchauppercase (string){
//     let firstchar = string [0].touppercase();
//     let speedstring = string.slice(1).tolowercase()
//     return firstchar + speedstring ;
// }
// const result = firstchauppercase()


// //  Bài 8
// function findmax(arraynumber){
//     let max = arraynumber [0];
//     for ( let i = 0 ; i< arraynumber.length ; i++){
//         const number = arraynumber [i];
//         if ( number > max ){
//             max = number
//         }
//     }
//     return max
// }
// let maxnumber = findmax([])
// console.log("", maxnumber)


// //  Bài 9
// // tìm số chẵn lẻ
// function lachanle (number) {
//     if (number % 2==0) {
//         return `${number} là số chẵn`
//     }
//         return ` ${number} là số lẻ`
// }
// let numberstr = lachanle()
// console.log("",numberstr)

// // tim số  nguyên tố
// function lasonguyento(number){
//     let songuyento = true
//     if (number < 2 ){
//         return `${number} không phải là số nguyên tố`
//     }
//     else{
//         for( let i = 2 ; i< number ;i++){
//             if(number % i== 0){
//                 songuyento = false
//                 break;
//             }
//         }
//     }
//     if (songuyento){
//         return `${number}là số nguyên tố`
//     }
//     return`${number} không phải số nguyên tố`
// }
// console.log(lasonguyento());

// //  tìm số hoàn hảo
// const lasohoanhao = (number) =>{
//     let uoccuanumber = []
//     for (let i = 0 ; i< number ; i++){
//         if (number % i == 0){
//             uoccuanumber.push(i)
//         }
//     }
//     let sum = 0
//     for( let i = 0 ; i< uoccuanumber.length; i++){
//         const uoc = uoccuanumber[i];
//         sum =+ uoc
//     }
//     if(number == sum){
//         return`${number} là số hoàn hảo`
//     }
//         return `${number} ko phải là số hoàn hảo`   
// }
// let sohoanhao = lasohoanhao()
// console.log("" , sohoanhao)

// // kiểm tra toàn bộ
// function main( number){
//     let checkchanle = lachanle (number)
//     let checksonguyento = lasonguyento (number)
//     let checkhoanhao = lasohoanhao (number)
// }
// let kiemtra = main()
// console.log("",kiemtra)


// //  Bài 10
// function average (arraynumber){
//     let sumarray = 0 
//     for ( let i = 0 ;i< arraynumber.length; i++){
//         const number = arraynumber[i];
//         sumarray =+ number
//     }
//     return sumarray / arraynumber.length
// }
// let trungbinhcong = average([])
// console.log ("", trungbinhcong)


// //  Bài 11
// function logsonguyento ( number){
//     for( let i = 0 ; i< number ; i++){
//         const checknumber = lasonguyento (i)
//         if(checknumber){
//             console.log(i);
//         }
//     }
// }
// let nhapvao = logsonguyento ()
// console.log("" , nhapvao)


// // Bài 12
function temperatureConverter(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("outputCelsius").innerHTML = (valNum-32) / 1.8;
}
