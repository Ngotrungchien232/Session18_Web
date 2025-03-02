// viết chương trình yêu cầu người dùng nhập từ bàn phím 1 số ngẫu nhiên. chẵn hay lẻ đều in ra màn hình

// đầu tiên cho người dùng nhập vào một số bất kì
let number = prompt("mời bạn nhập vào một số ngẫu nhiên: ");

//sau đó kiểm tra xem số này có phải số chẵn hay lẻ không
let number02 = parseInt(number); // chuyển thành số nguyên

// tiếp sau đó kiểm tra xem là số chẵn hay lẻ
if ((number02 = number)) {
  console.log("Vui lòng nhập lại số nguyên: ");
} else if (number02 % 2 == 0) {
  console.log("Số bạn nhập vào là số chẵn");
} else if (number02 % 2 != 0) {
  console.log("Số bạn nhập vào là số lẻ");
}
