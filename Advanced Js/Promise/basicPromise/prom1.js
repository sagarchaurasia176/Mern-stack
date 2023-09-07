//how to create promise
const promise = new Promise((res, rej) => {
    let age = 15;
    if (age === 15) {
        return res();
    } else {
        return rej();
    }
});
promise.then((data) => {
    console.log('correct age');
}).catch((er) => {
    console.log('err');
})