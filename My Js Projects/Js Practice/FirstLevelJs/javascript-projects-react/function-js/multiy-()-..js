function sumOf(number) {
    return function(number2) {
        return number + number2;
    }
}
let sumOf2 = sumOf(2);
console.log(sumOf2(4));
console.log(sumOf2(8));
console.log(sumOf2(10));