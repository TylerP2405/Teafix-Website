import { products } from "../mockdata/product"
import ProductCard from "./ProductCard"
import { useSortedProducts } from "../hooks/useSortedProducts" 
import { useState } from "react"

const ListProduct = () => {
    const [sortOption, setSortOption] = useState("default")
    const sortedProduct = useSortedProducts(products, sortOption) 
    return (
        <div className="min-h-screen flex flex-col bg-[#0E0C0B] py-10 px-10 text-white">
            <div className="flex flex-col md:flex-row items-center md:justify-between mb-8 gap-5">
                <h2 className="text-3xl font-semibold">Products</h2>
                <select className="border rounded-md font-medium px-4 py-2" 
                        value={sortOption} 
                        onChange={(e) => setSortOption(e.target.value)}
                >
                    <option value="default">Sort By</option>
                    <option value="priceLowToHigh">Price: Low to High</option>
                    <option value="priceHighToLow">Price: High to Low</option>
                    <option value="nameAtoZ">Name: A-Z</option>
                    <option value="nameZtoA">Name: Z-A</option>
                    <option value="bestSelling">Best Selling</option>
                </select>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 text-center">
                {sortedProduct.map((item) => (
                    <ProductCard key={item.id} product={item} addToCart={true} />
                ))}
            </div>
        </div>
    )
}

export default ListProduct