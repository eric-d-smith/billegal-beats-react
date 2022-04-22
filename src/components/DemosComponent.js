import React from 'react';
import Header from './HeaderComponent'

function Demos(props) {

    const links = props

    return (
        <React.Fragment>
            <Header links={links} />
            <h2>Demos</h2>
        </React.Fragment >
    )
}

export default Demos;