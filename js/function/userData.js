let data = document.querySelector(".daata");
let dataClick = document.querySelector(".click");

async function datas(data) {
    const userData = await fetch("https://randomuser.me/api/")
        .then((data) => data.json())
        .catch((er) => {
            console.log("error");
        });

    userData.userDatass();
}

//iief Imediately Identify expression function

const userData =
    (function userDatass() {

        let oneDiv = document.createElement("div");
        oneDiv.innerHTML = `
     <p>${userData.results[0].gender}</p>
     <p>${userData.results[0].location.city}</p>
     <p>${userData.results[0].email}</p>
     <p>${userData.results[0].id.name}</p>
     <p>${userData.results[0].id.value}</p>
`;
        document.body.appendChild(oneDiv);
    })();

dataClick.addEventListener("click", () => {
    datas();
});