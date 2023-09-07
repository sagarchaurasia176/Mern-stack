function studentDetails(callback) {
    console.log("student data fetching started...");
    // async js
    setTimeout(() => {
        console.log("student data is fetched...");
        callback();

    }, 6000)
}

studentDetails(() => {
    console.log("update next data");
});