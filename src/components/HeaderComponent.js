import React from 'react';
// import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem } from 'reactstrap';
// import { NavLink } from 'react-router-dom';
import '../App.css';

function Header() {

    return (
        <React.Fragment>
            <h1>Header Component</h1>
            <p>Is it working?</p>
        </React.Fragment >
    );
}

export default Header;


{/* <Navbar className="navbar navbar-expand-sm navbar-dark bg-black sticky-top">
<div className="container">
    <NavbarBrand className="navbar-brand d-sm-none py-2" href="#">
        <img src="./img/logo.svg" width="40" heigh="40" />
    </NavbarBrand>


    <NavbarToggler onClick={this.toggleNav} />
    <Collapse isOpen={this.state.isNavOpen} navbar>
        <div class="hamburger" id="hamburger-2">
            <span class="line"></span>
            <span class="line"></span>
            <span class="line"></span>
        </div>
    </Collapse>


    <Nav navbar>
        <NavItem>
            <NavLink className="nav-link" to="/home">
                <i className="fa fa-home fa-lg" /> Home
            </NavLink>
        </NavItem>
        <NavItem>
            <NavLink className="nav-link" to="/directory">
                <i className="fa fa-list fa-lg" /> Directory
            </NavLink>
        </NavItem>
        <NavItem>
            <NavLink className="nav-link" to="/aboutus">
                <i className="fa fa-info fa-lg" /> About
            </NavLink>
        </NavItem>
        <NavItem>
            <NavLink className="nav-link" to="/contactus">
                <i className="fa fa-address-card fa-lg" /> Contact Us
            </NavLink>
        </NavItem>
    </Nav>



</div>
</Navbar> */}