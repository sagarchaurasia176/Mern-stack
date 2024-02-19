function age() {
  let age = 15;
  if (age == 15) {
    return "success";
  } else {
    return "fail";
  }
}

const promise = age();

promise
  .then((su) => {
    console.log("success1", su);
  })
  .then((su) => {
    console.log("new");
  })
  .catch((er) => {
    console.log("er");
  });
