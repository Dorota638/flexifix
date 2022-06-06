import React from "react";


export default function InputField(props) {
    const { label, type = 'text', name, value, onChange } = props;

    return (
        <div >
            <label>{label}</label>
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                className="border-4 m-2"
            />
        </div>
    )
}
