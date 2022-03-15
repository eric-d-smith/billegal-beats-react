import React from 'react';

function DemosEmail() {

    return (
        <React.Fragment>
            {/* <!-- Submit Demo / Email Subscription sections for XS, SM, MD, and LG screens --> */}
            <div className="container-fluid d-block d-xl-none" id="demos">
                <div className="row h-100">
                    <div className="col-12 col-lg-6 bg-lgray d-flex align-items-center py-3">
                        <div className="w-50 mx-auto d-block py-5">
                            <h1 className="mission-title mb-3">
                                SUBMIT<br />
                                YOUR DEMO
                            </h1>
                            <p className="mission-body">
                                We’re taking demos for Billegal Beats — a new label designed around releasing left-field,
                                glitch
                                music to help build an infrastructure for it.
                            </p>
                            <p className="mission-body">
                                If you have any finished, unreleased music, please submit your demo.
                            </p>
                            <p className="mission-body">
                                We look forward to listening!
                            </p>
                            <ul className="navbar-nav text-white align-items-start">
                                <li>
                                    <a className="nav-link btn-releases btn bg-black text-white btn-lg btn-block rounded-0 p-3 px-5 mt-2 d-block d-xl-none m-0"
                                        role="button" href="">
                                        SUBMIT
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 bg-dgray d-flex pb-2">
                        <div className="w-75 m-auto d-block p-5 bg-dgray">
                            <h1 className="mission-title text-white mb-3">
                                THE LATEST
                            </h1>
                            <p className="mission-body text-white">
                                Subscribe for updates on new releases.
                            </p>
                            <form>
                                <div className="form-group row">
                                    <div className="col">
                                        <input type="text" className="form-control rounded-0 p-3 my-2 mb-3" id="name" name="name"
                                            placeholder="Name" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="col">
                                        <input type="email" className="form-control rounded-0 p-3 mb-2" id="email" name="email"
                                            placeholder="Email" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="col bg-signup d-block d-xl-none mt-2">
                                        <ul className="navbar-nav mx-auto text-white align-items-center">
                                            <li>
                                                <a className="nav-link btn-releases bg-releases btn text-white btn-block mx-auto rounded-0 p-3 w-100 m-0"
                                                    role="button" href="">
                                                    SIGN UP
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col d-flex justify-content-around align-items-center pt-3">
                                        <i className="fa-brands fa-bandcamp text-white fa-2x pr-1"></i>
                                        <i className="fa-brands fa-soundcloud text-white fa-2x p-0"></i>
                                        <i className="fa-brands fa-youtube text-white fa-2x p-1"></i>
                                        <i className="fa-brands fa-instagram text-white fa-2x p-1"></i>
                                        <i className="fa-brands fa-facebook-square text-white fa-2x p-1"></i>
                                        <i className="fa-brands fa-twitter text-white fa-2x pl-1"></i>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Submit Demo / Email Subscription sections XL screens --> */}
            <div className="container-fluid h-75 d-none d-xl-block" id="demosXL">
                <div className="row h-100">
                    <div className="col-12 col-lg-6 bg-lgray d-flex align-items-center py-3">
                        <div className="w-50 mx-auto d-block py-5 mb-5">
                            <h1 className="mission-title mb-3">
                                SUBMIT<br />
                                YOUR DEMO
                            </h1>
                            <p className="mission-body">
                                We’re taking demos for Billegal Beats — a new label designed around releasing left-field,
                                glitch
                                music to help build an infrastructure for it.
                            </p>
                            <p className="mission-body">
                                If you have any finished, unreleased music, please submit your demo.
                            </p>
                            <p className="mission-body">
                                We look forward to listening!
                            </p>

                            {/* <!-- Button trigger modal --> */}
                            <ul className="navbar-nav text-white align-items-start">
                                <li>
                                    <a className="nav-link btn-releases btn bg-black text-white btn-lg btn-block rounded-0 p-3 px-5 mt-2 d-none d-xl-block m-0"
                                        role="button" type="button" data-toggle="modal" data-target="#submitDemo">
                                        SUBMIT
                                    </a>
                                </li>
                            </ul>

                            {/* <!-- large modal --> */}
                            <div className="modal fade" id="submitDemo" tabindex="-1" role="dialog" aria-labelledby="basicModal"
                                aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered modal-lg">
                                    <div className="modal-content rounded-0">
                                        <div className="modal-header">
                                            <h4 className="modal-title" id="myModalLabel">Large Modal</h4>
                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div className="modal-body">
                                            <h3>Modal Body</h3>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                                            <button type="button" className="btn btn-primary">Save changes</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-12 col-lg-6 bg-dgray d-flex pb-2">
                        <div className="w-75 m-auto d-block p-5 bg-dgray">
                            <h1 className="mission-title text-white mb-3">
                                THE LATEST
                            </h1>
                            <p className="mission-body text-white">
                                Subscribe for updates on new releases.
                            </p>
                            <form>
                                <div className="form-group row">
                                    <div className="col">
                                        <input type="text" className="form-control rounded-0 p-3 my-2 mb-3" id="name" name="name"
                                            placeholder="Name" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="col">
                                        <input type="email" className="form-control rounded-0 p-3 mb-2" id="email" name="email"
                                            placeholder="Email" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="col bg-signup d-none d-xl-block mt-2">
                                        <ul className="navbar-nav mx-auto text-white align-items-center">
                                            <li>
                                                <a className="nav-link btn-releases bg-releases btn text-white btn-block mx-auto rounded-0 p-3 w-100 m-0"
                                                    role="button" href="">
                                                    SIGN UP
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col d-flex justify-content-around align-items-center pt-3">
                                        <i className="fa-brands fa-bandcamp text-white fa-2x pr-2"></i>
                                        <i className="fa-brands fa-soundcloud text-white fa-2x p-1"></i>
                                        <i className="fa-brands fa-youtube text-white fa-2x p-2"></i>
                                        <i className="fa-brands fa-instagram text-white fa-2x p-2"></i>
                                        <i className="fa-brands fa-facebook-square text-white fa-2x p-2"></i>
                                        <i className="fa-brands fa-twitter text-white fa-2x pl-2"></i>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment >
    );
}

export default DemosEmail;