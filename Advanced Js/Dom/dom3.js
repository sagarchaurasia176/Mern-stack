let btn1 = document.querySelector('#f1');
let btn2 = document.querySelector('#f2');

//btn-1 
btn1.onclick = () => {

    let output = document.querySelector('#op');
    output.inner = btn1.innerHTML;

}

btn2.onclick = () => {
    let output = document.querySelector('#op');
    output.innerHTML = btn2.innerText;
}