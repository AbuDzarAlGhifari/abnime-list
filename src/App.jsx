import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Seiyu from "./Pages/Seiyu";
import DetailAnime from "./components/DetailAnime";
import DetailSeiyu from "./components/DetailSeiyu";
import Characters from "./components/Characters";
import Footer from "./components/Footer";
import Search from "./Pages/Search";
import TopAnime from "./Pages/TopAnime";
import Popular from "./Pages/Popular";
import UpComing from "./Pages/UpComing";
import SeiyuAll from "./Pages/SeiyuAll";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/seiyu" element={<Seiyu />} />
        <Route path="/anime/:id" element={<DetailAnime />} />
        <Route path="/seiyu/:id" element={<DetailSeiyu />} />
        <Route path="/character/:id" element={<Characters />}></Route>
        <Route path="/search" element={<Search />}></Route>
        <Route path="/top" element={<TopAnime />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/up" element={<UpComing />} />
        <Route path="/seiyuall" element={<SeiyuAll />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
