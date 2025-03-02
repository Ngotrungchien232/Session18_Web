let a = parseFloat(prompt("Nhập độ dài cạnh a"));
let b = parseFloat(prompt("Nhập độ dài cạnh b"));
let c = parseFloat(prompt("Nhập độ dài cạnh c"));

if (a + b > c && a + c > b && b + c > a) {
  if (a === b && b === c) {
    alert("Đây là tam giác đều");
  } else if (a === b || a === c || b === c) {
    alert("Đây là tam giác cân");
  } else if (
    a * a + b * b === c * c ||
    a * a + c * c === b * b ||
    b * b + c * c === a * a
  ) {
    alert("Đây là tam giác vuông");
  } else {
    alert("Đây là tam giác thường");
  }
} else {
  alert("Ba cạnh không tạo thành tam giác hợp lệ");
}
