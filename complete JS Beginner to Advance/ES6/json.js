async function dataApi(){

    let options={  
method: 'POST',
  body: JSON.stringify({
    title: 'sagar',
    body: 'chaurasia',
    marks: 79,
      }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
};

let cont= await fetch('https://jsonplaceholder.typicode.com/posts',options);
let res=cont.json();
return res;
}

async function datas(){
let ans=await dataApi();
console.log(ans);
}
datas();

