let a = +prompt("a");
let b = +prompt("b");
let answer;
if(a===0)answer = b===0 ? "vo so nghiem" : "vo nghiem";
else answer = b===0 ? a : b/a;
console.log(answer);