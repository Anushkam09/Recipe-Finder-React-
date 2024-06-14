import React, { useState } from 'react';
import './Header.css';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const location = useLocation();
    const [activeLink, setActiveLink] = useState(location.pathname);

    const handleLinkClick = (path) => {
        setActiveLink(path);
    };

    return (
        <header>
            <div className="header-container">
                <div className="logo">
                    <Link to="/" onClick={() => handleLinkClick('/')}>
                        <img
                            src="https://play-lh.googleusercontent.com/hFygWSfqgqZEVLVJ8jI_XsWnqRMj2d5bQQUfd8NM9LBxfJ0LPnlu6nYsLn_7mUGaNNk"
                            alt="Recipe Finder Logo"
                        />
                    </Link>
                </div>
                <nav>
                    <ul>
                        <li>
                            <Link
                                to="/"
                                className={activeLink === '/' ? 'active' : ''}
                                onClick={() => handleLinkClick('/')}
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/allrecipes"
                                className={activeLink === '/allrecipes' ? 'active' : ''}
                                onClick={() => handleLinkClick('/allrecipes')}
                            >
                                Recipes
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="#"
                                className={activeLink === '/veg' ? 'active' : ''}
                                onClick={() => handleLinkClick('/veg')}
                            >
                                Veg
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="#"
                                className={activeLink === '/non-veg' ? 'active' : ''}
                                onClick={() => handleLinkClick('/non-veg')}
                            >
                                Non-Veg
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="#"
                                className={activeLink === '/cuisine' ? 'active' : ''}
                                onClick={() => handleLinkClick('/cuisine')}
                            >
                                Cuisine
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="#"
                                className={activeLink === '/about-us' ? 'active' : ''}
                                onClick={() => handleLinkClick('/about-us')}
                            >
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="#"
                                className={activeLink === '/contact' ? 'active' : ''}
                                onClick={() => handleLinkClick('/contact')}
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
