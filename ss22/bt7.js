let a = +prompt("a");
let b = +prompt("b");
let c = +prompt("c");
let dt = b**2 -4*a*c;
let answer;
if(a==0){
    if(b==0) answer = c===0 ? "vo so nghiem" : "vo nghiem";
    else   answer = c===0 ? 0 : -c/b;
}else{
    if(b==0) answer = c===0 ? 0 : -c/a> 0 ? "2 nghiem: " + Math.sqrt(-c/a) + "; " + (-Math.sqrt(-c/a)): "vo nghiem";
    else   answer = c===0 ? "2 nghiem: " + 0 + ", " + -b/a : dt > 0? "2 nghiem" + (-b + Math.sqrt(dt))/2*a + "; " + (-b - Math.sqrt(dt))/2*a : dt ===0 ? -b/(2*a) : "vo nghiem";
}
console.log(answer);
    