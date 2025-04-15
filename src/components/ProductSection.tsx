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
        <section className="px-6 bg-[#0E0C0B] text-white">
          <h2 className="text-3xl font-bold mb-8">Best Selling Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {products.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </section>
      );
    };

export default ProductSection;

