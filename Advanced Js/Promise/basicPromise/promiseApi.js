const data = new Promise((res, rej) => {
        //async
        const apiDetails = async() => {
            const datas = await fetch(`https://jsonplaceholder.typicode.com/posts`);
            const response = await datas.json();
            console.log(response);
        };
    })
    .then((res) => {
        document.write("these your data");
    })
    .catch((rej) => {
        document.write("error");
    });


const btn = document.createElement("div");
btn.innerText = "click me";

btn.addEventListener("click", () => {
    console.log(apiDetails);
});