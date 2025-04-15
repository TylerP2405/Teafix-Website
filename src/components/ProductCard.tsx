
  interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
  }

  const ProductCard = ({product}: {product: Product}) => {
    return (
        <div className="flex flex-col items-center bg-neutral-800 p-4 rounded-lg">
            <img src={product.image} alt={product.name} className="w-full h-min object-contain mb-4"/>
            <h3 className="text-xl font-semibold">{product.name}</h3>
            <p className="mt-2">${product.price}</p>
        </div>
    )
  }

  export default ProductCard;