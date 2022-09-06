import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import About from './pages/About/About';
import Portfolio from './pages/Portfolio/Portfolio';
import Contact from './pages/Contact/Contact';
import Resume from './pages/Resume/Resume';
import Footer from './components/Footer/Footer';
import Info from './components/config/info';


function App() {
  return (
    <>
    <Router>
      <div className='main'>
        <Header />
        <Routes>
            <Route path='/' exact element={<About/>} />
            <Route path='/projects'  element={<Portfolio/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/resume' element={<Resume/>} />
            <Route path='/info/:id' element={<Info/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
    </>
  );
}

export default App;
