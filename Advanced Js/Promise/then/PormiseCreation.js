let data=new Promise((resolve,rej)=>{
    resolve.then((result)=>{
        console.log('data stored',result);
    })
}).catch((err)=>{
    console.log('not stored',err);
})


