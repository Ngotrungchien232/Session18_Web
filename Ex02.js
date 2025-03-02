const toan = parseFloat(prompt("Nhập điểm Toán: "));
const van = parseFloat(prompt("Nhập điểm Văn: "));
const anh = parseFloat(prompt("Nhập điểm Anh: "));
const diemTrungBinh = (toan + van + anh) / 3;
let hocLuc;
if (diemTrungBinh >= 8.0) {
  hocLuc = "Giỏi";
} else if (diemTrungBinh >= 6.5 && diemTrungBinh < 8.0) {
  hocLuc = "Khá";
} else if (diemTrungBinh >= 5.0 && diemTrungBinh < 6.5) {
  hocLuc = "Trung bình";
} else {
  hocLuc = "Yếu";
}

console.log(`Điểm trung bình: ${diemTrungBinh}`);
console.log(`Điểm trung bình: ${diemTrungBinh.toFixed(2)}`);
console.log(`Học lực: ${hocLuc}`);
