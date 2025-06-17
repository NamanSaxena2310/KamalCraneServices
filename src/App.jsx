import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Router } from 'react-router-dom'
import Navbar from './components/Navbar'
import NavLinks from './components/NavLinks'
import ImageSlider from './components/ImageSlider'
import Home from './pages/Home'


function App() {
  

  return (
    <>
      <Navbar/>
      <Home/>
    </>
  )
}

export default App
