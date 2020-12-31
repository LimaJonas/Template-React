import React from 'react';

const Footer = props => {
    return (
        <footer className='footer text-center'>
            <div className='container'>
                <div className='row'>
                    {/* Footer Location*/}
                    <div className='col-lg-4 mb-5 mb-lg-0'>
                        <h4 className='text-uppercase mb-4'>Localização</h4>
                        <p className='lead mb-0'>
                            000 R. XX
                            <br />
                            Cidade, UF, CEP
                        </p>
                    </div>
                    {/* Footer Social Icons*/}
                    <div className='col-lg-4 mb-5 mb-lg-0'>
                        <h4 className='text-uppercase mb-4'>Redes sociais</h4>
                        <a className='btn btn-outline-light btn-social mx-1' href='#!'><i className='fab fa-fw fa-facebook-f'></i></a>
                        <a className='btn btn-outline-light btn-social mx-1' href='#!'><i className='fab fa-fw fa-twitter'></i></a>
                        <a className='btn btn-outline-light btn-social mx-1' href='#!'><i className='fab fa-fw fa-linkedin-in'></i></a>
                        <a className='btn btn-outline-light btn-social mx-1' href='#!'><i className='fab fa-fw fa-dribbble'></i></a>
                    </div>
                    {/* Footer About Text*/}
                    <div className='col-lg-4'>
                        <h4 className='text-uppercase mb-4'>Template original</h4>
                        <p className='lead mb-0'>
                            Encontrar o template original em: 
                            <a href='http://startbootstrap.com'> Start Bootstrap</a>
                            .
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;