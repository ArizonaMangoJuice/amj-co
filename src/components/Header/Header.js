import React from 'react';

const Header = props => {
    return (
        <header>
            <section className='header-container'>
                <img className='header-logo' alt='amj and co' src={require('../../images/Logo.svg').default} />
            </section>
            <nav className='header-nav'>
                <a className='header-link' href='google.com'>Home</a>
                <a className='header-link' href='google.com'>About</a>
                <a className='header-link' href='google.com'>Services</a>
                <a className='header-link' href='google.com'>Careers</a>
                <a className='header-link' href='google.com'>Blog</a>
                <a className='header-link' href='google.com'>Contact</a>
            </nav>
        </header>
    )
}

export default Header;