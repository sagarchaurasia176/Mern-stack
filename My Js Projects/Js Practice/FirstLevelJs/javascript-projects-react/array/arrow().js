apifetch = (callback) => {
    console.log("hey your api fetch is starting.....");
    callback();
}
let api = () => {
    console.log("api is going to your website");
}

apifetch(api);