import { Product } from "../mockdata/product";

interface ProductCardProps {
    product: Product;
    addToCart?: boolean;
}

  const ProductCard = ({product, addToCart=false}: ProductCardProps) => {
    return (
        <div className="flex flex-col items-center bg-neutral-800 p-4 rounded-lg min-h-max">
            <img src={product.image} alt={product.name} className="w-full h-min object-contain mb-4"/>
            <h3 className="text-xl font-semibold">{product.name}</h3>
            <p className="mt-2">${product.price}</p>
            <div className="flex-grow" />

            {addToCart && (
              <div className="flex flex-row justify-between w-full">
                <button className="w-40 items-end text-center mt-4 bg-[#0E0C0B] p-4 border border-gray-500 hover:bg-gray-800 rounded-lg transition">
                  Add to Cart
                </button>
                <button className="w-40 items-end text-center mt-4 bg-[#0E0C0B] p-4 border border-gray-500 hover:bg-gray-800 rounded-lg transition">
                  Wishlist
                </button>
              </div>
            )}
        </div>
    )
  }

  export default ProductCard;