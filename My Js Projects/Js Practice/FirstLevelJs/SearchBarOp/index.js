const passwordbox=document.getElementById('passwordbox');
const genPass=document.getElementById('genPass');

genPass.addEventListener('click' , ()=>{
    passwordbox.value=genPassword();
} )
genPassword=()=>{
let passwordIs="";
passwordIs=Math.random();
return passwordIs;
}
