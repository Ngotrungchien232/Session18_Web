const ten = prompt("Nhập tên người dùng: ");

if (ten === null) {
  console.log("Cancelled");
} else if (ten === "ADMIN") {
  const matKhau = prompt("Nhập mật khẩu: ");

  if (matKhau === null) {
    console.log("Cancelled");
  } else if (matKhau === "TheMaster") {
    console.log("Welcome");
  } else {
    console.log("Wrong password");
  }
} else {
  console.log("I Don’t know you");
}
