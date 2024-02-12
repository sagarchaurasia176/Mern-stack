import React from "react";
// import DataM[ap from './DataMap'
function Table() {
  return (
    <div>
      <div className="container mx-auto my-9">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Data fetch using useEffect
        </h2>
        <div className="overflow-x-auto">
          <table className="table-auto w-auto m-auto p-2 h-auto">
            <thead>
              <tr className=" bg-slate-600">
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">EMAIL</th>
                <th className="px-4 py-2">Profile Pic</th>
              </tr>
            </thead>
            <tbody>
                <>
                  <tr  className="border-b border-gray-300">
                    <td className="px-4 py-2"></td>
                    <td className="px-4 py-2"></td>
                    <td className="px-4 py-2"></td>
                  </tr>
                </>
              {/* {data.map((row) => ( */}

              {/* ))} */}
            </tbody>
          </table>
        </div>
      </div>
      {/* <DataMap/> */}
    </div>
  );
}

export default Table;
