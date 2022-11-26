import React, { useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import Home from './components/HomePage/Home'
import Landing from './components/LandingPage/Landing'
import MyTasks from './components/MyTasksPage/MyTasks'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/ProfilePage/Profile'

function App() {
  const location = useLocation()
  return (
    <React.Fragment>
      {location.pathname !== '/' && <Navbar/>}
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/Home" element={<Home/>} />
        <Route path="/MyTasks" element={<MyTasks/>} />
        <Route path="/Profile" element={<Profile/>}/>
      </Routes>
    </React.Fragment>
  )
}

export default App
