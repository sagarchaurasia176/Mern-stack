
//you can create any var 
let age = 15;

let userData = new Promise((res, rej) => {
  if (age > 16) {
  return  res("you're eligible");
  } else {
   return rej("you're not elegible");
  }
});

userData
  .then((success) => {
    console.log(success);
  })
  .catch((err) => {
    console.log(err);
  });
