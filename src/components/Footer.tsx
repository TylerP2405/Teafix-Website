import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";


const Footer = () => {
    return (
        <footer className="bg-[#0E0C0B] text-white py-10">
            <div className="max-w-screen mx-auto flex flex-col gap-y-10 md:flex-row justify-between items-center">
                <div className="flex flex-1 flex-col space-y-2 px-10">
                    <p>1234 Teafix St</p>
                    <p>Houston, TX 77072</p>
                    <p>(123) 456 7891</p>
                    <p>theteafix@gmail.com</p>
                </div>

                <div className="flex flex-1 justify-center">
                    <h1 className="text-3xl">Teafix and Beans Logo </h1>
                </div>

                <div className="flex flex-1 flex-row gap-5 justify-end bg-[#0E0C0B] px-10 text-3xl">
                    <a href="#" className="hover:text-gray-400 transition"><FaFacebook/></a>
                    <a href="#" className="hover:text-gray-400 transition"><FaYoutube/></a>
                    <a href="#" className="hover:text-gray-400 transition"><FaTiktok/></a>
                    <a href="#" className="hover:text-gray-400 transition"><FaInstagram/></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;