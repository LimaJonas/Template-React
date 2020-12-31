import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

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
      <BrowserRouter>
        <Navbar />

        <Route path='/' exact component={Header} />
        <Route path='/Portfolio' component={Portfolio} />
        <Route path='/Portfolio' component={PortfolioModal} />
        <Route path='/About' component={About} />
        <Route path='/Contact' component={Contact} />
        
        <Footer />
        <Copyright />
      </BrowserRouter>
    </div>
  );
}

export default App;
