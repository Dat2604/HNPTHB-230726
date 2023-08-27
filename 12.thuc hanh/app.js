// // bài 1
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

// //  bài 2
// let wellcome = ()=>{
//     console.log("Xin chào Rikkei Academy") ;
// }
// wellcome()

// //  bài 3
// let square = (number) =>{
//     return number * number
// }
// square()

// // bài 4
// const  centuryfromyear = (year) =>{
//     const century = year / 100
//     return Math.ceil (century)
// }
// let century = centuryfromyear()
// console.log("", century)

// // bài 5
// const splitstring = ( string) =>{
//     let lengthstring =string.length ;
//     if (lengthstring < 15){
//         return string
//     }
//     const splitstr = string.slice (0 ,15)
//     return splitstr + "..."
// }
// const string = splitstring()


// // bài 6
// function firstchauppercase (string){
//     let firstchar = string [0].touppercase();
//     let speedstring = string.slice(1).tolowercase()
//     return firstchar + speedstring ;
// }
// const result = firstchauppercase()

// //  bài 7
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


// //  bài 8
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


// //  bài 9
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


// //  bài 10
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

// baì tập về nhà 
// bài 1 : sắp xếp  các phần tử trong mảng theo thứ tự từ bé đến lớn
     function mindenmax (array) {
       let arrayNumber = array;
       arrayNumber.sort((a,b) => {return a - b})
       console.log(arrayNumber); 
        }
        mindenmax([25,55,4,45,14,36])

// bài 2 : sắp xếp các phần tử trong mảng theo thứ tự từ lớn đến bé
        function maxdenmin (array) {
            let arrayNumber = array;
            arrayNumber.sort((a,b) => {return b - a})
            console.log(arrayNumber); 
             }
             maxdenmin([44,4,50,98,26,4])
     
