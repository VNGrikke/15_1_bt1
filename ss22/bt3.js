

let n = +prompt(" nhap mot so tu nhien: ");
let check = 0;
let i = 0;
while(i <= n){
    if( Math.pow( i, 2) == n ) {   
        check = 1;
        break;
    }
    i++;
}
if( check == 1 ) console.log(n + " la chinh phuong");
else console.log(n + " khong phai la so chinh phuong");
