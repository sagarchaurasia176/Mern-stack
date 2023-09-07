//call back () is a () that is passed into another ()
// () and its invoked into the another () to complete some actions

// let data=[
//     {data:"api",
//     num:22,
//     api:"fetch the data"}
// ]

// console.log(data);
//predict function
let data=[
    {
        data:"1",
        api:"facebook",
        fetchs:'fetch',
    },
    {
        data:"2",
        api:"bcebook",
        fetcshs:'fetch'

    }
]
let datas= data.find(data=>data.api=="facebook");
console.log(datas);


let datass=data.find(data=>data.nameofapi==='fetch');
console.log(datass);

