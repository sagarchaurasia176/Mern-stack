 const apidata = new apidata((resolve, reject) => {
     console.log("api generate");
     class
     setTimeout(() => {
         resolve((api) => {
             console.log("api is start  to generated");
         })
         reject((error) => {
             console.log("connection error");
         })
     }, 5000)

 })

 resolve.then((api) => {
     console.log("dat is store into your websites")
 })

 reject.catch(function(error) {
     console.log(error);
 });