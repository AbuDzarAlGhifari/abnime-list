import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from 'react'
import Navbar from './components/Navbar'
import Home from './Pages/Home'
import About from "./Pages/About";
import Seiyu from "./Pages/Seiyu";
import DetailAnime from "./components/DetailAnime";


const App = () => {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/seiyu' element={<Seiyu />} />
        <Route path='/about' element={<About />} />
        <Route path='/anime/:id' element={<DetailAnime />} />
      </Routes>
      {/* <Coba/> */}
    </BrowserRouter>

  )
}

export default App