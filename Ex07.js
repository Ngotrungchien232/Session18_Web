let a = parseFloat(prompt("Mời bạn nhập vào số a"));
let b = parseFloat(prompt("Mời bạn nhập vào số b"));
let c = prompt("Mời bạn nhập vào các phép tính (+, -, *, /)");

let result;
switch (c) {
  case "+":
    result = a + b;
    break;
  case "-":
    result = a - b;
    break;
  case "*":
    result = a * b;
    break;
  case "/":
    result = b !== 0 ? a / b : "Không thể chia cho 0";
    break;
  default:
    result = "Phép tính không hợp lệ";
}

alert(`Kết quả của phép tính trên: a ${c} b = ${result}`);
