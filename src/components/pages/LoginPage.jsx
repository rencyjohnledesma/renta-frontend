import React from 'react'
import { useState } from 'react'
import Header from '../Header'
import LoginTab from '../LoginTab'
import Footer from '../Footer'

const LoginPage = () => {
  return (
    <div className='flex flex-col justify-between h-screen'>
      <Header/>
      <div className='flex justify-center'>
        <LoginTab/>
      </div>
      <Footer/>
    </div>
  )
}

export default LoginPage

