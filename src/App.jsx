import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import AnimePage from './pages/anime/anime-page/AnimePage';
import DetailAnimePage from './pages/anime/detail-page/DetailAnimePage';
import TopAnimePage from './pages/anime/TopAnimePage';
import ComingAnimePage from './pages/anime/ComingAnimePage';
import PopularAnimePage from './pages/anime/PopularAnimePage';

import PeoplePage from './pages/people/PeoplePage';
import PeopleAllPage from './pages/people/PeopleAllPage';
import DetailPeoplePage from './pages/people/DetailPeoplePage';

import CharacterPage from './pages/anime/CharacterPage';
import SearchPage from './pages/SearchPage';
import PageNotFound from './pages/PageNotFound';

const App = () => {
  return (
    <div className="bg-red-950">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<AnimePage />} />
          <Route path="/detail-anime/:id" element={<DetailAnimePage />} />
          <Route path="/top" element={<TopAnimePage />} />
          <Route path="/up" element={<ComingAnimePage />} />
          <Route path="/popular" element={<PopularAnimePage />} />

          <Route path="/people" element={<PeoplePage />} />
          <Route path="/peopleall" element={<PeopleAllPage />} />
          <Route path="/people/:id" element={<DetailPeoplePage />} />

          <Route path="/character/:id" element={<CharacterPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
