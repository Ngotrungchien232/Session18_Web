const nam = prompt("Nhập một năm bất kỳ:");
if (nam % 4 === 0) {
  if (nam % 100 === 0) {
    if (nam % 400 === 0) {
      alert(nam + " là năm nhuận");
    } else {
      alert(nam + " không phải là năm nhuận");
    }
  } else {
    alert(nam + " là năm nhuận");
  }
} else {
  alert(nam + " không phải là năm nhuận");
}
