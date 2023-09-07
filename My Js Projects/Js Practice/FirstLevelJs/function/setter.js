let apiData={
    name:'sagar',
    time:12,
    name:'raju',
    time:13,
    // set neans to mute the properties
set data(apiData){
    return `${apiData.name} ${apiData.time}`;
}
}
console.log(dataFestch());
