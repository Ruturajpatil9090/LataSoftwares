import React from 'react'
import {Routes, Route, Navigate} from "react-router-dom"
import Home from './home/Home'
import About from './about/About'
import Contact from './contact/Contact'
import Courses from './courses/Courses'
function Routing() {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/courses' element={<Courses/>} />
    </Routes>
  )
}

export default Routing