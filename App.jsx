// App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from './Component/Nav';
import Home from './Component/Home';
import About from './Component/About';
import Footer from './Component/Footer';
import Contact from './Component/Contact';
import Job from './Component/Job';
import News from './Component/News';
import JobDesc from './Component/JobDesc'; 
import ITI from './Component/ITI';

const App = () => {
  return (
    <div>
      <Nav />
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/job" element={<Job />} />
         <Route path="/job/:id" element={<JobDesc />} />
         <Route path="/ITI" element={<ITI/>}/>
        <Route path="/news" element={<News/>} />
        
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
