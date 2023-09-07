let data = new Promise((resolve, reject) => {
    console.log("api is started ....");
    setTimeout(() => {
        resolve("data is entering to your website");
    }, 5000, );
});
data.then(result => {
    console.log(result);
}).then(message => {
    console.log("connection  succesfull");
    console.log(message);
})