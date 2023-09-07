apidata = (bigdata) => {
    console.log("your data is fetching...");
    bigdata();
}
const bigdata = () => {
    console.log("data is fetched");
}

apidata(bigdata);