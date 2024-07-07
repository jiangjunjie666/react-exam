import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from '@/pages/Login/index'
import './App.css'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login></Login>}></Route>
      </Routes>
    </div>
  )
}

export default App
