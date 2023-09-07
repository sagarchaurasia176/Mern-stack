const data = new Promise((resolv, rej) => {
  resolv("success");
  console.log(resolv);
  rej(new Error("failure"));
  console.log(rej);
});
