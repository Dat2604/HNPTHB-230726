
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


//  FUNTION REACTION CON CỪU
// function findmaxsheep(sheeps){
//     let maxsheep = sheeps [0]
//     for ( let i = 1 ; i < sheeps.length ; i++){
//         const sheep = sheeps [i] ;
//         if ( sheep> maxsheep){
//             maxsheep = sheep
//         }
//     }
//     console.log(`con cừu lớn nhất của tôi có kich thước ${maxsheep}, hãy thién nó`);

//     return maxsheep
// }

// const resetsheepsbymaxsheep = (maxsheep , sheeps)=>{
//     const indexmaxsheep = sheeps.indexof (maxsheep);
//     let newsheeps = sheeps.map((sheep,index)=>{
//         if (index == indexmaxsheep){
//             return 8
//         }
//         else{
//             return sheep
//         }
//     })
//     console.log("sau khi thiến đây là đàn cừu của tôi :" , sheeps);
//     return newsheeps
// }

// const updatesheeps50kg = function(sheeps){
//     let sheepaftermonth = []
//     for ( let i = 0 ; i< sheeps.length ; i++){
//         const sheep = sheeps [i];
//         let newsheep = sheep + 50 ;
//         sheepaftermonth.push (newsheep)
//     }
//     console.log(" đã đc 1 tháng trôi qua ,bầy cừu của tôi đã lớn,và đây là kích thước của nó :",sheeps);

//     return sheepaftermonth

// }

// // let sheeps = [5,7,300,90,24,50,75]
// // console.log("xin chào đây là đàn cừu của tôi :", sheeps);
// // let maxsheep = findmaxsheep (sheeps)
// // let newsheep1 = resetsheepsbymaxsheep (maxsheep,sheeps)
// // let newsheepupdate = updatesheeps50kg ( newsheep1)

// // let maxsheep1 = findmaxsheep(newsheepupdate)
// // let newsheep2 = resetsheepsbymaxsheep (maxsheep1,newsheepupdate)
// // let newsheepupdate1 = updatesheeps50kg ( newsheep2)


// for (let i = 0 ; i<3 ; i++){
//     console.log(` MONTH ${ i + 1}`);
//     sheeps = findmaxsheep (sheeps)
//     sheeps = resetsheepsbymaxsheep (maxsheep,sheeps)
//     sheeps = updatesheeps50kg ( newsheep1)
// }
// const sum = sheeps.reduce((total ,sheep)=>{
//     total = total+ sheep
//     return total

// }, 0)
// console.log("", sum *2)


