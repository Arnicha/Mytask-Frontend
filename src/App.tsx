import React, { useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import Home from './components/Home/Home'
import Landing from './components/Landing/Landing'
import MyTasks from './components/MyTasks/MyTasks'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'

function App() {
  const location = useLocation()
  return (
    <React.Fragment>
      {location.pathname !== '/' && <Navbar/>}
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/Home" element={<Home/>} />
        <Route path="/MyTask" element={<MyTasks/>} />
        <Route path="/Profile" element={<Profile/>}/>
      </Routes>
    </React.Fragment>
  )
}

export default App
