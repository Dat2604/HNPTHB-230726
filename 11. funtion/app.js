
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

 
 
functionCuu
let sheeps = [5, 7, 300, 90, 24, 50, 75]
console.log("-Xin chào, đay là kích thước đàn cừu của tôi:" ,sheeps)
function maxsheeps(sheeps){
    let max = sheeps[0]
    for (let i = 1; i < sheeps.length; i++){
        let sheep1 = sheeps[i]
        let maxsheeps = parseInt(sheep1, 10)
        if (maxsheeps > max){
            max = maxsheeps
        }
    }
    console.log("Đây là con cừu kích thước lớn nhất là ",max," hãy cạo lông nó" )
    return max
}
let resetmaxsheeps = (max, sheeps) => {
    let indexMax = sheeps.indexOf(max)
    let newsheep1 = sheeps.map((item, index) => {
        if (index === indexMax){
            return 8
        } else {
            return item
        }
    })
    console.log("Đây là kích thước đàn cừu sau khi cạo lông", newsheep1)
    return newsheep1
}

let sheeps50kg = function(sheeps){
    let after1month = []
    for(let i = 0; i < sheeps.length; i++){
        let tangCan = sheeps[i]
        let sauTangCan = tangCan + 50;
        after1month.push(sauTangCan)
    }
    console.log("Đây là kích thước đàn cừu sau khi 1 tháng ", after1month)
    return after1month
}

for (let i = 1 ; i < 4 ; i++){
    console.log("-----------","Thang",i,"-----------")
    let newCuu = maxsheeps(sheeps)
    sheeps = resetmaxsheeps(newCuu,sheeps)
    sheeps = sheeps50kg(sheeps)
}
