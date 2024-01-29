 import { useState } from 'react'
import './App.css'
 import InputBox from './Components/Input'
 import CurrencyApiData from './Hooks/CurrencyApiHook'

function App() {

  const [amount , setAmount] = useState(0);
  const[from , setFrom] = useState("int");
  const[to , setTo] = useState("int");
  const[converted , setConverted] = useState(0);
  
  const currencyInfo = CurrencyApiData(from);
  const ojectOptions = Object.keys(currencyInfo);

const Swap = ()=>{
  setFrom(to)
  setTo(to)
  setConverted(amount)
  setAmount(converted);
}

 const coverters =()=>{
        setConverted(amount * currencyInfo[to]);

  }
  


  return (
    <>
      <div className="container flex w-2/4 my-10 h-auto m-auto bg-slate-300 p-1">
          {/* <div className="card-1 w-5/6 m-auto bg-slate-400 p-7 rounded-md"></div> */}
      </div>
    </>
  )
}

export default App
