let a = +prompt("thang");
let b = +prompt("nam");
let c = b%4===0 && b%100!==0 ? 1 : 0;
let answer;
if(b>0){
switch (a){
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
         answer ="31 ngay";
    break;
    case 2:
        answer = c === 1? "29 ngay" : "28 ngay";
    break;
    case 4:
    case 6:
    case 9:
    case 11:
        answer = "30 ngay";
    break;
    default:
        answer = "sai cu phap!!!";
    }

}else{
    answer = ("sai cu phap!!!");
}
console.log(answer);