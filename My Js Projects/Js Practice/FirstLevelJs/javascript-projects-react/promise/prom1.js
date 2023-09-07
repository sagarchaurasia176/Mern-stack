 let data = new apidata((resolve, reject) => {
     console.log("api start to run...");

     setTimeout(() => {
         console.log("data is starting....");
     }, 5000);
 });

 resolve.then("message is start...");