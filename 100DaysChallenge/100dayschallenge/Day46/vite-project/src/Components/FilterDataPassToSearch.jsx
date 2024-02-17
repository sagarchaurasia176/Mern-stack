import React from "react";
import { CiSearch } from "react-icons/ci";

function FilterDataPassToSearch({data}) {
  return (
    <div>
      <CiSearch 
      style={{
        position:'absolute',
        marginTop:'-19rem',
        marginLeft:'62rem'

      }}
      onClick={data}

      className="bg-white rounded-r text-black size-10 cursor-pointer" />
    </div>
  );
}

export default FilterDataPassToSearch;
