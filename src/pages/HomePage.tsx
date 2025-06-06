import ListProduct from "../components/ListProduct"
import ProductSection from "../components/ProductSection"
import CoffeeImage from '../assets/CoffeeImageForHomeScreen (1).webp';


const HomePage = () => {
    return (
        <>
            <section className="w-full flex flex-row items-center justify-around bg-[#2C2927] ">
                <div className="flex-1 mb-150 text-center gap-5">
                    <h1 className="text-white text-7xl font-extrabold mb-5">Vietnamese Best Drip Coffee</h1>
                    <p className="text-white text-3xl mb-5">Deliver To Your Door</p>
                    <button className="px-6 py-3 bg-[#6F4E37] text-white rounded-md hover:bg-[#5a3e2d] transition">
                        Show Now
                    </button>
                </div>
                
                <div className="flex-1">
                    <img src={CoffeeImage} alt="Coffee" className="" />
                </div>
            </section>
        </>
    )
}

export default HomePage
