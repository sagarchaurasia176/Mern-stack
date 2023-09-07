let apidata = (callback) => {
    console.log("your data is start to fetch...")

    setTimeout(() => {
        console.log("your data is start to fetched...");
        callback();
    }, 4000);
}

apidata(() => {
    console.log("data fetch is completed")
})
apidata(() => {
    console.log("fetch is completed")
})