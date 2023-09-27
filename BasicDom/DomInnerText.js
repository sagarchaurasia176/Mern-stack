const move = document.querySelector('button');

move.addEventListener('click', () => {
    move.innerText = 'chanegs';

    setTimeout((rem) => {
        move.innerHTML = 'click here'
    }, 1000);


})