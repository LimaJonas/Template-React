import React from 'react';

// Images
import cabin from './../images/portfolio/cabin.png';
import cake from  './../images/portfolio/cake.png';
import circus from './../images/portfolio/circus.png';
import game from './../images/portfolio/game.png';
import safe from './../images/portfolio/safe.png';
import submarine from './../images/portfolio/submarine.png'; 

const PortfolioModal = props => {
    return (
        <section>
            <div class='portfolio-modal modal fade' id='portfolioModal1' tabindex='-1' role='dialog' aria-labelledby='portfolioModal1Label' aria-hidden='true'>
                <div class='modal-dialog modal-xl' role='document'>
                    <div class='modal-content'>
                        <button class='close' type='button' data-dismiss='modal' aria-label='Close'>
                            <span aria-hidden='true'><i class='fas fa-times'></i></span>
                        </button>
                        <div class='modal-body text-center'>
                            <div class='container'>
                                <div class='row justify-content-center'>
                                    <div class='col-lg-8'>
                                        {/* Portfolio Modal - Title*/}
                                        <h2 class='portfolio-modal-title text-secondary text-uppercase mb-0' id='portfolioModal1Label'>Cabana de madeira</h2>
                                        {/* Icon Divider*/}
                                        <div class='divider-custom'>
                                            <div class='divider-custom-line'></div>
                                            <div class='divider-custom-icon'><i class='fas fa-star'></i></div>
                                            <div class='divider-custom-line'></div>
                                        </div>
                                        {/* Portfolio Modal - Image*/}
                                        <img class='img-fluid rounded mb-5' src={cabin} alt='' />
                                        {/* Portfolio Modal - Text*/}
                                        <p class='mb-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                                        <button class='btn btn-primary' data-dismiss='modal'>
                                            <i class='fas fa-times fa-fw'></i>
                                            Fechar
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class='portfolio-modal modal fade' id='portfolioModal2' tabindex='-1' role='dialog' aria-labelledby='portfolioModal2Label' aria-hidden='true'>
                <div class='modal-dialog modal-xl' role='document'>
                    <div class='modal-content'>
                        <button class='close' type='button' data-dismiss='modal' aria-label='Close'>
                            <span aria-hidden='true'><i class='fas fa-times'></i></span>
                        </button>
                        <div class='modal-body text-center'>
                            <div class='container'>
                                <div class='row justify-content-center'>
                                    <div class='col-lg-8'>
                                        {/* Portfolio Modal - Title*/}
                                        <h2 class='portfolio-modal-title text-secondary text-uppercase mb-0' id='portfolioModal2Label'>Bolo saboroso</h2>
                                        {/* Icon Divider*/}
                                        <div class='divider-custom'>
                                            <div class='divider-custom-line'></div>
                                            <div class='divider-custom-icon'><i class='fas fa-star'></i></div>
                                            <div class='divider-custom-line'></div>
                                        </div>
                                        {/* Portfolio Modal - Image*/}
                                        <img class='img-fluid rounded mb-5' src={cake} alt='' />
                                        {/* Portfolio Modal - Text*/}
                                        <p class='mb-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                                        <button class='btn btn-primary' data-dismiss='modal'>
                                            <i class='fas fa-times fa-fw'></i>
                                            Fechar
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Portfolio Modal 3*/}
            <div class='portfolio-modal modal fade' id='portfolioModal3' tabindex='-1' role='dialog' aria-labelledby='portfolioModal3Label' aria-hidden='true'>
                <div class='modal-dialog modal-xl' role='document'>
                    <div class='modal-content'>
                        <button class='close' type='button' data-dismiss='modal' aria-label='Close'>
                            <span aria-hidden='true'><i class='fas fa-times'></i></span>
                        </button>
                        <div class='modal-body text-center'>
                            <div class='container'>
                                <div class='row justify-content-center'>
                                    <div class='col-lg-8'>
                                        {/* Portfolio Modal - Title*/}
                                        <h2 class='portfolio-modal-title text-secondary text-uppercase mb-0' id='portfolioModal3Label'>Tenda de circo</h2>
                                        {/* Icon Divider*/}
                                        <div class='divider-custom'>
                                            <div class='divider-custom-line'></div>
                                            <div class='divider-custom-icon'><i class='fas fa-star'></i></div>
                                            <div class='divider-custom-line'></div>
                                        </div>
                                        {/* Portfolio Modal - Image*/}
                                        <img class='img-fluid rounded mb-5' src={circus} alt='' />
                                        {/* Portfolio Modal - Text*/}
                                        <p class='mb-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                                        <button class='btn btn-primary' data-dismiss='modal'>
                                            <i class='fas fa-times fa-fw'></i>
                                            Fechar
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Portfolio Modal 4*/}
            <div class='portfolio-modal modal fade' id='portfolioModal4' tabindex='-1' role='dialog' aria-labelledby='portfolioModal4Label' aria-hidden='true'>
                <div class='modal-dialog modal-xl' role='document'>
                    <div class='modal-content'>
                        <button class='close' type='button' data-dismiss='modal' aria-label='Close'>
                            <span aria-hidden='true'><i class='fas fa-times'></i></span>
                        </button>
                        <div class='modal-body text-center'>
                            <div class='container'>
                                <div class='row justify-content-center'>
                                    <div class='col-lg-8'>
                                        {/* Portfolio Modal - Title*/}
                                        <h2 class='portfolio-modal-title text-secondary text-uppercase mb-0' id='portfolioModal4Label'>Controle</h2>
                                        {/* Icon Divider*/}
                                        <div class='divider-custom'>
                                            <div class='divider-custom-line'></div>
                                            <div class='divider-custom-icon'><i class='fas fa-star'></i></div>
                                            <div class='divider-custom-line'></div>
                                        </div>
                                        {/* Portfolio Modal - Image*/}
                                        <img class='img-fluid rounded mb-5' src={game} alt='' />
                                        {/* Portfolio Modal - Text*/}
                                        <p class='mb-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                                        <button class='btn btn-primary' data-dismiss='modal'>
                                            <i class='fas fa-times fa-fw'></i>
                                            Fechar
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Portfolio Modal 5*/}
            <div class='portfolio-modal modal fade' id='portfolioModal5' tabindex='-1' role='dialog' aria-labelledby='portfolioModal5Label' aria-hidden='true'>
                <div class='modal-dialog modal-xl' role='document'>
                    <div class='modal-content'>
                        <button class='close' type='button' data-dismiss='modal' aria-label='Close'>
                            <span aria-hidden='true'><i class='fas fa-times'></i></span>
                        </button>
                        <div class='modal-body text-center'>
                            <div class='container'>
                                <div class='row justify-content-center'>
                                    <div class='col-lg-8'>
                                        {/* Portfolio Modal - Title*/}
                                        <h2 class='portfolio-modal-title text-secondary text-uppercase mb-0' id='portfolioModal5Label'>Cofre seguro</h2>
                                        {/* Icon Divider*/}
                                        <div class='divider-custom'>
                                            <div class='divider-custom-line'></div>
                                            <div class='divider-custom-icon'><i class='fas fa-star'></i></div>
                                            <div class='divider-custom-line'></div>
                                        </div>
                                        {/* Portfolio Modal - Image*/}
                                        <img class='img-fluid rounded mb-5' src={safe} alt='' />
                                        {/* Portfolio Modal - Text*/}
                                        <p class='mb-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                                        <button class='btn btn-primary' data-dismiss='modal'>
                                            <i class='fas fa-times fa-fw'></i>
                                            Fechar
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Portfolio Modal 6*/}
            <div class='portfolio-modal modal fade' id='portfolioModal6' tabindex='-1' role='dialog' aria-labelledby='portfolioModal6Label' aria-hidden='true'>
                <div class='modal-dialog modal-xl' role='document'>
                    <div class='modal-content'>
                        <button class='close' type='button' data-dismiss='modal' aria-label='Close'>
                            <span aria-hidden='true'><i class='fas fa-times'></i></span>
                        </button>
                        <div class='modal-body text-center'>
                            <div class='container'>
                                <div class='row justify-content-center'>
                                    <div class='col-lg-8'>
                                        {/* Portfolio Modal - Title*/}
                                        <h2 class='portfolio-modal-title text-secondary text-uppercase mb-0' id='portfolioModal6Label'>Submarino</h2>
                                        {/* Icon Divider*/}
                                        <div class='divider-custom'>
                                            <div class='divider-custom-line'></div>
                                            <div class='divider-custom-icon'><i class='fas fa-star'></i></div>
                                            <div class='divider-custom-line'></div>
                                        </div>
                                        {/* Portfolio Modal - Image*/}
                                        <img class='img-fluid rounded mb-5' src={submarine} alt='' />
                                        {/* Portfolio Modal - Text*/}
                                        <p class='mb-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                                        <button class='btn btn-primary' data-dismiss='modal'>
                                            <i class='fas fa-times fa-fw'></i>
                                            Fechar
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PortfolioModal;