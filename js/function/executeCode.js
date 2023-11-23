//js is the single threaded lang
let val = 10;
let val1 = 100;

function data(num1, num2) {
    let total = num1 + num2;
    return total;
}

let res = data(10, 12);
console.log(res)
let res1 = data(val, val1);
console.log(res1)