// bài 1
// phần foot
function foottometer(foot){
   return foot * 0.305
}
let meter = foottometer()
// phần 2
function mettofeet(meter){
    return meter * 3.279
}
let foot = mettofeet ()

//  bài 2
let wellcome = ()=>{
    console.log("Xin chào Rikkei Academy") ;
}
wellcome()

//  bài 3
let square = (number) =>{
    return number * number
}
square()

// bài 4
const  centuryfromyear = (year) =>{
    const century = year / 100
    return Math.ceil (century)
}
let century = centuryfromyear()
console.log("", century)

// bài 5
const splitstring = ( string) =>{
    let lengthstring =string.length ;
    if (lengthstring < 15){
        return string
    }
    const splitstr = string.slice (0 ,15)
    return splitstr + "..."
}
const string = splitstring()


// bài 6
function firstchauppercase (string){
    let firstchar = string [0].touppercase();
    let speedstring = string.slice(1).tolowercase()
    return firstchar + speedstring ;
}
const result = firstchauppercase()

//  bài 7
function findmax(arraynumber){
    let max = arraynumber [0];
    for ( let i = 0 ; i< arraynumber.length ; i++){
        const number = arraynumber [i];
        if ( number > max ){
            max = number
        }
    }
}