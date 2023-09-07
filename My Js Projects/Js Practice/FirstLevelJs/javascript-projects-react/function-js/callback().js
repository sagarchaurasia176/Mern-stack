// call back functions
//call back functions may be defined as a functions that can be used to passed the another functions as an arguments..are knowns as callbacks

let productname = (nameofproducts, callbacks) => {
    console.log("your product is", nameofproducts);
    callbacks();
}

function time() {
    console.log("processing..");
}
let payment = (payment) => {
    console.log("payment...");
}
productname("laptop,tablet", time);
class