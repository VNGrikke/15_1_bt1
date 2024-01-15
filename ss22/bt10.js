Boolean(true);
Boolean("0");
Boolean("false");
Boolean(Infinity);
Boolean(-Infinity);
Boolean(25);
Boolean(-42);
Boolean(12n);
Boolean(3.14);
Boolean(new Date);
Boolean({});
Boolean([]);
if(42){
    console.log("TRUE");
}


Boolean(false);
Boolean(0);
Boolean(-0);
Boolean(0n);
Boolean("");
Boolean(null);
Boolean(undefined);
Boolean(NaN);
if(0){
    console.log("false");
}

// với toán tử ||:
// kiểm tra tư trái sng phải 
// nếu toán hạng đầu tiên là true thì dừng kiểm tra va đưa ra giá trị truthy
// nếu toán hạng dầu tiên là false thì chuyển sang toán hạng tiếp theo
// nếu không có giá trị truthy nào thì kết quả trả về giá trị falsy
console.log(1 || 0); // 1 (giá trị truthy đầu tiên là 1)
console.log(null || 2); // 2 (giá trị truthy đầu tiên là 2)
console.log("" || undefined || 0 || 10); // 10 (giá trị truthy đầu tiên là 10)
console.log(null || 100 || 5 || undefined); // 100 (giá trị truthy đầu tiên là 100)
console.log("" || 0 || null); // null không có giá trị truthy trả về giá trị falsy.