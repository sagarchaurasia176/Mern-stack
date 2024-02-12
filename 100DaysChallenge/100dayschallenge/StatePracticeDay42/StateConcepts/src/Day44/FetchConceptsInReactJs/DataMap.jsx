import React, { useEffect, useState } from "react";
import urlApi from "./Data";
import Table from "./Table";

function DataMap() {
    const [data, setData] = useState([]);
    const apiData = async () => {
        const api = await fetch(urlApi);
        const resp = await api.json();
        // console.log(resp)
        if (resp.length > 0) {
            setData(resp.results);
        }
    };

    useEffect(() => {
        apiData();
    }, []);

    return (
        <div>
            <Table data = {data}/>
        </div>
    );
}

export default DataMap;
