import React from 'react';
import '../styles/Banner.css'
import logo from '../assets/logo.png'

const Banner = () => {
    const title = 'Jungle'
    const temps = new Date().getMonth;
    const isSpring = temps>=2 && temps<=5;
    const recommandation = isSpring ? 'C\'est le Printemps' : 'Pas le printemps';

    return (
        <div className='lmj-banner'>
            <img src={logo} alt='La maison jungle' className='lmj-logo' />
            <h1 className='lmj-title'>{title}</h1> 
            <br/> 
        </div>
    )
};

export default Banner;