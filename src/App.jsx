import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/common/ScrollToTop';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import AnimePage from './pages/anime/anime-page/AnimePage';
import DetailAnimePage from './pages/anime/detail-page/DetailAnimePage';
import SeasonAnimePage from './pages/anime/SeasonAnimePage';
import UpcomingAnimePage from './pages/anime/UpcomingAnimePage';
import PopularAnimePage from './pages/anime/PopularAnimePage';

import CharacterPage from './pages/anime/character-page/CharacterPage';
import DetailPeoplePage from './pages/people/DetailPeoplePage';
import SearchPage from './pages/SearchPage';

import PageNotFound from './pages/PageNotFound';
import PageGenre from './pages/PageGenre';

const App = () => {
  return (
    <div className="bg-red-950">
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<AnimePage />} />
          <Route path="/detail-anime/:id" element={<DetailAnimePage />} />
          <Route path="/upcoming-anime" element={<UpcomingAnimePage />} />
          <Route path="/season-now" element={<SeasonAnimePage />} />
          <Route path="/popular" element={<PopularAnimePage />} />

          <Route path="/people/:id" element={<DetailPeoplePage />} />
          <Route path="/character/:id" element={<CharacterPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/genre/:genreId" element={<PageGenre />} />

          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
