import React from "react";
import { Btn } from "../Btn";

export default function ToDo() {
    return (
        <div>
            <div>
                <Btn text="New Repair" />
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

