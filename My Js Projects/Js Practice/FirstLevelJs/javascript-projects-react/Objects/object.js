let productsname = {
    title: "js course",
    descp: "this is js course",
    price: 166,
}
console.log(productsname.title);
console.log(productsname.descp);
console.log(productsname.price);
// ======another way to create the obj
let studentsdetails = new Object();
studentsdetails.name = "sagar";
studentsdetails.age = 15;
// ===============================================
console.log(studentsdetails.name);

function student(name) {
    console.log(" ", name);
}

module.exports = student;