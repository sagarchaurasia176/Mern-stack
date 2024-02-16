// import React, { useEffect, useState } from "react";

// function CardsData() {
//   const alpha = [
//     "A",
//     "B",
//     "C",
//     "D",
//     "E",
//     "F",
//     "G",
//     "H",
//     "I",
//     "J",
//     "K",
//     "L",
//     "M",
//     "N",
//     "P",
//     "Q",
//     "R",
//     "S",
//     "T",
//     "U",
//     "V",
//     "W",
//     "X",
//     "Y",
//     "Z",
//   ];

//   const [url, setUrl] = useState(
//     `https://www.themealdb.com/api/json/v1/1/search.php?f=a`
//   );
//   const [item, setItem] = useState(null);
//   //this is for fetching purpose.....
//   useEffect(() => {
//     fetch(url)
//       .then((res) => {
//         if (!res.ok) {
//           throw new Error("Network response was not ok");
//         }
//         return res.json();
//       })
//       .then((data) => {
//         setItem(data.meals);
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//       });

//   }, [url]);

//   // this is the concepts of values
//   const valueComp = () => {
//     setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?f=${alpha}`);
//   };

//   return (
//     <>
//       <div className=" container  m-auto w-5/6  rounded-lg">
//         <div className="twice-box h-auto grid grid-cols-2 bg-slate-50">
//           <div
//             className="box-1 text-center
//              font-semibold "
//           >
//             Click any word and see you'r food

//             {alpha.map((value, index) => (
//               <div
//                 className="numsBox"
//                 onClick={() => valueComp(value)}
//                 key={index}
//               >
//                 <p className=" bg-yellow-100 cursor-pointer size-12">{value}</p>
//               </div>
//             ))}

//           </div>

//           {/* item is fetch */}

//           <div className="box-2 grid grid-cols-3 gap-5">
//             {item.map((val) => (
//               <div className="card" key={val.idMeal}>
//                 <img src={val.strMealThumb} alt={val.strMeal} />
//               </div>
//             ))}

//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
// export default CardsData;

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
      <div className="twice-box h-auto grid grid-cols-2 bg-slate-50">
        <div className="box-1 text-center font-semibold">
          Click any word and see your food
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
        <div className="box-2 grid grid-cols-3 bg-yellow-200 gap-5">
          {item &&
            item.map((val) => (
              <div className="card bg-slate-900 text-white text-center p-2" key={val.idMeal}>
                <img src={val.strMealThumb} alt={val.strMeal} />
                <span>{val.strMeal}</span>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default CardsData;
