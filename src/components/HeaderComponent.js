import React from 'react';
import { default as logo } from '../assets/images/logo.svg';

function Header() {

    return (
        <React.Fragment>
            <nav className="navbar navbar-expand-sm navbar-dark bg-black sticky-top">
                <a className="navbar-brand d-sm-none py-2 px-3" href="#">
                    <img src={logo} width="40" heigh="40" />
                </a>
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
                            <a className="nav-link" href="tour.html">TOUR</a>
                        </li>
                        <a href="#" className="px-3 py-2 d-none d-sm-block">
                            <img src={logo} width="50" height="50" alt="Billegal Beats" />
                        </a>
                        <li className="nav-item">
                            <a className="nav-link d-none d-xl-block" href="#demosXL">DEMOS</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link d-block d-xl-none" href="#demos">DEMOS</a>
                        </li>
                        <li className="nav-item d-none d-sm-block pad-right">
                            <a className="nav-link" href="shop.html">SHOP</a>
                        </li>
                        <li className="nav-item d-block d-sm-none">
                            <a className="nav-link" href="shop.html">SHOP</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </React.Fragment >
    );
}

export default Header;