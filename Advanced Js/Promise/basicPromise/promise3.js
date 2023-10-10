function data() {
    new Promise((res, rej) => {
        const api = fetch("https://jsonplaceholder.typicode.com/posts");
        const datas = api.json();
        datas.res();
    });
}
data
    .then((suc) => {
        console.log("data is fetch");
    })
    .then((comment) => {
        console.log("stored");
    })
    .catch((er) => {
        console.log("error");
    });