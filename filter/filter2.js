//filter the values
const num = (numbers) => {
    return numbers > 20;
}
const numbers = [12, 35, 10, 5].filter(num);
console.log(numbers);