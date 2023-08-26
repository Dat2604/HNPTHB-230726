
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

 
 function findmaxsheep(sheep){
    let maxsheeps =sheeps [0]
for(let i=1 ; i< sheeps.length ; i++){
   const sheep = sheeps[i];
   if(sheep > maxsheeps) 
   {
      maxsheeps = sheep
   }
}
return maxsheep
 }

 const resetsheepsbymaxsheep =(maxsheep, sheeps ) => {
   const indexmaxsheep = sheeps . indexof (maxsheep);
    let newsheep = sheeps.map((sheep, index) =>{
      if (index == indexmaxsheep) {
         return 8
      }
      else {
         return sheep
      }
    })
    return newsheeps
 }
const updatesheeps50kilo = function (sheeps) {
   let sheepAftermonth = []
   for ( let i = 0; i< sheeps.length; i++){
      const sheep = sheeps [i] ;
      let newsheep = sheep + 50 ;
      sheepAftermonth.push(newsheep)
   }
   console.log("da dc 1 thang troi qua , bay cuu cua toi da lon ,day la kich thuoc cua no" , sheepAftermonth);
   return sheepAftermonth
}
let sheeps = [5,7,300,90,24,50,75]
console.log ("xin chao, day la kich thuoc dna cuu cua toi", sheeps);
let maxsheep = findmaxsheep(sheeps)

let newsheep1= resetsheepsbymaxs,sheeps
console.log(" sau khi thien ,day la dan cuu cua toi" , sheeps);
let sheepAfterupdate50kh =updatesheeps50kilo (sheeps)
maxsheep = findmaxsheep(sheeps)