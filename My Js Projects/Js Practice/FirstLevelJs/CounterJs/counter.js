let textNumber = document.querySelector("#number-text");
//creating increment functions
const positiveIncrement = () => {
  let numbersIncrement = parseInt(textNumber.innerText);
  numbersIncrement = numbersIncrement + 1;
  textNumber.innerText = numbersIncrement;
};

const minusDecrement = () => {
  let numbersIncrement = parseInt(textNumber.innerText);
  numbersIncrement = numbersIncrement - 1;
  textNumber.innerText = numbersIncrement;
};
