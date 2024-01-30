import React, { useCallback, useState } from "react";
export default function SearchItem() {
    //this state is basically handle the input text
    const [userTextWritten, setUser] = useState('');
    //this state is basically handle the functions while the users click
    const [userInput, setInput] = useState([])
    //this btn is mostly used as for the getting the arrays of the obj by using the spread operator     
    const addBtn = () => {
        if(!useCallback){
            console.log("empty...")
        }else{
                setInput([...userInput , userTextWritten]);
        }
    }
    const dltItem = (currIndx) => {
        const update = userInput.filter((ele, ind) => {
            return ind != currIndx;
        })

        setInput(update);
    }

    return (
        <>
            <div className="seacthBox shadow-xl ">
                <input
                    type="text"
                    placeholder="write your work here"
                    id="dataText"
                    value={userTextWritten}
                    //onchange is mostly used into the input and inside the input we should do by applying of the onChange !
                    onChange={(e) => {
                        setUser(e.target.value);
                    }}


                    className="p-1 outline-dotted w-10/12 text-blue-700  outline-none"
                />
                <button
                    onClick={addBtn}

                    className=" bg-black text-white text-center p-2 rounded-xl w-23"
                >
                    <i className="fa-solid fa-plus">✍️</i>
                </button>
                <br />

                {userInput.map((el, currIndx) => {
                    return (
                        <div className="box-of-list p-2  capitalize shadow-lg flex justify-between
                                  bg-slate-400 my-4 text-black font-bold rounded-r-md" key={currIndx}>
                            {el}
                            <i className="fa-solid fa-trash cursor-pointer text-red-700 bg-white rounded p-2"
                                onClick={() => dltItem(currIndx)}></i>
                        </div>
                    )
                })}
                {/* <button
                    // onClick={dltAllItem}
                    className=" text-black justify-center flex text-center p-2 rounded-xl w-23"
                >Remove All</button> */}
            </div>
        </>
    );
}
