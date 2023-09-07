const sliderRange=document.getElementById("sliderRange");
const numberIncrement=document.getElementById("numberIncrement");
const lower=document.getElementById("lower");
const upper=document.getElementById("upper");
const number=document.getElementById("number");
const symbol=document.getElementById("symbol");
const btngen=document.getElementById("btngen");
// value would be ----
numberIncrement.textContent=sliderRange.value;
sliderRange.addEventListener('input' , ()=>{
numberIncrement.textContent=sliderRange.value;
});
let uppercase="ABCDEFGHIJKLMNPQRSTUVWXYZ";
btngen.addEventListener('click', ()=>{
numberIncrement.value=gen();
});

gen=()=>{
let Char="";
Char=Math.floor(Math.random()*uppercase.length);
return Char;

}