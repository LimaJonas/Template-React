import React, { Component } from 'react';

// Conteúdos do site
import Navbar from './components/Navbar';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import About from './components/About';


function App() {
  return (
    <div classNameName='App'>
        <Navbar />
        <Header />
        <Portfolio />
        <About />
        
        
        {/* Contact Section*/}
        <section className='page-section' id='contact'>
            <div className='container'>
                {/* Contact Section Heading*/}
                <h2 className='page-section-heading text-center text-uppercase text-secondary mb-0'>Contact Me</h2>
                {/* Icon Divider*/}
                <div className='divider-custom'>
                    <div className='divider-custom-line'></div>
                    <div className='divider-custom-icon'><i className='fas fa-star'></i></div>
                    <div className='divider-custom-line'></div>
                </div>
                {/* Contact Section Form*/}
                <div className='row'>
                    <div className='col-lg-8 mx-auto'>
                        {/* To configure the contact form email address, go to mail/contact_me.php and update the email address in the PHP file on line 19.*/}
                        <form id='contactForm' name='sentMessage' novalidate='novalidate'>
                            <div className='control-group'>
                                <div className='form-group floating-label-form-group controls mb-0 pb-2'>
                                    <label>Name</label>
                                    <input className='form-control' id='name' type='text' placeholder='Name' required='required' data-validation-required-message='Please enter your name.' />
                                    <p className='help-block text-danger'></p>
                                </div>
                            </div>
                            <div className='control-group'>
                                <div className='form-group floating-label-form-group controls mb-0 pb-2'>
                                    <label>Email Address</label>
                                    <input className='form-control' id='email' type='email' placeholder='Email Address' required='required' data-validation-required-message='Please enter your email address.' />
                                    <p className='help-block text-danger'></p>
                                </div>
                            </div>
                            <div className='control-group'>
                                <div className='form-group floating-label-form-group controls mb-0 pb-2'>
                                    <label>Phone Number</label>
                                    <input className='form-control' id='phone' type='tel' placeholder='Phone Number' required='required' data-validation-required-message='Please enter your phone number.' />
                                    <p className='help-block text-danger'></p>
                                </div>
                            </div>
                            <div className='control-group'>
                                <div className='form-group floating-label-form-group controls mb-0 pb-2'>
                                    <label>Message</label>
                                    <textarea className='form-control' id='message' rows='5' placeholder='Message' required='required' data-validation-required-message='Please enter a message.'></textarea>
                                    <p className='help-block text-danger'></p>
                                </div>
                            </div>
                            <br />
                            <div id='success'></div>
                            <div className='form-group'><button className='btn btn-primary btn-xl' id='sendMessageButton' type='submit'>Send</button></div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        {/* Footer*/}
        <footer className='footer text-center'>
            <div className='container'>
                <div className='row'>
                    {/* Footer Location*/}
                    <div className='col-lg-4 mb-5 mb-lg-0'>
                        <h4 className='text-uppercase mb-4'>Location</h4>
                        <p className='lead mb-0'>
                            2215 John Daniel Drive
                            <br />
                            Clark, MO 65243
                        </p>
                    </div>
                    {/* Footer Social Icons*/}
                    <div className='col-lg-4 mb-5 mb-lg-0'>
                        <h4 className='text-uppercase mb-4'>Around the Web</h4>
                        <a className='btn btn-outline-light btn-social mx-1' href='#!'><i className='fab fa-fw fa-facebook-f'></i></a>
                        <a className='btn btn-outline-light btn-social mx-1' href='#!'><i className='fab fa-fw fa-twitter'></i></a>
                        <a className='btn btn-outline-light btn-social mx-1' href='#!'><i className='fab fa-fw fa-linkedin-in'></i></a>
                        <a className='btn btn-outline-light btn-social mx-1' href='#!'><i className='fab fa-fw fa-dribbble'></i></a>
                    </div>
                    {/* Footer About Text*/}
                    <div className='col-lg-4'>
                        <h4 className='text-uppercase mb-4'>About Freelancer</h4>
                        <p className='lead mb-0'>
                            Freelance is a free to use, MIT licensed Bootstrap theme created by
                            <a href='http://startbootstrap.com'>Start Bootstrap</a>
                            .
                        </p>
                    </div>
                </div>
            </div>
        </footer>
        {/* Copyright Section*/}
        <div className='copyright py-4 text-center text-white'>
            <div className='container'><small>Copyright © Your Website 2020</small></div>
        </div>
        {/* Scroll to Top Button (Only visible on small and extra-small screen sizes)*/}
        <div className='scroll-to-top d-lg-none position-fixed'>
            <a className='js-scroll-trigger d-block text-center text-white rounded' href='#page-top'><i className='fa fa-chevron-up'></i></a>
        </div>
        {/* Portfolio Modals*/}
        {/* Portfolio Modal 1*/}
        <div className='portfolio-modal modal fade' id='portfolioModal1' tabindex='-1' role='dialog' aria-labelledby='portfolioModal1Label' aria-hidden='true'>
            <div className='modal-dialog modal-xl' role='document'>
                <div className='modal-content'>
                    <button className='close' type='button' data-dismiss='modal' aria-label='Close'>
                        <span aria-hidden='true'><i className='fas fa-times'></i></span>
                    </button>
                    <div className='modal-body text-center'>
                        <div className='container'>
                            <div className='row justify-content-center'>
                                <div className='col-lg-8'>
                                    {/* Portfolio Modal - Title*/}
                                    <h2 className='portfolio-modal-title text-secondary text-uppercase mb-0' id='portfolioModal1Label'>Log Cabin</h2>
                                    {/* Icon Divider*/}
                                    <div className='divider-custom'>
                                        <div className='divider-custom-line'></div>
                                        <div className='divider-custom-icon'><i className='fas fa-star'></i></div>
                                        <div className='divider-custom-line'></div>
                                    </div>
                                    {/* Portfolio Modal - Image*/}
                                    <img className='img-fluid rounded mb-5' src='assets/img/portfolio/cabin.png' alt='' />
                                    {/* Portfolio Modal - Text*/}
                                    <p className='mb-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                                    <button className='btn btn-primary' data-dismiss='modal'>
                                        <i className='fas fa-times fa-fw'></i>
                                        Close Window
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* Portfolio Modal 2*/}
        <div className='portfolio-modal modal fade' id='portfolioModal2' tabindex='-1' role='dialog' aria-labelledby='portfolioModal2Label' aria-hidden='true'>
            <div className='modal-dialog modal-xl' role='document'>
                <div className='modal-content'>
                    <button className='close' type='button' data-dismiss='modal' aria-label='Close'>
                        <span aria-hidden='true'><i className='fas fa-times'></i></span>
                    </button>
                    <div className='modal-body text-center'>
                        <div className='container'>
                            <div className='row justify-content-center'>
                                <div className='col-lg-8'>
                                    {/* Portfolio Modal - Title*/}
                                    <h2 className='portfolio-modal-title text-secondary text-uppercase mb-0' id='portfolioModal2Label'>Tasty Cake</h2>
                                    {/* Icon Divider*/}
                                    <div className='divider-custom'>
                                        <div className='divider-custom-line'></div>
                                        <div className='divider-custom-icon'><i className='fas fa-star'></i></div>
                                        <div className='divider-custom-line'></div>
                                    </div>
                                    {/* Portfolio Modal - Image*/}
                                    <img className='img-fluid rounded mb-5' src='assets/img/portfolio/cake.png' alt='' />
                                    {/* Portfolio Modal - Text*/}
                                    <p className='mb-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                                    <button className='btn btn-primary' data-dismiss='modal'>
                                        <i className='fas fa-times fa-fw'></i>
                                        Close Window
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* Portfolio Modal 3*/}
        <div className='portfolio-modal modal fade' id='portfolioModal3' tabindex='-1' role='dialog' aria-labelledby='portfolioModal3Label' aria-hidden='true'>
            <div className='modal-dialog modal-xl' role='document'>
                <div className='modal-content'>
                    <button className='close' type='button' data-dismiss='modal' aria-label='Close'>
                        <span aria-hidden='true'><i className='fas fa-times'></i></span>
                    </button>
                    <div className='modal-body text-center'>
                        <div className='container'>
                            <div className='row justify-content-center'>
                                <div className='col-lg-8'>
                                    {/* Portfolio Modal - Title*/}
                                    <h2 className='portfolio-modal-title text-secondary text-uppercase mb-0' id='portfolioModal3Label'>Circus Tent</h2>
                                    {/* Icon Divider*/}
                                    <div className='divider-custom'>
                                        <div className='divider-custom-line'></div>
                                        <div className='divider-custom-icon'><i className='fas fa-star'></i></div>
                                        <div className='divider-custom-line'></div>
                                    </div>
                                    {/* Portfolio Modal - Image*/}
                                    <img className='img-fluid rounded mb-5' src='assets/img/portfolio/circus.png' alt='' />
                                    {/* Portfolio Modal - Text*/}
                                    <p className='mb-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                                    <button className='btn btn-primary' data-dismiss='modal'>
                                        <i className='fas fa-times fa-fw'></i>
                                        Close Window
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* Portfolio Modal 4*/}
        <div className='portfolio-modal modal fade' id='portfolioModal4' tabindex='-1' role='dialog' aria-labelledby='portfolioModal4Label' aria-hidden='true'>
            <div className='modal-dialog modal-xl' role='document'>
                <div className='modal-content'>
                    <button className='close' type='button' data-dismiss='modal' aria-label='Close'>
                        <span aria-hidden='true'><i className='fas fa-times'></i></span>
                    </button>
                    <div className='modal-body text-center'>
                        <div className='container'>
                            <div className='row justify-content-center'>
                                <div className='col-lg-8'>
                                    {/* Portfolio Modal - Title*/}
                                    <h2 className='portfolio-modal-title text-secondary text-uppercase mb-0' id='portfolioModal4Label'>Controller</h2>
                                    {/* Icon Divider*/}
                                    <div className='divider-custom'>
                                        <div className='divider-custom-line'></div>
                                        <div className='divider-custom-icon'><i className='fas fa-star'></i></div>
                                        <div className='divider-custom-line'></div>
                                    </div>
                                    {/* Portfolio Modal - Image*/}
                                    <img className='img-fluid rounded mb-5' src='assets/img/portfolio/game.png' alt='' />
                                    {/* Portfolio Modal - Text*/}
                                    <p className='mb-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                                    <button className='btn btn-primary' data-dismiss='modal'>
                                        <i className='fas fa-times fa-fw'></i>
                                        Close Window
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* Portfolio Modal 5*/}
        <div className='portfolio-modal modal fade' id='portfolioModal5' tabindex='-1' role='dialog' aria-labelledby='portfolioModal5Label' aria-hidden='true'>
            <div className='modal-dialog modal-xl' role='document'>
                <div className='modal-content'>
                    <button className='close' type='button' data-dismiss='modal' aria-label='Close'>
                        <span aria-hidden='true'><i className='fas fa-times'></i></span>
                    </button>
                    <div className='modal-body text-center'>
                        <div className='container'>
                            <div className='row justify-content-center'>
                                <div className='col-lg-8'>
                                    {/* Portfolio Modal - Title*/}
                                    <h2 className='portfolio-modal-title text-secondary text-uppercase mb-0' id='portfolioModal5Label'>Locked Safe</h2>
                                    {/* Icon Divider*/}
                                    <div className='divider-custom'>
                                        <div className='divider-custom-line'></div>
                                        <div className='divider-custom-icon'><i className='fas fa-star'></i></div>
                                        <div className='divider-custom-line'></div>
                                    </div>
                                    {/* Portfolio Modal - Image*/}
                                    <img className='img-fluid rounded mb-5' src='assets/img/portfolio/safe.png' alt='' />
                                    {/* Portfolio Modal - Text*/}
                                    <p className='mb-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                                    <button className='btn btn-primary' data-dismiss='modal'>
                                        <i className='fas fa-times fa-fw'></i>
                                        Close Window
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* Portfolio Modal 6*/}
        <div className='portfolio-modal modal fade' id='portfolioModal6' tabindex='-1' role='dialog' aria-labelledby='portfolioModal6Label' aria-hidden='true'>
            <div className='modal-dialog modal-xl' role='document'>
                <div className='modal-content'>
                    <button className='close' type='button' data-dismiss='modal' aria-label='Close'>
                        <span aria-hidden='true'><i className='fas fa-times'></i></span>
                    </button>
                    <div className='modal-body text-center'>
                        <div className='container'>
                            <div className='row justify-content-center'>
                                <div className='col-lg-8'>
                                    {/* Portfolio Modal - Title*/}
                                    <h2 className='portfolio-modal-title text-secondary text-uppercase mb-0' id='portfolioModal6Label'>Submarine</h2>
                                    {/* Icon Divider*/}
                                    <div className='divider-custom'>
                                        <div className='divider-custom-line'></div>
                                        <div className='divider-custom-icon'><i className='fas fa-star'></i></div>
                                        <div className='divider-custom-line'></div>
                                    </div>
                                    {/* Portfolio Modal - Image*/}
                                    <img className='img-fluid rounded mb-5' src='assets/img/portfolio/submarine.png' alt='' />
                                    {/* Portfolio Modal - Text*/}
                                    <p className='mb-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                                    <button className='btn btn-primary' data-dismiss='modal'>
                                        <i className='fas fa-times fa-fw'></i>
                                        Close Window
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  );
}

export default App;
