import React from 'react';
import {Link} from 'react-router-dom'

export default function Products() {

    return (
        <div className="center-content">
            <h2>Products</h2>
            <section className="section-submenu">
                <Link className="submenu-link" to="/software" >Software</Link>
                <Link className="submenu-link" to="/websites" >Websites</Link>
                <Link className="submenu-link" to="/web-apps" >WebApps</Link>
            </section>
        </div>

    );
};