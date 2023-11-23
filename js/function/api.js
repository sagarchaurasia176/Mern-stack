let btn = document.querySelector('.click');

(async function dataApi() {
    try {
        let data = await fetch('https://jsonplaceholder.typicode.com/users')
        const res = await data.json();
        console.log(res);

    } catch {
        console.log("error ")
    }

})();
// btn.addEventListener('click', dataApi());
async function data() {
    const datas = await fetch('https://jsonplaceholder.typicode.com/users');
    const resp = await datas.json();
    console.log(resp);
}
data();

// btn.addEventListener('click', dataApi());