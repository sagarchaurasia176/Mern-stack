let apiData={
    name:'sagar',
    time:12,
    name:'raju',
    time:13,
    // get means to access the properties

get dataFetch(){
    return `${apiData.name} ${apiData.time}`;
}
}

console.log(dataFetch());
