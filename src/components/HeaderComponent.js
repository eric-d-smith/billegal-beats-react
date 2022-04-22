import React from 'react';
import { Link } from 'react-router-dom';
import { default as logo } from '../assets/images/logo.svg';

function Header() {

    const links = [
        {
            link: "/releases",
            name: "Releases"
        },
        {
            link: "/tour",
            name: "Tour"
        },
        {
            link: "/shop",
            name: "Shop"
        },
        {
            link: "/demos",
            name: "Demos"
        },
    ]

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

                        {links && links.map((item, index) => {

                            return (
                                <React.Fragment>
                                    <div>
                                        <li className="nav-item">
                                            <Link to={item.link} className="nav-link">
                                                {item.name}
                                            </Link>
                                        </li>
                                    </div>
                                    <div>
                                        {
                                            index === 1 && (
                                                <Link to="/">
                                                    <img src={logo} className="px-2 py-2 d-none d-sm-block" width="80" height="80" alt="Billegal Beats" />
                                                </Link>
                                            )
                                        }
                                    </div>
                                    <div>
                                        {
                                            index === 3 && (
                                                <div className="pad-right">
                                                </div>
                                            )
                                        }
                                    </div>
                                </React.Fragment>
                            )
                        })}

                        {/* {links && links.map((item, index) => {
                            return (
                                <li className="nav-item">
                                    <Link to={item.link} className="nav-link" >{item.name}</Link>
                                </li>
                            )
                        })} */}


                        {/* <li className="nav-item">
                            <Link to="/#releases" className="nav-link">RELEASES</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="tour" className="nav-link">TOUR</Link>
                        </li>
                        <Link to="/" className="px-3 py-2 d-none d-sm-block">
                            <img src={logo} width="50" height="50" alt="Billegal Beats" />
                        </Link>
                        <li className="nav-item">
                            <Link to="/#demosXL" className="nav-link d-none d-xl-block">DEMOS</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/#demos" className="nav-link d-block d-xl-none">DEMOS</Link>
                        </li>
                        <li className="nav-item d-none d-sm-block pad-right">
                            <Link to="shop" className="nav-link">SHOP</Link>
                        </li>
                        <li className="nav-item d-block d-sm-none">
                            <Link to="shop" className="nav-link">SHOP</Link>
                        </li> */}

                    </ul>
                </div>
            </nav>
        </React.Fragment >
    );
}

export default Header;