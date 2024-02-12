import React, { useEffect, useState } from "react";
function GithubUser() {
    //state management
    const [api, setApi] = useState([]);
    //useEffect
    const datas = async () => {
        const apiData = await fetch("https://jsonplaceholder.typicode.com/photos");
        //it stored into the setApi
        setApi(await apiData.json());
    };
    useEffect(() => {
        datas();
    }, []);

    return (
        <>
            <div>
                <h1 className=" text-center font-semibold">Github - Users</h1>
                <br />
                {api.map((value) => {
                    <div className="main-container gap-6  h-auto  grid grid-cols-2">
                        <div className="grid grid-cols-2  gap-2 p-2 bg-black text-white">
                            <div className="image  ">
                                <img src={value.thumbnailUrl} alt="" />
                            </div>
                            <div className="text  w-60">
                                <p>{value.title}</p>
                            </div>
                            <br />

                            <div className="box bg-slate-400  flex  m-auto  ">
                                <p className=" p-1">follow</p>
                                <p className=" p-1">following</p>
                                <p className=" p-1">Projects</p>
                            </div>
                        </div>
                    </div>;
                })}
            </div>
        </>
    );
}

export default GithubUser;
