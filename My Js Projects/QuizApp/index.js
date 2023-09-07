const questions = [
  {
    'Q': "what is js ?",
    'a': "Js is single thread lang",
    'b': "It is a programming lang",
    'c': "It is used to make websites dynamic",
    'd': "js is versatile lang",
    'correct': "a",
  }
  ,{
     'Q': "what is php ?",
    'a': "php is framework",
    'b': "php is versatile",
    'c': "hypertext preprocessor",
    'd': "php is versatile lang",
    'correct': "a",
  },
  
  {
    'Q': "what is html ?",
    'a': "hypertext transfer protocol",
    'b': "It is a programming lang",
    'c': "markup lang",
    'd': "it is used to create static website",
    'correct': "d",},
  ];

let indexData=3;
const questionType=document.getElementById('boxQuestion');
const options=document.querySelectorAll('#dots');

let loadQuestion=()=>
{
const questionData=questions[indexData];
questionType.innerText= ` ${index + 1}) ${questionData.questions} `;



options[0].nextElementSibling.innerText=data.a;
options[1].nextElementSibling.innerText=data.b;
options[2].nextElementSibling.innerText=data.c;
options[3].nextElementSibling.innerText=data.d;

}


loadQuestion();