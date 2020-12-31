import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = props => {
    return(
        <nav className='navbar navbar-expand-lg bg-secondary text-uppercase fixed-top' id='mainNav'>
            <div className='container'>
                <Link to='/'><a className='navbar-brand js-scroll-trigger'>Template React</a></Link>
                <button className='navbar-toggler navbar-toggler-right text-uppercase font-weight-bold bg-primary text-white rounded' type='button' data-toggle='collapse' data-target='#navbarResponsive' aria-controls='navbarResponsive' aria-expanded='false' aria-label='Toggle navigation'>
                    Menu
                    <i className='fas fa-bars'></i>
                </button>
                <div className='collapse navbar-collapse' id='navbarResponsive'>
                    <ul className='navbar-nav ml-auto'>
                        <li className='nav-item mx-0 mx-lg-1'><Link to='/'><a className='nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger'>Home</a></Link></li>
                        <li className='nav-item mx-0 mx-lg-1'><Link to='/Portfolio'><a className='nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger'>Portfolio</a></Link></li>
                        <li className='nav-item mx-0 mx-lg-1'><Link to='/About'><a className='nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger'>Sobre</a></Link></li>
                        <li className='nav-item mx-0 mx-lg-1'><Link to='/Contact'><a className='nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger'>Contato</a></Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;