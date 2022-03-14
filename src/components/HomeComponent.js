import React from 'react';
import '../../src/css/styles.css';
// import '../../src/js/scripts.js';
import logoColor from '../assets/images/BB-logo-color.png';

function Home() {

    return (
        <React.Fragment>
            {/* <!-- BG image & logo overlay --> */}
            <div class="bg-hero">
                <div class="container position-relative h-100">
                    <div class="row h-100">
                        <div class="col">
                            <img class="mt-logo-xs w-100 p-5 d-block d-md-none mx-auto" src={logoColor}
                                alt="Billegal Beats" />
                            <img class="mt-logo w-75 p-5 d-none d-md-block mx-auto" src={logoColor}
                                alt="Billegal Beats" />
                        </div>
                        {/* <!-- BEGIN hero image copy on XL screens --> */}
                        <div class="col position-absolute d-none d-xl-block">
                            <h1 class="hero-title-xl text-white position-relative">
                                BILLEGAL<br />
                                BEATS
                            </h1>
                        </div>
                        <div class="col position-absolute d-none d-xl-block">
                            <h2 class="hero-sub-title-xl text-white position-relative">
                                a label creating infrastructure<br />
                                around left-field glitch music
                            </h2>
                        </div>
                        {/* <!-- END hero image copy on XL screens --> */}
                        {/* <!-- BEGIN hero image copy on LG --> */}
                        <div class="col position-absolute d-none d-lg-block d-xl-none">
                            <h1 class="hero-title-lg text-white position-relative">
                                BILLEGAL<br />
                                BEATS
                            </h1>
                        </div>
                        <div class="col position-absolute d-none d-lg-block d-xl-none">
                            <h2 class="hero-sub-title-lg text-white position-relative">
                                a label creating infrastructure<br />
                                around left-field glitch music
                            </h2>
                        </div>
                        {/* <!-- END hero image copy on LG screens --> */}
                        {/* <!-- BEGIN hero image copy on MD --> */}
                        <div class="col position-absolute d-none d-md-block d-lg-none">
                            <h1 class="hero-title-md text-white position-relative">
                                BILLEGAL<br />
                                BEATS
                            </h1>
                        </div>
                        <div class="col position-absolute d-none d-md-block d-lg-none">
                            <h2 class="hero-sub-title-md text-white position-relative">
                                a label creating infrastructure<br />
                                around left-field glitch music
                            </h2>
                        </div>
                        {/* <!-- END hero image copy on MD screens --> */}
                        {/* <!-- BEGIN hero image copy on SM --> */}
                        <div class="col position-absolute d-none d-sm-block d-md-none">
                            <h1 class="hero-title-sm text-white position-relative">
                                BILLEGAL<br />
                                BEATS
                            </h1>
                        </div>
                        <div class="col position-absolute d-none d-sm-block d-md-none">
                            <h2 class="hero-sub-title-sm text-white text-center position-relative">
                                a label creating infrastructure<br />
                                around left-field glitch music
                            </h2>
                        </div>
                        {/* <!-- END hero image copy on SM screens --> */}
                        {/* <!-- BEGIN hero image copy on XS --> */}
                        <div class="col position-absolute d-block d-sm-none">
                            <h1 class="hero-title-xs text-white position-relative">
                                BILLEGAL<br />
                                BEATS
                            </h1>
                        </div>
                        <div class="col position-absolute d-block d-sm-none">
                            <h2 class="hero-sub-title-xs text-white text-center position-relative">
                                a label creating infrastructure<br />
                                around left-field glitch music
                            </h2>
                        </div>
                        {/* <!-- END hero image copy on XS screens --> */}
                    </div>
                </div>
            </div>

            {/* <!-- arrow bounce / anchor scrolling --> */}
            <div class="arrow-xs bounce d-none d-block d-lg-none">
                <a href="#ourMissionXS" class="ourMission fa fa-angle-down fa-3x"></a>
            </div>

            <div class="arrow bounce d-none d-lg-block">
                <a href="#ourMissionLG" class="ourMission fa fa-angle-down fa-4x"></a>
            </div>
        </React.Fragment >
    );
}

export default Home;