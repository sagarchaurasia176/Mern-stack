const array = [
    0, 1, 2,
    3, 4, 5, 6, 7, 8, 9,
    10, 11, 12, 13
];

//find prime number
const data = (num) => {
    for (let i = 0; i < array.length; i++) {
        if (num % 2 == 0) {
            return num;
        }

    }
}
console.log(array.filter(data));