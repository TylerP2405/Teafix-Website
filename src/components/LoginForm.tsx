import { Link } from "react-router-dom";

const LoginForm = () => {
    return (
        <div className="min-h-[70vh] flex-1 flex flex-col items-center bg-[#0E0C0B] p-10 gap-3 text-white">
            <h2 className="text-4xl font-bold">Login</h2>
            <p className="font-thin">Welcome to Teafix!</p>
            <form className="w-1/2 lg:w-1/3 xl:w-1/4 flex flex-col gap-5 px-5 pt-5">
                <input  type="email" 
                        placeholder="Email"
                        className="border bg-neutral-800 rounded-md p-3" />
                <input  type="password"
                        placeholder="Password"
                        className="border bg-neutral-800 rounded-md p-3" />
                <button className="md:w-1/3 mx-auto bg-gray-100 text-black rounded-md font-medium p-1 hover:bg-gray-400 transition">
                    Submit
                </button>
            </form>
            <div className="mx-auto ">  
                    <Link to="" className="font-thin">Forgot password?</Link>
            </div>
        </div>
    )
}
export default LoginForm;