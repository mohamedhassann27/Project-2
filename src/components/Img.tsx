interface IProps{
    imgUrl:string;
    className?: string
}

function Img({imgUrl,className}:IProps) {
    return (
        <div>
            <img src={imgUrl} className={className} alt="img" />
        </div>
    )
}

export default Img
