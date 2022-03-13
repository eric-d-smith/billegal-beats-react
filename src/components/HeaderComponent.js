import React from 'react';
// import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem } from 'reactstrap';
// import { NavLink } from 'react-router-dom';
import '../App.css';

function Header() {

    return (
        <React.Fragment>
            <nav class="navbar navbar-expand-sm navbar-dark bg-black sticky-top">
                <a class="navbar-brand d-sm-none py-2" href="#"><img src="../img/logo.svg" width="40" heigh="40" /></a>
                <button class="navbar-toggler border-0" type="button" data-toggle="collapse" data-target="#billegalNavbar">
                    <div class="hamburger" id="hamburger-2">
                        <span class="line"></span>
                        <span class="line"></span>
                        <span class="line"></span>
                    </div>
                </button>
                <div class="collapse navbar-collapse" id="billegalNavbar">
                    <ul class="navbar-nav mx-auto text-white d-flex align-items-center">
                        <li class="nav-item">
                            <a class="nav-link" href="releases.html">RELEASES</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="tour.html">TOUR</a>
                        </li>
                        <a class="px-3 py-2 d-none d-sm-block" href="#"><img src="img/logo.svg" alt="Billegal Beats" width="50"
                            height="50" /></a>
                        <li class="nav-item">
                            <a class="nav-link d-none d-xl-block" href="#demosXL">DEMOS</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link d-none d-block d-xl-none" href="#demos">DEMOS</a>
                        </li>
                        <li class="nav-item mr-4 d-none d-sm-block">
                            <a class="nav-link" href="shop.html">SHOP</a>
                        </li>
                        <li class="nav-item d-block d-sm-none">
                            <a class="nav-link" href="shop.html">SHOP</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </React.Fragment >
    );
}

export default Header;