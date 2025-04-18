import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import {Routes, Route} from "react-router-dom";
import ProductPage from "./pages/ProductPage";
import SignUpPage from "./pages/SignUpPage";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/products" element={<ProductPage/>}/>
          <Route path="/sign-up" element={<SignUpPage/>}/>"
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
export default App;