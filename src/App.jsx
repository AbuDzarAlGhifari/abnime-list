import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import AnimePage from './fix/anime/anime-page/AnimePage';
import DetailAnimePage from './fix/anime/detail-page/DetailAnimePage';
import TopAnimePage from './fix/anime/TopAnimePage';
import ComingAnimePage from './fix/anime/ComingAnimePage';
import PopularAnimePage from './fix/anime/PopularAnimePage';

import PeoplePage from './fix/people/PeoplePage';
import PeopleAllPage from './fix/people/PeopleAllPage';
import DetailPeoplePage from './fix/people/DetailPeoplePage';

import CharacterPage from './fix/anime/CharacterPage';
import SearchPage from './fix/SearchPage';
import PageNotFound from './fix/PageNotFound';

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
