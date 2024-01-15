let year = +prompt("nhap");
let answer = year%4==0 && year%100!=0 ? "năm nhuận" : "không nhuận";
console.log(answer);