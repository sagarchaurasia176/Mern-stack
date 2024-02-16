import React, { useEffect, useState } from "react";
function CardsData() {
  const alpha = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "P",
    "Q",
  ];

  const [url, setUrl] = useState(
    "https://www.themealdb.com/api/json/v1/1/search.php?f=a"
  );
  const [item, setItem] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        return setItem(data.meals);
      })
      .catch((error) => {
        return console.error("Error fetching data:", error);
      });
  }, [url]);

  const setIndex = (alpha) => {
    setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?f=${alpha}`);
  };

  return (
    
    
    
    <div className="container m-autorounded-lg">
      <div className="twice-box h-auto flex  bg-slate-50">
        <div className="box-1 text-center font-semibold">
          {alpha.map((value, index) => (
            <div
              className="numsBox"
              onClick={() => setIndex(value)}
              key={index}
            >
              <p className="bg-yellow-100 cursor-pointer size-12">{value}</p>
            </div>
          ))}
        </div>
        
        
        
        
        
        <div className="box-2 w-full grid grid-cols-3  gap-5">
          {item &&
            item.map((val) => (
              <div
                className="card bg-slate-900  m-auto text-white text-center p-4"
                key={val.idMeal}
              >
                <img
                  className="  size-72 rounded-md"
                src={val.strMealThumb} alt={val.strMeal} />
                <span>{val.strMeal}</span>
              </div>
            ))}



        </div>
      </div>
    </div>
  );
}

export default CardsData;
