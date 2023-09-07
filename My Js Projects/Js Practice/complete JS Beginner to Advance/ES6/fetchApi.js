// fetch();
async function data() {
    let apiData = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    let op = await apiData.json();

    console.log(op);
}
console.log(data());
