// Bai tap Bien, kieu du lieu va toan tu
// bai 1

let vatLy = prompt("Nhập vào điểm Vật lý");
let hoaHoc = prompt("Nhập vào điểm Hoá học");
let sinhHoc = prompt("Nhập vào điểm Sinh học");

let ly = parseInt(vatLy);
let hoa = parseInt(hoaHoc);
let sinh = parseInt(sinhHoc);

let sum = ly + hoa + sinh;

let average = tong / 3;

console.log("Tông điểm 3 môn:" , sum)
console.log("Điểm trung bình 3 môn:" ,  average)
//bai 2

let inputDoC = prompt("Nhập vào độ C")

let Celsius  = parseInt(inputDoC);

let Fahrenheit =  Celsius * (9 / 5)  + 32;

console.log("do F la :" , Fahrenheit)
//bai 3 +4

let banKinh = prompt("Nhập vào bán kính hình tròn");

let pi =   3.141592653589 ;

let R = parseInt(banKinh);

let dienTich = R * R * pi;
let chuVi = R * 2 * pi;
console.log("dien tich hinh tron la" , dienTich)
console.log("chu vi hinh tron la", chuVi)

//Bài Tập Javascript Basic
//bai 1
 console.log("wellcome to Rikkei Academy");

 //Bai 3
 document.write("Quyết tâm học lập trình javascript ");
 
//bai 4
  alert("mời bạn nhập số tuổi của mình")

// bai 5
  confirm("bạn đã đủ 18 tuổi chưa");

// bai 2
  prompt("mời bạn nhập số tuổi của mình");
