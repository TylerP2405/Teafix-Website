import { Link } from "react-router-dom"

const SignUpForm = () => {
    return (
        <div className="flex flex-col items-center text-white bg-[#0E0C0B] p-10 gap-5 ">
            <h2 className="text-5xl font-semibold">Sign Up</h2>
            <p className="font-thin">Create an account to get start</p>
            <form className="flex flex-col gap-5 w-1/2 md:w-1/3 ">
                <input  type="text" 
                        placeholder="First Name" 
                        className="p-3 border rounded-md border-gray-500 bg-neutral-800 " />
                <input  type="text" 
                        placeholder="Last Name" 
                        className="p-3 border rounded-md border-gray-500 bg-neutral-800 " />
                <input  type="address" 
                        placeholder="Home Address" 
                        className="p-3 border rounded-md border-gray-500 bg-neutral-800 " />
                <input  type="email" 
                        placeholder="Email Address" 
                        className="p-3 border rounded-md border-gray-500 bg-neutral-800 " />
                <input  type="phone" 
                        placeholder="Phone Number" 
                        className="p-3 border rounded-md border-gray-500 bg-neutral-800 " />
                <input  type="password" 
                        placeholder="Password" 
                        className="p-3 border rounded-md border-gray-500 bg-neutral-800 " />
                <button className="md:w-1/3 mx-auto bg-gray-100 text-black rounded-md font-medium p-2 hover:bg-gray-400 transition">
                    Sign Up
                </button>
            </form>
            <div className="flex flex-col">
                <p className="font-thin">
                    Already have an account ? {" "}
                    <Link to="login" className="font-bold">Login</Link>
                </p>
            </div>
        </div>
    )
}

export default SignUpForm