import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faGooglePlusG } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

export default function App() {
    return (
        <div className="flex justify-center items-center ">
            <div className="flex justify-center items-center mt-[200px] shadow-xl">
                <div className=" p-5 rounded-lg  rounded-tr-[1px] rounded-br-[1px]">
                    <div className="flex flex-col items-center justify-center ">
                        <h1 className="text-5xl font-bold py-10">Sign In</h1>
                        <div className="flex   justify-center gap-[20px] items-center w-[220px]">
                            <div className="w-[50px] h-[50px] border flex justify-center items-center rounded-[50%]">
                                <FontAwesomeIcon icon={faFacebookF} className="text-[gray] text-2xl hover:text-[#ff4b2b]" />
                            </div>
                            <div className="w-[50px] h-[50px] border flex justify-center items-center rounded-[50%]">
                                <FontAwesomeIcon icon={faGooglePlusG} className="text-[gray] text-2xl hover:text-[#ff4b2b]" />
                            </div>


                            <div className="w-[50px] h-[50px] border flex justify-center items-center rounded-[50%]">
                                <FontAwesomeIcon icon={faLinkedinIn} className="text-[gray] text-2xl hover:text-[#ff4b2b]" />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-3 mt-[20px] text-[20px]">
                        <p>or use your accaount</p>
                        <div className="flex flex-col gap-4">
                            <input type="email" className="p-3 w-[350px] bg-gray-100 focus:outline-none focus:ring-0 hover:text-[#ff4b2b] rounded-2xl" placeholder="Email " />
                            <input type="password" className="p-3 bg-gray-100 focus:outline-none focus:ring-0 hover:text-[#ff4b2b] rounded-2xl" placeholder="Password" />
                        </div>
                    </div>
                    <div className="flex justify-center items-center flex-col gap-4 mt-[20px]">
                        <h3 className="text-[20px] transition-all duration-300 hover:underline">Forgot your Password?</h3>
                        <button className="p-3 border px-15 rounded-4xl font-bold text-[#fff] transition-all duration-300 hover:scale-[1.1] bg-[#ff4b2b] hover:shadow-[0px_0px_12px_3px_#ff4169] hover:bg-[#fff] hover:text-[#ff4b2b]">SIGN IN</button>
                    </div>
                </div>
            </div>
            <div className=" w-[400px] h-[521px] mt-[200px] rounded-2xl rounded-tl-[1px] rounded-bl-[1px] bg-gradient-to-tl from-[#ff4169] to-[#ff454f] flex justify-center items-center flex-col text-center gap-5">
                <h1 className="text-5xl font-bold text-[#fff]">Hello, Friend</h1>
                <p className=" text-[18px] text-[#fff]">Enter your personal details and start<br /> journey with us</p>
                <button className="p-3 border px-15 rounded-4xl font-bold text-[#fff] transition-all duration-300 hover:scale-[1.1]  hover:shadow-[0px_0px_12px_3px_#ff4169] hover:bg-[#fff] hover:text-[#ff454f]">SIGN IN</button>

            </div>
        </div>
    );
}
