let btn = document.querySelector('#f1');

btn.onclick = () => {
    let text = document.createElement('p');
    text.innerText = 'sagar';
    document.body.prepend(text);
}