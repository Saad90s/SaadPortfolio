import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import  Header  from './components/layout/Header.jsx';
import  Home  from './pages/Home.jsx';
import  About  from './pages/About.jsx';
import  Projects  from './pages/Projects.jsx';
import  Contact from './pages/Contact.jsx';
import Footer from './components/layout/Fotter.jsx';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;