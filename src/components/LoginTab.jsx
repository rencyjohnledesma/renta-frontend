import React, { useState } from 'react';
import Logo from "../assets/images/renta-logo.png";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from 'react-icons/fa';
import { CiLogin } from "react-icons/ci";
import { Link } from 'react-router-dom';
import Loading from '../assets/loading.svg'; // default import as img

const LoginTab = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("")

  const handleLogin = async() => {
    setMessage("");
    setLoading(true);

    try{
      const login = await fetch("https://renta-backend.onrender.com/auth/login.php", {
        method: "POST",
        headers: {"Content-Type" : "application/json"},
        body: JSON.stringify({email, password}),
      });

      const text = await login.text(); // Get response as text first
      console.log("Raw Response:", text); 

      const data = await login.json();
      setMessage(data.message);

      if(data.status === "success"){
        console.log("Logged in user ID:", data.user_id);
      }else{
        setPassword("");
      }

    }catch(error){
      console.error(error);
      setMessage("Something went wrong! Please try again later.")
    }finally{
      setLoading(false);
    }
  };

  return (
    <div className='flex flex-col gap-4 justify-self-center min-w-[430px] items-center py-20 relative max-md:p-10'>
      {/* Logo */}
      <img src={Logo} alt="Renta Logo" height={100} width={100} className='animate-slideUp max-md:w-[80px] max-md:h-[80px]'/>
      <h2 className='text-3xl font-semibold'>Login to Renta</h2>
      <p>
        Need an account?{" "}
        <Link to="/account-registration" className='hover:text-fuchsia-700'>
          Sign up here.
        </Link>
      </p>

      {/* Social Login Buttons */}
      <button className="flex relative items-center justify-center w-full gap-2 px-4 py-3 border border-blue-900 text-blue-900 rounded hover:bg-blue-50 hover:scale-105 transform transition">
        <FcGoogle className='text-2xl absolute left-2' /> Sign in with Google
      </button>

      <button className="flex relative items-center justify-center w-full gap-2 px-4 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 hover:shadow-lg transform transition">
        <FaFacebookF className='text-2xl absolute left-2' /> Continue with Facebook
      </button>

      {/* Divider */}
      <div className="flex items-center gap-2 w-full">
        <div className="flex-1 h-px bg-gray-600"></div>
        <span className="px-3 text-gray-700">or login in an existing account</span>
        <div className="flex-1 h-px bg-gray-600"></div>
      </div>

      {/* Email & Password */}
      <label className='w-full'>
        <p className='font-medium'>Email</p>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder='Email or phone number' className='border rounded border-gray-500 w-full p-3 outline-none focus:border-2 focus:border-fuchsia-500 focus:bg-fuchsia-100'/>
      </label>

      <label className='w-full'>
        <p className='font-medium'>Password</p>
        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Password' className='border rounded border-gray-500 w-full p-3 outline-none focus:border-2 focus:border-fuchsia-500 focus:bg-fuchsia-100'/>
      </label>

      {/* Login Button */}
      <button className="flex w-full items-center justify-center gap-2 py-3 border border-fuchsia-950 text-[16px] text-white bg-fuchsia-700 rounded hover:bg-fuchsia-300 hover:text-violet-950 hover:scale-105 transform transition" onClick={handleLogin}>
        Sign in
      </button>

      {/* Loading Overlay */}
      {loading && (<div className='w-full h-screen fixed top-0 left-0 bg-black/30 flex justify-center items-center z-50'>
        <div className="w-12 h-12 border-4 border-white border-t-fuchsia-500 rounded-full animate-spin"></div>
        </div>)}

        {/* Message Modal */}
        {message && (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/10 p-4">
        <div className="bg-white rounded-lg shadow-2xl max-w-sm w-full p-6 animate-scaleIn">
            <div className="flex flex-col items-center text-center gap-4">
                {/* Error Icon */}
             
                <h3 className="text-xl font-bold text-gray-800">{message}</h3>
                
                <button 
                    onClick={() => setMessage("")} 
                    className="mt-2 w-full py-1 bg-fuchsia-700 text-white rounded-md font-semibold hover:bg-fuchsia-800 transition-colors"
                >
                    Close
                </button>
            </div>
        </div>
    </div>
)}

    </div>
  );
};


export default LoginTab;



