import React from 'react';

const Header = ( {shadow} ) => {
    return (
        <nav className={shadow ? 'navbar bg-light header-shadow' : 'navbar bg-light'}>
            <a className="navbar-brand text-dark" href="#">BookFinder</a>
        </nav>
    )
};

export default Header;