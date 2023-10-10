/*
In this lab, let us create a mini-promise-based calculator. 
The caluclator function you see on the right, make sure of the following challenge constraints:
-------------------------------------------------------------------------------------
You should return a promise from the function
If operation is +, return num1 + num2 as the resolved promise value
If operation is -, return num1 - num2 as the resolved promise value
If operation is anything else, return error as rejected value.
*/
function miniCalculator(num1, num2, operations){
    num1=2;
    num2=3;
    operations=num1+num2;
    operations=num1-num2;
    return calculator;
}

let calculator = miniCalculator()
{
    if (operations == res) {
    return res;

  } else if (operations1 == res) {
    return res;
  } else {
    return rej;
  }
}
calculator.then((operationIsADD) => {
    console.log("resolved", operationIsADD);
  })
  .then((sub) => {
    console.log("res", sub);
  })
  .catch((er) => {
    console.log("err", er);
  });


