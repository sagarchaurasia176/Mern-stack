
import "./App.css";
import apiUrl from "./Component/Data";
function App() {


  const apiGet = async () => {
    const apidata = await fetch(apiUrl);
    const respo = await apidata.json();
    console.log(respo)
  }

   

  return (
    <>

      <button onClick={apiGet}>click</button>
    </>
  )
  //api fetching

}

export default App;
