import React from "react";

function DataPass() {
  return (
    <div className="  bg-white p-2 m-2 text-black">
      <h2 className=" text-center text-red-500">Data stored</h2>
      <p></p>

      <table className=" divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              UserName
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Password
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
              sagar cha
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              Sofe
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default DataPass;
