function apiData(){
    return fetch('http://codeamn.com');
}
const fetchindData = apiData()
fetchindData.then(result=>{
    console.log(result);
})

apiData.then(result=>{
    return result;
})