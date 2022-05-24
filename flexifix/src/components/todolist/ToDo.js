import React from "react";

export default function ToDo() {
    return (
        <div>
            <div>
                <button className="border rounded-lg border-slate-700 p-2 m-4 hover:bg-primary ">
                    <a href="#" className="hover:color-white">New repair</a>
                </button>
            </div>
            <div className="flex flex-wrap justify-evenly
                          bg-slate-200 border-solid border
                          border-primary p-5 m-2">
                <div className="">
                    <header>TO DO</header>
                </div>
                <div className="">
                    <header>IN PROGRESS</header>
                </div>
                <div className="">
                    <header>DONE</header>
                </div>
            </div>

        </div>
    );

}

