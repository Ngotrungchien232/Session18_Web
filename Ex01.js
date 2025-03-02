// đầu vào input
// //cho người dùng nhập vào lương ( salary)

// //đầu ra của output
// // số tiền thuế cần phải đóng

// //các bước để giải quyết bài này
// // bước 1:
// //tạo ra một biến salary và lưu trữ giá trị người dùng nhập vào từ bàn phím về mức lương
// // bước 2:
// // kiểm tra xem
// // salary < 5 triệu
// // nếu đúng  thì hiển thị ra mức thuế là 0 vnd
// // nếu sai thì tiếp tục kiểm tra
// //kiểm tra xem
// // salary > 5 triệu và salary < 10 triệu
// //nếu đúng thì hiển thị ra mức thuế là salary *5/100
// // nếu sai thì tiếp tục kiểm tra
// //kiểm tra xem
// // salary >= 10 triệu và salary < 18 triệu
// //nếu đúng thì hiển thị ra mức thuế là salary *10/100
// // nếu sai thì tiếp tục kiểm tra
// //kiểm tra xem
// // salary >= 18 triệu và salary < 32 triệu
// //nếu đúng thì hiển thị ra mức thuế là salary *15/100
// // nếu sai thì tiếp tục kiểm tra
// //kiểm tra xem
// // salary >= 32 triệu
// //nếu đúng thì hiển thị ra mức thuế là salary *20/100
// // nếu sai thì không hợp lệ, hiển thị ra màn hình mức lương người dùng nhập vào không hợp lệ

// let salary = +prompt("mòi bạn nhập vào mức lương của bạn: ");

// // ở bước hai thì chúng ta sẽ dùng câu lệnh if để có thể kiểm tra xem điều kiện nhập vào của người dùng có thỏa mãn không
// if (salary < 5e6) {
//   //lúc này mức thuế sẽ là 0 đồng hiển thị ra như đề bài yêu cầu
//   console.log("muc thue la: 0 vnd");
// } else if (salary >= 5e6 && salary < 10e6) {
//   //lúc này mức thuế sẽ là 5% của mức lương người dùng nhập vào
//   let tax = (salary * 5) / 100;
//   console.log("muc thue la: " + tax + " vnd");
// } else if (salary >= 10e6 && salary < 18e6) {
//   let tax = (salary * 10) / 100;
//   console.log("muc thue la: " + tax + " vnd");
// } else if (salary >= 18e6 && salary < 32e6) {
//   let tax = (salary * 15) / 100;
//   console.log("muc thue la: " + tax + " vnd");
// } else if (salary >= 32e6) {
//   let tax = (salary * 20) / 100;
//   console.log("muc thue la: " + tax + " vnd");
// } else {
//   console.log("muc luong ban nhap vao khong hop le");
// }

// BÀI TẬP SỐ 2
let number = +prompt("mời bạn nhập vào một số: ");
switch (number) {
  case 200:
    console.log("thành công");
    break;
  case 201:
    console.log("thêm thành công");
    break;
  case 400:
    console.log("lỗi request");
    break;
  case 404:
    console.log("không tìm thấy");
    break;
  case 500:
    console.log("lỗi sever");
    break;
  default:
    console.log("không có trường hớp nào bạn nhập thỏa mãn: ");
}

//BÀI TẬP SỐ 3
