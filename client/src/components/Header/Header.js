import React from 'react';
import {Link} from "react-router-dom";
const Header = ( {shadow} ) => {
    return (

            <nav className={shadow ? 'navbar col  header-shadow' : 'navbar col '}>
               <Link to={'/'} >
                <div className="navbar-brand text-dark">BookFinder</div>
               </Link>
            </nav>

    )
};

export default Header;