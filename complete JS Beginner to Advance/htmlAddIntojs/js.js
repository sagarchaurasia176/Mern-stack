// const btns=document.querySelector('#btn');
let list=document.querySelector('#list');
let button=document.querySelector('[name="btn"]')
button.addEventListener('click',()=>{
    let text=document.createElement('li');
    let detailsOfText=document.createTextNode('Hey I am sagar' + button.textContent );
    list.appendChild(text);
    text.appendChild(detailsOfText);
    });
