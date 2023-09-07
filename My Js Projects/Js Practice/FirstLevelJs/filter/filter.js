//filter - means which give the only particular choice on the bases of conditions

let informationStudents=["Sagar","diploma","btech"];
//filter condtions
let details= informationStudents.filter(value=>{
    return informationStudents =="diploma";
}
);
console.log(informationStudents);


let number=[1,2,-3,-4];
// call back ()
let total=number.filter(function(data){
return data>=0;
});

console.log(total);
