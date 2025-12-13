import type { HTMLAttributes } from "react"

interface IProps extends HTMLAttributes<HTMLParagraphElement> {
    color:string,
}

function CircleColor({color, ...rest}:IProps) {
    return (
        <div>
            <p style={{backgroundColor:color}} className={` w-5 h-5 rounded-full`} {...rest} ></p>
        </div>
    )
}

export default CircleColor
