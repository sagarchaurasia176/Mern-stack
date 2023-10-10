const datas = document.querySelector("#data");
const butoon = document.createElement("button");
butoon.style.background = "blue";
async function api() {
  const data = await fetch(
    `https://jsonplaceholder.typicode.com/photos`
  ).then((data) => data.json());
  console.log(data);
  data.forEach((data) => {
    datas.innerHTML = 
    `
    <div class='api'>
        <h1>${data.id}</h1>
    <h2>${data.title}</h2>
    <strong>${data.url}<strong>
    </div>

`})}

const promise = api();
promise
  .then((success) => {
    console.log("success", success);
  })
  .catch((er) => {
    console.log("er", er);
  });

butoon.addEventListener("click", () => {
  api(data);
});
