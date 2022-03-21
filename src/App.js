import { Routes, Route } from 'react-router-dom';
import Header from './components/HeaderComponent';
import Footer from './components/FooterComponent';
import Main from './components/MainComponent';
import Releases from './components/ReleasesComponent';
import Tour from './components/TourComponent';
import Demos from './components/DemosComponent';
import Shop from './components/ShopComponent';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="releases" element={<Releases />} />
        <Route path="tour" element={<Tour />} />
        <Route path="demos" element={<Demos />} />
        <Route path="shop" element={<Shop />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
