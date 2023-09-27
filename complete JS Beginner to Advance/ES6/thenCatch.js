let apiData= new Promise((resolve,reject)=>{
    setTimeout(()=>{
            let apiData="movieDbi";
            console.log(apiData);
    },3000)    
    
    reject(new error("error"));
});
 
apiData.then((error)=>{console.log("error")},(success)=>{console.log("succes");})


