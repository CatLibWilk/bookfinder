import React from 'react';

const Header = ( {shadow} ) => {
    return (

            <nav className={shadow ? 'navbar col  header-shadow' : 'navbar col '}>
                <a className="navbar-brand text-dark" href="#">BookFinder</a>
            </nav>

    )
};

export default Header;