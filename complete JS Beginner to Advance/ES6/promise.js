//what is promise
/*
promise() 
// parameters
resolve()
reject()
// call back () 
then() -> for op
catch() -> for rejections
method to write promise
let prom = new promise(function decleration) ;
or 
let prom = new promise(REsolve , REJECT)) ; 
*/

let apiData = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("object");
}, 3000);

reject(new Error('error is occured'));


});
 


