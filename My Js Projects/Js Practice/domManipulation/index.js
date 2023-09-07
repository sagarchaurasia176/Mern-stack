const btn=document.querySelector('.btn');
const data=document.querySelector('.header');
const btn1=document.querySelector('.btn-1');
const change=document.querySelector('#change');
data.innerHTML="techno sagar"
data.style.color="red";
btn.addEventListener('click' , ()=>{
// data.innerText='chaurasia';
data.innerHTML='teechno'
});

let num=0;
btn1.addEventListener('click' , ()=>{
if(num == 0){
    change.style.background="black";
    num=1;
}
else
{
    change.style.background="white";
    num=0;
}
});
// now start with logics



