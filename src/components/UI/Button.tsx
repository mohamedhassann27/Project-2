
interface IProps{
    children:string;
    className?:string
}

function Button({children,className}:IProps) {
    return (
        <div>
            <button className={`${className} p-2 rounded-md text-white`}> {children} </button>
        </div>
    )
}

export default Button
