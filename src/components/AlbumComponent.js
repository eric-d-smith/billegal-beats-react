import React from 'react';

function Album(props) {
    return (
        <React.Fragment>
            <div className="col-12 col-md-4 bg-mgray mx-auto d-block">
                <a className="EP-hover" href="bakkar.html">
                    <img className="img-fluid" src={props.image}
                        alt={props.album} />
                    <p className="text-center font-weight-bold pt-4">
                        <span className="artist">{props.artist}</span><br />
                        <span className="album font-weight-normal">{props.album}</span>
                    </p>
                </a>
            </div>
        </React.Fragment >
    )
}

export default Album;