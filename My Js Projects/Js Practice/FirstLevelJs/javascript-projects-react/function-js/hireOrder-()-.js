// retur statement means to stop the function and give the return value;
function user() {
    function email() {
        console.log("sagar@gmail.com");
    }
    return email();
}
const user = email();
email();