let add=document.querySelector('#increments');
let sub=document.querySelector('#decrements');
let changes=document.querySelector('#change');

let count=0;
add.addEventListener('click', ()=>{
    let counter=document.querySelector('#number');
    counter.innerText=count;
count++;
})


sub.addEventListener('click', ()=>{
    let counter=document.querySelector('#number');
    counter.innerText=count;
count--;
})

changes.addEventListener('click', ()=>{
let text=document.querySelector('.count');
text.innerText="Number";
});
