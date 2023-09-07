function getApiFetch(callback) {
    console.log("data is start to fetching");
    setTimeout((data) => {
        console.log("wait...");

        callback();
    }, 2000)
}
getApiFetch(() => {
    console.log("data is stroed on your webapp");
})