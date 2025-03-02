const kinhNghiem = prompt("Nhập số năm kinh nghiệm của nhân viên:");
if (kinhNghiem < 1) {
  alert("Mới vào nghề");
} else if (kinhNghiem >= 1 && kinhNghiem <= 3) {
  alert("Nhân viên có kinh nghiệm");
} else if (kinhNghiem >= 4 && kinhNghiem <= 6) {
  alert("Chuyên viên");
} else {
  alert("Quản lý");
}
