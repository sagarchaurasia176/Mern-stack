import React, { useEffect, useState } from 'react'
import urlApi from './Api'
import RandomDataCheck from './RandomDataCheck';
function DataCatch() {

  const[data ,setData] = useState(null);
  //api data
  const  apiData = async()=>{
    try{
      const fetchApi = await fetch(urlApi)
      const resp = await fetchApi.json();
        setData(resp);
    }
    catch{
        console.log("error")
    }

}

  //useEffect concetps is used after rendering something means if you want to changeed something while  the user click

  useEffect(()=>{
    apiData()
  },[])

  return (
    <div>
        <RandomDataCheck  data = {data}/>
    </div>
  )
}

export default DataCatch