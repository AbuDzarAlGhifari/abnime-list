import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PageNotFound from '@/pages/PageNotFound';
import Search from '@/pages/SearchPage';
import AnimePage from '@/pages/anime/anime-page/AnimePage';
import CharacterPage from '@/pages/anime/CharacterPage';
import ComingAnimePage from '@/pages/anime/ComingAnimePage';
import DetailAnimePage from '@/pages/anime/DetailAnimePage';
import PopularAnimePage from '@/pages/anime/PopularAnimePage';
import TopAnimePage from '@/pages/anime/TopAnimePage';
import DetailPeoplePage from '@/pages/people/DetailPeoplePage';
import PeopleAllPage from '@/pages/people/PeopleAllPage';
import PeoplePage from '@/pages/people/PeoplePage';

const App = () => {
  return (
    <div className="bg-red-700">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<AnimePage />} />
          <Route path="/people" element={<PeoplePage />} />
          <Route path="/anime/:id" element={<DetailAnimePage />} />
          <Route path="/people/:id" element={<DetailPeoplePage />} />
          <Route path="/character/:id" element={<CharacterPage />}></Route>
          <Route path="/search" element={<Search />}></Route>
          <Route path="/top" element={<TopAnimePage />} />
          <Route path="/popular" element={<PopularAnimePage />} />
          <Route path="/up" element={<ComingAnimePage />} />
          <Route path="/peopleall" element={<PeopleAllPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
