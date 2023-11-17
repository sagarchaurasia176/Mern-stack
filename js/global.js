//local scope
let a = 10;

// global scope

if (!a == 0) {
    let a = 100;
    console.log("loacl var", a);
}
console.log("local var", a);