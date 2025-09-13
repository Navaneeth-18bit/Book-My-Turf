"use client";

import React from "react"

const inputField = ({label, type, value, onChange, placeholder, name, ...rest}) => {
    return (
        <div>
            <label>{label}</label>
            <input
            type={type}
            value = {value}
            onChange = {onChange}
            placeholder={placeholder}
            name={name}
            {...rest}
            />
        </div>
    )
}


export default inputField