let apiData=[
    {
    no1:1,
    apiName:"front end",
    apiTime:25},
{
    no2:2,
    apiName:"backend",
    apiTime:26},
]
// find the apidata

let courses=apiData.find(function(apiData){
    return apiData.apiName === "end";
});
console.log(courses);
// another way
let data=apiData.find(apiTime=>{
return apiData.apiTime==="26";
})
console.log();
