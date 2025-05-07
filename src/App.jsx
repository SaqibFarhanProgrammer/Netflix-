'use client'

import './App.css'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import { Routes, Route } from 'react-router-dom'
function App() {
 

  return (
  <div className="App">
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Login' element={  <Login/>} />
    </Routes>
  
  </div>
  )
}

export default App
