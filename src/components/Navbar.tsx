const Navbar = () => {
    return (
        <nav className="flex justify-between items-center px-8 py-4 bg-black text-white">
            <div className="text-3xl font-semibold cursor-pointer hover:text-gray-500 transition">Teafix</div>

            <div className="flex items-center gap-12 pr-20 pl-30">
                <a href="#">Home</a>
                <a href="#">Products</a>
                <a href="#">About</a>
                <a href="#">Blog</a>
                <a href="#">Contact</a>
            </div>

            <div className="flex items-center flex-1 gap-8 px-6">
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