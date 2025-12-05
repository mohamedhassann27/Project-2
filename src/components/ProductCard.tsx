import Button from "./UI/Button"
import Img from "./Img"
import type { IProduct } from "../interfaces"
import CircleColor from "./CircleColor"
import { sliceTxt } from "../utils/functions"

function ProductCard({product}: {product:IProduct}) {
    return (
            <div className="border border-white shadow-sm p-2 rounded-md max-w-70 md:max-w-full mx-auto">

                <Img imgUrl={product.imageURL} className="h-40 w-full rounded-md"/>
                <h3 className="text-lg mt-1">{sliceTxt(product.title,20)}</h3>
                <p className="text-sm">{sliceTxt(product.description)}</p>

                <div className="flex gap-2 my-4 overflow-x-hidden">
                    {product.colors.map((color)=>(
                        <CircleColor color={color} key={color}/>
                    ))}
                    {/* <CircleColor className={'bg-red-500'}/>
                    <CircleColor className={'bg-yellow-500'}/>
                    <CircleColor className={'bg-indigo-600'}/> */}
                </div>

                <div className="flex justify-between mb-4">
                    <p>${product.price}</p>
                    <div className="flex gap-1 items-center">
                        <img src={product.category.imageURL} alt="category img" className="w-7 h-7 rounded-full" />
                        <p className="text-sm">{product.category.name}</p>
                    </div>
                </div>

                <div className="flex justify-between gap-3">
                    {/* <button className="flex-1 bg-red-500 p-2 rounded-md text-white">EDIT</button> */}
                    <Button children="EDIT" className="bg-red-500"/>
                    <Button children="DELETE" className="bg-blue-600"/>
                </div>
            </div>
    )
}

export default ProductCard
