import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react'
import Navbar from './components/Navbar'
import Home from './Pages/Home'
import About from './Pages/About';
import Seiyu from './Pages/Seiyu';
import DetailAnime from './components/DetailAnime';
import DetailSeiyu from './components/DetailSeiyu';
import Characters from './components/Characters';
import Footer from './components/Footer';
import Search from './Pages/Search';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/seiyu' element={<Seiyu />} />
        <Route path='/about' element={<About />} />
        <Route path='/anime/:id' element={<DetailAnime />} />
        <Route path='/seiyu/:id' element={<DetailSeiyu/>} />
        <Route path='/character/:id' element={<Characters/>} ></Route>
        <Route path='/search/:id' element={<Search/>} ></Route>
      </Routes>
      <Footer />
      {/* <Coba/> */}
    </BrowserRouter>
  )
}

export default App