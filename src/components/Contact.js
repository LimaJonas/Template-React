import React from 'react';

const Contact = props => {
    return (
        <section className='page-section mt-4'>
            <div className='container'>
                {/* Contact Section Heading*/}
                <h2 className='page-section-heading text-center text-uppercase text-secondary mb-0'>Contate-nos</h2>
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
                                    <input className='form-control' id='name' type='text' placeholder='Nome' required='required' data-validation-required-message='Please enter your name.' />
                                    <p className='help-block text-danger'></p>
                                </div>
                            </div>
                            <div className='control-group'>
                                <div className='form-group floating-label-form-group controls mb-0 pb-2'>
                                    <label>Email Address</label>
                                    <input className='form-control' id='email' type='email' placeholder='Email' required='required' data-validation-required-message='Please enter your email address.' />
                                    <p className='help-block text-danger'></p>
                                </div>
                            </div>
                            <div className='control-group'>
                                <div className='form-group floating-label-form-group controls mb-0 pb-2'>
                                    <label>Mensagem</label>
                                    <textarea className='form-control' id='message' rows='5' placeholder='Mensagem' required='required' data-validation-required-message='Please enter a message.'></textarea>
                                    <p className='help-block text-danger'></p>
                                </div>
                            </div>
                            <br />
                            <div id='success'></div>
                            <div className='form-group'><button className='btn btn-primary btn-xl' id='sendMessageButton' type='submit'>Enviar</button></div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;