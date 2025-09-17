"use client";

import React from "react"

const inputField = ({type, value, onChange, placeholder, name, ...rest}) => {
    return (
        <div>
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