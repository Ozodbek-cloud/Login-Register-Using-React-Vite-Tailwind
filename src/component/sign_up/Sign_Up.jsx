import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGooglePlusG, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function SignUp() {
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const navigate = useNavigate()

   async function IDk(e) {
     e.preventDefault();
     let code =  await axios.post('https://register-login-verify.onrender.com/auth/register', {
        name: name,
        email: email,
        phone: phone,
        password: pass
      })
      
      if( code.status === 201) {
           navigate("/verify")
      }
   }
    return (
        <div className="h-screen bg-gray-800">
            <div className="flex justify-center items-center ">
                <div className="flex justify-center items-center mt-[100px] rounded-4xl px-10 shadow-[0px_-1px_6px_10px_rgba(0,_0,_0,_0.1)] bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500">
                    <div className="p-5 rounded-2xl rounded-tr-[1px] rounded-br-[1px]">
                        <div className="flex flex-col items-center justify-center ">
                            <h1 className="text-5xl font-bold py-10 text-[#fff] ">Sign Up</h1>
                            <div className="flex justify-center gap-[20px] items-center w-[220px]">
                                <div className="w-[50px] h-[50px] border border-[#fff] flex justify-center items-center rounded-[50%]">
                                    <FontAwesomeIcon icon={faFacebookF} className="text-[white] text-2xl hover:text-indigo-500" />
                                </div>
                                <div className="w-[50px] h-[50px] border border-[#fff] flex justify-center items-center rounded-[50%]">
                                    <FontAwesomeIcon icon={faGooglePlusG} className="text-[white] text-2xl hover:text-purple-500" />
                                </div>
                                <div className="w-[50px] h-[50px] border border-[#fff] flex justify-center items-center rounded-[50%]">
                                    <FontAwesomeIcon icon={faLinkedinIn} className="text-[white] text-2xl hover:text-pink-500" />
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col items-center justify-center gap-3 mt-[20px] text-[20px]">
                            <p className="text-[#fff]">or use your email for registration</p>
                            <form className="flex flex-col gap-4">
                                <input type="text" onChange={e => setName(e.target.value)} name="name" className="p-3 bg-gray-100 focus:outline-none rounded-2xl" placeholder="Name"
                                />
                                <input type="email" onChange={e => setEmail(e.target.value)} name="email" className="p-3 bg-gray-100 focus:outline-none rounded-2xl" placeholder="Email"
                                />
                                <input type="text" onChange={e => setPhone(e.target.value)} name="phone" className="p-3 bg-gray-100 focus:outline-none rounded-2xl" placeholder="phone"
                                />
                                <input type="password" onChange={e => setPass(e.target.value)} name="password" className="p-3 bg-gray-100 focus:outline-none rounded-2xl" placeholder="Password"
                                />
                                <div className="flex justify-center items-center flex-col gap-4 mt-[20px] ">
                                    <h3 className="text-[18px] transition-all duration-300 hover:underline text-[#fff] cursor-pointer">
                                        <Link to="/sign_in">Already have an account?</Link>
                                    </h3>

                                </div>
                                <button
                                    onClick={IDk} className="p-3 border px-15 rounded-4xl font-bold text-[#fff] transition-all duration-300 hover:scale-[1.1] bg-purple-500 hover:bg-[#fff] hover:text-pink-500"
                                >
                                    Register
                                </button>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
