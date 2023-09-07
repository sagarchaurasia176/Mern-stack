let products = (callback) => {
    console.log("data is fetched");
    setTimeout(() => {
        console.log("product is fetcheng completed ..");
        callback();
    }, 6000)
}
products(() => {
    console.log("your data is this ");

    const data = {
        itemname: 'sagar',
        itemprice: 250,
    }
    console.log(data.itemname);
    console.log(data.itemprice);
});