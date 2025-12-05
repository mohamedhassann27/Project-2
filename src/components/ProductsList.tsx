import ProductCard from "./ProductCard"
import { productList } from "../data"

function ProductsList() {
    
    const products= productList.map((product)=>(<ProductCard product={product} key={product.id}/>))

    return (
        <div className="container mx-auto my-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:px-4 ">
            {products}
        </div>
    )
}

export default ProductsList
