import { useState } from 'react'
import './App.css'
import LoginPage from './components/pages/LoginPage'
import RegisterPage from './components/pages/RegisterPage'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<LoginPage/>}/>
        <Route path='/account-registration' element={<RegisterPage/>}/>
      </Routes>
    </>
  )
}

export default App
