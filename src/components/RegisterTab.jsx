import React from 'react'
import Logo from '../assets/images/renta-logo.png'
import { CiLogin } from 'react-icons/ci'
import { Link } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'
import { FaFacebookF } from 'react-icons/fa';
import { useState } from 'react'
import Loading from '../assets/loading.svg'

const RegisterTab = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const handleRegister = async () =>{
        if(password !== confirmPassword){
            setMessage("Password does not match");
            setConfirmPassword("");
            return;
        }

        setMessage("");
        setLoading(true);
        try{
            const register = await fetch("https://renta-backend.onrender.com/auth/register.php",{
                method: "POST",
                headers: {"Content-Type" : "application/json"},
                body: JSON.stringify({firstName, lastName, email, password}),
            });

            const data = await register.json();
            setMessage(data.message);

            if (data.status === "success") {
                setFirstName("");
                setLastName("");
                setEmail("");
                setPassword("");
                setConfirmPassword("");
            }

        } catch(error){
            setMessage("Something went wrong!");
        } finally{
            setLoading(false);
        } 
    };

  return (
    <div className='flex flex-col justify-self-center w-full max-w-[470px] gap-5 py-20 max-md:p-6'>

        <div className='flex justify-between items-center'>
            <h2 className='text-3xl font-semibold w-1/2'>Let's create an account</h2>
            <img src={Logo} alt="Renta Logo" width={100} height={100} className='animate-slideUp max-md:w-[80px] max-md:h-[80px]'/>
        </div>

        <p>We’re here to make renting gadgets smooth, smart, and stress-free. Discover amazing tech without the commitment.</p>

        <div className='flex gap-2 max-md:flex-col max-md:gap-5'>
            <label className='w-full'>
                <p className='font-medium'>First Name</p>
                <input value={firstName} onChange={(e) => setFirstName(e.target.value)} type="text" placeholder='Enter first name'className='border rounded border-gray-500 w-full p-3 outline-none focus:border-2 focus:border-fuchsia-500 focus:bg-fuchsia-100'/>
            </label>

            <label className='w-full'>
                <p className='font-medium'>Last Name</p>
                <input value={lastName} onChange={(e) => setLastName(e.target.value)} type="text" placeholder='Enter last name'className='border rounded border-gray-500 w-full p-3 outline-none focus:border-2 focus:border-fuchsia-500 focus:bg-fuchsia-100'/>
            </label>
        </div>

        <label className='w-full'> 
            <p className='font-medium'>Email</p> 
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder='Email or phone number'className='border rounded border-gray-500 w-full p-3 outline-none focus:border-2 focus:border-fuchsia-500 focus:bg-fuchsia-100'/>
        </label>

        <label className='w-full'> 
            <p className='font-medium'>Password</p> 
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Must be at least 8 characters'className='border rounded border-gray-500 w-full p-3 outline-none focus:border-2 focus:border-fuchsia-500 focus:bg-fuchsia-100'/>
        </label>

        <label className='w-full'> 
            <p className='font-medium'>Confirm Password</p> 
            <input value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} type="password" placeholder='Repeat Password'className='border rounded border-gray-500 w-full p-3 outline-none focus:border-2 focus:border-fuchsia-500 focus:bg-fuchsia-100'/>
        </label>

        <p className='text-[14px]'>By continuing you agree to the Renta <Link className='text-blue-700 hover:text-blue-500'>terms of service</Link> and <Link className='text-blue-700 hover:text-blue-500'>privacy policy</Link>.</p>

        <button className="flex relative items-center justify-center gap-2 py-3 border border-fuchsia-950 text-[16px] text-white bg-fuchsia-700 rounded hover:bg-fuchsia-300 hover:text-violet-950 hover:scale-105 transform transition" onClick={handleRegister}>
            Sign up
        </button>

        <div className='flex items-center gap-3'>
            <p>Continue with</p>
            <button className="rounded-full">
                <FcGoogle className='text-[34px]' />
            </button>

            <button className="rounded-full bg-blue-700 p-[3px] hover:bg-blue-500">
                <FaFacebookF className='text-[26px] text-white' />
            </button>
            
        </div>
        {loading && (<div className='w-full h-screen fixed top-0 left-0 bg-black/30 flex justify-center items-center z-50'>
        <div className="w-12 h-12 border-4 border-white border-t-fuchsia-500 rounded-full animate-spin"></div>
        </div>)}

       {/* Message Modal */}
        {message && (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/10 p-4 animate-scaleIn">
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
  )
}

export default RegisterTab

