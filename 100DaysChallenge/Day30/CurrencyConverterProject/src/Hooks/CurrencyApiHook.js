import { useEffect, useState } from "react";

function CurrencyApiData(currency) {
    const [apiData, setData] = useState({});
    //useEffect is also used to fetch the api data after rendering 
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
            .then((resp) => resp.json())
            .then((resp) => setData(resp[currency]));
    }, [currency]);
    //it reutrns the values
    return apiData;
}
export default CurrencyApiData;