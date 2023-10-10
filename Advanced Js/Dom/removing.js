let data = document.querySelector('#f1');
data.addEventListener('click', () => {
    let img = document.createElement('div');
    img.innerHTML =
        `
    <img src="${'https://yometro.com/images/places/hussain-sagar-lake.jpg'}"/>
   `

    document.body.appendChild(img);
    //data remove
    setTimeout(() => {
        img.remove();
    }, 2000)



})