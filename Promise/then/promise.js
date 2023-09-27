let dataFetchNumber=10;
const data=new Promise((res,rej)=>{
    if(dataFetchNumber == 5){
        return res('fetch is true');
    }
    else{
        return rej('fetch is false')
    }  
})

data
.then((success)=>{
    console.log('good',success);

}).then((littleMistake)=>{
    console.log('mistake',littleMistake);
})

.catch((er)=>{
    console.log('error',er);
})
