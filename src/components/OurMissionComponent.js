import React from 'react';
import illustrations from '../assets/images/billegal-illustration.svg';

function OurMission() {

    return (
        <React.Fragment>
            {/* <!-- Our Mission section for XS, SM, and MD screens --> */}
            <div className="container-fluid d-block d-lg-none" id="ourMissionXS">
                <div className="row h-100">
                    <div className="col-12 col-lg-6 bg-dgray d-flex align-items-center py-3">
                        <div className="w-50 mx-auto d-block py-5">
                            <h1 className="mission-title text-white">
                                OUR MISSION
                            </h1>
                            <p className="mission-body text-white">For years, unconventional glitch music hasn’t had any real
                                infrastructure around it, which
                                doesn’t
                                really allow the genre to grow.
                            </p>
                            <p className="mission-body text-white">
                                Strong communities develop out of people being both interested in a certain thing and then being
                                rewarded for participating in said thing.
                            </p>
                            <p className="mission-body text-white">
                                This isn’t necessarily the case with IDM and glitch music. Our goal is to try and fix that!
                            </p>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 bg-lgray d-flex pb-2">
                        <div className="m-auto d-block p-5 bg-lgray">
                            <img className="img-fluid" src={illustrations} alt="Billegal Illustration" />
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Our Mission section for LG and XL screens --> */}
            <div className="container-fluid h-75 d-none d-lg-block" id="ourMissionLG">
                <div className="row h-100">
                    <div className="col-12 col-lg-6 bg-dgray d-flex align-items-center pb-5">
                        <div className="w-50 mx-auto d-block py-5">
                            <h1 className="mission-title text-white">
                                OUR MISSION
                            </h1>
                            <p className="mission-body text-white">
                                For years, unconventional glitch music hasn’t had any real infrastructure around it, which
                                doesn’t really allow the genre to grow.
                            </p>
                            <p className="mission-body text-white">
                                Strong communities develop out of people being both interested in a certain thing and then being
                                rewarded for participating in said thing.
                            </p>
                            <p className="mission-body text-white">
                                This isn’t necessarily the case with IDM and glitch music. Our goal is to try and fix that!
                            </p>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 bg-lgray my-auto d-flex align-items-center h-100 pb-5">
                        <div className="mx-auto d-block p-5 bg-lgray">
                            <img className="img-fluid" src={illustrations} alt="Billegal Illustration" />
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment >
    );
}

export default OurMission;