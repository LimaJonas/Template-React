import React from 'react';

const About = props => {
    return (
        <section className='page-section bg-primary text-white mb-0 mt-4'>
            <div className='container'>
                {/* About Section Heading*/}
                <h2 className='page-section-heading text-center text-uppercase text-white'>About</h2>
                {/* Icon Divider*/}
                <div className='divider-custom divider-light'>
                    <div className='divider-custom-line'></div>
                    <div className='divider-custom-icon'><i className='fas fa-star'></i></div>
                    <div className='divider-custom-line'></div>
                </div>
                {/* About Section Content*/}
                <div className='row'>
                    <div className='col-lg-4 ml-auto'><p className='lead'>Este template foi criado por Start Bootstrap. Reconstruido para funcionar com React por <a href='https://github.com/LimaJonas'>Jonas Lima</a>.</p></div>
                    <div className='col-lg-4 mr-auto'><p className='lead'>Você pode alterar e customizar a vontade, altere os icones e adicione seu endereço de email para contato!</p></div>
                </div>
            </div>
        </section>
    )
}

export default About;