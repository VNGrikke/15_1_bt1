let a = +prompt("a");
let b = +prompt("b");
let answer;
let c = prompt("phep tinh");
switch (c){
    case "cong":
    case "cộng":
    case "+":
        answer = a+b;
    break;
    case "tru":
    case "trừ":
    case "-":
        answer = a-b;
    break;
    case "nhan":
    case "nhân":
    case "*":
        answer = a*b;
    break;
    case "chia":
    case "/":
        answer = a/b;
    break;
    default:
        console.log("sai cu phap!!");

}
console.log(answer);
