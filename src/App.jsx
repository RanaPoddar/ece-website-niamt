import React from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './Components/Header'

function App() {
  

  return (
    <>
    <div className='z-50'>
    <Header/>
    </div>
  <Outlet/>
 
    </>
  )
}

export default App
