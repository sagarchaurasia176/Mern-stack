function dataApi() {
    return new Promise(data => {

        setTimeout(() => {
            dataApi();
        }, 1);
    })
}
dataApi()
    .then((suc) => {
        console.log("data is attached", suc);
        return dataApi();
    })
    .then((s2) => {
        console.log("data is fetch", s2);
        return dataApi();
    })
    .catch((er) => {
        console.log("err", er);
        return dataApi();
    });