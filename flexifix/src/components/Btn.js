import React from 'react'

export const Btn = ({ text }) => {
    return (
        <button className="border rounded-lg border-slate-700 p-2 m-4 hover:bg-primary ">
            <a href="#" className="hover:color-white">{text}</a>
        </button>
    )
}
