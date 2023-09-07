// product
function purchaseProduct(product, payments, email) {
    console.log("you purchase product is this", product);
    payments(), email();
}
purchaseProduct("laptop", payments, email);
purchaseProduct("phone", payments, email);
// pls choose payments options
function payments() {
    console.log("choose the method..");
}

function email() {
    console.log("payment is succesfull || receipt send to your gamil account.");
}