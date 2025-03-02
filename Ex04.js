const soDoc = [
  "Số Không",
  "Số Một",
  "Số Hai",
  "Số Ba",
  "Số Bốn",
  "Số Năm",
  "Số Sáu",
  "Số Bảy",
  "Số Tám",
  "Số Chín",
];

const soNhap = prompt("Nhập số từ 0 đến 9:");
if (soNhap >= 0 && soNhap <= 9) {
  alert(soDoc[soNhap]);
} else {
  alert("Số nhập vào không hợp lệ");
}
