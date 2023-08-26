  
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

let sheeps =[5,7,300,90,24,50,75]
console.log("xin chào đây là đàn cừu của tôi", sheeps);

// 7.2 tim con cuu lon nhat

let maxsheeps =sheeps [0]
for(let i=1 ; i< sheeps.length ; i++)
{
   const sheep = sheeps[i];
   if(sheep > maxsheeps) 
   {
      maxsheeps = sheep
   }
}
 console.log (`con cừu lớn nhất của tôi có kích thước ${ maxsheeps} , hãy thiến nó.`);
 
//  7.3 reset con cừu lớn nhất về 8

const indexmaxsheep = sheeps.indexOf(maxsheeps);
let newsheeps =[]
for (let i= 0 ; i< sheeps.length ; i++)
{
   const element = sheeps [i];
   if (indexmaxsheep==i)
   {
      newsheeps.push (8)
   }
   else
   {
      newsheeps.push(element)
   }
}
 console.log("sau khi thien day la dan cuu cua toi" , newsheeps );

//  7.4 : tag kich thuoc dan cuu len 50kg

 let sheepsAftermonth =[]
 for(let i = 0 ; i< newsheeps.length ; i++ ) 
 {
   const sheep = newsheeps[i];
   let newsheep = sheep + 50 ;
   sheepsAftermonth.push(newsheep);
 }
 console.log("da 1 thang troi qua,bay cuu cua toi da lon,day la kich thuoc cua no :" , sheepsAftermonth) ;

//  7.5 tim con cuu lon nhat va thien No

 let maxsheep1 =sheeps [0]
 for(let i=1 ; i< sheepsAftermonth.length ; i++)
{
   const sheep = sheepsAftermonth[i];
   if(sheep > maxsheep1) 
   {
      maxsheep1 = sheep
   }
}
 console.log(`con cừu lớn nhất của tôi có kích thước ${maxsheep1} , hãy thiến nó.`);
// reset con cuu ve 8kg
 const indexmaxsheep1 = sheepAftermonth.indexOf(maxsheep1);
 let newsheeps1 =[]
 for (let i= 0 ; i< sheepAftermonth.length ; i++)
 {
    const element = sheepAftermonth[i];
    if (indexmaxsheep1==i)
    {
       newsheeps1.push (8)
    }
    else
    {
       newsheeps1.push(element)
    }
 }
  console.log("sau khi thien day la dan cuu cua toi" , newsheeps1 );
   
  for(let i = 0; i < 3 ;i++) 
  //   tang kich thuoc dan cuu
{
   console.log (`month ${i+1}`);

   let sheepAftermonth =[]
   for(let i = 0 ; i< newsheeps1.length ; i++ ) 
   {
     const sheep = newsheeps1[i];
     let newsheep = sheep + 50 ;
     sheepAftermonth.push(newsheep)
   }
  console.log("da 1 thang troi qua,khich thuoc dan cuu cua toi la :", sheepAftermonth);
}
//   // tim ra con lon nhat de thien no
//   let maxsheep2 =sheeps [0]
//   for(let i=1 ; i< sheepAftermonth.length ; i++)
//   {
//      const sheep = sheepAftermonth[i];
//      if(sheep > maxsheep2) 
//      {
//         maxsheep2 = sheep
//      }
//   }
//   console.log(` con cuu lon nhat cua toi co kich thuoc ${maxsheep2} ,hay thien no`)
  
//   const indexmaxsheep2 = sheepAftermonth.indexOf(maxsheep2);
//   let newsheeps2 =[]
//   for (let i= 0 ; i< sheepAftermonth.length ; i++)
//   {
//      const element = sheepAftermonth[i];
//      if (indexmaxsheep2==i)
//      {
//         newsheeps2.push (8)
//      }
//      else
//      {
//         newsheeps2.push(element)
//      }
   
//     console.log("sau khi cao long dan cuu cua toi :" , newsheeps2);
//    }
// }
//    console.log(" sau 3 thang chan cuu , dan cuu cua toi co khich thuoc la :" , newsheeps2):