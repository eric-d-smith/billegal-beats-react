import React from 'react';

function Album() {

    return (
        <React.Fragment>
            <a className="EP-hover" href="bakkar.html">
                <img className="img-fluid" src="img/albums/Bakkar-Endless-Beginning-EP-Billegal-Beats.jpeg"
                    alt="Bakkar - Endless Beginning EP" />
                <p className="text-center font-weight-bold pt-4 pb-5">
                    <span className="artist">Bakkar</span><br />
                    <span className="album font-weight-normal">Endless Beginning EP</span>
                </p>
            </a>
        </React.Fragment >
    )
}

export default Album;