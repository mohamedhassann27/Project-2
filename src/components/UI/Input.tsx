import type { InputHTMLAttributes } from "react";

interface IProps extends InputHTMLAttributes<HTMLInputElement>{
    type: string;
    name:string;
}
function Input({type,name, ...rest}:IProps) {
    return (
        <input type={type} name={name} {...rest} className="border border-gray-600 rounded-md p-1"/>
    )
}

export default Input
