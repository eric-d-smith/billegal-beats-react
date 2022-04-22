import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import Album from './AlbumComponent';
import endlessBeginning from '../assets/images/albums/Bakkar-Endless-Beginning-EP-Billegal-Beats.jpeg';
import everythingIsWrong from '../assets/images/albums/ZZY-Everything-Is-Wrong.jpeg';
import dozoSol from '../assets/images/albums/Fennec-III-Dozo-Sol.jpeg';
import hyver from '../assets/images/albums/Le-Perche-Oreille-Hyver-EP.jpeg';
import glitchInTheClimate from '../assets/images/albums/Sorcinet-Glitch-In-The-Climate.jpeg';
import theEdgeOfChaos from '../assets/images/albums/Musin-The-Edge-Of-Chaos-EP.jpeg';

function Releases() {

    return (
        <React.Fragment>
            <div className="container-fluid p-5 bg-mgray" id="releases">
                <div className="row bg-mgray pb-5">
                    <Album
                        id="0"
                        album="Endless Beginning EP"
                        artist="Bakkar"
                        image={endlessBeginning}
                    />
                    <Album
                        id="1"
                        album="Everything Is Wrong EP"
                        artist="ZZY"
                        image={everythingIsWrong}
                    />
                    <Album
                        id="2"
                        album="Dozo Sol EP"
                        artist="Fennec III"
                        image={dozoSol}
                    />
                </div>
                <div className="row bg-mgray">
                    <Album
                        id="3"
                        album="The Edge Of Chaos EP"
                        artist="Musin"
                        image={hyver}
                    />
                    <Album
                        id="4"
                        album="Hyver EP"
                        artist="Le Perche Oreille"
                        image={glitchInTheClimate}
                    />
                    <Album
                        id="5"
                        album="Glitch In The Climate EP"
                        artist="Sorcinet"
                        image={theEdgeOfChaos}
                    />
                </div>
                <div className="row">
                    <div className="col bg-mgray d-block d-sm-none">
                        <ul className="navbar-nav mx-auto text-white align-items-center">
                            <li>
                                <Link to="releases#releases-top" className="nav-link btn-releases btn bg-black text-white btn-lg btn-block mx-auto rounded-0 p-4 px-5"
                                    role="button" href="releases.html">
                                    MORE RELEASES
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col bg-mgray d-none d-sm-block d-xl-none">
                        <ul className="navbar-nav mx-auto text-white align-items-center">
                            <li>
                                <Link to="releases#releases-top" className="nav-link btn-releases btn bg-black text-white btn-lg btn-block mx-auto rounded-0 p-4 px-5"
                                    role="button" href="releases.html">
                                    MORE RELEASES
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col bg-mgray d-none d-xl-block">
                        <ul className="navbar-nav mx-auto text-white align-items-center">
                            <li>
                                <Link to="releases#releases-top" className="nav-link btn-releases btn bg-black text-white btn-lg btn-block mx-auto rounded-0 p-4 px-5"
                                    role="button" href="releases.html">
                                    MORE RELEASES
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </React.Fragment >
    );
}

export default Releases;

// {/* <!-- Releases section --> */ }
// <div className="container-fluid p-5 bg-mgray" id="releases">
//     <div className="row bg-mgray">

//         <div className="col-12 col-md-4 bg-mgray mx-auto d-block">
//             <a className="EP-hover" href="bakkar.html">
//                 <img className="img-fluid" src={endlessBeginning}
//                     alt="Bakkar - Endless Beginning EP" />
//                 <p className="text-center font-weight-bold pt-4 pb-5">
//                     <span className="artist">Bakkar</span><br />
//                     <span className="album font-weight-normal">Endless Beginning EP</span>
//                 </p>
//             </a>
//         </div>
//         <div className="col-12 col-md-4 bg-mgray mx-auto d-block">
//             <a className="EP-hover" href="ZZY.html">
//                 <img className="img-fluid" src={everythingIsWrong}
//                     alt="ZZY — Everything Is Wrong EP" />
//                 <p className="text-center font-weight-bold pt-4 pb-5">
//                     <span className="artist">ZZY</span><br />
//                     <span className="album font-weight-normal">Everything Is Wrong EP</span>
//                 </p>
//             </a>
//         </div>
//         <div className="col-12 col-md-4 bg-mgray mx-auto d-block">
//             <a className="EP-hover" href="fennec.html">
//                 <img className="img-fluid" src={dozoSol} alt="Fennec III — Dozo Sol EP" />
//                 <p className="text-center font-weight-bold pt-4 pb-5">
//                     <span className="artist">Fennec III</span><br />
//                     <span className="album font-weight-normal">Dozo Sol EP</span>
//                 </p>
//             </a>
//         </div>

//     </div>
//     <div className="row bg-mgray">

//         <div className="col-12 col-md-4 bg-mgray mx-auto d-block">
//             <a className="EP-hover" href="musin.html">
//                 <img className="img-fluid" src={theEdgeOfChaos}
//                     alt="Musin — The Edge Of Chaos EP" />
//                 <p className="text-center font-weight-bold pt-4">
//                     <span className="artist">Musin</span><br />
//                     <span className="album font-weight-normal">The Edge Of Chaos EP</span>
//                 </p>
//             </a>
//         </div>
//         <div className="col-12 col-md-4 bg-mgray mx-auto d-block">
//             <a className="EP-hover" href="le-perche-oreille.html">
//                 <img className="img-fluid" src={hyver}
//                     alt="Le Perche Oreille — Hyver EP" />
//                 <p className="text-center font-weight-bold pt-4">
//                     <span className="artist">Le Perche Oreille</span><br />
//                     <span className="album font-weight-normal">Hyver EP</span>
//                 </p>
//             </a>
//         </div>
//         <div className="col-12 col-md-4 bg-mgray mx-auto d-block">
//             <a className="EP-hover" href="sorcinet.html">
//                 <img className="img-fluid" src={glitchInTheClimate}
//                     alt="Sorcinet — Glitch In The Climate EP" />
//                 <p className="text-center font-weight-bold pt-4">
//                     <span className="artist">Sorcinet</span><br />
//                     <span className="album font-weight-normal">Glitch In The Climate EP</span>
//                 </p>
//             </a>
//         </div>

//     </div>
//     <div className="row">

//         <div className="col bg-mgray d-block d-sm-none">
//             <ul className="navbar-nav mx-auto text-white align-items-center">
//                 <li>
//                     <a className="nav-link btn-releases btn bg-black text-white btn-lg btn-block mx-auto rounded-0 p-4 px-5"
//                         role="button" href="releases.html">
//                         MORE RELEASES
//                     </a>
//                 </li>
//             </ul>
//         </div>
//         <div className="col bg-mgray d-none d-sm-block d-xl-none">
//             <ul className="navbar-nav mx-auto text-white align-items-center">
//                 <li>
//                     <a className="nav-link btn-releases btn bg-black text-white btn-lg btn-block mx-auto rounded-0 p-4 px-5"
//                         role="button" href="releases.html">
//                         MORE RELEASES
//                     </a>
//                 </li>
//             </ul>
//         </div>
//         <div className="col bg-mgray d-none d-xl-block">
//             <ul className="navbar-nav mx-auto text-white align-items-center">
//                 <li>
//                     <a className="nav-link btn-releases btn bg-black text-white btn-lg btn-block mx-auto rounded-0 p-4 px-5"
//                         role="button" href="releases.html">
//                         MORE RELEASES
//                     </a>
//                 </li>
//             </ul>
//         </div>
//     </div>
// </div>