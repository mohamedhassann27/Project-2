import type { ReactNode } from "react";

interface IProps{
    children:ReactNode;
    className?:string
}

function Button({children,className}:IProps) {
    return (
            <button className={`${className} p-2 text-sm rounded-md text-white flex-1`}> {children} </button>
    )
}

export default Button
