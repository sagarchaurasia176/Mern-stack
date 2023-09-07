const searchButton = document.querySelector("#buttonSearch");
const text = document.querySelector(".boxes .text");
const box = document.querySelector('#result');

//api handle
const memeData = async() => {
    text.innerHTML = "search best result for you";
    const fetchApi = await fetch(
        "https://api.imgflip.com/get_memes"
    ).then((fetchApi) => fetchApi.json());
    console.log(fetchApi);
    setTimeout((text) => {
        text.remove();
    }, 2000)

    box.style.display = 'block';


};

searchButton.addEventListener("click", () => {
    memeData();
});