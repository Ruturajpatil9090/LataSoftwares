import React from 'react'
import {Routes, Route, Navigate} from "react-router-dom"
import Home from './home/Home'
import About from './about/About'
import Contact from './contact/Contact'
import Courses from './Components/Courses/Courses'
import Intenship from './Intenship/Intenship'
function Routing() {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/courses' element={<Courses/>} />
      {/* <Route path='/intenship' element={<Intenship/>} /> */}
      <Route path='/intenship/full-stack' element={<Intenship/>} />
      <Route path='/intenship/data-science' element={<Intenship/>} />
    </Routes>
  )
}

export default Routing