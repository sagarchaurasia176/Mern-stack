//promise
 let apiData=new Promise((resolv,rej)=>{
    resolv.then((success)=>
    {
        console.log("succes");
    }
    ).catch((er)=>{
        console.log("error");
    }
    );

 })

 

 