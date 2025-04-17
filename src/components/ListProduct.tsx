import { products } from "../mockdata/product"
import ProductCard from "./ProductCard"

const ListProduct = () => {
    return (
        <div className="min-h-screen flex flex-col bg-[#0E0C0B] py-10 px-10 text-white">
            <h2 className="text-3xl font-semibold mb-8">Products</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 text-center">
                {products.map((item) => (
                    <ProductCard key={item.id} product={item} addToCart={true} />
                ))}
            </div>
        </div>
    )
}

export default ListProduct