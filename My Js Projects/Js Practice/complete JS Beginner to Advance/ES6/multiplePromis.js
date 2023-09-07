let apiName = new Promise((resolve, reject) => {
  setTimeout(() => {
    let data = "your work is almost done";
  }, 2000);
  resolve(true);
});
//p3
let serverData = apiName.then((resolve, reject) => {
  //p2
  let apiNames = new Promise((resolve, reject) => {
    setTimeout(() => {
      let data = "how are you";
      console.log(data);
    }, 4000);
    resolve("Hello,");
  });

  return apiNames;
});

serverData.then((val) => {
  console.log(val);
});
