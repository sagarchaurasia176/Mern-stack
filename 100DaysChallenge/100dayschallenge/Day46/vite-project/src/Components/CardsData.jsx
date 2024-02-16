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
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  var num = 0;

  const [url, setUrl] = useState("https://www.themealdb.com/api/json/v1/1/search.php?f=a");
  const [item , setItem] = useState();
    const [show , setShow] = useState(false);

  //this is for fetching purpose.....
  useEffect(() => {
    fetch(url).then(res => res.json()).then(data => {
      console.log(data.meals)
      setItem(item)
    })

  }, []);

  return (
    <>
      <div className=" container  m-auto w-5/6  rounded-lg">
        <div className="twice-box h-auto grid grid-cols-2 bg-slate-50">
          <div
            className="box-1 text-center
        font-semibold "
          >
            Click any word and see you'r food
            {alpha.map((value) => {
              return (
                <>
                  <div className="numsBox" key={num ++}>
                    <p className=" bg-yellow-100 cursor-pointer size-12">{value}</p>
                  </div>
                </>
              );
            })}
          </div>

          {/* receipe card data  */}

          <div className="box-2 grid grid-cols-3 gap-5">




          </div>
        </div>
      </div>
    </>
  );
}

export default CardsData;
