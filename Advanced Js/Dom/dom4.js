let btn = document.querySelector('#f1');

btn.onclick = () => {
    let data = document.createElement('h1');

    data.innerText = 'hey sagar';
    document.body.appendChild(data);

}