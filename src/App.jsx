import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import AnimePage from './pages/anime/AnimePage';
import SeiyuPage from './pages/people/SeiyuPage';
import DetailAnimePage from './pages/anime/DetailAnimePage';
import DetailSeiyuPage from './pages/people/DetailSeiyuPage';
import CharacterPage from './pages/anime/CharacterPage';
import Search from './pages/SearchPage';
import TopAnimePage from './pages/anime/TopAnimePage';
import PopularAnimePage from './pages/anime/PopularAnimePage';
import ComingAnimePage from './pages/anime/ComingAnimePage';
import SeiyuAll from './pages/people/SeiyuAll';
import PageNotFound from './pages/PageNotFound';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<AnimePage />} />
        <Route path="/seiyu" element={<SeiyuPage />} />
        <Route path="/anime/:id" element={<DetailAnimePage />} />
        <Route path="/seiyu/:id" element={<DetailSeiyuPage />} />
        <Route path="/character/:id" element={<CharacterPage />}></Route>
        <Route path="/search" element={<Search />}></Route>
        <Route path="/top" element={<TopAnimePage />} />
        <Route path="/popular" element={<PopularAnimePage />} />
        <Route path="/up" element={<ComingAnimePage />} />
        <Route path="/seiyuall" element={<SeiyuAll />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
