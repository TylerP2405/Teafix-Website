import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ProductSection from "./components/ProductSection";

const App = () => {
  return (
    <div>
      <Navbar />
      <main>
        <HeroSection/>
        <ProductSection/>
      </main>
    </div>
  )
}
export default App;