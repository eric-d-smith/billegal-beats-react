import React from 'react';
import { Link } from "react-router-dom";
import { default as logo } from '../assets/images/logo.svg';

function Header() {

    return (
        <React.Fragment>
            <nav className="navbar navbar-expand-sm navbar-dark bg-black sticky-top">
                <Link to="/" className="navbar-brand d-sm-none py-2 px-3">
                    <img src={logo} width="40" heigh="40" />
                </Link>
                <button className="navbar-toggler border-0" type="button" data-toggle="collapse" data-target="#billegalNavbar">
                    <div className="hamburger" id="hamburger-2">
                        <span className="line"></span>
                        <span className="line"></span>
                        <span className="line"></span>
                    </div>
                </button>
                <div className="collapse navbar-collapse" id="billegalNavbar">
                    <ul className="navbar-nav mx-auto text-white d-flex align-items-center">
                        <li className="nav-item">
                            <a className="nav-link" href="#releases">RELEASES</a>
                        </li>
                        <li className="nav-item">
                            <Link to="tour" className="nav-link" href="tour.html">TOUR</Link>
                        </li>
                        <Link to="/" className="px-3 py-2 d-none d-sm-block">
                            <img src={logo} width="50" height="50" alt="Billegal Beats" />
                        </Link>
                        <li className="nav-item">
                            <a className="nav-link d-none d-xl-block" href="#demosXL">DEMOS</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link d-block d-xl-none" href="#demos">DEMOS</a>
                        </li>
                        <li className="nav-item d-none d-sm-block pad-right">
                            <Link to="shop" className="nav-link" href="shop.html">SHOP</Link>
                        </li>
                        <li className="nav-item d-block d-sm-none">
                            <Link to="shop" className="nav-link" href="shop.html">SHOP</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </React.Fragment >
    );
}

export default Header;