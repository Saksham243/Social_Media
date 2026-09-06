import { useState } from 'react'
import Login from '../pages/Login';
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <>
    <BrowserRouter>
      <Login/>
    </BrowserRouter>
    </>
  )
}

export default App
