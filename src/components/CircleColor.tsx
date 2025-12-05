
function CircleColor({color}:{color:string}) {
    return (
        <div>
            <p style={{backgroundColor:color}} className={` w-5 h-5 rounded-full`}></p>
        </div>
    )
}

export default CircleColor
