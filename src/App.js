import React,{useEffect,useState} from 'react'
import { Routes, Route,useLocation } from 'react-router-dom';

import Header from './components/HeaderComponent';
import Footer from './components/FooterComponent';
import Main from './components/MainComponent';
import Releases from './components/ReleasesComponent';
import Tour from './components/TourComponent';
import Demos from './components/DemosComponent';
import Shop from './components/ShopComponent';
import './App.css';

function App() {

  const links = [
    {
      link:"/releases",
      name:"Releases"
    },
    {
      link:"/tour",
      name:"Tour"
    },
    {
      link:"/shop",
      name:"Shop"
    },
    {
      link:"/#demos",
      name:"Demo"
    },
  
  ]
  const [currentRoute,setRoute ]=useState('/')
  const location = useLocation()
  useEffect(()=>{ 

    setRoute(location.pathname) // /
    console.log("HOME",location.pathname)

  },[currentRoute])

  return (
    <div className="App">
      {/* <Header links={links} /> */}
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
