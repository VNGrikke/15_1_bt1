let a = +prompt();
let i;
let x;
let y = 10000;
for(i=0;i<4;i++){
    x = a%y/(y/10);
    let z = Math.trunc(x); 
    y = y/10;
    console.log(z);
}
