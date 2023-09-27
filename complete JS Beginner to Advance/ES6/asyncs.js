async function weatherData(){

    let weather=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("delhi");
        })
    },2000);
    
    let weather1=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("hsr");
        })
    },4000);
    
    let weather2=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("kolkata");
        })
    },6000)
    
    let wea= await weather;
    let wea1=await weather1;
    let wea2=await weather2;

    return[wea,wea1,wea2];
};

weatherData();
