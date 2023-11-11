import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from 'react'
import Navbar from './components/Navbar'
import Home from './Pages/Home'
import About from "./Pages/About";


const App = () => {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />}></Route>
      </Routes>
      {/* <Coba/> */}
    </BrowserRouter>

  )
}

export default App