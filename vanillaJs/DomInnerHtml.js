const btn = document.querySelector('button');
btn.onclick = () => {
    btn.innerHTML = 'processing..';
    setInterval((change) => {
        btn.innerHTML = "succesful";

    }, 5000);


}