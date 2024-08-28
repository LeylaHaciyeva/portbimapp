import './App.css';
import About from './pages/about/About.js'
import Projects from './pages/projects/Projects.js'
import { Route, Routes, useLocation, redirect, Navigate } from 'react-router-dom'
import Home from './pages/home/Home.js';
import { useEffect, useState } from 'react';
import ProjectDetail from './pages/projectdetail/ProjectDetail.js';
import Contact from './pages/contact/Contact.js';
import BimServices from './pages/bim/BimServices.js';
import Career from './pages/career/Career.js';
import CareerDetail from './pages/careerdetail/CareerDetail.js';
import { useSelector } from 'react-redux';
import News from './pages/news/News.js';
import NewsDetail from './pages/newsdetail/NewsDetail.js';
function App() {

  // const [token, setToken] = useState('');
  // let location = useLocation();
  // useEffect(() => {
  //   if (location.pathname === "/") {
  //     window.document.body.style.overflow = "hidden"
  //   }
  //   else {
  //     window.document.body.style.overflow = "auto"
  //   }
  // }, [location])
  let lang = useSelector((state) => state.languageReducer.lang)

  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to={`/${lang}`} replace />} />
        <Route path="/:lang" element={<Home />} />
        <Route path="/:lang/about" element={<About />} />
        <Route path={lang + '/projects'} element={<Projects />} />
        <Route path={lang + '/detail'} element={<ProjectDetail />} />
        <Route path={lang + '/contact'} element={<Contact />} />
        <Route path={lang + '/bimservices'} element={<BimServices />} />
        <Route path={lang + '/careers'} element={<Career />} />
        <Route path={lang + '/careers/:id'} element={<CareerDetail />} />
        <Route path={lang + '/contact'} element={<Contact />} />
        <Route path={lang + '/news'} element={<News />} />
        <Route path={lang + '/news/detail'} element={<NewsDetail />} />
      </Routes>
    </div>
  );
}

export default App;
