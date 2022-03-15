import React from 'react';
import { default as logo } from '../assets/images/logo.svg';

function Footer() {

    return (
        <React.Fragment>
            {/* <!-- Site Footer XL screens --> */}
            <footer className="site-footer bg-black text-white d-none d-xl-block">
                <div className="container pt-3">
                    <div className="row d-flex justify-content-center py-5">
                        <div className="col-3">
                            <div className="footer-title text-white pb-4">
                                <span className="underline">
                                    LINKS
                                </span><br />
                            </div>
                            <a className="footer-body text-white pt-5" href="releases.html">
                                releases<br />
                            </a>
                            <a className="footer-body text-white" href="tour.html">
                                tour<br />
                            </a>
                            <a className="footer-body text-white" href="demos.html">
                                demos<br />
                            </a>
                            <a className="footer-body text-white" href="shop.html">
                                shop<br />
                            </a>
                        </div>
                        <div className="col-3">
                            <div className="footer-title text-white pb-4">
                                <span className="underline">
                                    CONTACT
                                </span>
                                <br />
                            </div>
                            <a className="footer-body text-white">
                                email us
                                <br />
                            </a>
                            <a className="footer-body text-white" type="button" data-toggle="modal" data-target="#submitDemo">
                                submit demo
                                <br />
                            </a>
                        </div>
                        <div className="col-3">
                            <div className="footer-title text-white pb-4">
                                <span className="underline">
                                    SOCIAL
                                </span>
                                <br />
                                <div className="row pt-4">
                                    <div className="col text-left align-items-center pt-2">
                                        <i className="fa-brands fa-bandcamp text-white fa-1x pr-0 pb-2"></i>
                                        <i className="fa-brands fa-soundcloud text-white fa-1x px-1"></i>
                                        <i className="fa-brands fa-youtube text-white fa-1x pl-1"></i>
                                        <br />
                                        <i className="fa-brands fa-instagram text-white fa-1x pr-1"></i>
                                        <i className="fa-brands fa-facebook-square text-white fa-1x px-2"></i>
                                        <i className="fa-brands fa-twitter text-white fa-1x pl-2"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="footer-title text-white pb-4">
                                <span className="underline">
                                    UPDATES
                                </span>
                            </div>
                            <div className="bg-black">
                                <p className="footer-body text-white">
                                    Subscribe for updates on new releases.
                                </p>
                                <form>
                                    <div className="form-group row">
                                        <div className="col">
                                            <input type="email" className="form-control rounded-0 p-4" id="email" name="email"
                                                placeholder="Email" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <div className="col bg-signup mt-0">
                                            <ul className="navbar-nav mx-auto text-white align-items-center">
                                                <li>
                                                    <a className="nav-link btn-footer-XL bg-releases btn text-white btn-block mx-auto rounded-0 p-2 w-100 m-0"
                                                        role="button" href="">
                                                        SIGN UP
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="d-flex align-items-center justify-content-center text-white pb-5">
                                <img src={logo} alt="Billegal Beats" width="25" height="25" />
                                <span className="footer-body2">© Billegal Beats</span>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            {/* <!-- Site Footer on XS, SM, MD, and LG screens --> */}
            <footer className="site-footer bg-black text-white d-block d-xl-none">
                <div className="container pt-3">
                    <div className="row text-center d-flex justify-content-center py-5">
                        <div className="col-4">
                            <div className="footer-title text-white pb-4">
                                <span className="underline">
                                    LINKS
                                </span><br />
                            </div>
                            <a className="footer-body text-white pt-5" href="releases.html">
                                releases<br />
                            </a>
                            <a className="footer-body text-white" href="tour.html">
                                tour<br />
                            </a>
                            <a className="footer-body text-white" href="demos.html">
                                demos<br />
                            </a>
                            <a className="footer-body text-white" href="shop.html">
                                shop<br />
                            </a>
                        </div>
                        <div className="col-4">
                            <div className="footer-title text-white pb-4">
                                <span className="underline">
                                    CONTACT
                                </span>
                                <br />
                            </div>
                            <a className="footer-body text-white">
                                email us
                                <br />
                            </a>
                            <a className="footer-body text-white" type="button" data-toggle="modal" data-target="#submitDemo">
                                submit demo
                                <br />
                            </a>
                        </div>
                        <div className="col-4">
                            <div className="footer-title text-white">
                                <span className="underline">
                                    SOCIAL
                                </span>
                                <br />
                                <div className="row text-center pt-4">
                                    <div className="col align-items-center pt-2">
                                        <i className="fa-brands fa-bandcamp text-white fa-1x pr-0 pb-2"></i>
                                        <i className="fa-brands fa-soundcloud text-white fa-1x px-1"></i>
                                        <i className="fa-brands fa-youtube text-white fa-1x pl-1"></i>
                                        <br />
                                        <i className="fa-brands fa-instagram text-white fa-1x pr-2"></i>
                                        <i className="fa-brands fa-facebook-square text-white fa-1x px-2"></i>
                                        <i className="fa-brands fa-twitter text-white fa-1x pl-2"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- BEGIN signup form only on MD and LG screens --> */}
                        <div className="col d-none d-md-block d-xl-none">
                            <div className="footer-title text-white text-center pt-5 pb-1">
                                <span className="underline">
                                    UPDATES
                                </span>
                            </div>
                            <div className="text-center bg-black pt-4">
                                <p className="footer-body text-white pb-2">
                                    Subscribe for updates on new releases.
                                </p>
                                <form>
                                    <div className="w-50 d-bock mx-auto d-block">
                                        <div className="form-group row">
                                            <div className="col">
                                                <input type="email" className="form-control rounded-0 p-4" id="email" name="email"
                                                    placeholder="Email" />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <div className="col bg-signup mt-0">
                                                <ul className="navbar-nav mx-auto text-white align-items-center">
                                                    <li>
                                                        <a className="nav-link btn-footer bg-releases btn text-white btn-block mx-auto rounded-0 w-100 m-0"
                                                            role="button" href="">
                                                            SIGN UP
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        {/* <!-- END signup form only on MD and LG screens --> */}
                        {/* <!-- BEGIN signup form only on XS and SM screens --> */}
                        <div className="col d-block d-md-none">
                            <div className="footer-title text-white text-center pt-5 pb-1">
                                <span className="underline">
                                    UPDATES
                                </span>
                            </div>
                            <div className="text-center bg-black pt-4">
                                <p className="footer-body text-white pb-2">
                                    Subscribe for updates on new releases.
                                </p>
                                <form>
                                    <div className="w-75 mx-auto d-block">
                                        <div className="form-group row">
                                            <div className="col">
                                                <input type="email" className="form-control rounded-0 p-4" id="email" name="email"
                                                    placeholder="Email" />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <div className="col bg-signup mt-0">
                                                <ul className="navbar-nav mx-auto text-white align-items-center">
                                                    <li>
                                                        <a className="nav-link btn-footer bg-releases btn text-white btn-block mx-auto rounded-0 w-100 m-0"
                                                            role="button" href="">
                                                            SIGN UP
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        {/* <!-- END signup form only on XS and SM screens --> */}
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="d-flex align-items-center justify-content-center text-white pb-5">
                                <img src={logo} alt="Billegal Beats" width="25" height="25" />
                                <span className="footer-body2">© Billegal Beats</span>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </React.Fragment >
    );
}

export default Footer;