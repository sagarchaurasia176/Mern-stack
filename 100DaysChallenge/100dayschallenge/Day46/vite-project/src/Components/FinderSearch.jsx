import React from "react";
import { CiSearch } from "react-icons/ci";

function FinderSearch() {
  return (
    <div className=" container flex m-auto p-2">
      <input
        type="text"
        className=" w-2/3 p-1 outline-none ml-28 "
        placeholder="type your  food here"
      />
      <CiSearch className="bg-white text-black size-10 cursor-pointer" />
    </div>
  );
}

export default FinderSearch;
