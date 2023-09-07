const API="8ab933b92aa76f0cb8046d0427333990";
async function weatherApp(){
    let city="goa";
    //api fetch
    const weatherDataApi=await fetch("https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}")
    const dataChange=await weatherDataApi.json();
    console.log(dataChange);
}
weatherApp();
