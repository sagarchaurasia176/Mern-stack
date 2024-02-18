import { useState } from 'react'
import './App.css'
import State from './Context'
import { counterTexts } from './ContextApi/ContextData'



function App() {

    const[count , setCount] = useState(0);
  return (
    <>
    <counterTexts.Provider
      value={count}
    
    >
      <State/>
    </counterTexts.Provider>
    </>
  )
}

export default App
