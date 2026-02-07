import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import Logo from "../assets/images/renta-logo-1.png"; // default import lang, walang curly braces
import { CiLogin } from "react-icons/ci";

const Header = () => {
  const isLoginPage = location.pathname === "/";
  const isRegisterPage = location.pathname === "/account-registration";

  return (
    <div className='flex items-center bg-fuchsia-100 border border-b-gray-400 px-5 justify-between sticky top-0 z-50'>
      <img src={Logo} alt="Renta Logo" height={90} width={180} className='max-md:w-[130px] max-md:h-[70px]'/>

      {isLoginPage && 
      (<Link to="/account-registration"> <button className="flex items-center gap-2 px-4 py-2 border border-fuchsia-950 text-[16px] text-white bg-fuchsia-700 rounded hover:bg-fuchsia-300 hover:text-violet-950 hover:scale-105 transform transition max-md:text-[13px]">
      Sign up for free <CiLogin className='text-2xl'/>
      </button> </Link>)}

      {isRegisterPage && 
      (<Link to="/"> <button className="flex items-center gap-2 px-4 py-2 border border-fuchsia-950 text-[16px] text-white bg-fuchsia-700 rounded hover:bg-fuchsia-300 hover:text-violet-950 hover:scale-105 transform transition max-md:text-[13px]">
      Sign in here <CiLogin className='text-2xl'/>
      </button> </Link>)}
    
    </div>
  )
}

export default Header
