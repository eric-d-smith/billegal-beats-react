import React from 'react';
// import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem } from 'reactstrap';
// import { NavLink } from 'react-router-dom';
import '../App.css';

function Header() {

    return (
        <React.Fragment>
            <nav className="navbar navbar-expand-sm navbar-dark bg-black sticky-top">
                <a className="navbar-brand d-sm-none py-2" href="#"><img src="../assets/images/logo.svg" width="40" heigh="40" /></a>
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
                            <a className="nav-link" href="releases.html">RELEASES</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="tour.html">TOUR</a>
                        </li>
                        <a className="px-3 py-2 d-none d-sm-block" href="#"><img src="img/logo.svg" alt="Billegal Beats" width="50"
                            height="50" /></a>
                        <li className="nav-item">
                            <a className="nav-link d-none d-xl-block" href="#demosXL">DEMOS</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link d-none d-block d-xl-none" href="#demos">DEMOS</a>
                        </li>
                        <li className="nav-item mr-4 d-none d-sm-block">
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