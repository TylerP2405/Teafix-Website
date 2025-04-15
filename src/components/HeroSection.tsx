import CoffeeImage from '../assets/CoffeeImageForHomeScreen (1).webp';


const HeroSection = () => { 
  return (
    <section className="w-full flex flex-col md:flex-row items-center justify-between px-10 py-20 bg-[#0E0C0B] gap-8">
    
      <div className="flex-1 max-w-xl text-center md:text-left md:mb-100">
        <h1 className="text-3xl md:text-5xl font-extrabold mb-4 text-white">Vietnamese Best Coffee</h1>
        <p className="text-base md:text-2xl mb-6 text-white">Delivered to your door</p>
        <button className="px-6 py-3 bg-[#6F4E37] text-white rounded hover:bg-[#5a3e2d] transition">
          Shop Now
        </button>
      </div>

      <div className="flex-1">
        <img
          src={CoffeeImage}
          alt="Teafix Coffee"
          className="w-full h-auto object-contain"
        />
      </div>

    </section>
  );
};

export default HeroSection;
