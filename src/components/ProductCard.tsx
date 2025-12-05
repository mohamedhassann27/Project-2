import Button from "./UI/Button"
import Img from "./Img"
import type { IProduct } from "../interfaces"
import CircleColor from "./CircleColor"

function ProductCard({product}: {product:IProduct}) {
    return (
            <div className="border p-2 rounded-md max-w-80 md:max-w-full mx-auto">
                <Img imgUrl={product.imageURL} className="h-40 w-full object-contain"/>
                <h3 className="text-lg mt-1">{product.title}</h3>
                <p>{product.description}</p>
                <div className="flex gap-2 my-4">
                    <CircleColor className={'bg-red-500'}/>
                    <CircleColor className={'bg-yellow-500'}/>
                    <CircleColor className={'bg-indigo-600'}/>
                </div>
                <div className="flex justify-between mb-4">
                    <p>$500,000</p>
                    <img src="/src/assets/doctor-1.jpg" alt="category img" className="w-5 rounded-full" />
                </div>
                <div className="flex justify-between gap-3">
                    {/* <button className="flex-1 bg-red-500 p-2 rounded-md text-white">EDIT</button> */}
                    <Button children="EDIT" className="flex-1 bg-red-500"/>
                    <Button children="DELETE" className=" flex-1 bg-blue-600"/>
                </div>
            </div>
    )
}

export default ProductCard
