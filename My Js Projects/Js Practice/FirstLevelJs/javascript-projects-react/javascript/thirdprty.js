// const generatePassword = require('password-generator');
const password = require('password-generator');

function userid(callback) {
    console.log("username:-");
    setTimeout(() => {
        console.log("sagarchaurasia@gmail.com");
        callback();

    }, 4000)
}

function passwords(callback) {
    setTimeout(() => {
        console.log("your password is -----");
    }, 6000)
    setTimeout(() => {
        console.log(password());
    }, 8000)
}
userid(passwords)