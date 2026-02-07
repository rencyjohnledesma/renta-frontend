import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import RegisterTab from '../RegisterTab'

const RegisterPage = () => {
  return (
    <div className='flex flex-col justify-between h-screen'>
      <Header/>
      <div className='flex justify-center'>
        <RegisterTab/>
      </div>
      <Footer/>
    </div>
  )
}

export default RegisterPage

