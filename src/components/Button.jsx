import React from "react";

export default function Button({
    children,
    type = "button",
    bgColor = "bg-gradient-to-r from-orange-500 to-red-500 p-2 m-1 rounded-lg",
    textColor = "text-white shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl",
    className = "",
    ...props
}) {
    return (
        <button className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}`} {...props}>
            {children}
        </button>
    );
}
