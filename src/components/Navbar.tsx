import {Link} from 'react-router-dom';
const Navbar = () => {
    return (
        <nav className="flex justify-between items-center px-8 py-4 bg-[#0E0C0B] text-white overflow-x-hidden">
            <div className="text-3xl font-semibold cursor-pointer hover:text-gray-500 transition">Teafix</div>

            <div className="flex items-center gap-6 lg:gap-12 px-4 mx-4">
                <Link to="/">Home</Link>
                <Link to="products">Products</Link>
                <a href="#">About</a>
                <a href="#">Blog</a>
                <a href="#">Contact</a>
            </div>

            <div className="flex items-center gap-8 px-6">
                <input 
                    type="text" 
                    placeholder="Search..."
                    className="w-full bg-gray-800 px-4 py-2 rounded-md focus:outline-none"/>       
            </div>

            <div className="flex gap-4 pl-30">
                <button className="px-4 py-2 rounded-md border border-gray-500 hover:bg-gray-800">Sign Up</button>
                <button className="px-4 py-2 rounded-md border border-gray-500 hover:bg-gray-800">Login</button>
            </div>
        </nav>
    )
}

export default Navbar;
// This code defines a functional component called Navbar using React.
// The component returns a navigation bar with a black background and white text.