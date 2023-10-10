const age = () => {
    let ages = 15;
    if (ages === 18) {
        return returnAge;
    }
};
//promise
const returnAge = age();
returnAge
    .then((suc) => {
        return console.log("success", suc);
    })
    .then((trys) => {
        return console.log("again try", trys);
    })
    .catch((er) => {
        return console.log("problem", er);
    });