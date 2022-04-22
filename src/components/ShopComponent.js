import React from 'react';
import Header from './HeaderComponent'

function Shop() {
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
            name: "Demo"
        },

    ]
    return (
        <React.Fragment>
            <Header links={links} />

            <h2>Shop</h2>

        </React.Fragment >
    )
}

export default Shop;