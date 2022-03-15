import React from 'react';
// import '../../src/css/styles.css';
// import '../../src/js/scripts.js';
import logoColor from '../assets/images/BB-logo-color.png';

function Hero() {

    return (
        <React.Fragment>
            {/* <!-- BG image & logo overlay --> */}
            <div className="bg-hero">
                <div className="container position-relative h-100">
                    <div className="row h-100">
                        <div className="col">
                            <img className="mt-logo-xs w-100 p-5 d-block d-md-none mx-auto" src={logoColor}
                                alt="Billegal Beats" />
                            <img className="mt-logo w-75 p-5 d-none d-md-block mx-auto" src={logoColor}
                                alt="Billegal Beats" />
                        </div>
                        {/* <!-- BEGIN hero image copy on XL screens --> */}
                        <div className="col position-absolute d-none d-xl-block">
                            <h1 className="hero-title-xl text-white position-relative">
                                BILLEGAL<br />
                                BEATS
                            </h1>
                        </div>
                        <div className="col position-absolute d-none d-xl-block">
                            <h2 className="hero-sub-title-xl text-white position-relative">
                                a label creating infrastructure<br />
                                around left-field glitch music
                            </h2>
                        </div>
                        {/* <!-- END hero image copy on XL screens --> */}
                        {/* <!-- BEGIN hero image copy on LG --> */}
                        <div className="col position-absolute d-none d-lg-block d-xl-none">
                            <h1 className="hero-title-lg text-white position-relative">
                                BILLEGAL<br />
                                BEATS
                            </h1>
                        </div>
                        <div className="col position-absolute d-none d-lg-block d-xl-none">
                            <h2 className="hero-sub-title-lg text-white position-relative">
                                a label creating infrastructure<br />
                                around left-field glitch music
                            </h2>
                        </div>
                        {/* <!-- END hero image copy on LG screens --> */}
                        {/* <!-- BEGIN hero image copy on MD --> */}
                        <div className="col position-absolute d-none d-md-block d-lg-none">
                            <h1 className="hero-title-md text-white position-relative">
                                BILLEGAL<br />
                                BEATS
                            </h1>
                        </div>
                        <div className="col position-absolute d-none d-md-block d-lg-none">
                            <h2 className="hero-sub-title-md text-white position-relative">
                                a label creating infrastructure<br />
                                around left-field glitch music
                            </h2>
                        </div>
                        {/* <!-- END hero image copy on MD screens --> */}
                        {/* <!-- BEGIN hero image copy on SM --> */}
                        <div className="col position-absolute d-none d-sm-block d-md-none">
                            <h1 className="hero-title-sm text-white position-relative">
                                BILLEGAL<br />
                                BEATS
                            </h1>
                        </div>
                        <div className="col position-absolute d-none d-sm-block d-md-none">
                            <h2 className="hero-sub-title-sm text-white text-center position-relative">
                                a label creating infrastructure<br />
                                around left-field glitch music
                            </h2>
                        </div>
                        {/* <!-- END hero image copy on SM screens --> */}
                        {/* <!-- BEGIN hero image copy on XS --> */}
                        <div className="col position-absolute d-block d-sm-none">
                            <h1 className="hero-title-xs text-white position-relative">
                                BILLEGAL<br />
                                BEATS
                            </h1>
                        </div>
                        <div className="col position-absolute d-block d-sm-none">
                            <h2 className="hero-sub-title-xs text-white text-center position-relative">
                                a label creating infrastructure<br />
                                around left-field glitch music
                            </h2>
                        </div>
                        {/* <!-- END hero image copy on XS screens --> */}
                    </div>
                </div>
            </div>

            {/* <!-- arrow bounce / anchor scrolling --> */}
            <div className="arrow bounce d-block d-lg-none">
                <a href="#ourMissionXS" className="ourMission fa fa-angle-down fa-3x"></a>
            </div>

            <div className="arrow-lg bounce d-none d-lg-block d-xl-none">
                <a href="#ourMissionLG" className="ourMission fa fa-angle-down fa-4x"></a>
            </div>

            <div className="arrow-xl bounce d-none d-xl-block">
                <a href="#ourMissionLG" className="ourMission fa fa-angle-down fa-4x"></a>
            </div>
        </React.Fragment >
    );
}

export default Hero;