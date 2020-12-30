import React, { Component } from 'react';

// Conteúdos do site
import Navbar from './components/Navbar';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import PortfolioModal from './components/PortfolioModal';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Copyright from './components/Copyright';

function App() {
  return (
    <div classNameName='App'>
        <Navbar />
        <Header />
        <Portfolio />
        <PortfolioModal />
        <About />
        <Contact />
        <Footer />
        <Copyright />
        
        
        
        {/* Scroll to Top Button (Only visible on small and extra-small screen sizes)*/}
        <div className='scroll-to-top d-lg-none position-fixed'>
            <a className='js-scroll-trigger d-block text-center text-white rounded' href='#page-top'><i className='fa fa-chevron-up'></i></a>
        </div>
        

    </div>
  );
}

export default App;
