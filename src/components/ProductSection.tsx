import ProductCard from "./ProductCard";
import mug1 from '../assets/mug1.png'
import mug2 from '../assets/mug2.png'
import mug3 from '../assets/mug3.png'
import mug4 from '../assets/mug4.png'
const ProductSection = () => {
    const products = [
        { id: 1, name: "Coffee Beans", price: 16, image: mug1 },
        { id: 2, name: "Coffee Mug", price: 12, image: mug2 },
        { id: 3, name: "Coffee Beans", price: 13, image: mug3 },
        { id: 4, name: "Coffee Beans", price: 16, image: mug4 },
    ]

    return (
        <section className="bg-[#0E0C0B] text-white">
          <div className="flex flex-1 flex-col py-10 px-10">
            <h2 className="text-4xl font-bold mb-8">Best Selling Products</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-center">
              {products.map((item) => (
                <ProductCard key={item.id} product={item} />
              ))}
            </div>
          </div>
        </section>
      );
    };

export default ProductSection;

